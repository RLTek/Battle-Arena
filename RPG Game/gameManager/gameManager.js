let GameManager = {
    //Calls both resetPlayer and setPreFight
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    //Gets player's character
    resetPlayer: function(classType) {
        switch (classType) {
            case 'Warrior':
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case 'Rogue':
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;
            case 'Mage':
                player = new Player(classType, 80, 200, 50, 200, 50);
            break;
            case 'Hunter':
            player = new Player(classType, 200, 0, 50, 200, 100);
            break;
        }
        // Changes header
        let headerChange = document.querySelector(".header");
        headerChange.innerHTML = '<h2>You have entered the arena!</h2>';

        // Changes to character choice
        let getPlayerChoice = document.querySelector(".playerChoice"); 
        getPlayerChoice.innerHTML = '<div class = "hero"><img src = "./images/heroes/' + classType.toLowerCase() + '.jpg" class = "img-avatar-after"><div class = "heroStats"><h2>' + classType + '</h2><p class = "health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div></div>';
    },
    setPreFight: function() {
        // Adds the action button after player chooses
        let getActions = document.querySelector(".actions");
        getActions.innerHTML = '<a href = "#" onclick = "GameManager.setFight()" class = "actionButton"><h3>Find an Enemy!</h3></a>';

        //Adds arena picture
        let getArena = document.querySelector(".arena");
        getArena.style.visibility = 'visible';

    },
    setFight: function() {
        let getEnemy = document.querySelector(".enemyChoice");
        
        let getActions = document.querySelector(".actions");
        getActions.innerHTML = '<a href = "#" onclick = "PlayerMoves.calcAttack()" class = "actionButton"><h3>Fight!</h3></a>';

        //Creates an enemy
        let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Troll", 150, 0, 200, 50, 50);
        let enemy02 = new Enemy("Zombie", 200, 0, 150, 80, 50);

         //Chooses a random enemy
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
        switch (chooseRandomEnemy){
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
        }

        getEnemy.innerHTML = '<div class = "hero"><img src = "./images/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" class = "img-avatar-after"><div class = "heroStats"><h2>' + enemy.enemyType + '</h2><p class = "enemy-player">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div></div>';
    }
}