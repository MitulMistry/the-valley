import Phaser from 'phaser';

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#000000';
  }

  preload() {
    var loadingBar = this.add.sprite(this.game.width / 2, this.game.height / 2, 'loading');
    loadingBar.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(loadingBar);

    // Load assets
    // -------------------------
    this.load.image('splashLogo', 'assets/images/mm_splash_logo.png');

    // Main menu graphics
    this.load.image('gametitle', 'assets/images/menu_gametitle.png');
    this.load.image('logo', 'assets/images/mm_menu_logo.png');
    this.load.image('menu_bg01', 'assets/images/menu_bg01.png');

    this.load.image('menu_bg_circle01', 'assets/images/menu_bg_circle01.png');
    this.load.image('menu_bg_circle02', 'assets/images/menu_bg_circle02.png');
    this.load.image('menu_bg_circle03', 'assets/images/menu_bg_circle03.png');

    this.load.spritesheet('menu01', 'assets/images/menu_sprite01.png', 146, 26);
    this.load.spritesheet('menu02', 'assets/images/menu_sprite02.png', 58, 30);

    // Icons
    this.load.spritesheet('icons', 'assets/images/icons_01.png', 40, 40);

    // Game graphics
    this.load.spritesheet('slider01', 'assets/images/slider01_sprite.png', 13, 62);
    this.load.image('slider01_back', 'assets/images/slider01_back.png');
    this.load.image('slider02_back', 'assets/images/slider02_back.png');

    this.load.image('rectangle_black', 'assets/images/primitive_rectangle_black.png');
    this.load.image('blackGradient', 'assets/images/bg_black_gradient01.png');

    // Sound
    // this.load.audio('01Ambient', 'assets/sound/01_ambient_ritual_incompetech.ogg');
    // this.load.audio('click01', 'assets/sound/00_click01.ogg');
  }

  create() {
    this.state.start('Splash');
  }
}
