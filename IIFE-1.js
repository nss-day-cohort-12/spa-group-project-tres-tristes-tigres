var Chatty = (function () {
  var privateMessages = [];
  return {
    loadJson: function () {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        privateMessages = JSON.parse(this.responseText).message;  
        console.log(privateMessages);
        Chatty.displayMessages();
      });
    loader.open("GET", "initial.json");
    loader.send();
    },
    displayMessages: function () {
      var outputString = "";
      for (var i = 0; i < 5; i++) {
       
        outputString += "<div class= 'messageText'>";

        outputString += `<p>${privateMessages[i]}</p>`;
        outputString += `<button class="btn btn-default deleteButton col-md-6">Delete</button></div>`
        outputString += "</div>";
      }  // This closes the for loop
      console.log(outputString)
      document.getElementById("outputField").innerHTML = outputString;

    } //       display Messages function closes here


  }; // This ends the return
})();   // This ends the iffe

Chatty.loadJson();
