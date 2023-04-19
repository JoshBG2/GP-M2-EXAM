class CreditScene extends Phaser.Scene {

    constructor() {
        super("CreditScene")
    }

    init() {

    }

    preload() {

        // Loading Images
        this.load.image('bg', '../assets/images/bg.png');
        this.load.image('credits', '../assets/images/titles/credits.png')
        this.load.image('sheet_cred', '../assets/images/titles/credits_sheet.png')

        // Buttons
        this.load.image('back1', '../assets/images/buttons/back_u.png');
        this.load.image('back2', '../assets/images/buttons/back_p.png');
        
        //Audio
        this.load.audio('hover_sfx', '../assets/sfx/hover_sfx.mp3');
        this.load.audio('click_sfx', '../assets/sfx/click_sfx.mp3');

    }

    create() {

        // Background
        background = this.add.tileSprite(240, 180, 486, 360, 'bg');

        // Audio SFX
        this.hoverSFX = this.sound.add('hover_sfx');
        this.clickSFX = this.sound.add('click_sfx');
        this.sfxConfig = {
            mute: false,
            volume: 0.3
        };

        // Credits Title
        this.add.image(240,60, 'credits').setScale(0.8);
        this.add.image(240,200, 'sheet_cred');

        // Back Button
        backButton = this.add.image(50,330, 'back1').setInteractive({useHandCursor: true});
        backButton.on('pointerover', () => backButton.setTexture('back2'));
        backButton.on('pointerover', () => this.hoverSFX.play(this.sfxConfig));
        backButton.on('pointerout', () => backButton.setTexture('back1'));
        backButton.on('pointerdown', () => this.clickSFX.play());
        backButton.on('pointerdown', () => this.backButton());

    }

    update() {

       // Moving Background
       background.tilePositionX += 0.25;

    }

    // Back Button Interaction
    backButton() {
        this.scene.start("MenuScene");
    }
}