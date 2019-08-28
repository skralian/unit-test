$(document).ready(function(){
// var turnScore;
// var totalScore;
// var result;
// var result2;
// var number;

function Player (){
  this.turnScore = 0;
  this.totalScore = 0;
};

var player1 = new Player();
var player2 = new Player();

$("#roll").click(function(){
  var number = Math.round(Math.random() * 6);
  console.log(number);
  player1.turnScore = number;
  var result = $("#result1").text(number);
  var result2 = $("#result2").text(number);
  player1.calculateScore(number);
  console.log(player1)
});

// 
// var Neha = new Player1 (turnScore, totalScore);
// console.log(Neha);

Player.prototype.calculateScore = function(randomNumber){
 this.turnScore += randomNumber;
 return this.turnScore ;

};

});
