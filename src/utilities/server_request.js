var Request,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

module.exports = Request = (function() {
  Request.prototype.defaults = {
    url: '',
    method: 'GET',
    timeout: 105000,
    data: {},
    headers: null,
    success: null,
    error: null,
    onTimeout: null,
    authenticate: true,
    responseType: null,
    contentType: null
  };

  function Request(options) {
    var k, ref, state, v;
    this.options = options;
    state = 'pending';
    ref = this.defaults;
    for (k in ref) {
      v = ref[k];
      if (this.options[k] === void 0) {
        this.options[k] = this.defaults[k];
      }
    }
    this.authToken = '';
    this.start();
  }

  Request.prototype.done = function(doneCB) {
    this.doneCB = doneCB;
    return this;
  };

  Request.prototype.then = function(thenCB) {
    this.thenCB = thenCB;
    return this;
  };

  Request.prototype.finished = function(finishedCB) {
    this.finishedCB = finishedCB;
    return this;
  };

  Request.prototype.error = function(errorCB) {
    this.errorCB = errorCB;
    return this;
  };

  Request.prototype.abort = function() {
    var ref;
    this.doneCB = null;
    this.thenCB = null;
    this.finishedCB = null;
    this.errorCB = null;
    return (ref = this.xmlHttp) != null ? ref.abort() : void 0;
  };

  Request.prototype.start = function() {
    var authenticate, binaryResponse, contentType, data, endpoint, error, headers, k, method, onTimeout, payload, ref, requestTimer, responseType, success, timeout, url, v;
    ref = this.options, method = ref.method, data = ref.data, headers = ref.headers, url = ref.url, timeout = ref.timeout, onTimeout = ref.onTimeout, error = ref.error, success = ref.success, authenticate = ref.authenticate, responseType = ref.responseType, contentType = ref.contentType;
    endpoint = url + this.makeQueryParam();
    binaryResponse = responseType === 'blob';
    this.xmlHttp = new XMLHttpRequest();
    this.xmlHttp.open(method, endpoint, true);
    if (responseType) {
      this.xmlHttp.responseType = responseType;
    }
    if (contentType != null) {
      this.xmlHttp.setRequestHeader("Content-type", contentType);
    } else {
      this.xmlHttp.setRequestHeader("Content-type", "application/json");
    }
    this.xmlHttp.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
    this.xmlHttp.setRequestHeader("Accept-Language", "en-us, en;");
    if (authenticate) {
      this.xmlHttp.setRequestHeader("authToken", this.authToken);
    }
    for (k in headers) {
      v = headers[k];
      this.xmlHttp.setRequestHeader(k, v);
    }
    requestTimer = setTimeout((function(_this) {
      return function() {
        if (typeof _this.finishedCB === "function") {
          _this.finishedCB("timeout", _this.xmlHttp);
        }
        if (typeof _this.errorCB === "function") {
          _this.errorCB("timeout", _this.xmlHttp);
        }
        _this.abort();
        return typeof onTimeout === "function" ? onTimeout() : void 0;
      };
    })(this), timeout);
    this.xmlHttp.onreadystatechange = (function(_this) {
      return function() {
        var e, responseData, status;
        if (_this.xmlHttp.readyState === 4) {
          clearTimeout(requestTimer);
          try {
            responseData = binaryResponse ? _this.xmlHttp.response : JSON.parse(_this.xmlHttp.responseText);
          } catch (error1) {
            e = error1;
            responseData = _this.xmlHttp.responseText || null;
          }
          status = +_this.xmlHttp.status;
          if (status > 399 || status === 0) {
            if (typeof error === "function") {
              error(_this.xmlHttp.status, _this.xmlHttp, responseData);
            }
            if (typeof _this.errorCB === "function") {
              _this.errorCB(_this.xmlHttp.status, _this.xmlHttp, responseData);
            }
            return typeof _this.finishedCB === "function" ? _this.finishedCB() : void 0;
          } else {
            if (typeof success === "function") {
              success(responseData, status);
            }
            if (typeof _this.doneCB === "function") {
              _this.doneCB(responseData, status);
            }
            if (typeof _this.thenCB === "function") {
              _this.thenCB(responseData, status);
            }
            return typeof _this.finishedCB === "function" ? _this.finishedCB() : void 0;
          }
        }
      };
    })(this);
    payload = (contentType === 'text/plain' ? data : JSON.stringify(data));
    if (method === 'PUT' || method === 'POST') {
      this.xmlHttp.send(payload);
    } else {
      this.xmlHttp.send();
    }
    return this;
  };

  Request.prototype.makeQueryParam = function() {
    var data, divider, i, k, method, ref, rv, url, v;
    ref = this.options, data = ref.data, url = ref.url, method = ref.method;
    if (method !== 'GET') {
      return '';
    }
    rv = indexOf.call(url, '?') >= 0 ? '' : '?';
    i = 0;
    for (k in data) {
      v = data[k];
      if (!(v !== '' && (v != null))) {
        continue;
      }
      rv += i === 0 ? '' : '&';
      rv += k + "=" + (encodeURIComponent(v));
      i++;
    }
    divider = rv === '?' ? '' : '&';
    rv += divider + "_=" + (new Date().getTime());
    return rv;
  };

  return Request;

})();
