
var ctx;
var cW, cH;

var boxImage = new Image(),
bricksImage = new Image(),
floorImage = new Image();
boxImage.src = "images/box.PNG",
bricksImage.src = "images/bricks.jpg",
floorImage.src = "images/floor.PNG";

var keyPressed = '';
var renderCounter = 100;

var fieldMatrix = [
    [1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1]
];

function initCanvas() {
    ctx = document.getElementById("canvas").getContext("2d");
    cW = ctx.canvas.width, cH = ctx.canvas.height;
    var animateInterval;

    var box = new Player(5,1);

    function animate() {
        ctx.save();
        ctx.clearRect(0,0,cW,cH);

        drawField();
        drawObjects();
        box.draw();

        ctx.restore();
    }

    animateInterval = setInterval(animate, 20);

   document.addEventListener('keydown', function(event) {

       if (event.keyCode == 37) { // left button pressed
           if (fieldMatrix[box.y][box.x-1] == 0) {
               keyPressed = 'left';
               box.x--;
           }
       } else if (event.keyCode == 39) { // right button pressed
           if (fieldMatrix[box.y][box.x+1] == 0) {
               keyPressed = 'right';
               box.x++;
           }
       } else if (event.keyCode == 38) { // up button pressed
           if (fieldMatrix[box.y-1][box.x] == 0) {
               keyPressed = 'up';
               box.y--;
           }
       } else if (fieldMatrix[box.y+1][box.x] == 0) { // down button pressed
           if (box.y * 100 < cH - 100) {
               keyPressed = 'down';
               box.y++;
           }
       }
   });

}

window.addEventListener('load', function (event) {
    initCanvas();

});
