// global variables  
var playerName = window.prompt("what is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 

//showing user input
console.log(playerName + " is your robot's name!");


//Making our first fight function
var fight = function(enemyName) {
    
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
                //playerMoney = playerMoney - 10;
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney)
                break;
            }
        }
        //remove enemy's health generate random damage based on player's attack power 
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);

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
        // remove player's health generate random damage based on enemies attack 
        var daamge = randomNumber(enemyAttack - 3, enemyAttack);

        playerHealth = Math.max(0, playerHealth - damage);

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
};

//function to start a new game 
var startGame = function () {
    //reset player stats 
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
        // let players know the round they are in, remember that arrays start at 0 so it needs to have 1 added to it 
        window.alert("welcome to Robot Gladiators! Round " + (i + 1));
    
        //pick new enemy to fight based on the index of the enemyNames array 
        var pickedEnemyName = enemyNames[i];
    
        //reset enemyHealth befgoe starting a new fight 
        //enemyHealth = 50; 
        //enemyHealth = Math.floor(Math.random() * 21) + 40;
        enemyHealth = randomNumber(40, 60);
        
        //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter 
        fight(pickedEnemyName);
        
        //if player is alive and if we're not at the last enemy in the array
        if(playerHealth > 0 && i < enemyNames.length - 1) {

            //ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            
            //if yes, take them to the store() function
            if(storeConfirm) {
                shop();
            }
        }

        } 
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //after the loop ends, player is either out of lives or enemies to fight. 
    endgame();
    //startGame();
};

var endgame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the Game! You now have a score of" + playerMoney + ". " );
    }
    else {
        window.alert("You've lost you robot in battle.");
    }
    //ask player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play agaian?");
    if (playAgainConfirm) {
        //restart the game 
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiator! Come back soon!");
    }
};

var shop = function() {
    //ask player what they'd like to do 
    var shopOptionPropmt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', OR 'LEAVE' to make a choice."
    );

    //use switch to carry out action 
    switch (shopOptionPropmt) {
        case "REFILL" : // new case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                //increase health and decrease money 
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attack and decrease money 
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You dont have enough money!");
            }
            break;
        case "LEAVE" : // new case
        case "leave" : 
            window.alert("Leaving the store.")
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop() again to force player to pick a valid option 
            shop();
            break;
    }
};
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random () * (max - min + 1 ) + min);

    return value;
}
startGame();










//pseudocoding the next problems 
//alert as if players would like to play again and adition displays players score 
//defeating or skipping enemy enables option to enter shop 


//lesson 3.3.2 
//add startGame()
//add endGame()
//finalize MVP and switch branches 
//add shop()
