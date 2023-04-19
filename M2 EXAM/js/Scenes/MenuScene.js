class MenuScene extends Phaser.Scene {

    constructor() {
        super("MenuScene")
    }

    init() {

    }

    preload() {

        // Loading Images 
        this.load.image('bg', '../assets/images/bg.png');
        this.load.image('title', '../assets/images/titles/title.png');

        // Loading Buttons
        this.load.image('play1', '../assets/images/buttons/play_u.png');
        this.load.image('play2', '../assets/images/buttons/play_p.png');
        this.load.image('credits1', '../assets/images/buttons/credits_u.png');
        this.load.image('credits2', '../assets/images/buttons/credits_p.png');
        this.load.image('controls1', '../assets/images/buttons/controls_u.png');
        this.load.image('controls2', '../assets/images/buttons/controls_p.png');

        //Audio
        this.load.audio('hover_sfx', '../assets/sfx/hover_sfx.mp3');
        this.load.audio('click_sfx', '../assets/sfx/click_sfx.mp3');

    }

    create() {

        // Background
        background = this.add.tileSprite(240, 180, 486, 360, 'bg');

        // Audio SFX and Config
        this.hoverSFX = this.sound.add('hover_sfx');
        this.clickSFX = this.sound.add('click_sfx');
        this.sfxConfig = {
            mute: false,
            volume: 0.3
        };
        

        // Game Title
        this.add.image(240,80,'title').setScale(0.8);

        // Play Button
        playButton = this.add.image(240,170, 'play1').setInteractive({useHandCursor: true});
        playButton.on('pointerover', () => playButton.setTexture('play2'));
        playButton.on('pointerover', () => this.hoverSFX.play(this.sfxConfig));
        playButton.on('pointerout', () => playButton.setTexture('play1'));
        playButton.on('pointerdown', () => this.clickSFX.play());
        playButton.on('pointerdown', () => this.playButton());

        // Credits Button
        credButton = this.add.image(240,220, 'credits1').setInteractive({useHandCursor: true});
        credButton.on('pointerover', () => credButton.setTexture('credits2'));
        credButton.on('pointerover', () => this.hoverSFX.play(this.sfxConfig));
        credButton.on('pointerout', () => credButton.setTexture('credits1'));
        credButton.on('pointerdown', () => this.clickSFX.play());
        credButton.on('pointerdown', () => this.credButton());

        // Controls Button
        contButton = this.add.image(240,270, 'controls1').setInteractive({useHandCursor: true});
        contButton.on('pointerover', () => contButton.setTexture('controls2'));
        contButton.on('pointerover', () => this.hoverSFX.play(this.sfxConfig));
        contButton.on('pointerout', () => contButton.setTexture('controls1'));
        contButton.on('pointerdown', () => this.clickSFX.play());
        contButton.on('pointerdown', () => this.contButton());


    }

    update() {

       // Moving Background
       background.tilePositionX += 0.25; 

    }

    // Button Interactions
    playButton() {
        this.scene.start("Level1");
    }

    credButton() {
        this.scene.start("CreditScene");
    }

    contButton() {
        this.scene.start("ControlScene");
    }

}