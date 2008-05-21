/**
* Higly inspired from Mootools 1.2 Element.Storage (http://blog.mootools.net/2008/1/22/Element_Storage)
*
* License:
*	  MIT-style license.
* 
* Ported by Sebastien Grosjean (http://zencocoon.com)
**/

/**
* Extend Prototype to add UID
**/
Object.extend(Prototype, {UID: 1});

var $uid = (Prototype.Browser.IE) ? function(item) {
  return (item.uid || (item.uid = [Prototype.UID++]))[0];
} : function(item) {
  return item.uid || (item.uid = Prototype.UID++);
};

/**
* Taken from Mootools 1.2 Core
**/
function $pick() {
  for (var i = 0, l = arguments.length; i < l; i++) {
    if (arguments[i] != undefined)
      return arguments[i];
  }
}

/**
* Taken from Mootools 1.2 Element.Storage
**/
Element.Storage = {
  get: function(uid) {
    return (this[uid] || (this[uid] = {}));
  }
}

/**
* Taken from Mootools 1.2 Element.Storage
* 
* - property: name of the property to retrieve or init with default value
* - dflt: default value used to initialize storage if undefined
**/
Element.Methods.retrieve = function(element, property, dflt) {
  element = $(element);
  if (element.uid == undefined) $uid(element);
  var storage = Element.Storage.get(element.uid);
  var prop = storage[property];
  if (dflt != undefined && prop == undefined)
    prop = storage[property] = dflt;
  return $pick(prop);
};

/**
* Taken from Mootools 1.2 Element.Storage
**/
Element.Methods.store = function(element, property, value) {
  element = $(element);
  if (element.uid == undefined) $uid(element);
  var storage = Element.Storage.get(element.uid);
  storage[property] = value;
  return this;
};

Element.addMethods();