$(document).ready(function(){
var number = Math.ceil(Math.random() * 6);


function Player (){
  this.turnScore = 0;
  this.totalScore = 0;
  this.player = [player1, player2];
};


var player1 = new Player();
var player2 = new Player();
var players = [player1, player2];



$("#p1roll").click(function(event){
  event.preventDefault();
  var number = Math.ceil(Math.random() * 6);
  console.log(number);
  player1.turnScore += number;
  var result = $("#rollResult").text(number);

});

$("#p1hold").click(function(event){
  event.preventDefault();
   player1.calculateTotal();
    var resultP1 = $("#playerOneResult").text(player1.totalScore);
  });

  $("#p2roll").click(function(){
    var number1 = Math.ceil(Math.random() * 6);
    console.log(number);
    player2.turnScore += number;
    var result = $("#rollResult").text(number1);

  });

  $("#p2hold").click(function(event){
    event.preventDefault();
     player2.calculateTotal();
      var resultP1 = $("#playerTwoResult").text(player2.totalScore);
    });


Player.prototype.calculateTotal = function() {
 this.totalScore = this.turnScore + this.totalScore;
}





// Player.prototype.calculateScore = function(randomNumber){
//  this.turnScore = randomNumber;
//  return this.turnScore ;
//
// };
 // $("#player1").click(function(event){
 //   event.preventDefault();
 //    $("#player2div").hide();
 //    $("#player1div").show();
 // });
 // $("#player2").click(function(event){
 //   event.preventDefault();
 //    $("#player1div").hide();
 //    $("#player2div").show();
 // });

});
