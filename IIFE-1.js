var Chatty = (function () {
  var privateMessages = [];
  return {
    loadJson: function () {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        privateMessages = JSON.parse(this.responseText).message;  
        console.log(privateMessages);
      });
    loader.open("GET", "initial.json");
    loader.send();
    }
  }; // This ends the return
})();   // This ends the iffe

Chatty.loadJson();