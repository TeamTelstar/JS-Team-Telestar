/**
 * Created by PC on 28.7.2014 г..
 */
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
            switch (fieldMatrix[row][col]) {
                case 0: ctx.drawImage(floorImage, col*100, row*100,98,98); break;
                case 1: ctx.drawImage(bricksImage, col*100, row*100,98,98); break;
                case 2: ctx.drawImage(boxImage, col*100, row*100,98, 98); break;
            }
        }
    }
}

function box (matrix) {
    this.x = getX(matrix);
    this.y = getY(matrix);
    this.w = 98;
    this.h = 98;

    function getX (matrix) {
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] == 2) {
                    return row;
                }
            }
        }
    }

    function getY (matrix) {
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] == 2) {
                    return col;
                }
            }
        }
    }
}

function Player(x,y) {
    this.x = x;
    this.y = y;
    this.w = 98;
    this.h = 98;
    fieldMatrix[this.y][this.x] = 3;
    ctx.fillStyle = "yellow";



    this.draw = function () {
        if (keyPressed == 'left') {
            ctx.drawImage(playerImage,this.x*100+renderCounter,this.y*100,this.w,this.h);
            renderCounter -=2;
            if (renderCounter == 0) {
                keyPressed = '';
                renderCounter = 100;
            }
        } else {
            ctx.drawImage(playerImage,this.x*100,this.y*100,this.w,this.h);
        }
    };
}

function updatePlayerPosition(x,y) {
    fieldMatrix[y][x] = 3;
}

function updateBoxPosition(x,y) {
    fieldMatrix[y][x] = 2;
}
function clearPlayerPosition(x,y) {
    fieldMatrix[y][x] = 0;
}
