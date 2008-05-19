/**
* Inspired from Mootools Element.inject and made from Prototype insert
*
* License:
*	  MIT-style license.
* 
* Ported by Sebastien Grosjean (http://zencocoon.com)
*
* TODO: Make as flexible as insert
**/
Element.Methods.inject = function(element, parent) {
  if (!(element = $(element))) return null;
  $(parent).insert(element);
  return element;
};

/**
* Taken from Protolicious (Kangax) http://github.com/kangax/protolicious/tree/master/element.methods.js
**/
Element.Methods.toHTML = function(element) {
  element = $(element);
  try {
    var xmlSerializer = new XMLSerializer();
    return element.nodeType == 4
      ? element.nodeValue
      : xmlSerializer.serializeToString(element);
  } catch(e) {
    return (element.xml
      || element.outerHTML
      || element.cloneNode(true).wrap().innerHTML);
  }
};

/**
* Inspired from Mootools Element.clone
*
* It clone an element and return a clone of it
**/
Element.Methods.clone = function(element, deepBoolean, keepId) {
  var new_element = $($(element).cloneNode(0));
  if (!keepId) {
    new_element.id = null;
  }
  if (deepBoolean) {
    for (var i = 0, l = element.childNodes.length; i < l; i++) {
      var child = element.childNodes[i];
      if (child)
        new_element.appendChild(child.nodeType == Node.ELEMENT_NODE ? child.clone(true, keepId) : child.cloneNode(0));
    }
  }
  return new_element;
}

Element.addMethods();