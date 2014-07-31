var moves = {
    boxMoves: 0 ,
    playerMoves: 0,
    boxMoved:function(){this.boxMoves++},
    playerMoved:function(){this.playerMoves++},
    getBoxMoves:function(){return this.boxMoves},
    getPlayerMoves:function(){return this.playerMoves}
}
var score;
function movesPrint(){
    score= document.querySelector('#scoreBord');
    score.innerHTML = "Box pushed:"+" "+ moves.getBoxMoves() +" "+ "times"+" " + "Player moved"+" " + moves.getPlayerMoves()+" "+ "times"  ;

}



