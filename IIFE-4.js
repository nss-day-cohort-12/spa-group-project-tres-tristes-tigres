var Chatty = (function (newChatty) {

  newChatty.createListeners = function() {
    document.getElementById("clearMessage").addEventListener("click", Chatty.clearAllMessages);
    document.getElementById("texto").addEventListener("keypress", Chatty.detectedKeypress);
    // document.getElementById("checkboxDarkTheme").addEventListener("click", Chatty.toggleDarkTheme);
    document.querySelector("body").addEventListener("click", Chatty.deleteMessage);
  };

  newChatty.deleteMessage = function(event) {
    if (event.target.className == "deleteButton") {  // was click on a Delete button?
      Chatty.deleteMessageFromDOM(event.target.parentNode.id);  // if so, send ID of div to delete
    }
  };

  newChatty.detectedKeypress = function(event) {
    if (event.keyCode === 13) {  // if keypress is enter, event generates keyCode 13
      // event.keyCode returns ASCII code of whatever key generated the keypress event
      var messageText = event.target.value;
      var newDivID = Date.now();  // newDivID will be unique 13-digit number
      // send contents of text input field and newDivID
      Chatty.appendNewMessage(messageText,newDivID);
    }
  };

  newChatty.toggleDarkTheme = function(event) {

  }; 


  return newChatty;  // return object

})(Chatty || {});


Chatty.loadJson(Chatty.createListeners);  // pass createListeners as callback function
