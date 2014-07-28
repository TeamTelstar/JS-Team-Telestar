/**
 * Created by PC on 28.7.2014 г..
 */
var ctx;
var cW, cH;

var boxImage = new Image(),
playerImage = new Image(),
bricksImage = new Image(),
floorImage = new Image();
playerImage.src = "images/gamer.png",
boxImage.src = "images/box.PNG",
bricksImage.src = "images/bricks.jpg",
floorImage.src = "images/floor.PNG";

var keyPressed = '';
var renderCounter = 100;

var fieldMatrix = [
    [1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1],
    [1,0,2,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1]
];

function initCanvas() {
    ctx = document.getElementById("canvas").getContext("2d");
    cW = ctx.canvas.width;
    cH = ctx.canvas.height;
    var animateInterval;

    var gamer = new Player(5,1);
    var boxx = new box(fieldMatrix);

    function animate() {
        ctx.save();
        ctx.clearRect(0,0,cW,cH);

        drawField();
        drawObjects();
        gamer.draw();

        ctx.restore();
    }

    animateInterval = setInterval(animate, 20);

   document.addEventListener('keydown', function(event) {

       clearPlayerPosition(gamer.x,gamer.y);
       if (event.keyCode == 37) { // left button pressed
           if (fieldMatrix[gamer.y][gamer.x-1] == 0) {
               keyPressed = 'left';
               gamer.x--;
           } else if ((fieldMatrix[gamer.y][gamer.x-1] == 2) && (fieldMatrix[gamer.y][gamer.x-2] != 1) ) {
               gamer.x--;
               boxx.x--; 
           } 
       } else if (event.keyCode == 39) { // right button pressed
           if (fieldMatrix[gamer.y][gamer.x+1] == 0) {
               keyPressed = 'right';
               gamer.x++;
           } else if ((fieldMatrix[gamer.y][gamer.x+1] == 2) && (fieldMatrix[gamer.y][gamer.x+2] != 1) ) {
               gamer.x++;
               boxx.x++;
           } 
       } else if (event.keyCode == 38) { // up button pressed
           if (fieldMatrix[gamer.y-1][gamer.x] == 0) {
               gamer.y--;
           }else if ((fieldMatrix[gamer.x][gamer.y-1] == 2) && (fieldMatrix[gamer.x][gamer.y-2] != 1) ) {
               gamer.y--;
               boxx.y--; 
           } 
       } else if (fieldMatrix[gamer.y+1][gamer.x] == 0) { // down button pressed
           if (gamer.y * 100 < cH - 100) {
               gamer.y++;
           } else if ((fieldMatrix[gamer.y+1][gamer.x] == 2) && (fieldMatrix[gamer.y+2][gamer.x] != 1) ) {
               gamer.y++;
               boxx.y++; 
           }            
       }
       updatePlayerPosition(gamer.x,gamer.y);
       updateBoxPosition(boxx.x, boxx.y);
   });

    document.addEventListener('keyup', function(event) {

        if (event.keyCode == 37) { // left button released
                keyPressed = '';
        } else if (event.keyCode == 39) { // right button released
                keyPressed = '';
        }
    });

}

window.addEventListener('load', function (event) {
    initCanvas();

});
