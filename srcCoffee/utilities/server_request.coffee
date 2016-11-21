
module.exports = class Request
  defaults:
    url: ''
    method: 'GET' 
    timeout: 105000
    data: {} # Data to send to the server
    headers: null # Custom Headers
    success: null # Callback for success
    error: null # Callback for an error
    onTimeout: null # Callback for a timeout
    authenticate: true
    responseType: null
    contentType: null

    
  constructor: (@options) ->
    state = 'pending'
    # Set any unset properties to their options
    @options[k] = @defaults[k] for k,v of @defaults when @options[k] is undefined

    # set authToken here
    @authToken = ''

    @start()
  
  # Support for promise syntax
  # Will not support any true promise behavior
  done: (@doneCB) -> @ # Called on succcess
  then: (@thenCB) -> @ # Called on succcess, synonym for done
  finished: (@finishedCB) -> @ # Called no matter what, but gets no data back
  error: (@errorCB) -> @ # Called on error only

  abort: -> 
    @doneCB = null
    @thenCB = null
    @finishedCB = null
    @errorCB = null
    @xmlHttp?.abort()

  start: ->
    {method, data, headers, url, timeout, onTimeout, error, success,
    authenticate, responseType, contentType} = @options
    endpoint = url + @makeQueryParam()

    # Binary data type check
    binaryResponse = responseType is 'blob'

    # Create the request
    @xmlHttp = new XMLHttpRequest()
    
    # Open the connection
    @xmlHttp.open(method, endpoint, true)
    @xmlHttp.responseType = responseType if responseType
    
    # Headers
    if contentType?
      @xmlHttp.setRequestHeader "Content-type", contentType
    else
      @xmlHttp.setRequestHeader "Content-type", "application/json"
    
    @xmlHttp.setRequestHeader "Accept", "application/json, text/javascript, */*; q=0.01"
    @xmlHttp.setRequestHeader "Accept-Language", "en-us, en;"
    @xmlHttp.setRequestHeader "authToken", @authToken if authenticate

    for k,v of headers
      @xmlHttp.setRequestHeader k, v
    
    # Watch for timeouts
    requestTimer = setTimeout =>
      @finishedCB?("timeout", @xmlHttp)
      @errorCB?("timeout", @xmlHttp)
      @abort()
      onTimeout?()
    , timeout
    
    
    # Define the state change handler
    @xmlHttp.onreadystatechange = =>
      # Request is complete
      if @xmlHttp.readyState is 4
        clearTimeout requestTimer

        # Parse JSON
        try
          responseData = if binaryResponse then @xmlHttp.response else JSON.parse(@xmlHttp.responseText)

        # If JSON parse fails, send back the raw response, otherwise nothing
        catch e
          responseData = @xmlHttp.responseText or null
        
        # Failed Request
        status = +@xmlHttp.status
        if status > 399 or status is 0
          error?(@xmlHttp.status, @xmlHttp, responseData)
          @errorCB?(@xmlHttp.status, @xmlHttp, responseData)
                      
          @finishedCB?()
        # Success Request
        else
          # Run any supplied callback methods
          success?(responseData, status)
          @doneCB?(responseData, status)
          @thenCB?(responseData, status)
          @finishedCB?()


    # Send the request
    payload = (
      if contentType is 'text/plain' then data
      else JSON.stringify(data)
    )
    if method in ['PUT', 'POST'] then @xmlHttp.send(payload)
    else @xmlHttp.send()

    return @

  
  makeQueryParam: ->
    {data, url, method} = @options
    
    return '' unless method is 'GET'

    rv = if '?' in url then '' else '?'

    i = 0
    for k, v of data when v isnt '' and v?
      rv += if i is 0 then '' else '&'
      rv += "#{k}=#{encodeURIComponent(v)}" 
      i++

    divider = if rv is '?' then '' else '&'
    rv += "#{divider}_=#{new Date().getTime()}"

    rv

