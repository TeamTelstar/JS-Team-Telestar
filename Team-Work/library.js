
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
            ctx.drawImage(imagesArray[fieldMatrix[row][col]], col*100, row*100,98,98);
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
                    ctx.drawImage(imagesArray[4], this.x * 100 + renderCounter, this.y * 100, this.w, this.h);
                    break;
                case 'right':
                    ctx.drawImage(imagesArray[4], this.x * 100 - renderCounter, this.y * 100, this.w, this.h);
                    break;
                case 'up':
                    ctx.drawImage(imagesArray[4], this.x * 100, this.y * 100 + renderCounter, this.w, this.h);
                    break;
                case 'down':
                    ctx.drawImage(imagesArray[4], this.x * 100, this.y * 100 - renderCounter, this.w, this.h);
                    break;
            }
            endBoxAnimation();
        } else {
            ctx.drawImage(imagesArray[4], this.x * 100, this.y * 100, this.w, this.h);
        }
    };
}

 function Target(x,y) {
     this.x = x;
     this.y = y;
     this.w = 98;
     this.h = 98;

 }

function endBoxAnimation() {
    renderCounter -= 5;
    if (renderCounter == 0) {
        keyPressed = '';
        renderCounter = 100;
    }
}

function checkNextBlock(nextX,nextY,overX,overY,direction) {

    var move = false;
    if (fieldMatrix[nextY][nextX] == 0) { // check for empty space
        move = true;
    } else if ((fieldMatrix[nextY][nextX] == 2) && (fieldMatrix[overY][overX] != 1)) { // check for box
        move = true;
        fieldMatrix[nextY][nextX] = 0;
        fieldMatrix[overY][overX] = 2;
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
     var img   = new Image();
     img.src   = src;
     return img;
 };

//test function to be deleted
function printMatrix() {
    for (var row = 0; row < fieldMatrix.length; row++) {
        for (var col = 0; col < fieldMatrix[row].length; col++) {
            console.log(fieldMatrix[row].join("-"));
        }
    }
}

 Array.prototype.drawTargets = function () {
     for (var i = 0; i < targets.length; i++) {
         ctx.drawImage(imagesArray[3], targets[i].x * 100, targets[i].y * 100, targets[i].w, targets[i].h);
     }
 };
