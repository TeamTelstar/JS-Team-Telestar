//function MainClass(x,y,id) {
//    this.id = id;
//    this.x = x;
//    this.y = y;
//
//
//}
//MainClass.prototype.staticProperty = 100;
//MainClass.changeSize = function(size) {
//    MainClass.prototype.staticProperty = size;
//};
//function Box(x,y,id,img) {
//    MainClass.call(this,x,y,id,img);
//    this.getInfo = function() {
//        console.log('function is overriden');
//    }
//}
//
//Box.prototype = Object.create(MainClass.prototype);
//Box.prototype.constructor = Box;
//
//Box.prototype.getInfo = function() {
//    console.log(this.id);
//};
//
//var box = new Box(2,2);
//console.log(box.staticProperty);
//MainClass.changeSize(20);
//console.log(box.staticProperty);

function initCanvas() {
    var ctx = document.getElementById("canvas").getContext("2d");
    var cW = ctx.canvas.width, cH = ctx.canvas.height;

    ctx.fillStyle = 'blue';
    ctx.fillRect(0,0,cW, cH);
    ctx.fillStyle = 'red';
    ctx.fillRect(50,50,100, 100);
    ctx.canvas.addEventListener('mousemove', function(event) {
        var mouseX = event.clientX - ctx.canvas.offsetLeft;
        var mouseY = event.clientY - ctx.canvas.offsetTop;
        var status = document.getElementById('mouse');
        status.innerHTML = mouseX + " | " + mouseY;

    });
}

window.addEventListener('load', function (event) {
    initCanvas();
});