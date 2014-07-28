/**
 * Created by PC on 28.7.2014 г..
 */

function initCanvas() {
    var ctx = document.getElementById("canvas").getContext("2d");
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    ctx.strokeStyle = "black";

    function renderField() {
        for (var i = 0; i < cH/50; i++) {
            ctx.beginPath();
            ctx.moveTo(100*i,0);
            ctx.lineTo(100*i,cH);
            ctx.moveTo(0,100*i);
            ctx.lineTo(cW,100*i);
            ctx.stroke();
            ctx.closePath();
        }
    }

    function Player(x,y) {
        this.x = x;
        this.y = y;
        this.w = 98;
        this.h = 98;
        ctx.fillStyle = "yellow";
        this.render = function () {
        ctx.fillRect(this.x*100,this.y*100,this.w,this.h);
        }
    }

    var box = new Player(5,0);
    function animate() {
        ctx.save();
        ctx.clearRect(0,0,cW,cH);

        renderField();
        box.render();

        ctx.restore();
    }

    var animateInterval = setInterval(animate, 30);

   document.addEventListener('keydown', function(event) {
        var keyPressed = String.fromCharCode(event.keyCode);
//        alert(keyPressed + " | " + event.keyCode)
       if (event.keyCode == 37) { // left button pressed
           if (box.x > 0) {
               box.x--;
           }
       } else if (event.keyCode == 39) { // right button pressed
           if (box.x * 100 < cW-100) {
               box.x++;
           }
       } else if (event.keyCode == 38) { // up button pressed
           if (box.y > 0) {
               box.y--;
           }
       } else if (event.keyCode == 40) { // down button pressed
           if (box.y * 100 < cH - 100) {
               box.y++;
           }
       }
    })

}

window.addEventListener('load', function (event) {
    initCanvas();
});
