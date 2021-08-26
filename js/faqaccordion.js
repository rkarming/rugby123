/* JavaScript to expand and collapse FAQ accordion panels */
window.onload = function() {
	var faqacc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < faqacc.length; i++) {
	  faqacc[i].onclick = function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		 if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
	  }
	}
}