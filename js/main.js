(function ($) {
	"use strict";

    jQuery(document).ready(function($){
    	    					//year/month/day
    		$('#clock').countdown('2019/02/20 12:00:00').on('update.countdown', function(event) {
    	  		var $this = $(this).html(event.strftime(''
    					+ '<div class="wrapper"><span class="time">%-D</span><br>day%!D</div><span class="slash">/</span>'
    					+ '<div class="wrapper"><span class="time">%H</span><br>hours</div><span class="slash">/</span>'
    					+ '<div class="wrapper"><span class="time">%M</span><br>minutes</div><span class="slash">/</span>'
    					+ '<div class="wrapper"><span class="time">%S</span><br>seconds</div>'));	
    		});



    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	