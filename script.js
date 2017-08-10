
function createIMG() {
	var leftside=document.getElementById('leftside')
	for (var i = 0; i < 6; i++) {
		createmin();
	}
	var rightside=document.getElementById('rightside');
	leftsideIMGs=leftside.cloneNode(true);
	leftsideIMGs.removeChild(leftsideIMGs.lastChild);
	rightside.append(leftsideIMGs);
	// body...
}

function createmin() {
	var leftside=document.getElementById('leftside')
	var img= document.createElement("img");
	img.src="minion.png"
	img.style.top=((Math.floor((Math.random() * 400) + 1)).toString()) + "px";
	img.style.left= ((Math.floor((Math.random() * 400) + 1)).toString()) + "px";
	leftside.append(img);

	// body...
}