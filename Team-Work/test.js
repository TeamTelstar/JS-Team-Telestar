/**
 * Created by PC on 28.7.2014 г..
 */
/**
 * Created by PC on 28.7.2014 г..
 */

function initCanvas() {
    var ctx = document.getElementById("canvas").getContext("2d");
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var y = 0;
    var x = 0;

    var keyPresed = "";
    var animateCounter = 0;

    function endBoxAnimation() {
        if (animateCounter == 10) {
            keyPresed = '';
            animateCounter=0;
            return true;
        }
    }

    function animate() {
        ctx.save();
        ctx.clearRect(0,0,cW,cH);

        ctx.fillRect(x,y,100,100)
        if (keyPresed == 'down') {
            y += 10;
            animateCounter++;
            endBoxAnimation();
        } else  if (keyPresed == 'up') {
            y -= 10;
            animateCounter++;
            endBoxAnimation();
        }   else  if (keyPresed == 'right') {
            x += 10;
            animateCounter++;
            endBoxAnimation();
        } else  if (keyPresed == 'left') {
            x -= 10;
            animateCounter++;
            endBoxAnimation();
        }
        ctx.restore();
    }

    var animateInterval = setInterval(animate, 30);

    document.addEventListener('keydown', function(event) {
//        alert(keyPressed + " | " + event.keyCode)
        if (event.keyCode == 37) { // left button pressed
            keyPresed = 'left';
        } else if (event.keyCode == 39) { // right button pressed
            keyPresed = 'right';
        } else if (event.keyCode == 38) { // up button pressed
            keyPresed = 'up';
        } else if (event.keyCode == 40) { // down button pressed
            keyPresed = 'down';
        }
    })

}

window.addEventListener('load', function (event) {
    initCanvas();
});
