/** section: Language
* class Date
*
* Extensions to the built-in `Date` object.
**/

/**
* Date.fromJSON(string) -> Date
* - string (String): A string representation of the date in ISO 8601 format.
* 
* Returns a new Date object based on the JSON string date time.
*
* <h5>Example</h5>
*
* new Date.fromJSON("2009-11-06T13:30:12Z");
* //-> Fri Nov 06 2009 15:30:12 GMT+0200 (EET)
**/
Date.fromJSON = function(string) {
  var match = string.match(new RegExp(/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)Z/));

  var date = new Date();
  date.setUTCFullYear(parseInt(match[1], 10));
  date.setUTCMonth(parseInt(match[2], 10) - 1);
  date.setUTCDate(parseInt(match[3], 10));
  date.setUTCHours(parseInt(match[4], 10));
  date.setUTCMinutes(parseInt(match[5], 10));
  date.setUTCSeconds(parseInt(match[6], 10));
  
  return date;
};