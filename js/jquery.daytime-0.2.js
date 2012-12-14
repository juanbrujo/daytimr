// jQuery DayTimr
// Get and uses the user's time of the day to bring interaction to the website.
// version 0.2, Dec 2012
// by @csslab

jQuery.fn.dayTimr = function(options){
	// default plugin settings
	settings = jQuery.extend({
		orientation: 'horizontal'
	}, options);

	;$(function(){
		datetoday 	= 	new Date();
		timenow 	= 	datetoday.getTime();
						datetoday.setTime(timenow);
		thehour 	= 	datetoday.getHours();
		defecto		=	$('body');
		
		if (thehour > 18 && thehour < 22) {
			$('body').addClass('evening');
		}
		if (thehour > 22 && thehour < 24) {
			$('body').addClass('night');
		}

	});

};