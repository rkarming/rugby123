function fNameValidation() {
	var fName = document.getElementById("firstname").value;
	if (fName == "" || fName == " ") {
		document.getElementById("firstname").style.border = "3px solid pink";
		document.getElementById("fNameError").innerHTML = "Please enter your first name.";
	} else {
		document.getElementById("firstname").style.border = "3px solid green";
		document.getElementById("fNameError").innerHTML = "";
		localStorage.setItem("firstname", contactForm.firstname.value);	
	}
}

function lNameValidation() {
	var lName = document.getElementById("lastname").value;
	if (lName == "" || lName == " ") {
		document.getElementById("lastname").style.border = "3px solid pink";
		document.getElementById("lNameError").innerHTML = "Please enter your last name.";
	} else {
		document.getElementById("lastname").style.border = "3px solid green";
		document.getElementById("lNameError").innerHTML = "";
		localStorage.setItem("lastname", contactForm.lastname.value);
	}
}

function emailValidation() {
	validEmail = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	var email = document.getElementById("email").value;
	if (validEmail.test(email)) {
		document.getElementById("email").style.border = "3px solid green";
		document.getElementById("emailError").innerHTML = "";
		localStorage.setItem("email", contactForm.email.value);
	} else if (email == "" || email == " ") {
		document.getElementById("email").style.border = "3px solid pink";
		document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
	} else {
		document.getElementById("email").style.border = "3px solid pink";
		document.getElementById("emailError").innerHTML = "Please enter a valid email address.";	
	}
}

function phoneVerification () {
	validPhone = /^\d{10}$/;
	var phone = document.getElementById("phone").value;
	if (validPhone.test(phone)) {
		document.getElementById("phone").style.border = "3px solid green";
		document.getElementById("phoneError").innerHTML = "";
		localStorage.setItem("phone", contactForm.phone.value);
	} else {
		document.getElementById("phone").style.border = "3px solid pink";
		document.getElementById("phoneError").innerHTML = "Please enter a valid phone number.";	
	}
}

function messageValidation() {
	var message = document.getElementById("message").value;
	if (message == "" || message == " ") {
		document.getElementById("message").style.border = "3px solid pink";
		document.getElementById("messageError").innerHTML = "Please describe the reason why you are contacting us.";
	} else {
		document.getElementById("message").style.border = "3px solid green";
		document.getElementById("messageError").innerHTML = "";	
	}
}

function submitForm() {
	var at = document.getElementById("acceptterms").checked;
	if (at != true) {
		document.getElementById("accepttermsError").innerHTML = "This field is required.";
		alert("Please read and agree to the terms listed in Rugby123's Privacy Policy.");
		return false;
	} else {
		alert("Thank you! Your form was submitted.");
		return true;
	}
}