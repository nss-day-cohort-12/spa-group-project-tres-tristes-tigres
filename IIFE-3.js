var Chatty = (function (newChatty) {

  newChatty.deleteMessageFromDOM = function (event) {
    var divIDToDelete = event.target.parentNode.id;
    Chatty.deleteMessageFromArray(divIDToDelete);
    $(`#${divIDToDelete}`).remove();
  };

  return newChatty;

})(Chatty || {});   // This ends the IIFE