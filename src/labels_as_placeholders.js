/*
* Made by Sebastien Grosjean - ZenCocoon
* provided AS IS, without any warranty
*
* Created : 25 July 2010
*/

/** section: Language
* class LabelsAsPlaceholders
*
* Make labels behaving like placeholders, inspired by me.com as of 25 July 2010.
* Labels attached to an input, select or textarea using the 'for' attribute will
* be hidden when their input become field, they will be shown again once blank.
**/
LabelsAsPlaceholders = Class.create({
  initialize: function() {
    var inputs = $$('input, select, textarea');
    
    inputs.each(function(input) {
      if ($F(input).length > 0)
        $$('label[for=' + input.id + ']').first().hide();
      input.on(input.tagName.toLowerCase() == 'select' ? 'change' : 'keyup', function(event) {
        if ($F(this).length > 0)
          $$('label[for=' + this.id + ']').first().hide();
        else
          $$('label[for=' + this.id + ']').first().show();
      });
    });
  }
});