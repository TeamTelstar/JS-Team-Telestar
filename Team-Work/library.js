function drawField() {
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

function drawObjects() {
    for (var row = 0; row < fieldMatrix.length; row++) {
        for (var col = 0; col < fieldMatrix[row].length; col++) {
            if (fieldMatrix[row][col] == 1) {
                ctx.drawImage(imagesArray[1], col*100, row*100,98,98);
            } else {
                ctx.drawImage(imagesArray[0], col*100, row*100,98,98);
            }
        }
    }
}

function Player(x,y) {
    this.x = x;
    this.y = y;
    this.w = 98;
    this.h = 98;

    this.draw = function () {
        if (keyPressed != '') {
            switch (keyPressed) {
                case 'left':
                ctx.drawImage(imagesArray[4], this.x * 100 + renderCounter,
                    this.y * 100, this.w, this.h);
                break;
                case 'right':
                ctx.drawImage(imagesArray[4], this.x * 100 - renderCounter,
                    this.y * 100, this.w, this.h);
                break;
                case 'up':
                ctx.drawImage(imagesArray[4], this.x * 100,
                    this.y * 100 + renderCounter, this.w, this.h);
                break;
                case 'down':
                ctx.drawImage(imagesArray[4], this.x * 100,
                    this.y * 100 - renderCounter, this.w, this.h);
                break;
            }
            endBoxAnimation();
        } else {
            ctx.drawImage(imagesArray[4], this.x * 100, this.y * 100, this.w, this.h);
        }
    };

    function endBoxAnimation() {
        renderCounter -= 5;
        if (renderCounter == 0) {
            keyPressed = '';
            renderCounter = 100;
        }
    }
}

function Object(x,y,id,img) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.w = 98;
    this.h = 98;
    this.img = img;
//    var objectType = this.id.substring(0, 3); // box or target

fieldMatrix[this.y][this.x] = 2;

this.draw = function() {
   ctx.drawImage(this.img, this.x * 100, this.y * 100, this.w, this.h);
}
}


function checkNextBlock(nextX,nextY,overX,overY,direction) {

    var move = false;
    var currentBox;
    if (fieldMatrix[nextY][nextX] == 0) { // check for empty space
        move = true;
    } else if ((fieldMatrix[nextY][nextX] == 2) &&  // check for box
      (fieldMatrix[overY][overX] != 1)) {
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
        keyPressed = direction;
        switch (direction) {
            case 'left': player.x--; break;
            case 'right': player.x++; break;
            case 'up': player.y--; break;
            case 'down': player.y++; break;
        }
    }
}

var createImage = function(src) {
   var img = new Image();
   img.src = src;
   return img;
};

//test function to be deleted
function printMatrix() {
    for (var row = 0; row < fieldMatrix.length; row++) {
        console.log(fieldMatrix[row].join("-"));
    }
}

function gameOver (boxes, targets) {
    var counter = 0;            //counter for matches 

    for (var i = 0; i < boxes.length; i++) {
        for (var j = 0; j < targets.length; j++) {      // nested loop checking if box and target have same coordinates
            if ((targets[j].x === boxes[i].x) && (targets[j].y === boxes[i].y)) {
                counter += 1;                           // if match found counter++
            }
        }
    }

    if (counter === targets.length) {   //if all boxes matches targets
        return true;                    //return true
    } else {
        return false;
    }
}


// Array.prototype.drawTargets = function () {
//     for (var i = 0; i < targets.length; i++) {
//         ctx.drawImage(imagesArray[3], targets[i].x * 100, targets[i].y * 100, targets[i].w, targets[i].h);
//     }
// };


