var Chatty = (function (newChatty) {


  // create new k:v pair in Chatty object
  newChatty.createListeners = function() {
    document.getElementById("clearMessage").addEventListener("click", Chatty.clearAllMessages);
    document.getElementById("texto").addEventListener("keypress", Chatty.detectedKeypress);
    document.getElementById("checkboxDarkTheme").addEventListener("click", Chatty.toggleDarkTheme);
  };

  newChatty.detectedKeypress = function(event) {
    var messageText = event.target.value;
    // if keypress is return
    if (event.keyCode === 13) {
      Chatty.appendNewMessage(event.target.value);
    }

    // ASCII code 13 is enter!!
    // event.keyCode returns ASCII code of whatever key generated the keypress event
  };

  newChatty.toggleDarkTheme = function(event) {

  }; 


  return newChatty;  // return object

})(Chatty);


Chatty.loadJson(Chatty.createListeners);
