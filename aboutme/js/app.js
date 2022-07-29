'use strict';


function clicked() {

	let name = prompt("What is your name?");
	alert("Good day to you " + name);
	document.getElementById("greeting").innerHTML = "Hello " + name + " I have some questions for you!";

	let q1 = prompt("Where am I learning to code?").toUpperCase();
	if (q1 === "Tech Educators") {
		alert("Question one answered correctly.");
	} else {
		alert("Incorrect format. Please enter 'Yes' or 'No'.");
	};

	let q2 = prompt("Where did I got to school?").toUpperCase();
	if (q2 === "Taverham" || q2 === "Taverham High School") {
		alert("Question two answered correctly.");
	} else {
		alert("Incorrect format. Please enter 'Yes' or 'No'.");
	};

	let chocolate = prompt("Do you like chocolate?").toUpperCase();
	if (chocolate === "YES" || chocolate === "NO") {
		alert("Question three answered correctly.");
	} else {
		ale; rt("Incorrect format. Please enter 'Yes' or 'No'.");
	}

	let cheese = prompt("Do you like cheese?").toUpperCase();
	if (cheese === "YES" || cheese === "NO") {
		alert("Question four answered correctly.");
	} else {
		alert("Incorrect format. Please enter 'Yes' or 'No'.");
	};

	let marshmallow = prompt("Do you like marshmallow?").toUpperCase();
	if (marshmallow === "YES" || marshmallow === "NO") {
		alert("Question five answered correctly.");
	} else {
		alert("Incorrect format. Please enter 'Yes' or 'No'.");
	}
}

function clicked2() {
	for (let i = 4; i > 0; i--) {
		console.log(i);
		let q6 = prompt("What year did I finish High School?");
		let q6Answer = parseInt(q6);
		let correct = 2006;
		if (q6Answer === correct) {
			alert("Question Six answered correctly.");
			break;
		} else if (q6 > correct) {
			alert("Too high!");
		} else if (q6 < correct) {
			alert("Too low!");
		}
		if (i === 1) {
			alert("Too many attempts, the correct answer is 2006");
		}
	}
}