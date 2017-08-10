
function createIMG() {
	var leftside=document.getElementById('leftside')
	for (var i = 0; i < 6; i++) {
		createmin();

	}
	var rightside=document.getElementById('rightside');
	leftsideIMGs=leftside.cloneNode(true);
	rightside.append(leftsideIMGs);
	var lastimg=document.getElementById('rightside')[0];
	lastimg.parentNode.removeChild(lastimg)
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