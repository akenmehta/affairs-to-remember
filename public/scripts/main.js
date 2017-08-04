'use strict';

var app = {};
var doc = new jsPDF();

// app.printDocument = function() {
// 	doc.setFont('Open Sans');
// 	doc.text('Will - Property & Estate Information', 10, 20);
// 	doc.text('Legal Name: '+ app.legalName, 10, 30);
// 	doc.autoPrint();
// 	doc.save('autoprint.pdf');
// }
app.saveProperty = function () {
	$('.save-property').click(function (e) {
		e.preventDefault();
		app.makePropertyDocument();
	});
};

app.makePropertyDocument = function () {
	doc.setFont('Open Sans');
	doc.setFontSize(13);
	doc.setLineWidth(0.1);
	doc.line(20, 30, 190, 30); // horizontal line
	doc.line(20, 38, 190, 38);
	doc.line(20, 46, 190, 46);
	doc.line(20, 102, 190, 102);
	doc.line(20, 110, 190, 110);

	doc.line(20, 30, 20, 110); // vertical line
	doc.line(75, 30, 75, 110);
	doc.line(190, 30, 190, 110);

	doc.text('Power of Attorney: Property', 20, 27);
	doc.text('Legal Name:', 22, 36);
	doc.text(app.legalName, 77, 36);
	doc.text('Other Name:', 22, 44);
	doc.text(app.otherName, 77, 44);
	doc.text('Are there any restrictions \nof the Power of Attorney?', 22, 52);
	doc.text(app.propertyRestriction, 77, 52);
	doc.text('Date of Effectiveness:', 22, 108);
	doc.text(app.propertyDate, 77, 108);

	doc.save('Power of Attorney: Property.pdf');
};

app.getPropertyDate = function () {
	app.propertyDate = '';
	$('#property-date').change(function () {
		app.propertyDate = $(this).val();
		console.log($(this).val());
	});
};

app.getPropertyRestriction = function () {
	app.propertyRestriction = '';
	$('#property-restrictions').change(function () {
		app.propertyRestriction = $(this).val();
		console.log($(this).val());
	});
};

app.clickPropertyBtn = function () {
	$('.btn-poa-property').click(function (e) {
		e.preventDefault();
		console.log('clicked');
		$('form.form-05').addClass('invisible');
		$('div.poa-property-complete').removeClass('invisible');
	});
};

app.makeDocument = function () {
	doc.setFont('Open Sans');
	doc.setFontSize(13);
	doc.setLineWidth(0.1);
	doc.line(20, 30, 190, 30); // horizontal line
	doc.line(20, 38, 190, 38);
	doc.line(20, 46, 190, 46);
	doc.line(20, 54, 190, 54);
	doc.line(20, 62, 190, 62);
	doc.line(20, 76, 190, 76);
	doc.line(20, 130, 190, 130);
	doc.line(20, 160, 190, 160);
	doc.line(20, 174, 190, 174);
	doc.line(20, 194, 190, 194);
	doc.line(20, 214, 190, 214);
	doc.line(20, 228, 190, 228);
	doc.line(20, 280, 190, 280);

	doc.line(20, 30, 20, 280); // vertical line
	doc.line(75, 30, 75, 280);
	doc.line(190, 30, 190, 280);

	doc.text('Will: Property & Estate Information', 20, 27);
	doc.text('Legal Name:', 22, 36);
	doc.text(app.legalName, 77, 36);
	doc.text('Other Name:', 22, 44);
	doc.text(app.otherName, 77, 44);
	doc.text('Marital Status:', 22, 52);
	doc.text(app.martialStatus, 77, 52);
	doc.text('Dependants:', 22, 60);
	doc.text(app.dependents, 77, 60);
	doc.text('Name(s) of Estate Trustee:', 22, 68);
	doc.text(app.trusteeName, 77, 68);
	doc.text('What will happen with your \nEstate in the event of your \npassing?', 22, 82);
	doc.text(app.estateDetails, 77, 82);
	doc.text('Full name(s) of your \nchild/children:', 22, 136);
	doc.text(app.dependentName, 77, 136);
	doc.text('Guardian of any minor \nchildren', 22, 166);
	doc.text(app.guardianName, 77, 166);
	doc.text('Do you want a child who \nis not yet 18 to receive \nhis/her bequest at 18?', 22, 180);
	doc.text(app.bequestMinor, 77, 180);
	doc.text('If no, at what age \nshould he/she receive their \nbequest?', 22, 200);
	doc.text(app.bequestAge, 77, 200);
	doc.text('Do you wish to stagger the \npayments?', 22, 220);
	doc.text(app.stagger, 77, 220);
	doc.text('If yes, indicate your wishes \nfor staggering the bequest \nto the child/children', 22, 234);
	doc.text(app.staggerBequest, 77, 234);

	doc.addPage();
	doc.line(20, 25, 190, 25); //horizontal lines
	doc.line(20, 70, 190, 70);
	doc.line(20, 110, 190, 110);
	doc.line(20, 150, 190, 150);

	doc.line(20, 25, 20, 150); // vertical line
	doc.line(75, 25, 75, 150);
	doc.line(190, 25, 190, 150);

	doc.text('Are there specific wishes \nthat you have for your \npossessions?', 22, 31);
	doc.text(app.wishes, 77, 31);
	doc.text('Do you wish to make \nany charitable donations?', 22, 76);
	doc.text(app.donations, 77, 76);
	doc.text('Do you wish to include \nany burial or cremation \ninstructions?', 22, 116);
	doc.text(app.finalWishes, 77, 116);
	doc.save('Will: Property and Estate.pdf');
};

app.saveWill = function () {
	$('.save-will').click(function (e) {
		e.preventDefault();
		app.makeDocument();
	});
};

app.disclaimer = function () {
	$('.is-checked').click(function () {
		if ($(this).prop('checked')) {
			$('button').removeClass('btn-default');
			$('button').addClass('btn-primary');
			app.saveWill();
		} else {
			$('button').removeClass('btn-primary');
			$('button').addClass('btn-default');
		}
	});
};

app.clickBtn04 = function () {
	$('.btn-04').click(function (e) {
		e.preventDefault();
		$('form.form-04').addClass('invisible');
		$('div.will-complete').removeClass('invisible');
		$('div.progress-bar').text('100%').css('width', '100%');
	});
};

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
	app.finalWishes = '';
	$('#final-wishes').change(function () {
		app.finalWishes = $(this).val();
		console.log(app.FinalWishes);
	});
};

app.getDonations = function () {
	app.donations = '';
	$('#donations').change(function () {
		app.donations = $(this).val();
		console.log(app.donations);
	});
};

app.getWishes = function () {
	app.wishes = '';
	$('#wishes').change(function () {
		app.wishes = $(this).val();
		console.log(app.wishes);
	});
};

app.getStaggerBequest = function () {
	app.staggerBequest = '';
	$('#stagger-bequest').change(function () {
		app.staggerBequest = $(this).val();
		console.log(app.staggerBequest);
	});
};

app.getStagger = function () {
	app.stagger = '';
	$('#stagger').change(function () {
		app.stagger = $(this).find('option:selected').val();
		if (app.stagger === 'No') {
			app.staggerBequest = 'NA';
		}
		console.log(app.stagger);
	});
};

app.getBequestAge = function () {
	app.bequestAge = '';
	$('#bequest-age').change(function () {
		app.bequestAge = $(this).val();
		console.log(app.bequestAge);
	});
};

app.getBequestMinor = function () {
	app.bequestMinor = '';
	$('#bequest-minor').change(function () {
		app.bequestMinor = $(this).find('option:selected').val();
		if (app.bequestMinor === 'Yes') {
			app.bequestAge = 'NA';
		}
		console.log(app.bequestMinor, app.bequestAge);
	});
};

app.getGuardianName = function () {
	app.guardianName = '';
	$('#guardian-name').change(function () {
		app.guardianName = $(this).val();
		console.log(app.guardianName);
	});
};

app.getDependentName = function () {
	app.dependentName = '';
	$('#dependent-name').change(function () {
		app.dependentName = $(this).val();
		console.log(app.dependentName);
	});
};

app.getEstateDetails = function () {
	app.estateDetails = '';
	$('#estate-details').change(function () {
		app.estateDetails = $(this).val();
		console.log(app.estateDetails);
	});
};

app.getTrusteeName = function () {
	app.trusteeName = '';
	$('#estate-trustee').change(function () {
		app.trusteeName = $(this).val();
		console.log(app.trusteeName);
	});
};

app.getOtherName = function () {
	app.otherName = '';
	$('#otherName').change(function () {
		app.otherName = $(this).val();
		console.log(app.otherName);
	});
};

app.getLegalName = function () {
	app.legalName = '';
	$('#legalName').change(function () {
		app.legalName = $(this).val();
		console.log(app.legalName);
	});
};

app.getDependents = function () {
	app.dependents = '';
	$('.dependents').change(function () {
		app.dependents = $(this).find('option:selected').val();
		console.log(app.dependents);
	});
};

app.getMaritalStatus = function () {
	app.martialStatus = '';
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
	app.clickBtn04();
	app.disclaimer();
	app.clickPropertyBtn();
	app.getPropertyRestriction();
	app.getPropertyDate();
	app.saveProperty();
};

$(function () {
	app.init();
});