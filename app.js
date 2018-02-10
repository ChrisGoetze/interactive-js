var newColor = document.querySelectorAll(".toChange");

changeColor();

function changeColor() {
	var color = prompt("Choose a color for the list.  Blue, Green, or Red");
	color = color.toLowerCase();
	
	if(color === "blue") {
		for (var i = 0; i < newColor.length; i++) {
			newColor[i].style.color = "blue";
		}
		
	} else if (color === "green") {
		for (var i = 0; i < newColor.length; i++) {
			newColor[i].style.color = "green";
		}
	} else if (color === "red") {
		for (var i = 0; i < newColor.length; i++) {
			newColor[i].style.color = "red";
		}
	} else {
		alert("Please choose a valid color");
		changeColor();
	}
}