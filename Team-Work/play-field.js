
var ctx, cW, cH;
var imagesArray = addImages();
var level = 0, squareSize = Obj.size, keyPressed = '';
var fieldMatrix, player, boxes,targets, fieldW, fieldH, renderCounter, animateInterval;

function initCanvas() {
    ctx = document.getElementById("canvas").getContext("2d");
    cW = ctx.canvas.width, cH = ctx.canvas.height;

    loadNextLevel();

    function animate() {
        ctx.save();
        ctx.clearRect(0,0,cW,cH);

//        drawField();
        drawWallsAndFloors();
        targets.drawObjects();
        boxes.drawObjects();
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
       movesPrint();

   });
}
window.addEventListener('load', function (event) {
    initCanvas();

});
