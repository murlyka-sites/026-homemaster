$(document).ready(function() {
	$("#clientslider").slick({
		slidesToShow: 6,
		autoplay: true,
		autoplaySpeed: 7000,
		responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 680,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 530,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$("#reviewsslider").slick({
		autoplay: true,
		autoplaySpeed: 7000
	});

	$(".prices__item-title").gradientText({
		colors: ['#52e0e0', '#79e094']
	})

	$(".fancy").fancybox({
		padding: 0
	});

	$(".marks__item-inner").click(function() {
		$.fancybox('#master', {padding: 0})
	});

	$(".input--phone").mask("+7 (999) 999-99-99");

	$('#fcall').ajaxForm({
		url: "mail.php",

		beforeSubmit: function(data, $form) {
			var $name = $form.find('.input--name'),
				$phone = $form.find('.input--phone'),
				status = true;

			/*
			if($name.val().length < 2) {
				$name.parent().addClass("has-error");
				status = false;
			} else {
				$name.parent().removeClass("has-error");
			}
			*/

			if($phone.val().length < 2) {
				$phone.parent().addClass("has-error");
				status = false;
			} else {
				$phone.parent().removeClass("has-error");
			}

			if(!status) {
				return false;
			}
		},

		success: function(responseText, statusText, xhr, $form) {
			$.fancybox.close();
			$form.trigger('reset');
			$.fancybox("#success", {padding: 0});
			yaCounter44570303.reachGoal('call');
		}
	});

	$('#fmaster').ajaxForm({
		url: "mail.php",

		beforeSubmit: function(data, $form) {
			var $name = $form.find('.input--name'),
				$phone = $form.find('.input--phone'),
				status = true;
			console.log($name.val().length);

			/*
			if($name.val().length < 2) {
				$name.parent().addClass("has-error");
				status = false;
			} else {
				$name.parent().removeClass("has-error");
			}
			*/

			if($phone.val().length < 2) {
				$phone.parent().addClass("has-error");
				status = false;
			} else {
				$phone.parent().removeClass("has-error");
			}

			if(!status) {
				return false;
			}
		},

		success: function(responseText, statusText, xhr, $form) {
			$.fancybox.close();
			$form.trigger('reset');
			$.fancybox("#success", {padding: 0});
			yaCounter44570303.reachGoal('master');
		}
	});

});

if(location.hash == '#wow') {
	$(window).on('load', function() {
		new WOW().init();
	});
}
