var Chatty = (function (newChatty) {
  var privateMessages = [];  // this private array is in the scope of all functions in this IIFE

  // receive array contents from loadJSON (on event "load," this function will be called from loadJSON)
  newChatty.passArrayToIIFE2 = function (arrayReceived) {
    privateMessages = arrayReceived;
  };

  newChatty.appendNewMessage = function (newMessageText,newDivID) {
    var newMessageObject = {idt:newDivID, text:newMessageText};
    privateMessages.push(newMessageObject);  // add newMessage to privateMessages array
    Chatty.displayMessages(privateMessages);  // call displayMessages and send it array
    document.getElementById("clearMessage").disabled = false;
    document.getElementById("texto").value = "";
  };

  newChatty.deleteMessageFromArray = function (divIDToDelete) {
    // delete from the array the object that has idt = divIDToDelete
    for (var i = 0; i < privateMessages.length; i++) {
      if (privateMessages[i].idt == divIDToDelete) {
        privateMessages.splice(i,1);
      }
    }
    // if the array is now empty, disable the Clear Messages button
    if (privateMessages.length === 0) {
      document.getElementById("clearMessage").disabled = true;
    }
  };

  newChatty.clearAllMessages = function() {
    privateMessages = [];
    Chatty.displayMessages(privateMessages);
    document.getElementById("clearMessage").disabled = true;
  };

  newChatty.getPrivateMessages = function() {  // getter function
    return privateMessages;
  };

  return newChatty;

})(Chatty || {});