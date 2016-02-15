//augmentation of SolarSystem

var Chatty = (function (newChatty) {


  // create new k:v pair in oldChatty object
  newChatty.createListeners = function() {
    document.getElementById("clearMessage").addEventListener("click", Chatty.clearAllMessages);
    document.getElementById("texto").addEventListener("keypress", Chatty.detectedKeypress;
    document.getElementById("checkboxDarkTheme").addEventListener("click", Chatty.toggleDarkTheme);
  };

  newChatty.detectedKeypress = function(event) {
    var messageText = event.target.value;
    // if keypress is return
    Chatty.appendNewMessage(messageText);
    // or:
    Chatty.appendNewMessage(event.target.value);
  };
  newChatty.toggleDarkTheme = function(event) {

  }; 


  return newChatty;  // return object

})(Chatty);