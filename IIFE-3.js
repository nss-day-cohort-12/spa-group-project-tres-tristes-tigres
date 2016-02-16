var Chatty = (function (newChatty) {

  newChatty.deleteMessageFromDOM = function (divIDToDelete) {
    // before removing DOM element, remove specified object from array
    Chatty.deleteMessageFromArray(divIDToDelete);

    var divToDelete = document.getElementById(divIDToDelete);  // get DOM ref with unique ID
    // can't remove DOM ref directly; have to reference it by its parentNode
    divToDelete.parentNode.removeChild(divToDelete);
  };

  return newChatty;

})(Chatty || {});   // This ends the IIFE