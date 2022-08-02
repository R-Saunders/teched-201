'use strict';


function clicked() {

	let name = prompt("What is your name?");
	alert("Good day to you " + name);
	document.getElementById("greeting").innerHTML = "Hello " + name + " I have some questions for you!";

	let q1 = prompt("Where am I learning to code?").toUpperCase();
	if (q1 === "TECH EDUCATORS") {
		alert("Question one answered correctly.");
	} else {
		alert("Wrong Answer, sorry!");
	};

	let q2 = prompt("Where did I got to school?").toUpperCase();
	if (q2 === "TAVERHAM" || q2 === "TAVERHAM HIGH SCHOOL" || q2 === "TAVERHAM HIGH") {
		alert("Question two answered correctly.");
	} else {
		alert("Wrong Answer, sorry!");
	};

	let q3 = prompt("Where was my first job?").toUpperCase();
	if (q3 === "AVIVA") {
		alert("Question three answered correctly.");
	} else {
		alert("Wrong Answer, sorry!");
	}

	let q4 = prompt("Where did I get my Leadership and People Management qualification?").toUpperCase();
	if (q4 === "WEGROW" || q4 === "WE GROW") {
		alert("Question four answered correctly.");
	} else {
		alert("Wrong Answer, sorry!");
	};

	let q5 = prompt("Do I have any kids?").toUpperCase();
	if (q5 === "YES" || q5 === "NO") {
		alert("Question five answered correctly.");
	} else {
		alert("Wrong Answer, sorry!");
	}
}

function clicked2() {
	for (let i = 4; i > 0; i--) {
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

function clicked3(){
	let q7 = prompt("Name on of my top ten most played games");
	let answers = [
		'Dota2',
		'Sid Meier\'s Civilization VI',
		'Rimworld',
		'Sid Meir\'s Civilization V',
		'Total War: Warhammer',
		'Stellaris',
		'Total War: Warhammer II',
		'ARK: Survival Evolved',
		'The Elder Scrolls V: Skyrim',
		'Valheim',
	]
	for (let i = 6; i > onabort; i--) {
		if (answers.includes(q7)) {
			alert("Spot on, congrats!");
			break;
		} else {
			alert("Incorrect, guess again!");
		} 

		if (i === 1) {
			alert("Too many attempts, you could have picked; Dota2, Sid Meier's Civilization VI, Rimworld, Sid Meir's Civilization V, Total War: Warhammer, Stellaris, Total War: Warhammer II, ARK: Survival Evolved, The Elder Scrolls V: Skyrim, Valheim.");
		}
	}
}