console.log("hello")

//array containing each star name
const starAmount = [];
//array containing each star properties as objects
const starProperties = [];

//amount of stars
let starNumber = 100;

for(i = 0; i < starNumber; i++) {
	let star = "star" + i;
	starAmount.push(star);

	const starlets = {
		starName: starAmount[i],
		xPosition: Math.floor(Math.random()*100) + "%",
		yPosition: Math.floor(Math.random()*100) + "%",
		animDuration: Math.floor(Math.random()*1000) + 500 + "ms",
		animScale: Math.floor(Math.random()*9) + 2 + "px"
	}
	starProperties.push(starlets);
	console.log(starlets);
	
	const starSpan = document.createElement("span");
	starSpan.setAttribute("id", star)
	document.getElementById("sparkle").appendChild(starSpan);
	document.getElementById(star).style.animationDuration = starlets.animDuration;
	document.getElementById(star).style.height = starlets.animScale;
	document.getElementById(star).style.width = starlets.animScale;
	document.getElementById(star).style.top = starlets.yPosition;
	document.getElementById(star).style.left = starlets.xPosition;
}
