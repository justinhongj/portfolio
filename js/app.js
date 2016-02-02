
$(document).ready(function() {

		//////////
		// NAV BAR
		//////////

	$("#nav-about").click(function() {
		$("html,body").animate({scrollTop: $("#about-body").offset().top}, 600, 'swing');
	});

	$("#nav-skills").click(function() {
		$("html,body").animate({scrollTop: $("#skills-body").offset().top}, 600, 'swing');
	});

	$("#nav-projects").click(function() {
		$("html,body").animate({scrollTop: $("#projects-body").offset().top}, 600, 'swing');
	});

	$("#nav-connect").click(function() {
		$("html,body").animate({scrollTop: $("#connect-body").offset().top}, 600, 'swing');
	});


		////////////////
		// ABOUT BUTTONS
		////////////////

	$(".about-details").hide();
	$(".about-close").hide();
	$("#about-details-placeholder").show();


	$("#about-audio").click(function() {
		$(".about-details").hide();
		$("#about-audio-details").fadeIn(800);
	});

	$("#about-dev").click(function() {
		$(".about-details").hide();
		$("#about-dev-details").fadeIn(800);
	});

	$("#about-musician").click(function() {
		$(".about-details").hide();
		$("#about-musician-details").fadeIn(800);
	});

	$(".about-details-hover").hover(
		function() {
			$(".about-close").fadeIn();
		}, function() {
			$(".about-close").fadeOut();
		});

	$(".about-close").click(function() {
		$(".about-details").hide();
		$("#about-details-placeholder").fadeIn(800);
	});


		/////////
		// SKILLS
		/////////

		// Hover over tiles
	$("#html").hover(
		function() {
			$("#html-title").animate({"font-size": "1em"}, 'fast');
		}, function() {
			$("#html-title").animate({"font-size": "2em"}, 'fast');
		});

	$("#css").hover(
		function() {
			$("#css-title").animate({"font-size": "1em"}, 'fast');
		}, function() {
			$("#css-title").animate({"font-size": "2em"}, 'fast');
		});

	$("#js").hover(
		function() {
			$("#js-title").animate({"font-size": "1em"}, 'fast');
		}, function() {
			$("#js-title").animate({"font-size": "2em"}, 'fast');
		});

	$("#jquery").hover(
		function() {
			$("#jquery-title").animate({"font-size": "1em"}, 'fast');
		}, function() {
			$("#jquery-title").animate({"font-size": "2em"}, 'fast');
		});

	$("#ruby").hover(
		function() {
			$("#ruby-title").animate({"font-size": "1em"}, 'fast');
		}, function() {
			$("#ruby-title").animate({"font-size": "2em"}, 'fast');
		});

	$("#node").hover(
		function() {
			$("#node-title").animate({"font-size": "1em"}, 'fast');
		}, function() {
			$("#node-title").animate({"font-size": "2em"}, 'fast');
		});

	$("#angular").hover(
		function() {
			$("#angular-title").animate({"font-size": "1em"}, 'fast');
		}, function() {
			$("#angular-title").animate({"font-size": "2em"}, 'fast');
		});

	$("#git").hover(
		function() {
			$("#git-title").animate({"font-size": "1em"}, 'fast');
		}, function() {
			$("#git-title").animate({"font-size": "2em"}, 'fast');
		});

		// Sounds
	// var kick = document.createElement('audio');
	// kick.setAttribute('src', 'assets/sounds/kick.wav');

	// var snare = document.createElement('audio');
	// snare.setAttribute('src', 'assets/sounds/snare.wav');

	// var hh = document.createElement('audio');
	// hh.setAttribute('src', 'assets/sounds/hh.wav');

	// var crash = document.createElement('audio');
	// crash.setAttribute('src', 'assets/sounds/crash.wav');

	// var ride = document.createElement('audio');
	// ride.setAttribute('src', 'assets/sounds/ride.wav');

	// var tom1 = document.createElement('audio');
	// tom1.setAttribute('src', 'assets/sounds/tom1.wav');

	// var tom2 = document.createElement('audio');
	// tom2.setAttribute('src', 'assets/sounds/tom2.wav');

	// var tom3 = document.createElement('audio');
	// tom3.setAttribute('src', 'assets/sounds/tom3.wav');

	$.get();

		// Functions for tile click and keypress
	function htmlTrigger() {
		var ride = document.createElement('audio');
		ride.setAttribute('src', 'assets/sounds/ride.wav');
		ride.play();
		$("#html-cover").animate({opacity: "0.5"}, 50);
		$("#html-cover").animate({opacity: "1"}, 75);
	}

	function cssTrigger() {
		var crash = document.createElement('audio');
		crash.setAttribute('src', 'assets/sounds/crash.wav');
		crash.play();
		$("#css-cover").animate({opacity: "0.5"}, 50);
		$("#css-cover").animate({opacity: "1"}, 75);
	}

	function jsTrigger() {
		var snare = document.createElement('audio');
		snare.setAttribute('src', 'assets/sounds/snare.wav');
		snare.play();
		$("#js-cover").animate({opacity: "0.5"}, 50);
		$("#js-cover").animate({opacity: "1"}, 75);
	}

	function jqueryTrigger() {
		var kick = document.createElement('audio');
		kick.setAttribute('src', 'assets/sounds/kick.wav');
		kick.play();
		$("#jquery-cover").animate({opacity: "0.5"}, 50);
		$("#jquery-cover").animate({opacity: "1"}, 75);
	}

	function rubyTrigger() {
		var hh = document.createElement('audio');
		hh.setAttribute('src', 'assets/sounds/hh.wav');
		hh.play();
		$("#ruby-cover").animate({opacity: "0.5"}, 50);
		$("#ruby-cover").animate({opacity: "1"}, 75);
	}

	function nodeTrigger() {
		var tom1 = document.createElement('audio');
		tom1.setAttribute('src', 'assets/sounds/tom1.wav');
		tom1.play();
		$("#node-cover").animate({opacity: "0.5"}, 50);
		$("#node-cover").animate({opacity: "1"}, 75);
	}

	function angularTrigger() {
		var tom2 = document.createElement('audio');
		tom2.setAttribute('src', 'assets/sounds/tom2.wav');
		tom2.play();
		$("#angular-cover").animate({opacity: "0.5"}, 50);
		$("#angular-cover").animate({opacity: "1"}, 75);
	}

	function gitTrigger() {
		var tom3 = document.createElement('audio');
		tom3.setAttribute('src', 'assets/sounds/tom3.wav');
		tom3.play();
		$("#git-cover").animate({opacity: "0.5"}, 50);
		$("#git-cover").animate({opacity: "1"}, 75);
	}

		// Click on tiles
	$("#html").click(function() {
		htmlTrigger();
	});

	$("#css").click(function() {
		cssTrigger();
	});

	$("#js").click(function() {
		jsTrigger();
	});

	$("#jquery").click(function() {
		jqueryTrigger();
	});

	$("#ruby").click(function() {
		rubyTrigger();
	});

	$("#node").click(function() {
		nodeTrigger();
	});

	$("#angular").click(function() {
		angularTrigger();
	});

	$("#git").click(function() {
		gitTrigger();
	});

		// Keypress listener on document
	$(document).keypress(function(e) {
		if (e.which == 97) {
			htmlTrigger();
		} else if (e.which == 115) {
			cssTrigger();
		} else if (e.which == 100) {
			jsTrigger();
		} else if (e.which == 102) {
			jqueryTrigger();
		} else if (e.which == 106) {
			rubyTrigger();
		} else if (e.which == 107) {
			nodeTrigger();
		} else if (e.which == 108) {
			angularTrigger();
		} else if (e.which == 59) {
			gitTrigger();
		}
	});


		//////////////
		// BACK TO TOP
		//////////////

	$("#btt-text").hide();

	$(".back-to-top").click(function() {
		$("body").stop().animate({scrollTop:0}, '700', 'swing');
	});


});


