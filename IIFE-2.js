var Chatty = (function (newChatty) {
  var privateMessages = [];  // this private array is shared by all functions in this IIFE

  // receive array contents from loadJSON (this function will be called from loadJSON)
  newChatty.passArrayToIIFE2 = function (arrayReceived) {
    privateMessages = arrayReceived;
  }

  newChatty.appendNewMessage = function (newMessageText) {
    var newDivID = Date.now();
    var newMessageObject = {idt:newDivID, text:newMessageText};
    privateMessages.push(newMessageObject);  // add newMessage to privateMessages array
    Chatty.displayMessages(privateMessages);  // call displayMessages and send it array
  };
  newChatty.deleteMessage = function (event) {


  }  




  newChatty.clearAllMessages = function(event) {
    privateMessages = [];
    Chatty.displayMessages(privateMessages);
  };

  return newChatty;  // return object

})(Chatty || {});