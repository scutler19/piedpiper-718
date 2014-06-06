$(document).ready(function() {

	App.controller('home', function (page) {
	  // put stuff here
	});

	App.controller('page2', function (page) {
	  // put stuff here
	  //console.log($(page));
	  $(page).find("#un").text($("#username").val());
	  $(page).find("#pw").text($("#password").val());

	});

	try {
	  App.restore();
	} catch (err) {
	  App.load('home');
	}

});
