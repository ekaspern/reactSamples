var Flux, Grocery, _, actionModule, dispatcher, i, len, processActions, ref;

Flux = require('delorean').Flux;

_ = require('lodash');

Grocery = require('./flux/grocery_store');

dispatcher = {
  viewTriggers: {},
  getStores: function() {
    return {
      grocery: Grocery
    };
  }
};

processActions = function(actionModule) {
  var action, actionName, results, triggerMethod, triggerName;
  results = [];
  for (actionName in actionModule) {
    action = actionModule[actionName];
    if (actionName === 'viewTriggers') {
      results.push((function() {
        var results1;
        results1 = [];
        for (triggerName in action) {
          triggerMethod = action[triggerName];
          if (dispatcher.viewTriggers[triggerName] != null) {
            results1.push(typeof console !== "undefined" && console !== null ? console.warn("Duplicate View Trigger: " + triggerName + ". " + triggerName + " will not be applied to the dispatcher viewTriggers hash.") : void 0);
          } else {
            results1.push(dispatcher.viewTriggers[triggerName] = triggerMethod);
          }
        }
        return results1;
      })());
    } else {
      if (dispatcher[actionName] != null) {
        results.push(typeof console !== "undefined" && console !== null ? console.warn("Duplicate Dispatcher Action: " + actionName + ". " + actionName + " will not be applied to the dispatcher.") : void 0);
      } else {
        results.push(dispatcher[actionName] = action);
      }
    }
  }
  return results;
};

ref = [require('./flux/grocery_actions')];
for (i = 0, len = ref.length; i < len; i++) {
  actionModule = ref[i];
  processActions(actionModule);
}

module.exports = Flux.createDispatcher(dispatcher);
