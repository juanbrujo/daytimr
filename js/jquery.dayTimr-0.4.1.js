// jQuery dayTimr
// Get and uses the user's current time of the day to bring anything to the website, through a CSS class.
// version 0.4, Dec 2012
// by @csslab | www.csslab.cl

;(function($){ 
	$.fn.dayTimr = function(options) {
		var settings = $.extend({
			'nightClass'	: 'night', 		// name of the class used if it is night time
			'nightStart'	: '21:00',		// time when night starts, must be HH:MM (if it is >= 9 don't use the 0)
			'dawnClass'		: 'dawn',		// name of the class used if it is dawn time
			'dawnStart'		: '0:00',		// time when dawn starts, must be HH:MM (if it is >= 9 don't use the 0)
			'morningClass'	: 'morning',	// name of the class used if it is morning time
			'morningStart'	: '7:00',		// time when morning starts, must be HH:MM (if it is >= 9 don't use the 0)
			'afternoonClass': 'afternoon',	// name of the class used if it is afternoon time
			'afternoonStart': '12:00',		// time when afternoon starts, must be HH:MM (if it is >= 9 don't use the 0)
			'debug'			: false,		// if true show what's going on in the browser's console
			onNight			: function(){},	// callback if it is night
			onDawn			: function(){},	// callback if it is dawn
			onMorning		: function(){},	// callback if it is morning
			onAfternoon 	: function(){}	// callback if it is afternoon
		}, arguments[0] || {});
		
		return this.each(function() {
			// setting variables, I like them, so what?
			$this 			= $(this);
			datetoday 		= new Date();
			timenow 		= datetoday.getTime();
			datetoday.setTime(timenow);
			thehour 		= datetoday.getHours();
			theminute 		= datetoday.getMinutes();
			thesecond 		= datetoday.getSeconds();
			nightStart 		= settings.nightStart.split(':');
			nightStartH 	= nightStart[0];
			nightStartM 	= nightStart[1];
			dawnStart 		= settings.dawnStart.split(':');
			dawnStartH 		= dawnStart[0];
			dawnStartM 		= dawnStart[1];
			morningStart 	= settings.morningStart.split(':');
			morningStartH 	= morningStart[0];
			morningStartM 	= morningStart[1];
			afternoonStart 	= settings.afternoonStart.split(':');
			afternoonStartH = afternoonStart[0];
			afternoonStartM = afternoonStart[1];
			nightEndH 		= dawnStartH-1;
			dawnEndH 		= morningStartH-1;
			morningEndH 	= afternoonStartH-1;
			afternoonEndH 	= nightStartH-1;
			if(nightStartH == 0) {
				afternoonEndH 	= 23;
			}
			if(dawnStartH == 0) {
				nightEndH		= 23;
			}
			if(nightStartM == 00 || dawnStartM == 00 || morningStartM  == 00 || afternoonStartM  == 00) {
				nightEndM 		= 59;
				dawnEndM		= 59;
				morningEndM		= 59;
				afternoonEndM	= 59;
			}
			if(settings.debug == true) {
				window.console && console.log("Current Time: "+thehour+':'+theminute+':'+thesecond);
				window.console && console.log("It's night from "+nightStartH+":"+nightStartM+" to "+nightEndH+":"+nightEndM);
				window.console && console.log("It's dawn from "+dawnStartH+":"+dawnStartM+" to "+dawnEndH+":"+dawnEndM);
				window.console && console.log("It's morning from "+morningStartH+":"+morningStartM+" to "+morningEndH+":"+morningEndM);
				window.console && console.log("It's afternoon from "+afternoonStartH+":"+afternoonStartM+" to "+afternoonEndH+":"+afternoonEndM);	
			}
			// night
			if (
				thehour 	>= nightStartH && 
				theminute 	>= nightStartM &&
				thesecond 	<= 59 &&
				thehour 	<= nightEndH && 
				theminute 	<= nightEndM &&
				thesecond 	>= 0
				) {
					if(settings.debug == true) {
						window.console && console.log("It's night now");
					}
					$this.addClass(settings.nightClass);
					settings.onNight.call(this);
			}
			// dawn
			if (
				thehour 	>= dawnStartH && 
				theminute 	>= dawnStartM &&
				thesecond 	<= 59 &&
				thehour 	<= dawnEndH && 
				theminute 	<= dawnEndM &&
				thesecond 	>= 0
				) {
					if(settings.debug == true) {
						window.console && console.log("It's dawn now");
					}
					$this.addClass(settings.dawnClass);
					settings.onDawn.call(this);
			}
			// morning
			if (
				thehour 	>= morningStartH && 
				theminute 	>= morningStartM &&
				thesecond 	<= 59 &&
				thehour 	<= morningEndH && 
				theminute 	<= morningEndM &&
				thesecond 	>= 0
				) {
					if(settings.debug == true) {
						window.console && console.log("It's morning now");
					}
					$this.addClass(settings.morningClass);
					settings.onMorning.call(this);
			}
			// afternoon
			if (
				thehour 	>= afternoonStartH && 
				theminute 	>= afternoonStartM &&
				thesecond 	<= 59 &&
				thehour 	<= afternoonEndH && 
				theminute 	<= afternoonEndM &&
				thesecond 	>= 0
				) {
					if(settings.debug == true) {
						window.console && console.log("It's afternoon now");
					}
					$this.addClass(settings.afternoonClass);
					settings.onAfternoon.call(this);
			}
		});
	};
})(jQuery);
// that's all, thanks.