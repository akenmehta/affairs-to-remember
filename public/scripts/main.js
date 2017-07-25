'use strict';

$(function () {
	smoothScroll();
	selectForm();
});

function smoothScroll() {
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
}

function selectForm() {
	$('ul li').on('click', function (e) {
		e.preventDefault();
		if ($(this).text() === 'Will: Property and Estate') {
			console.log($(this).text());
			$('#will').removeClass('invisible');
		}
	});
}

$('.dependants').on('change', function () {
	console.log($('option').prop('selected', true).val());
});

var doc = new jsPDF();

doc.text('Hello world!', 10, 10);
// doc.save('a4.pdf');