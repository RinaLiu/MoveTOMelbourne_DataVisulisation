/* -----------------------------------------------------------------------------

The Abrar_wall - Resume HTML5 Template

File:           JS Core
Version:        1.0
Last change:    00/00/00 
Author:         HTMLmate

-------------------------------------------------------------------------------- */
(function() { 

	"use strict";

	var Abrar_wall = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.preloader();
				this.menuItem();
				this.stickyMenu();
				this.scrollTop();
				this.typeStyle();
				this.quickScroll();
				this.sponserSlide();
				this.serviceSlide();
				this.workTab();
				this.resumeTab();
				this.testimonialSlide();
				this.switchOpen();
				

			},



/* Start Of Preloader
================================================*/
preloader: function (){

	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
},
/* Start Of Preloader
================================================*/



/* Start of menu bar
================================================*/

menuItem: function (){
	$('#menu li:has(ul)').children('ul').hide();
	$('#menu li:has(ul)').find('a').on('click', function() {

		var parent = $(this).parent(),
		submenu = $(this).next('ul');

		if (submenu.is(':visible')) {
			$(this).parent().find('ul').slideUp(300);
		}

		if (submenu.is(':hidden')) {
			parent.siblings().find('ul').slideUp(300);
			parent.find('ul:first').slideDown(300);
		}

		if (parent.find('ul').children().length == 0) {
			return true;
		} else {
			return false;
		}

	});

	$('#menu-burger').on('click', function() {
		if (!$('#abrar-nav').hasClass('open')) {
			toggle_nav(true);
		} else {
			toggle_nav(false);
		}
	});

	$('#nav-off, #menu-overlay').on('click', function() {
		toggle_nav(false);
	});

	function toggle_nav(lolly) {
		if (lolly === true) {
			$('#abrar-nav, #menu-overlay').addClass('nav-on');
		} else {
			$('#abrar-nav, #menu-overlay').removeClass('nav-on');

			setTimeout(function() {
				$('#menu li.has-submenu a').next('.submenu').slideUp(300);
			}, 500);
		}
	}

},
/* End of menu bar
================================================*/

/* - Start of Scroll to top
================================================*/
scrollTop: function (){
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

},

/* - End of Scroll to top
================================================*/

/* - Start of menu bar
================================================*/
stickyMenu: function (){
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 50) {
			jQuery('#site-header, .header-area-section').addClass('menu-bg-overlay')
		} else {
			jQuery('#site-header, .header-area-section').removeClass('menu-bg-overlay')
		}
	})

},

mobileMenu: function (){
	jQuery('.mobile-menu nav').meanmenu();
},

/* - End of menu bar
================================================*/




/* - start of typer
================================================*/
typeStyle: function() {
	var win = jQuery(window),
	foo = jQuery('#typer');
	foo.typer(['Southbank','Docklands', 'Carlton', 'Wherever you want']);           
	win.resize(function(){
		var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));
		
	}).resize();


},
/* - End of typer
================================================*/


/* - Start Quick scroll
================================================*/
quickScroll: function (){

	$(function() {
		$('#menu li a').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top -100
					}, 1000);
					return false;
				}
			}
		});
	});
},

/* - End of Quick Scroll
================================================*/

/* - Start of sponsor slide
================================================*/
sponserSlide: function (){
	$('.admin-sponsor-slider').owlCarousel({
		margin:30,
		responsiveClass:true,
		nav: true,
		navSpeed:500,
		navText:["<i class='icofont icofont-simple-left'></i>","<i class='icofont icofont-simple-right'></i>"],
		responsive:{
			0:{
				items:1,

			},
			400:{
				items:1,

			},
			600:{
				items:2,

			},
			700:{
				items:3,

			},
			1000:{
				items:3,


			}
		},
	})
},
/* - End of sponsor slide
================================================*/


/* - Start of service slide
================================================*/
serviceSlide: function (){
	$('.what-offer-content').owlCarousel({
		margin:30,
		responsiveClass:true,
		nav: true,
		navSpeed:500,
		navText:["<i class='icofont icofont-circled-left'></i>","<i class='icofont icofont-circled-right'></i>"],
		responsive:{
			0:{
				items:1,

			},
			400:{
				items:1,

			},
			600:{
				items:2,

			},
			700:{
				items:2,

			},
			1000:{
				items:3,


			}
		},
	})
},
/* - End of service slide
================================================*/



/* Start Of Isotope
================================================*/
workTab:  function (){

	/* activate jquery isotope */
	var $container = $('#posts').isotope({
		itemSelector : '.item',
		isFitWidth: true
	});

	$container.isotope({ filter: '*' });

    // filter items on button click
    $('#filters').on( 'click', 'button', function() {
    	var filterValue = $(this).attr('data-filter');
    	$container.isotope({ filter: filterValue });
    });
    $('.tab-button').on("click", function() {

    //console.log("Clicked");
    $('.tab-button.active').removeClass('active');
    $(this).addClass('active');
});
    // var $grid = $('#posts').isotope({
    // 	itemSelector: '.item',
    // 	percentPosition: true,
    // });

},
/* End Of Isotope
================================================*/



/* Start of resume tab
================================================*/

resumeTab: function (){
	$(".tab_content").hide();
	$(".tab_content:first").show();

	/* if in tab mode */
	$("ul.tabs li").on('click', function() {

		$(".tab_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();		

		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");

		$(".tab_drawer_heading").removeClass("d_active");
		$(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

	});
	$('ul.tabs li').last().addClass("tab_last");
},

/* End of paralax
================================================*/


/* - Start of service slide
================================================*/
testimonialSlide: function (){
	$('.testimonial-slide').owlCarousel({
		margin:30,
		responsiveClass:true,
		nav: true,
		navSpeed:500,
		navText:["<i class='icofont icofont-circled-left'></i>","<i class='icofont icofont-circled-right'></i>"],
		responsive:{
			0:{
				items:1,

			},
			400:{
				items:1,

			},
			600:{
				items:1,

			},
			700:{
				items:1,

			},
			1000:{
				items:1,


			}
		},
	})
},
/* - End of service slide
================================================*/

/* - Start of service slide
================================================*/
portfolioSlide: function (){
	$('.portfolio-single-slide').owlCarousel({
		items: 1,
		lazyLoad: !0,
		autoplay: !0,
		animateIn: 'zoomIn',
		animateOut: 'slideOutDown',
		navText:["<i class='icofont icofont-circled-left'></i>","<i class='icofont icofont-circled-right'></i>"],
	})
},
/* - End of service slide
================================================*/




/* - Start Switch open
================================================*/
switchOpen: function (){
	$('.color-switcher .open').on("click", function() {
		$('.color-switcher').toggleClass("open-switcher");
	});
},

/* - Start Switch open
================================================*/


}
}
$(document).ready(function (){
	Abrar_wall.init();
});

})();