var Chatty = (function (newChatty) {
  var privateMessages = [];  // this private array is shared by all functions in this IIFE

  // receive array contents from loadJSON (this function will be called from loadJSON)
  newChatty.passArrayToIIFE2 = function (arrayReceived) {
    privateMessages = arrayReceived;
  }

  newChatty.appendNewMessage = function (newMessage) {
    privateMessages.push(newMessage);  // add newMessage to privateMessages array
    Chatty.displayMessages(privateMessages);  // call displayMessages and send it array
  };

  newChatty.clearAllMessages = function(event) {
    privateMessages = [];
    Chatty.displayMessages(privateMessages);
  };

  return newChatty;  // return object

})(Chatty || {});