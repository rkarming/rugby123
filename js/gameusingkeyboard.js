var myGameArea;
var myGamePiece;
var myObstacles = [];
var myscore;

function restartGame() {
document.getElementById("myfilter").style.display = "none";
document.getElementById("restartdiv").style.display = "none";
document.getElementById("resumediv").style.display = "none";
document.getElementById("pausebuttondiv").style.display = "block";
myGameArea.stop();
myGameArea.clear();
myGameArea = {};
myGamePiece = {};
myObstacles = [];
myscore = {};
document.getElementById("canvascontainer").innerHTML = "";
startGame()
}

function startGame() {
    myGameArea = new gamearea();
    myGamePiece = new component(30, 30, "images/favicon.ico", 10, 90, "image");
    myscore = new component("15px", "Consolas", "black", 200, 25, "text");
    myGameArea.start();
}

function gamearea() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 320;
    this.canvas.height = 200;    
    document.getElementById("canvascontainer").appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");
    this.pause = false;
    this.frameNo = 0;
    this.start = function() {
        this.interval = setInterval(updateGameArea, 10);
    window.addEventListener('keydown', function (e) {
    	myGameArea.keys = (myGameArea.keys || []);
        myGameArea.keys[e.keyCode] = true;
    })
    window.addEventListener('keyup', function (e) {
        myGameArea.keys[e.keyCode] = false;
        })
    }
    this.stop = function() {
        clearInterval(this.interval);
        this.pause = true;
    }
    this.clear = function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {

    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, y, min, max, height, gap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
            document.getElementById("myfilter").style.display = "block";
            document.getElementById("restartdiv").style.display = "block";
            document.getElementById("resumediv").style.display = "none";
            document.getElementById("pausebuttondiv").style.display = "none";
            return;
        } 
    }
    if (myGameArea.pause == false) {
        myGameArea.clear();
        myGameArea.frameNo += 1;
        myscore.score +=1;        
        if (myGameArea.frameNo == 1 || everyinterval(160)) {
            x = myGameArea.canvas.width;
            y = myGameArea.canvas.height - 100;
            min = 30;
            max = 100;
            height = Math.floor(Math.random()*(max-min+1)+min);
            min = 40;
            max = 80;
            gap = Math.floor(Math.random()*(max-min+1)+min);
            myObstacles.push(new component(30, height, "pink", x, 0));
            myObstacles.push(new component(30, x - height - gap, "pink", x, height + gap));
        }
        for (i = 0; i < myObstacles.length; i += 1) {
            myObstacles[i].x += -1;
            myObstacles[i].update();
        }
        myscore.text="SECONDS: " + myscore.score;        
        myscore.update();
        if (myGameArea.keys && myGameArea.keys[65]) {myGamePiece.speedX = -1; }
    	if (myGameArea.keys && myGameArea.keys[68]) {myGamePiece.speedX = 1; }
  	  	if (myGameArea.keys && myGameArea.keys[87]) {myGamePiece.speedY = -1; }
 	   	if (myGameArea.keys && myGameArea.keys[83]) {myGamePiece.speedY = 1; }  
        myGamePiece.update();
        myGamePiece.newPos();
    }
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}
startGame();


function pauseGame() {
myGameArea.stop();
document.getElementById("myfilter").style.display = "block";
document.getElementById("restartdiv").style.display = "none";
document.getElementById("resumediv").style.display = "block";
document.getElementById("pausebuttondiv").style.display = "block";
}

function resumeGame() {
document.getElementById("myfilter").style.display = "none";
document.getElementById("restartdiv").style.display = "none";
document.getElementById("resumediv").style.display = "none";
document.getElementById("pausebuttondiv").style.display = "block";
myGameArea.pause = false;
myGameArea.start();
}
