
function createIMG() {
	var leftside=document.getElementById('leftside')
	for (var i = 0; i < 6; i++) {
		var mininIMG=document.createElement("img");
		mininIMG.src="minion.png";
		mininIMG.style.top=((Math.floor((Math.random() * 370) + 1)).toString()) + "px";
		mininIMG.style.left= ((Math.floor((Math.random() * 400) + 1)).toString()) + "px";
		leftside.append(mininIMG);

	}
	var rightside=document.getElementById('rightside');
	leftsideIMGs=leftside.cloneNode(true);
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