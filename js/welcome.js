function customGreeting() {
	var today = new Date();
	var hourNow = today.getHours();
	var greeting;
	var firstName = localStorage.getItem("firstname");
	var lastName = localStorage.getItem("lastname");
	var personName = firstName + " " + lastName;

	if (hourNow >= 18) {
		greeting = "Good evening";
	} else if (hourNow >= 12) {
		greeting = "Good afternoon";
	} else {
		greeting = "Good morning";
	}

	if (personName != "null null") {
		document.getElementById("welcome").innerHTML = greeting + ", " + personName + "!";
	} else {
		document.getElementById("welcome").innerHTML = greeting + "!";
	}
}