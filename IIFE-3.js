var Chatty = (function (newChatty) {

  newChatty.deleteMessageFromDOM = function (event) {
    if (event.target.className == "deleteButton") {
      var divToDelete = document.getElementById(event.target.parentNode.id);
      console.log("divIDToDelete",event.target.parentNode.id);
      console.log("divToDelete",divToDelete);
      divToDelete.parentNode.removeChild(divToDelete);
    }
  }

  return newChatty;

})(Chatty);   // This ends the IIFE