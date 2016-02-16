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
    };

    newChatty.displayMessages = function (privateMessages) {
      var outputString = "";
      // build HTML string for each message in array
      for (var i = 0; i < privateMessages.length; i++) {
        outputString += `<div class='messageText' id='${privateMessages[i].idt}'>`;
        outputString += `<p style="float:left">${privateMessages[i].text}</p>`;
        outputString += "<button class='deleteButton'>Delete</button>";
        outputString += "</div>";
      }
      // transfer HTML string to DOM
      document.getElementById("outputField").innerHTML = outputString;
    };

    return newChatty;

})(Chatty|| {});