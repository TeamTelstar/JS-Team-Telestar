
// global variables
var ctx, cW, cH, offsetX, offsetY, mouseX, mouseY;
var imagesArray = addImages();
var level = 0, squareSize = Obj.size, keyPressed = '', reset;
var fieldMatrix, player, boxes, targets, fieldW, fieldH, renderCounter, animateInterval;

function initCanvas() {
    ctx = document.getElementById("canvas").getContext("2d");
    cW = ctx.canvas.width, cH = ctx.canvas.height;
    reset = document.getElementById('reset');

    loadNextLevel();
    function animate() {
        ctx.save();
        ctx.clearRect(0,0,cW,cH);

        drawWallsAndFloors();
        targets.drawObjects();
        boxes.drawObjects();
        player.draw();

        ctx.restore();
    }
    animateInterval = setInterval(animate, 15);

    // events
    document.addEventListener('keydown', function(event) {
        chekKeyCode(event);
    });
    ctx.canvas.addEventListener('mousemove',function(event) {
        getMouseCoords(event);
    });

}
window.addEventListener('load', function (event) {
    initCanvas();
});
