$(document).ready(function(){
var number = Math.ceil(Math.random() * 6);

function Player (){
  this.turnScore = 0;
  this.totalScore = 0;
};

var player1 = new Player();
var player2 = new Player();

$("#roll").click(function(){
  var number = Math.ceil(Math.random() * 6);
  console.log(number);
  player1.turnScore += number;
  var result = $("#rollResult").text(number);
  // var result2 = $("#result2").text(number);
  // player1.calculateScore(number);
  // console.log(player1)
});



$("#hold").click(function(){
player1.calculateTotal();
console.log(player1);
});

Player.prototype.calculateTotal = function() {
 this.totalScore = this.turnScore + this.totalScore;
}
//
// var Neha = new Player (turnScore, totalScore);
// console.log(Neha);
//

Player.prototype.calculateScore = function(randomNumber){
 this.turnScore = randomNumber;
 return this.turnScore ;

};

});
