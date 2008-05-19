/*
Script: ui-assets.js
	Provides methods to dynamically load JavaScript, CSS, and Image files into the document.

License:
	MIT-style license.
	
Taken from Mootools 1.2
Port to prototype by Sebastien Grosjean (http://www.zencocoon.com).
*/

UI.Asset = Class.create(UI.Options, {
  options: {
    onload: Prototype.emptyFunction,
	  onabort: Prototype.emptyFunction,
	  onerror: Prototype.emptyFunction
	},
  
  initialize:  Prototype.emptyFunction,

  image: function(source, options) {
    this.setOptions(options);
    var options = this.options;
		var image = new Image();
		var element = $(image) || new Element('img');
		['load', 'abort', 'error'].each(function(name) {
			var type = 'on' + name;
			var event = options[type];
			delete options[type];
			image[type] = function() {
				if (!image) return;
        if (!element.up())
          element.writeAttribute({width: image.width+'px', height: image.height+'px'});
				image = image.onload = image.onabort = image.onerror = null;
				event.delay(1, element, element);
				element.fire(name, element);
			};
		});
		image.src = element.src = source;
		if (image && image.complete) image.onload();
		return element.writeAttribute(options);
	}
});