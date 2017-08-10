var numberOfFaces = 4;

function createIMG() {
    var leftside = document.getElementById('leftside');
    for (var i = 0; i < numberOfFaces; i++) {
        createmin(leftside);
    }
    var rightside = document.getElementById('rightside');
    leftsideIMGs = leftside.cloneNode(true);
    leftsideIMGs.removeChild(leftsideIMGs.lastChild);
    rightside.append(leftsideIMGs);
    leftside.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        numberOfFaces += 3;
        createIMG();

    }
     // body...
}
function createmin(leftside) {
    var leftside = leftside;
    var img = document.createElement("img");
    img.src = "minion.png"
    img.style.top = ((Math.floor((Math.random() * 400) + 1)).toString()) + "px";
    img.style.left = ((Math.floor((Math.random() * 400) + 1)).toString()) + "px";
    leftside.append(img);

    // body...
}


