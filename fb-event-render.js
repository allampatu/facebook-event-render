jQuery(document).ready(function() {
    jQuery.getJSON('https://graph.facebook.com/FAN_PAGE_ID/events/?fields=name,description,cover&access_token=APP_ACCESS_TOKEN', function(result) {
        
    //get the string date and split it to display better
    var string = result.data[0].start_time; //return the string
    var hourDate = string.substr(11,5); //get only the hour
    var getEventDate = string.substr(0,10); //get only the date
    var dateEventArray = getEventDate.split('-'); //split the date and create an array
    var fullMonth = function() {
        if (dateEventArray[1] === "01") {
        return "january";
        } else if (dateEventArray[1] === "02") {
            return "february";
        } else if (dateEventArray[1] === "03") {
            return "march";
        } else if (dateEventArray[1] === "04") {
            return "april";
        } else if (dateEventArray[1] === "05") {
            return "may";
        } else if (dateEventArray[1] === "06") {
            return "june";
        } else if (dateEventArray[1] === "07") {
            return "july";
        } else if (dateEventArray[1] === "08") {
            return "august";
        } else if (dateEventArray[1] === "09") {
            return "september";
        } else if (dateEventArray[1] === "10") {
            return "october";
        } else if (dateEventArray[1] === "11") {
            return "november";
        } else if (dateEventArray[1] === "12") {
            return "december";
        } 
    }    
    var dateEvent = dateEventArray[2] + ' ' + fullMonth() + ' ' + dateEventArray[0] + ' start ' + hourDate; //merge the array to have a format date and the hour
   
    
    //create the paragraph in the description data
    var contentEvent = result.data[0].description.replace(/\n\n/g, '<p>')
                       .replace(/\n\n\n/g, '<p>')
                       .replace(/\n/g, '<br />');
    
    //add everything in the page
    jQuery('#fbEvent').prepend('<h2>{ Events }</h2>')
              .append('<div class="eventCover"><img src="' + result.data[0].cover.source + '"/></div>')
              .append('<div class="dateEvent">' + dateEvent + '</div>' )
              .append('<h3>' + result.data[0].name + '</h3>')
              .append('<div class="newLine">' + contentEvent + '</div>')
              .append('<a class="button small blue" target="_blank" href="http://fb.com/events/' + result.data[0].id + '">Join event</a>')
              .append('<a class="button small gold" target="_blank" href="http://fb.com/osteriadelbuono/events">Other events</a>');

    })
})
