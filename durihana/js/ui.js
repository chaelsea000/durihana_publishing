(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.header-main').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-main');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 200) {
				siteHeader.addClass('show');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('show');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
/*carousel 속성 정리해야함*/
	//Main Slider Carousel
	if ($('.main-slider-carousel').length) { 
		$('.main-slider-carousel').owlCarousel({
			loop:true,
			margin:0,
			stagePadding: 0,
			nav:false,
			dots:false,
			smartSpeed: 500,
			autoplay: 3000,
			items: 1,
			singleItem:true,
			/*loop:true,
			margin:0,
			nav:true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: 5000,
			navText: [ '<span class="fas fa-long-arrow-alt-left"></span> Prev', 'Next <span class="fas fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}*/
		});   		
	}

	// News Carousel
	if ($('.news-carousel').length) { 
		$('.news-carousel').owlCarousel({
			loop:true,
			center:true,
			margin:40,
			nav:false,
			dots:false,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: 3000,
			responsive:{
				0:{
					items:1,
					margin:30
				},
				600:{
					items:1,
					margin:30
				},
				800:{
					items:2,
					margin:30
				},
				1024:{
					items:3,
					margin:30
				},
				1200:{
					items:4
				}
			}
		});   		
	}

	// sns Carousel
	if ($('.sns-carousel').length) { 
		$('.sns-carousel').owlCarousel({
			loop:true,
			center:true,
			margin:40,
			nav:false,
			dots:false,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: 3000,
			responsive:{
				0:{
					items:1,
					margin:30
				},
				600:{
					items:1,
					margin:30
				},
				800:{
					items:2,
					margin:30
				},
				1024:{
					items:3,
					margin:30
				},
				1200:{
					items:5
				}
			}
		});   		
	}
	
	/* NOT USE (need appear.js)
	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	//LightBox / Fancybox (need fancybox.js)
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	*/
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				firstname: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
			
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);