$(document).ready(function(){
var number = Math.ceil(Math.random() * 6);
if (this.turnScore === 1) {

}

function Player (){
  this.turnScore = 0;
  this.totalScore = 0;
};


var player1 = new Player();
var player2 = new Player();
var players = [player1, player2];
$("#roll").click(function(){
  var number = Math.ceil(Math.random() * 6);
  console.log(number);
  player1.turnScore += number;
  var result = $("#rollResult").text(number);

});



$("#hold").click(function(){
   player1.calculateTotal();
   this.totalScore = this.turnScore + this.totalScore;
  var result2 = $("#playerOneResult").text(player1.totalScore);

console.log(player1);
});

Player.prototype.calculateTotal = function() {
 this.totalScore = this.turnScore + this.totalScore;
}

Player.prototype.calculateScore = function(randomNumber){
 this.turnScore = randomNumber;
 return this.turnScore ;

};

});
