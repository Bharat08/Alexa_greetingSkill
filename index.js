"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Hello, Welcome to this skil. What do you think is  most popular language?").listen("Tell me what you think is  most popular language.");
    this.emit(':responseReady');
  },

  'LanguageIntent': function () {
    this.response.speak("javascript is our most popular language.").listen();
    this.emit(':responseReady');
  },
  'AMAZON.StopIntent': function() {
      this.response.speak('Ok, hope to see you soon');
      this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function() {
      this.response.speak('Ok, hope to see you soon');
      this.emit(':responseReady');
  },
  'byeIntent': function() {
      this.response.speak('happy to help you again, please be polite');
      this.emit(':responseReady');
  },
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.appId = "amzn1.ask.skill.cb3dbbc6-6e5d-4eba-ae0d-de57c3294fd0";
    alexa.registerHandlers(handlers);
    alexa.execute();
};