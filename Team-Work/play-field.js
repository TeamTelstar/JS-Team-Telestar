/**
 * Created by PC on 28.7.2014 г..
 */
var ctx;
var cW, cH;

var imagesArray = [];
imagesArray.push(createImage("images/floor.png"));
imagesArray.push(createImage("images/bricks.jpg"));
imagesArray.push(createImage("images/box.png"));
imagesArray.push(createImage("images/target.png"));
imagesArray.push(createImage("images/gamer.png"));

var keyPressed = '';
var player = 0;
var targets = [];
var renderCounter = 100;

var fieldMatrix = [
    [1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,2,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1]
];

function initCanvas() {
    ctx = document.getElementById("canvas").getContext("2d");
    cW = ctx.canvas.width, cH = ctx.canvas.height;
    var animateInterval;

    player = new Player(2,2);
    targets.push(new Target(4,2));

    function animate() {
        ctx.save();
        ctx.clearRect(0,0,cW,cH);

        drawField();
        drawObjects();
        targets.drawTargets();
        player.draw();

        ctx.restore();
    }
    
    animateInterval = setInterval(animate, 20);

   document.addEventListener('keydown', function(event) {

       if (event.keyCode == 37) {
           checkNextBlock(player.x-1,player.y,player.x-2,player.y,'left');
       } else if (event.keyCode == 39) {
           checkNextBlock(player.x+1,player.y,player.x+2,player.y,'right');
       } else if (event.keyCode == 38) {
           checkNextBlock(player.x,player.y-1,player.x,player.y-2,'up');
       } else if (event.keyCode == 40) {
           checkNextBlock(player.x,player.y+1,player.x,player.y+2,'down');
       }

   });

}

window.addEventListener('load', function (event) {
    initCanvas();

});
