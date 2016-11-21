{Flux} = require 'delorean'
_ = require 'lodash'

Grocery = require './flux/grocery_store'


# Name and instantiate stores here
dispatcher = 

  viewTriggers: {}

  getStores: ->
    {
      grocery: Grocery
    }


processActions = (actionModule) ->
  for actionName, action of actionModule
    if actionName is 'viewTriggers'
      for triggerName, triggerMethod of action
        if dispatcher.viewTriggers[triggerName]? then console?.warn "Duplicate View Trigger: #{triggerName}. #{triggerName} will not be applied to the dispatcher viewTriggers hash."
        else dispatcher.viewTriggers[triggerName] = triggerMethod
    else
      if dispatcher[actionName]? then console?.warn "Duplicate Dispatcher Action: #{actionName}. #{actionName} will not be applied to the dispatcher."
      else dispatcher[actionName] = action


# Require action modules inside of this Array
processActions(actionModule) for actionModule in [
  require './flux/grocery_actions'
]



module.exports = Flux.createDispatcher dispatcher    
