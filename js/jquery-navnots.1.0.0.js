/*
 * Nav Dots
 *
 * More info at https://github.com/tonymonckton/navdots
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
		var $body 		= $('html, body');
		var settings 	= $.extend({
			align:		"top",
	    	duration: 	500,
	    	easing:		"easeOutQuad"
	  	}, options );
		
		this.update = function()
		{
			var navTop		= 0;
			
			switch (options.align) 
			{
				case 'top':	
					navTop = 0;
				break;
				case 'center':
					var navDotListH	= $('#navDots').height();
					var winH		= window.innerHeight;
					navTop 			= (winH/2)-(navDotListH/2);
				break;
				case 'bottom':
					var navDotListH	= $('#navDots').height();
					var winH		= window.innerHeight;
					navTop 			= winH-navDotListH;
				break;
			}

			$("#navDots").css('padding-top', navTop);
		}

		this.reSizeMe = function ()
		{
			this.update()
		} 

		this.update()
	
		return this.each(function() {
			$(this).on({
			    click: function(){
					if ( $(this).hasClass('dotOff') )
					{
						$('.dotList li').each(function()	{
							if ($(this).hasClass('dotOn')) { $(this).removeClass('dotOn').addClass('dotOff');} 
						});
						
			        	$(this).addClass('dotOn').removeClass('dotOff');
						
						$body.stop().animate({ scrollTop: $($(this).data("href")).offset().top }, settings.duration, settings.easing);
					}
					if ( $(this).hasClass('navDown') )
					{
						var $cSection = $(".dotList .dotOn");
						var $nSection = $($cSection).next();
						if ( $nSection !== undefined )	
						{
							if ( $($nSection).hasClass("navDown") == false )
							{
								$($cSection).removeClass('dotOn').addClass('dotOff');		
								$($nSection).removeClass('dotOff').addClass('dotOn'); 
								$body.stop().animate({ scrollTop: $($($nSection).data("href")).offset().top }, settings.duration, settings.easing);
							}
						}
					}
					if ( $(this).hasClass('navUp') )
					{
						var $cSection = $(".dotList .dotOn");
						var $nSection = $($cSection).prev();
						if ( $nSection !== undefined )	
						{
							if ( $($nSection).hasClass("navUp") == false )
							{
								$($cSection).removeClass('dotOn').addClass('dotOff');				
								$($nSection).removeClass('dotOff').addClass('dotOn'); 
								$body.stop().animate({ scrollTop: $($($nSection).data("href")).offset().top }, settings.duration, settings.easing);
							}
						}
					}
			    },
			    mousedown: function()	{},	// :active state
			    mouseup: function() 	{},	// on click release
			    mouseenter: function()	{	$(this).css("opacity", '.5');	},	// on hover
			    mouseleave: function()	{	$(this).css("opacity", '1.0');	},	// hover exit
				hover: function()		{}	// or hover instead of enter/leave
			});		
	    }); 
	};
