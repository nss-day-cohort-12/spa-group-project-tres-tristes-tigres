var Chatty = (function (newChatty) {

    newChatty.loadJson = function (callbackFunction) {
      $.ajax({
        url: "initial.json",
        callback: callbackFunction  // this key is available to "done" function
      }).done(function(JSONObject) {  // $.ajax automatically detects JSON string and parses it into object
        Chatty.displayMessages(JSONObject.message);  // send array
        Chatty.passArrayToIIFE2(JSONObject.message);  // send array
        this.callback();
      });
    };

    newChatty.displayMessages = function (privateMessages) {
      $("#outputField").html("");  // clear div#outputField
      // for each message in array, append new HTML to div#outputField
      for (var i = 0; i < privateMessages.length; i++) {
        $("#outputField").append(`<div class='messageText' id='${privateMessages[i].idt}'>` +
                                   `<p style="float:left">${privateMessages[i].text}</p>` +
                                   "<button class='deleteButton'>Delete</button>" +
                                 "</div>");  // note: must append a complete div, not partial!
      }
    };

    return newChatty;

})(Chatty|| {});