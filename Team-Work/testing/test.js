//function MainClass(x,y,id) {
//    this.id = id;
//    this.x = x;
//    this.y = y;
//    this.w = 98;
//    this.h = 98;
//
//    var dateOfCreating = new Date();
//
//}
//
//
//
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
//var box = new Box(2,2,'box');
//box.getInfo();
//console.log(box);



