let name = prompt("What is your name?");
alert("Good day to you " + name);
document.getElementById("greeting").innerHTML = "Hello " + name + " I have some questions for you!";

function clicked() {
	
	let iceCream = prompt("Do you like ice cream?").toUpperCase();
  if (iceCream === "YES" || iceCream === "NO") {
		alert("Question one answered correctly.")
		console.log("Question one answered correctly.")
	} else {
		alert("Incorrect format. Please enter 'Yes' or 'No'.");
		console.log("Incorrect Answer for question one.")
	}
	
	let custard =  prompt("Do you like custard?").toUpperCase();
	if (custard === "YES" || custard === "NO") {
		alert("Question two answered correctly.")
		console.log("Question two answered correctly.")
	} else {
		alert("Incorrect format. Please enter 'Yes' or 'No'.");
		console.log("Incorrect Answer for question two.")
	}
	
	let chocolate = prompt("Do you like chocolate?").toUpperCase();
	if (chocolate === "YES" || chocolate === "NO") {
		alert("Question three answered correctly.")
		console.log("Question three answered correctly.")
	} else {
		alert("Incorrect format. Please enter 'Yes' or 'No'.");
		console.log("Incorrect Answer for question three.")
	}
	
	let cheese = prompt("Do you like cheese?").toUpperCase();
	if (cheese === "YES" || cheese === "NO") {
		alert("Question four answered correctly.")
		console.log("Question four answered correctly.")
	} else {
		alert("Incorrect format. Please enter 'Yes' or 'No'.");
		console.log("Incorrect Answer for question four.")
	}
	
	let marshmallow = prompt("Do you like marshmallow?").toUpperCase();
	if (marshmallow === "YES" || marshmallow === "NO") {
		alert("Question five answered correctly.")
		console.log("Question five answered correctly.")
	} else {
		alert("Incorrect format. Please enter 'Yes' or 'No'.");
		console.log("Incorrect Answer for question five.")
	}
  
}