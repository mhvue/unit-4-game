

/*each crystal will have it's own hidden numerical value.
starts of if/else-if/else statements 
    if user has added thoses hidden values number from crystal value = computer generated number, then User Wins (show msg of this). Game resets. Scoreboard of wins 
    stays. 

    if User has added the hidden values to be too high = user loses (show msg of this).  Losses goes up. and this stays on the screen. Game resets with a different computer generated number and a different 
    hidden values for the crystals.*/


var computerNum= ""; //generated number by computer
var userAddedNum= 0; // numbers added from crystals by user
var wins="";
var losses = "";

//for each crystal to generate a random number. 
var blueRandomNum = null;
var redRandomNum =null;
var whiteRandomNum=null;
var whitePurpleRandomNum=null;


var newGame =function () {
    computerNum= Math.floor(Math.random() * 102) + 19;
    $("#computerNum").text("You must equal: " + computerNum);

    userAddedNum =0;
    $("#userNum").text(" ");

    $("#winsLoseMsg").hide();

    blueRandomNum = Math.floor(Math.random() * 12) + 1;
    $("#blueCrystal").attr("crystalHidden-data", blueRandomNum);
    
    redRandomNum = Math.floor(Math.random() * 12) + 1;
    $("#redCrystal").attr("crystalHidden-data", redRandomNum);

    whiteRandomNum = Math.floor(Math.random() * 12) + 1;
    $("#whiteCrystal").attr("crystalHidden-data", whiteRandomNum);

    whitePurpleRandomNum = Math.floor(Math.random() * 12) + 1;
    $("#whitePurpleCrystal").attr("crystalHidden-data", whitePurpleRandomNum);

    clearTimeout();
   
};

newGame();



//START: when html is loaded,  user will see random generated number and four crstyals on the bottom 

$(document).ready(function() {

        computerNum= Math.floor(Math.random() * 102) + 19;
        console.log(computerNum);
    

    $("#computerNum").append("You must equal: " + computerNum);


    
    //create a class so can click on any pic on html
    var crystalButtons= $("#blueCrystal, #redCrystal,#whiteCrystal, #whitePurpleCrystal");
        crystalButtons.addClass("crystalClass");


    //so that every crystal will generate a random number attached to the attributes 
        $("#blueCrystal").attr("crystalHidden-data", blueRandomNum);
        $("#redCrystal").attr("crystalHidden-data", redRandomNum);
        $("#whiteCrystal").attr("crystalHidden-data", whiteRandomNum);
        $("#whitePurpleCrystal").attr("crystalHidden-data", whitePurpleRandomNum);
        


//on click events here: user will need to click on each of these crystals for those hiddens values 
//to add up to the number to = number generated by computer 

$(".crystalClass").on("click", function() {

        var crystalNumVal = ($(this).attr("crystalHidden-data"));
        crystalNumVal= parseInt(crystalNumVal);
        userAddedNum += crystalNumVal; // addition of user's picks as user picks crystals
        $("#userNum").text(userAddedNum);


        if (userAddedNum === computerNum) {
            $("#sound")[0].play();
            wins++;
            $("#userWins").text(wins);
            $("#winsLoseMsg").show().html("<h1> You win!</h1>");
            setTimeout(newGame, 3000);
            
        };

         if (userAddedNum >computerNum) {
            $("#sound2")[0].play();
            losses++;
            $("#userLoss").text(losses);
            $("#winsLoseMsg").show().html("<h1> :( You Lose.</h1>");
            setTimeout(newGame, 3000);
          
        };


    });

       



});
