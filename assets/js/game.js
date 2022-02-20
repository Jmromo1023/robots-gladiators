// global variables  
var playerName = window.prompt("what is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// log mutiple values at once 
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 

//showing user input
console.log(playerName + " is your robot's name!");


//Making our first fight function
var fight = function(enemyName) {
    //window.alert('Welcome to Robot Gladiators!');
    //repeat and execute as long as the enemy-robot is alive 
    while(playerHealth > 0 && enemyHealth > 0 ) {
        //ask player if they would like to skip or fight 
        var promptFight = window.prompt("Would you likee to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");
       
        //if player's picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight 
            if(confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subract money from player for skipping 
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }
        //remove enemy's health 
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );
        //check enemy health 
        if(enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');

            //award player money for winning 
            playerMoney = playerMoney + 20;

            //leave while loop since enemy is dead 
            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left. ');
        }
        // remove player's health 
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining. '
        );

        // check player's health 
        if (playerHealth <= 0){
            window.alert(playerName + ' has died!');
            // leave while() loop if player is dead 
            break;
        } else {
            window.alert(playerName + 'still has ' + playerHealth + ' health left.');
        }
    }    
}

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
            // let players know the round they are in, remember that arrays start at 0 so it needs to have 1 added to it 
    window.alert("welcome to Robot Gladiators! Round " + (i + 1));

    //pick new enemy to fight based on the index of the enemyNames array 
    var pickedEnemyName = enemyNames[i];

    //reset enemyHealth befgoe starting a new fight 
    enemyHealth = 50; 
    
    //use debugger to pause script from running and check what's going on at that moment in the code
    //debugger;

    //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter 
    fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}