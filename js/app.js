
$(document).ready(function() {

		//////////
		// NAV BAR
		//////////

	$("#nav-about").click(function() {
		$("html,body").animate({scrollTop: $("#about-body").offset().top}, 600, 'swing');
	});

	$("#nav-skills").click(function() {
		$("html,body").animate({scrollTop: $("#skills-title").offset().top}, 600, 'swing');
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
			$("#html-title").animate({"font-size": "1.3em"}, 'fast');
		}, function() {
			$("#html-title").animate({"font-size": "1em"}, 'fast');
		});

	$("#css").hover(
		function() {
			$("#css-title").animate({"font-size": "1.3em"}, 'fast');
		}, function() {
			$("#css-title").animate({"font-size": "1em"}, 'fast');
		});

	$("#js").hover(
		function() {
			$("#js-title").animate({"font-size": "1.3em"}, 'fast');
		}, function() {
			$("#js-title").animate({"font-size": "1em"}, 'fast');
		});

	$("#jquery").hover(
		function() {
			$("#jquery-title").animate({"font-size": "1.3em"}, 'fast');
		}, function() {
			$("#jquery-title").animate({"font-size": "1em"}, 'fast');
		});

	$("#ruby").hover(
		function() {
			$("#ruby-title").animate({"font-size": "1.3em"}, 'fast');
		}, function() {
			$("#ruby-title").animate({"font-size": "1em"}, 'fast');
		});

	$("#node").hover(
		function() {
			$("#node-title").animate({"font-size": "1.3em"}, 'fast');
		}, function() {
			$("#node-title").animate({"font-size": "1em"}, 'fast');
		});

	$("#angular").hover(
		function() {
			$("#angular-title").animate({"font-size": "1.3em"}, 'fast');
		}, function() {
			$("#angular-title").animate({"font-size": "1em"}, 'fast');
		});

	$("#git").hover(
		function() {
			$("#git-title").animate({"font-size": "1.3em"}, 'fast');
		}, function() {
			$("#git-title").animate({"font-size": "1em"}, 'fast');
		});

		// Functions for tile click and keypress
	function htmlTrigger() {
		var ride = document.createElement('audio');
		ride.setAttribute('src', 'assets/sounds/ride.wav');
		ride.play();
		$("#html-cover").animate({
			borderTopColor: "#d74c0e",
			borderRightColor: "#d74c0e",
			borderBottomColor: "#d74c0e",
			borderLeftColor: "#d74c0e"
		}, {
			duration: 50,
		});
		$("#html-title").animate({color: "#d74c0e"}, {duration: 50});
		$("#html-title").animate({color: "#f2f2f2"}, {duration: 75});
		$("#html-cover").animate({
			borderTopColor: "#f2f2f2",
			borderRightColor: "#f2f2f2",
			borderBottomColor: "#f2f2f2",
			borderLeftColor: "#f2f2f2"
		}, {
			duration: 75,
		});
	}

	function cssTrigger() {
		var crash = document.createElement('audio');
		crash.setAttribute('src', 'assets/sounds/crash.wav');
		crash.play();
		$("#css-cover").animate({
			borderTopColor: "#1e94c8",
			borderRightColor: "#1e94c8",
			borderBottomColor: "#1e94c8",
			borderLeftColor: "#1e94c8"
		}, {
			duration: 50,
		});
		$("#css-title").animate({color: "#1e94c8"}, {duration: 50});
		$("#css-title").animate({color: "#f2f2f2"}, {duration: 75});
		$("#css-cover").animate({
			borderTopColor: "#f2f2f2",
			borderRightColor: "#f2f2f2",
			borderBottomColor: "#f2f2f2",
			borderLeftColor: "#f2f2f2"
		}, {
			duration: 75,
		});
	}

	function jsTrigger() {
		var snare = document.createElement('audio');
		snare.setAttribute('src', 'assets/sounds/snare.wav');
		snare.play();
		$("#js-cover").animate({
			borderTopColor: "#ebcf14",
			borderRightColor: "#ebcf14",
			borderBottomColor: "#ebcf14",
			borderLeftColor: "#ebcf14"
		}, {
			duration: 50,
		});
		$("#js-title").animate({color: "#ebcf14"}, {duration: 50});
		$("#js-title").animate({color: "#f2f2f2"}, {duration: 75});
		$("#js-cover").animate({
			borderTopColor: "#f2f2f2",
			borderRightColor: "#f2f2f2",
			borderBottomColor: "#f2f2f2",
			borderLeftColor: "#f2f2f2"
		}, {
			duration: 75,
		});
	}

	function jqueryTrigger() {
		var kick = document.createElement('audio');
		kick.setAttribute('src', 'assets/sounds/kick.wav');
		kick.play();
		$("#jquery-cover").animate({
			borderTopColor: "#054a7b",
			borderRightColor: "#054a7b",
			borderBottomColor: "#054a7b",
			borderLeftColor: "#054a7b"
		}, {
			duration: 50,
		});
		$("#jquery-title").animate({color: "#054a7b"}, {duration: 50});
		$("#jquery-title").animate({color: "#f2f2f2"}, {duration: 75});
		$("#jquery-cover").animate({
			borderTopColor: "#f2f2f2",
			borderRightColor: "#f2f2f2",
			borderBottomColor: "#f2f2f2",
			borderLeftColor: "#f2f2f2"
		}, {
			duration: 75,
		});
	}

	function rubyTrigger() {
		var hh = document.createElement('audio');
		hh.setAttribute('src', 'assets/sounds/hh.wav');
		hh.play();
		$("#ruby-cover").animate({
			borderTopColor: "#B01000",
			borderRightColor: "#B01000",
			borderBottomColor: "#B01000",
			borderLeftColor: "#B01000"
		}, {
			duration: 50,
		});
		$("#ruby-title").animate({color: "#B01000"}, {duration: 50});
		$("#ruby-title").animate({color: "#f2f2f2"}, {duration: 75});
		$("#ruby-cover").animate({
			borderTopColor: "#f2f2f2",
			borderRightColor: "#f2f2f2",
			borderBottomColor: "#f2f2f2",
			borderLeftColor: "#f2f2f2"
		}, {
			duration: 75,
		});
	}

	function nodeTrigger() {
		var tom1 = document.createElement('audio');
		tom1.setAttribute('src', 'assets/sounds/tom1.wav');
		tom1.play();
		$("#node-cover").animate({
			borderTopColor: "#76ae37",
			borderRightColor: "#76ae37",
			borderBottomColor: "#76ae37",
			borderLeftColor: "#76ae37"
		}, {
			duration: 50,
		});
		$("#node-title").animate({color: "#76ae37"}, {duration: 50});
		$("#node-title").animate({color: "#f2f2f2"}, {duration: 75});
		$("#node-cover").animate({
			borderTopColor: "#f2f2f2",
			borderRightColor: "#f2f2f2",
			borderBottomColor: "#f2f2f2",
			borderLeftColor: "#f2f2f2"
		}, {
			duration: 75,
		});
	}

	function angularTrigger() {
		var tom2 = document.createElement('audio');
		tom2.setAttribute('src', 'assets/sounds/tom2.wav');
		tom2.play();
		$("#angular-cover").animate({
			borderTopColor: "#cd1827",
			borderRightColor: "#cd1827",
			borderBottomColor: "#cd1827",
			borderLeftColor: "#cd1827"
		}, {
			duration: 50,
		});
		$("#angular-title").animate({color: "#cd1827"}, {duration: 50});
		$("#angular-title").animate({color: "#f2f2f2"}, {duration: 75});
		$("#angular-cover").animate({
			borderTopColor: "#f2f2f2",
			borderRightColor: "#f2f2f2",
			borderBottomColor: "#f2f2f2",
			borderLeftColor: "#f2f2f2"
		}, {
			duration: 75,
		});
	}

	function gitTrigger() {
		var tom3 = document.createElement('audio');
		tom3.setAttribute('src', 'assets/sounds/tom3.wav');
		tom3.play();
		$("#git-cover").animate({
			borderTopColor: "#6f4e98",
			borderRightColor: "#6f4e98",
			borderBottomColor: "#6f4e98",
			borderLeftColor: "#6f4e98"
		}, {
			duration: 50,
		});
		$("#git-title").animate({color: "#6f4e98"}, {duration: 50});
		$("#git-title").animate({color: "#f2f2f2"}, {duration: 75});
		$("#git-cover").animate({
			borderTopColor: "#f2f2f2",
			borderRightColor: "#f2f2f2",
			borderBottomColor: "#f2f2f2",
			borderLeftColor: "#f2f2f2"
		}, {
			duration: 75,
		});
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


