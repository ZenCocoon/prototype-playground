/**
 * Inspired from Mootools 1.2 Element.Storage (http://blog.mootools.net/2008/1/22/Element_Storage)
 *
 * License:
 *	  MIT-style license.
 * 
 * Author:
 *   Sebastien Grosjean (http://zencocoon.com)
 *
 * Tested under FF 2, FF3, Safari 3, Opera 9.25, IE6, IE7, Camino 1.6
 **/

/**
 * Extend Prototype to add StorageUID
 * 
 **/
Object.extend(Prototype, {StorageUID: 1});

/**
 * Storage handler
 * 
 **/
Element.Storage = {
  get: function(uid) {
    return (this[uid] || (this[uid] = {}));
  },
  
  init: function(item) {
    return (item.uid || (item.uid = Prototype.StorageUID++));
  }
}

/**
 * Element.retrieve(@element, property, default) => value
 * 
 * Retrieve from the external object Element.Storage and scoping the element, the value defined by property
 * If no value exist default is stored and returned
 * 
 **/
Element.Methods.retrieve = function(element, property, dflt) {
  if (!(element = $(element))) return;
  if (element.uid == undefined) Element.Storage.init(element);
  var storage = Element.Storage.get(element.uid);
  var prop = storage[property];
  if (dflt != undefined && prop == undefined)
    prop = storage[property] = dflt;
  return prop;
};

/**
 * Element.store(@element, property, value) => @element
 * 
 * Store a property / value pair attached to an element in the external object Element.Storage
 * 
 **/
Element.Methods.store = function(element, property, value) {
  if (!(element = $(element))) return;
  if (element.uid == undefined) Element.Storage.init(element);
  Element.Storage.get(element.uid)[property] = value;
  return this;
};

Element.addMethods();