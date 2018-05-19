'use strict';
exports.handler = function(event,context)
{
    var request = event.request;
      /*
      i)   LaunchRequest       Ex: "Open greeter"
      ii)  IntentRequest       Ex: "Say hello to John" or "ask greeter to say hello to John"
      iii) SessionEndedRequest Ex: "exit" or error or timeout
    */

    if (request.type === "LaunchRequest") 
    {
               let options = {};
          options.speechText =  "Welcome to Meeter skill. Using our skill you can greet your guests. Whom you want to greet? this skill is  first skill developed by me ";
          options.repromptText = "You can say for example, say hello to John. ";
          options.endSession = false;
          context.succeed(buildResponse(options));
               
        
    }
    else if (request.type === "IntentRequest")
    {
        
               let options = {};
               if(request.intent.name === "helloIntent"){
          let name = request.intent.slots.firstName.value;
          options.speechText="Hello"+name+".";
          options.speechText += getWish();
          options.endSession=true;
          context.succeed(buildResponse(options));

    }
          else
    {
          context.fail("Unknown intent");
    }
  } 
      
 else if (request.type === "SessionEndedRequest") {

    }
    else{
  context.fail("Unknown intent");
} 

}

//Defining functions here 


function getWish() {
  var myDate = new Date();
  var hours = myDate.getUTCHours() - 8;
  if (hours < 0) {
    hours = hours + 24;
  }

  if (hours < 12) {
    return "Good Morning. ";
  } else if (hours < 18) {
    return "Good afternoon. ";
  } else {
    return "Good evening. ";
  }
  
}


function buildResponse(options) {

  

  var response = {
    version: "1.0",
    response: {
      outputSpeech: {
        type: "PlainText",
        text: options.speechText
      },
      shouldEndSession: options.endSession
    }
  };

  if(options.repromptText) {
    response.response.reprompt = {
      outputSpeech: {
        type: "PlainText",
        ssml: options.repromptText
      }
    };
  }
 return response;
}



