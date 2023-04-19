// Setting Game Configuration

let config = {
    type: Phaser.AUTO,
    width: 480,
    height: 360,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 350 },
            debug: false
        }
    },
    scene: [
        MenuScene,
        Level1,
        Level2,
        Level3,
        CreditScene,
        ControlScene,
        WinScene,
        OverScene
    ]
};

let game = new Phaser.Game(config);

game.scene.start("MenuScene");

// Initializing Variables

    // Menu and UI Components
        let background;
        let playButton;
        let credButton;
        let contButton;
        let backButton;
        let againButton;
        let menuButton;

    // Global Game Components

        // UI
        let hearts;
        let lives = 3;
        let score = 0;
        let scoreText;
        let coinScore = 0; 
        let gems = 0;
        let keyScore = 0;

        // Tilemap Components
        let sky;
        let ground;

        let wave;
        let waterSprite;
        let spikes;
        let spikeSprite;
        let flagPole;
        let flagSprite;
        let bounds;
        let boundsSprite;
        let doors;
        let doorSprite;

        let coins;
        let coinSprite;
        let diamonds;
        let diamondSprite;
        let rubies;
        let rubySprite;
        let keys;
        let keySprite;
        
        // Player
        let player;
        let cursors;
    
// Player and Interactibles Collision

    // Hazards
    function spikeDmg_1(player,spike) {
        this.damageSFX.play(this.sfxConfig);
        player.setX(50);
        player.setY(250);
        lives -=1;
        if (lives == 2) {
            hearts.setTexture('heart_2');
        }
        else if (lives == 1) {
            hearts.setTexture('heart_1');
        }
        
        if(lives <= 0) {
            this.bgm.stop();
            this.scene.start("OverScene", {score: score});
        }
    }

    function spikeDmg_2(player,spike) {
        this.damageSFX.play(this.sfxConfig);
        player.setX(50);
        player.setY(85);
        lives -=1;
        if (lives == 2) {
            hearts.setTexture('heart_2');
        }
        else if (lives == 1) {
            hearts.setTexture('heart_1');
        }

        if(lives <= 0) {
            this.bgm.stop();
            this.scene.start("OverScene", {score: score});
        }
    }

    function waterDmg_1(player,water) {
        this.damageSFX.play(this.sfxConfig);
        player.setX(50);
        player.setY(250);
        lives -=1;
        if (lives == 2) {
            hearts.setTexture('heart_2');
        }
        else if (lives == 1) {
            hearts.setTexture('heart_1');
        }
        
        if(lives <= 0) {
            this.bgm.stop();
            this.scene.start("OverScene");
        }
    }

    function waterDmg_2(player,water) {
        this.damageSFX.play(this.sfxConfig);
        player.setX(50);
        player.setY(85);
        lives -=1;
        if (lives == 2) {
            hearts.setTexture('heart_2');
        }
        else if (lives == 1) {
            hearts.setTexture('heart_1');
        }
        
        if(lives <= 0) {
            this.bgm.stop();
            this.scene.start("OverScene");
        }
    }

    function resetPlayer(player,bound) {
        player.setX(50);
        player.setY(85);
    }

    // Collectibles
    function getCoins(player, coin) {
        this.pickupSFX.play(this.sfxConfig);
        coin.disableBody(true,true);
        coinScore += 1;
        score += 1;
        scoreText.setText('Coins Collected: ' + coinScore + '\nGems Collected: ' + gems + '\nScore: ' + score);
    }

    function getDiamonds(player, diamond) {
        this.pickupSFX.play(this.sfxConfig);
        diamond.disableBody(true,true);
        gems += 1;
        score += 10;
        scoreText.setText('Coins Collected: ' + coinScore + '\nGems Collected: ' + gems + '\nScore: ' + score);
    }

    function getRubies(player, ruby) {
        this.pickupSFX.play(this.sfxConfig);
        ruby.disableBody(true,true);
        gems += 1;
        score += 20;
        scoreText.setText('Coins Collected: ' + coinScore + '\nGems Collected: ' + gems + '\nScore: ' + score);
    }

    function getKeys(player, key){
        this.pickupSFX.play(this.sfxConfig);
        key.disableBody(true,true);
        keyScore += 1;
    }

    function unlockDoor(player, door){
        if (keyScore >= 1) {
            door.disableBody(true,true);
            keyScore -=1;
        }
    }

    // Goals
    function goal1(player,flag) {
        lives = 3;
        this.scene.start("Level2");
    }

    function goal2(player,flag) {
        lives = 3;
        this.scene.start("Level3");
    }

    function goal3(player,flag) {
        this.sound.stopAll();
        this.scene.start("WinScene");
    }
