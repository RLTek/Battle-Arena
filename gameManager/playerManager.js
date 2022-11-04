let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function() {
        //Who attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        //Player attacks
    playerAttack = function () {
        let calcBaseDamage;
        if(player.mana > 0){
            calcBaseDamage = player.strength * player.mana / 1000;
        } else{
            calcBaseDamage = player.strength * player.agility / 1000;
        }

        let offsetDamage = Math.floor(Math.random() *  Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;

        // Number of hits
        let numberOfHits = Math.floor(Math.random() *  Math.floor(player.agility / 10) /2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
     //Enemy attacks
     enemyAttack = function () {
        let calcBaseDamage;
        if(enemy.mana > 0){
            calcBaseDamage = enemy.strength * enemy.mana / 1000;
        } else{
            calcBaseDamage = enemy.strength * enemy.agility / 1000;
        }

        let offsetDamage = Math.floor(Math.random() *  Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;

    // Number of hits
        let numberOfHits = Math.floor(Math.random() *  Math.floor(enemy.agility / 10) /2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
    // Get player/enemy health
    getPlayerHealth = document.querySelector(".health-player");
    getEnemyHealth = document.querySelector(".enemy-player");

    //Initiates attacks
    if(getPlayerSpeed >= getEnemySpeed) {
       let playerAttackValues = playerAttack(),
        totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
        if (enemy.health <= 0){
            alert("You win! Refresh browser to play again.")
            getEnemyHealth.innerHTML = 'Health: 0';
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
        } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;

    //Enemy attacks
            let enemyAttackValues = enemyAttack();
            totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
        if (player.health <= 0){
            alert("You lose! Refresh browser to play again.")
            getPlayerHealth.innerHTML = 'Health: 0';
            getEnemyHealth.innerHTML = 'Health: ' + player.health;
        } else {
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
      }
    }
    //Initiates attacks
    //Enemy attacks
    else if(getEnemySpeed > getPlayerSpeed) {
        let enemyAttackValues = enemyAttack(),
         totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
         player.health = player.health - totalDamage;
         alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
         if (player.health <= 0){
             alert("You lose! Refresh browser to play again.")
             getPlayerHealth.innerHTML = 'Health: 0';
             getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
         } else {
             getPlayerHealth.innerHTML = 'Health: ' + player.health;
 
     //Player attacks
             let playerAttackValues = playerAttack();
             totalDamage = playerAttackValues[0] * playerAttackValues[1];
         enemy.health = enemy.health - totalDamage;
         alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
         if (enemy.health <= 0){
             alert("You win! Refresh browser to play again.")
             getenemyHealth.innerHTML = 'Health: 0';
             getPlayerHealth.innerHTML = 'Health: ' + player.health;
         } else {
             getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
         }
       }
     }
}
};
