//window.alert('This is an alert that javascript is working!');

// getting user input 
var playerName = window.prompt("what is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
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

    //Subtract the value of the `playerAttack` from the value of `enemyHealth` and use the result to update in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. " 
    );
    //check enemy's health
    if (enemyHealth <= 0 ){
        window.alert(enemyName + " has died!");
    }else {
        window.alert(enemyName + " still has " + enemyHealth + " health left!");
    }
    //Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message so that we know it worked.
    console.log( 
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    //check player's health 
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }else{
        window.alert(playerName + " still has " + playerHealth + " health reamining!");
    }
};

//calling the fight function
fight();
