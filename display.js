console.log("awimbawe")

function clickHome() {
	document.getElementById("home").style.display = "flex";
	document.getElementById("portfolio").style.display = "none";
	document.getElementById("about").style.display = "none";
	
	document.getElementById("portfolioHead").style.display = "none";
	document.getElementById("aboutHead").style.display = "none";
}

function clickPortfolio() {
	document.getElementById("home").style.display = "none";
	document.getElementById("portfolio").style.display = "flex";
	document.getElementById("about").style.display = "none";

	document.getElementById("portfolioHead").style.display = "flex";
	document.getElementById("aboutHead").style.display = "none";
}

function clickAbout() {
	document.getElementById("home").style.display = "none";
	document.getElementById("portfolio").style.display = "none";
	document.getElementById("about").style.display = "flex";

	document.getElementById("portfolioHead").style.display = "none";
	document.getElementById("aboutHead").style.display = "flex";
}
