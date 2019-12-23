

/*each crystal will have it's own hidden numerical value.
starts of if/else-if/else statements 
    if user has added thoses hidden values number from crystal value = computer generated number, then User Wins (show msg of this). Game resets. Scoreboard of wins 
    stays. 

    if User has added the hidden values to be too high = user loses (show msg of this).  Losses goes up. and this stays on the screen. Game resets with a different computer generated number and a different 
    hidden values for the crystals.*/


var computerNum= ""; //generated number by computer
var userAddedNum= 0; // numbers added from crystals by user
var wins= 0;
var losses = 0;
var crystalNumbers= [3, 4, 5, 6];



//reset
//var newGame = function () {


//START: when html is loaded,  user will see random generated number and four crstyals on the bottom 

$(document).ready(function() {
    
    computerNum= Math.floor(Math.random() * 20) + 1;
    console.log(computerNum);

    $("#computerNum").append("You must equal: " + computerNum);

    var crystalButtons= $("#blueCrystal, #redCrystal,#whiteCrystal, #whitePurpleCrystal");

    for(var i = 0; i < crystalNumbers.length;i++) {
        crystalButtons.addClass("crystalClass");
        crystalButtons.attr("crystalHiddenVal", crystalNumbers[i]);
        console.log(crystalButtons);
    }

//on click events here: user will need to click on each of these crystals for those hiddens values 
//to add up to the number to = number generated by computer 



$(".crystalClass").on("click", function() {

        var crystalNumVal = ($(this).attr("crystalHiddenVal"));
        crystalNumVal= parseInt(crystalNumVal);
        userAddedNum += crystalNumVal; // addition of user's picks as user picks crystals
        $("#userNum").text(userAddedNum);


        if (crystalNumVal === computerNum) {
            $("#userWins").text(wins);
            alert("You Win!");
        }
        else if (crystalNumVal > computerNum) {
            $("#userLoss").text(losses);
            alert("You Lose");
        }

        

    });


});
