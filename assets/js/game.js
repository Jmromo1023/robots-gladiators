//window.alert('This is an alert that javascript is working!');

// getting user input 
var playerName = window.prompt("what is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// log mutiple values at once 
//console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12; 

//showing user input
console.log(playerName + "is your robot's name!");


//Making our first fight function
var fight = function() {
    //Alert players that they are startinf the round 
    window.alert("Welcome to robot gladiators!");

    //ask players if they would like to fight or skip the match
    var promptFight = window.prompt("Would you likee to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

    // if player choses to fight, then fight 
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy health 
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
        //check enemy's health 
        if (enemyHealth <= 0) {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player health 
        playerHealth = playerHealth - enemyAttack;
        console.log (
            enemyName + " attacked " + playerName +". " + playerName + " now has " + playerHealth + " health reamining. "
        );

        //check player's health 
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip 
    } else if (promptFight === "skip" || promptFight === "SKIP"){
        // confirm player wants to skip 
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        //if yes (true), leave fight 
        if(confirmSkip){
            window.alert(playerName + " has decided to skip this fight. GoodBye!");
            //subtract money from playerMoney  for skipping 
            playerMoney = playerMoney - 2;
        }
        //if no(false), ask question again by runnning fight() again
        else {
            fight();
        }

    } else {
        window.alert("You need to choose a valid option. Try Again!");
    }


};

//calling the fight function
fight();
