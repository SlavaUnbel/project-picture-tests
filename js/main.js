( $ => {

	'use strict';

	const cfg = {
		defAnimation: "fadeInUp",
		scrollDuration: 800,
		mailChimpURL: 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'
	},

	$WIN = $(window);

	const doc = document.documentElement;
	doc.setAttribute('data-useragent', navigator.userAgent);

	/* Preloader */
	const ssPreloader = () => {

		$WIN.on('load', () => {
			$('html', 'body').animate({ scrollTop: 0 }, 'normal');
			$('#loader').fadeOut('slow', () => {
				$('#preloader').delay(300).fadeOut('slow');
			});
		});
	}

	/* FitVids */
	const ssFitVids = () => {
		$('.fluid-video-wrapper').fitVids();
	}

	/* Masonry */
	const ssMasonryFolio = () => {

		const containerBricks = $('.bricks-wrapper');

		containerBricks.imageLoaded( () => {
			containerBricks.masonry( {
				itemSelector: '.brick',
				resize: true
			});
		});
	}

	/* Light Gallery */
	const ssLightGallery = () => {
		$('#folio-wrap').lightGallery( {
			showThumbByDefault: false,
			hash: false,
			selector: '.item-wrap'
		});
	}

	/* Flexslider */
	const ssFlexSlider = () => {

		$WIN.on('load', () => {
			$('#testimonial-slider').flexSlider( {
				namespace: 'flex-',
				controlsContainer: '',
				animation: 'slide',
				controlNav: true,
		      	directionNav: false,
		      	smoothHeight: true,
		      	slideshowSpeed: 7000,
		      	animationSpeed: 600,
		      	randomize: false,
		      	touch: true,
			});
		});
	}

	/* Carousel */
	const ssOwlCarousel = () => {
		$('.owl-carousel').owlCarousel( {
			nav: false,
			loop: true,
			margin: 50,
			responsiveClass: true,
			responsive: {
				0:{
	            	items:2,
	            	margin: 20
	         	},
	         	400:{
	            	items:3,
	            	margin: 30
	         	},
	         	600:{
	            	items:4,
	            	margin: 40
	         	},
	         	1000:{
	            	items:6            
	         	}
			}
		});
	}

	/* Menu on Scrolldown */
	const ssMenuOnScrolldown = () => {

		const menuTrigger = $('#header-menu-trigger');

		$WIN.on('scroll', () => {

			if ($WIN.scrollTop() > 150) {
				menuTrigger.addClass('opaque');
			}
			else {
				menuTrigger.removeClass('opaque');
			}

		});
	}

	/* OffCanvas Menu */
	const ssOffCanvas = () => {
		const 	menuTrigger = $('#header-menu-trigger'),
				nav = $('#menu-nav-wrap'),
				closeButton = nav.find('.close-button'),
				siteBody = $('body'),
				mainContents = $('section, footer');

				menuTrigger.on('click', (e) => {
					e.preventDefault();
					menuTrigger.toggleClass('is-clicked');
					siteBody.toggleClass('menu-is-open');
				});

				closeButton.on('click', (e) => {
					e.preventDefault();
					menuTrigger.trigger('click');	
				});

				siteBody.on('click', (e) => {		
					if( !$(e.target).is('#menu-nav-wrap, #header-menu-trigger, #header-menu-trigger span') ) {
						menuTrigger.removeClass('is-clicked');
						siteBody.removeClass('menu-is-open');
					}
				});
	}
})(jQuery);