var moves = {
    boxMoves: 0 ,
    playerMoves: 0,
    boxMoved:function(){this.boxMoves++},
    playerMoved:function(){this.playerMoves++},
    getBoxMoves:function(){return this.boxMoves},
    getPlayerMoves:function(){return this.playerMoves}
}


function movesPrint(){
    moves.boxMoved();
    var score = document.querySelector('#scoreBord');
    score.innerHTML = "Box pushed: "+ moves.getBoxMoves()  ;
    console.log(score);

}



