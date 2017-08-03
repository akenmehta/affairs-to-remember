'use strict';

var app = {};

app.clickBtn03 = function () {
	$('.btn-03').click(function (e) {
		e.preventDefault();
		$('form.form-03').addClass('invisible');
		$('form.form-04').removeClass('invisible');
		$('div.progress-bar').text('75%').css('width', '75%');
	});
};

app.clickBtn02 = function () {
	$('.btn-02').click(function (e) {
		e.preventDefault();
		$('form.form-02').addClass('invisible');
		$('form.form-03').removeClass('invisible');
		$('div.progress-bar').text('50%').css('width', '50%');
	});
};

app.clickBtn01 = function () {
	$('.btn-01').click(function (e) {
		e.preventDefault();
		$('form.form-01').addClass('invisible');
		$('form.form-02').removeClass('invisible');
		$('div.progress-bar').text('25%').css('width', '25%');
	});
};

app.getFinalWishes = function () {
	$('#final-wishes').change(function () {
		app.FinalWishes = $(this).val();
		console.log(app.FinalWishes);
	});
};

app.getDonations = function () {
	$('#donations').change(function () {
		app.donations = $(this).val();
		console.log(app.donations);
	});
};

app.getWishes = function () {
	$('#wishes').change(function () {
		app.wishes = $(this).val();
		console.log(app.wishes);
	});
};

app.getStaggerBequest = function () {
	$('#stagger-bequest').change(function () {
		app.staggerBequest = $(this).val();
		console.log(app.staggerBequest);
	});
};

app.getStagger = function () {
	$('#stagger').change(function () {
		app.stagger = $(this).find('option:selected').val();
		console.log(app.stagger);
	});
};

app.getBequestAge = function () {
	$('#bequest-age').change(function () {
		app.bequestAge = $(this).val();
		console.log(app.bequestAge);
	});
};

app.getBequestMinor = function () {
	$('#bequest-minor').change(function () {
		app.bequestMinor = $(this).find('option:selected').val();
		console.log(app.bequestMinor);
	});
};

app.getGuardianName = function () {
	$('#guardian-name').change(function () {
		app.guardianName = $(this).val();
		console.log(app.guardianName);
	});
};

app.getDependentName = function () {
	$('#dependent-name').change(function () {
		app.dependentName = $(this).val();
		console.log(app.dependentName);
	});
};

app.getEstateDetails = function () {
	$('#estate-details').change(function () {
		app.estateDetails = $(this).val();
		console.log(app.estateDetails);
	});
};

app.getTrusteeName = function () {
	$('#estate-trustee').change(function () {
		app.trusteeName = $(this).val();
		console.log(app.trusteeName);
	});
};

app.getOtherName = function () {
	$('#otherName').change(function () {
		app.otherName = $(this).val();
		console.log(app.otherName);
	});
};

app.getLegalName = function () {
	$('#legalName').change(function () {
		app.legalName = $(this).val();
		console.log(app.legalName);
	});
};

app.getDependents = function () {
	$('.dependents').change(function () {
		app.dependents = $(this).find('option:selected').val();
		console.log(app.dependents);
	});
};

app.getMaritalStatus = function () {
	$('.marital-status').change(function () {
		app.martialStatus = $(this).find('option:selected').val();
		console.log(app.martialStatus);
	});
};

app.init = function () {
	app.getMaritalStatus();
	app.getDependents();
	app.getLegalName();
	app.getOtherName();
	app.clickBtn01();
	app.clickBtn02();
	app.clickBtn03();
	app.getTrusteeName();
	app.getEstateDetails();
	app.getDependentName();
	app.getGuardianName();
	app.getBequestMinor();
	app.getBequestAge();
	app.getStagger();
	app.getStaggerBequest();
	app.getWishes();
	app.getDonations();
	app.getFinalWishes();
};

$(function () {
	app.init();
});

var doc = new jsPDF();
doc.text('Hello world!', 10, 10);
// doc.save('a4.pdf');