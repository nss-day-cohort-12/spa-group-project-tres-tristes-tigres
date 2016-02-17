var Chatty = (function (newChatty) {

  newChatty.createListeners = function() {
    // jQuery listeners send event as argument, just like JS addEventListener
    $("#clearMessage").click(Chatty.clearAllMessages);
    $("#texto").keypress(Chatty.detectedKeypress);
    $(document).on("click",".deleteButton",Chatty.deleteMessageFromDOM);
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

  return newChatty;  // return object

})(Chatty || {});


Chatty.loadJson(Chatty.createListeners);  // pass createListeners as callback function
