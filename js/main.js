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
	};
	
})(jQuery);