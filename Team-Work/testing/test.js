

var pic = new Image();          // out of draw method
pic.src = "Box.PNG";

function initCanvas() {
    var ctx = document.getElementById("canvas").getContext("2d");
    var cW = ctx.canvas.width, cH = ctx.canvas.height;



    function animate() {
        ctx.drawImage(pic,0,0);
    }

    var animateInterval = setInterval(animate,30);

}

window.addEventListener('load', function (event) {
    initCanvas();
});
