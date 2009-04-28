/*
** Made by Sebastien Grosjean - ZenCocoon
** provided AS IS, without any warranty
*/

Form.PasswordFields = Class.create({
  initialize: function(element) {
    if (!(this.element = $(element))) return; 

    this.element.select('.field').invoke('hide');
    this.element.down('legend').observe('click', function(event) {
      this.up().select('.field').invoke('toggle');
    });
  }
});