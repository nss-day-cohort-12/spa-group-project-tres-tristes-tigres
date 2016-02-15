var Chatty = (function () {

  return {

    loadJson: function (callbackFunction) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        var privateMessages = JSON.parse(this.responseText).message;  
        Chatty.displayMessages(privateMessages);
        callbackFunction();
      });
    loader.open("GET", "initial.json");
    loader.send();
    },

    displayMessages: function (privateMessages) {
      var outputString = "";
      for (var i = 0; i < privateMessages.length; i++) {
       
        outputString += "<div class= 'messageText'>";

        outputString += `<p>${privateMessages[i]}</p>`;
        outputString += `<button class="btn btn-default deleteButton col-md-6">Delete</button></div>`
        outputString += "</div>";
      }  // This closes the for loop

      document.getElementById("outputField").innerHTML = outputString;

    } //       display Messages function closes here


  }; // This ends the return
})();   // This ends the iffe

Chatty.loadJson(Chatty.createListeners);
