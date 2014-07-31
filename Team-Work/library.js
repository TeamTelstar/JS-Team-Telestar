
function drawWallsAndFloors() {
    for (var row = 0; row < fieldMatrix.length; row++) {
        for (var col = 0; col < fieldMatrix[row].length; col++) {
            if (fieldMatrix[row][col] == 1) {
                ctx.drawImage(imagesArray[1], col*squareSize+offsetX , row*squareSize+offsetY ,squareSize-2,squareSize-2);
            } else if (fieldMatrix[row][col] == 0){
                ctx.drawImage(imagesArray[0], col*squareSize+offsetX , row*squareSize+offsetY ,squareSize-2,squareSize-2);
            }
        }
    }
}

function Obj(x,y,img) {
    this.x = x;
    this.y = y;
    this.img = img;
}
Obj.prototype.size = 0; // static property
Obj.changeSize = function (newSize) { // setter function
    Obj.prototype.size = newSize;
};
// static method shared by all objects of type Obj or any inherited types
Obj.prototype.draw = function() {
    ctx.drawImage(this.img, this.x * squareSize+offsetX , this.y * squareSize+offsetY , squareSize, squareSize);
};

function Box(x,y) {
     Obj.call(this,x,y);  // inehirtance, calling the parents constructor
//     fieldMatrix[this.y][this.x] = 2;
    this.image = imagesArray[2];
}
Box.prototype.draw = function() {  // overrides the Obj.prototype.draw function
    ctx.drawImage(this.image,this.x*squareSize+offsetX ,this.y*squareSize+offsetY ,squareSize,squareSize);
};

function Target(x,y) {
    Obj.call(this,x,y);
    this.image = imagesArray[3];
}
Target.prototype.draw = function() {  // overrides the Obj.prototype.draw function
    ctx.drawImage(this.image,this.x*squareSize+offsetX ,this.y*squareSize+offsetY ,squareSize,squareSize);
};

Array.prototype.drawObjects = function() {
     for (var i = 0; i < this.length; i++) {
         this[i].draw();
     }
 };

function Player(x,y) {
Obj.call(this,x,y);                   // calling the parent constructor
    var playerImage = imagesArray[4]; // private variable
    this.draw = function () {
        if (keyPressed != '') {
            switch (keyPressed) {
                case 'left':
                    ctx.drawImage(playerImage, this.x * squareSize + renderCounter+offsetX ,
                            this.y * squareSize+offsetY , squareSize, squareSize);
                    break;
                break;
                case 'right':
                    ctx.drawImage(playerImage, this.x * squareSize - renderCounter+offsetX ,
                            this.y * squareSize+offsetY , squareSize, squareSize);
                    break;
                case 'up':
                    ctx.drawImage(playerImage, this.x * squareSize+offsetX ,
                            this.y * squareSize + renderCounter+offsetY , squareSize, squareSize);
                     break;
                case 'down':
                     ctx.drawImage(playerImage, this.x * squareSize+offsetX ,
                            this.y * squareSize - renderCounter+offsetY , squareSize,squareSize);
                break;
            }
            endBoxAnimation();
        } else {
            ctx.drawImage(playerImage, this.x * squareSize+offsetX ,
                    this.y * squareSize+offsetY , squareSize, squareSize);
        }
    };

    function endBoxAnimation() {
        renderCounter -= 5;
        if (renderCounter == 0) {
            keyPressed = '';
            renderCounter = squareSize;
            if (isLevelCompleted(targets)) {
                level++;
                alert('level completed');
                loadNextLevel();
            }
        }
    }
}

function checkNextBlock(nextX,nextY,overX,overY,direction) {

    var move = false;
    if (fieldMatrix[nextY][nextX] == 0) { // check for empty space
        move = true;
    } else if ((fieldMatrix[nextY][nextX] == 2) &&  // check for box
             (fieldMatrix[overY][overX] == 0)) {
        move = true;
        for (var i = 0; i < boxes.length; i++) {
            if (boxes[i].x == nextX && boxes[i].y == nextY) {
                boxes[i].x = overX;
                boxes[i].y = overY;
            }
        }
        fieldMatrix[nextY][nextX] = 0;
        fieldMatrix[overY][overX] = 2;

        moves.boxMoved();
    }
    if (move) {
        moves.playerMoved();
        keyPressed = direction;
        switch (direction) {
            case 'left': player.x--; break;
            case 'right': player.x++; break;
            case 'up': player.y--; break;
            case 'down': player.y++; break;
        }
    }
}

//test function to be deleted
function printMatrix() {
    for (var row = 0; row < fieldMatrix.length; row++) {
        console.log(fieldMatrix[row].join("-"));
    }
}

function isLevelCompleted (targets) {
    var counter = 0;            //counter for matches
    for (var i = 0; i < targets.length; i++) {      // nested loop checking if box and target have same coordinates
        var tX = targets[i].x;
        var tY = targets[i].y;
        if (fieldMatrix[tY][tX] == 2) {
            counter++;                           // if match found counter++
        }
    }
    return counter === targets.length;  //return true
}

function loadNextLevel() {
    fieldMatrix = clone(levelObjects[level].matrix);
    squareSize =  clone(levelObjects[level].sqSize);
    player = levelObjects[level].player;
    boxes = levelObjects[level].boxes;
    targets = levelObjects[level].targets;
    fieldW = fieldMatrix[0].length;
    fieldH = fieldMatrix.length;
    offsetX = (cW /2) - ((fieldW * squareSize) /2);
    offsetY = (cH /2) - ((fieldH * squareSize) /2);

    renderCounter = squareSize;
    Obj.changeSize(squareSize);

    // upaditing coordinates
    for (var i = 0; i < boxes.length; i++) {
        fieldMatrix[boxes[i].y][boxes[i].x] = 2;
    }
}

function clone(obj){
    if(obj == null || typeof(obj) != 'object')
        return obj;

    var temp = obj.constructor(); // changed

    for(var key in obj)
        temp[key] = clone(obj[key]);
    return temp;
}


var createImage = function(src) {
    var img = new Image();
    img.src = src;
    return img;
};

var addImages = function() {
    var imgArray = [];
    imgArray.push(createImage("images/floor.png"));
    imgArray.push(createImage("images/bricks.jpg"));
    imgArray.push(createImage("images/box.png"));
    imgArray.push(createImage("images/target.png"));
    imgArray.push(createImage("images/gamer.png"));
    return imgArray;
};





