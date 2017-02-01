/*
 * Nav Dots
 *
 * More info at 
 *
 * Copyright (c) 2017, Tony Monckton
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

	$.fn.NavDots = function(options) {
		var $body = $('html, body');
		var settings = $.extend({
	    	duration: 500,
	    	easing: "easeOutQuad"
	  	}, options );
	
		return this.each(function() {
			$(this).on({
			    click: function(){
					//alert("click");
					if ( $(this).hasClass('dotOff') )
					{
						$('li').each(function()	{
							if ($(this).hasClass('dotOn')) { $(this).removeClass('dotOn').addClass('dotOff');} 
						});
			        	$(this).addClass('dotOn').removeClass('dotOff');
			
						$body.stop().animate({ scrollTop: $($(this).data("href")).offset().top }, settings.duration, settings.easing);
					}
			    },
			    mousedown: function()	{},		// :active state
			    mouseup: function() 	{},		// on click release
			    mouseenter: function()	{		// on hover
					$(this).css("opacity", '.5');
			    },
			    mouseleave: function()	{		// hover exit
					$(this).css("opacity", '1.0');
			    }, 
				hover: function()		{}		// or hover instead of enter/leave
			});		
	    });  
	};
