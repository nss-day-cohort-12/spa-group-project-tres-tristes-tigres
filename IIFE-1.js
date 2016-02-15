var Chatty = (function (newChatty) {

    newChatty.loadJson = function (callbackFunction) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        var privateMessages = JSON.parse(this.responseText).message;
        Chatty.displayMessages(privateMessages);
        Chatty.passArrayToIIFE2(privateMessages);
        callbackFunction();
      });
      loader.open("GET", "initial.json");
      loader.send();
    },

    newChatty.displayMessages = function (privateMessages) {
      var outputString = "";
      for (var i = 0; i < privateMessages.length; i++) {
       
        outputString += `<div class='messageText' id='${privateMessages[i].idt}'>`;
        outputString += `<p style="float:left">${privateMessages[i].text}</p>`;
        outputString += `<button class="deleteButton">Delete</button>`
        outputString += "</div>";
      }  // This closes the for loop

      document.getElementById("outputField").innerHTML = outputString;

    } //       display Messages function closes here

    return newChatty;

})(Chatty);   // This ends the IIFE