//Biz Logic.
var totalScore = 0;

function Player1() {
  this.currentRoll = 0;
  this.turnTotal = 0;
};

Player1.prototype.Roll = function(){
  this.currentRoll = Math.floor(Math.random()*6) + 1;
  this.turnTotal = this.turnTotal + this.currentRoll;
}


//UI Logic.

$(document).ready(function(){
  $("#user1-dice").click(function() {
    event.preventDefault();
    var result = new Player1();
    var rollResult = result.Roll();
    console.log(rollResult);
  });

  $("#user1-hold").click(function() {
    event.preventDefault();
  });
});
