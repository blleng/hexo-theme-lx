;(function () {
	
	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};




	var contentWayPoint = function() {
		var i = 0;
		$(".animate-box").waypoint( function( direction ) {

			if( direction === "down" && !$(this.element).hasClass("animated-fast") ) {
				
				i++;

				$(this.element).addClass("item-animate");
				setTimeout(function(){

					$("body .animate-box.item-animate").each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data("animate-effect");
							if ( effect === "fadeIn") {
								el.addClass("fadeIn animated-fast");
							} else if ( effect === "fadeInLeft") {
								el.addClass("fadeInLeft animated-fast");
							} else if ( effect === "fadeInRight") {
								el.addClass("fadeInRight animated-fast");
							} else {
								el.addClass("fadeInUp animated-fast");
							}

							el.removeClass("item-animate");
						},  k * 50, "easeInOutExpo" );
					});
					
				}, 100);
				
			}

		} , { offset: "85%" } );
	};


	

	var goToTop = function() {

		$(".js-gotop").on("click", function(event){
			
			event.preventDefault();

			$("html, body").animate({
				scrollTop: $("html").offset().top
			}, 500, "easeInOutExpo");
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$(".js-top").addClass("active");
			} else {
				$(".js-top").removeClass("active");
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	
	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};


	$(function(){
		contentWayPoint();
		
		goToTop();
		loaderPage();
		parallax();
	});


}());