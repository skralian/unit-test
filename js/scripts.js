var player1 = new Player();
var player2 = new Player();


function Player (){
  this.turnScore = 0;
  this.totalScore = 0;

};

Player.prototype.calculateTotal = function() {
 this.totalScore = this.turnScore + this.totalScore;
 this.turnScore = 0;
}


$(document).ready(function(){



$("#p1roll").click(function(event){
  console.log("total score:"+ player1.totalScore);
  console.log("turnScore:" + player1.turnScore);
  event.preventDefault();
  var number = Math.ceil(Math.random() * 6);
  console.log("number:" + number);
  if(number === 1) {
    player1.turnScore = 0;
    var result = $("#rollResult").text(number);
  // } if (player1.totalScore >= 100){
  //   alert ("Player 1 wins!");
  } else {
    player1.turnScore += number;
    var result = $("#rollResult").text(number);
  }

});

$("#p1hold").click(function(event){
   player1.calculateTotal();
   console.log("total score:" + player1.totalScore);
    var resultP1 = $("#playerOneResult").text(player1.totalScore);
  });



  $("#p2roll").click(function(){
    var number1 = Math.ceil(Math.random() * 6);
    // player2.turnScore += number1;
    // var result = $("#rollResult").text(number1);
    if(number1 === 1) {
      player2.turnScore = 0;
      var result1 = $("#rollResult").text(number1);
    } if (player2.totalScore >= 100){
      alert ("Player 2 wins!");
    }
    else {
      player2.turnScore += number1;
      var result1 = $("#rollResult").text(number1);
    };
  });

  $("#p2hold").click(function(event){
    event.preventDefault();
     player2.calculateTotal();
      var resultP2 = $("#playerTwoResult").text(player2.totalScore);
    });


});
