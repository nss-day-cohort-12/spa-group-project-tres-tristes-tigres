var Chatty = (function (newChatty) {
  var privateMessages = []; 	

  newChatty.appendNewMessage = function (newMessage) {
	privateMessages.push(newMessage);  // add newMessage to privateMessages array
    Chatty.displayMessages(privateMessages);  // call displayMessages and send it array      
  }
  
  newChatty.clearAllMessages = function(event) {
    privateMessages = [];
    Chatty.displayMessages(privateMessages);
  };


  return newChatty;  // return object

})(Chatty);