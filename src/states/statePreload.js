import Phaser from 'phaser';

var preload = function (game) { }

preload.prototype = {
	preload: function () {
		var loadingBar = this.add.sprite(this.game.width / 2, this.game.height / 2, "loading");
		loadingBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(loadingBar);

		//Load assets
		//-------------------------
		this.game.load.image("splashLogo", "img/quantum_logo.png");

		//Main menu graphics
		this.game.load.image("gametitle", "img/menu_gametitle.png");
		this.game.load.image("logo", "img/menu_logo.png");
		this.game.load.image("menu_bg01", "img/menu_bg01.png");

		this.game.load.image("menu_bg_circle01", "img/menu_bg_circle01.png");
		this.game.load.image("menu_bg_circle02", "img/menu_bg_circle02.png");
		this.game.load.image("menu_bg_circle03", "img/menu_bg_circle03.png");

		this.game.load.spritesheet("menu01", "img/menu_sprite01.png", 146, 26);
		this.game.load.spritesheet("menu02", "img/menu_sprite02.png", 58, 30);

		//Icons
		this.game.load.spritesheet("icons", "img/icons_01.png", 40, 40);

		//Game graphics
		this.game.load.spritesheet("slider01", "img/slider01_sprite.png", 13, 62);
		this.game.load.image("slider01_back", "img/slider01_back.png");
		this.game.load.image("slider02_back", "img/slider02_back.png");

		this.game.load.image("rectangle_black", "img/primitive_rectangle_black.png");
		this.game.load.image("blackGradient", "img/bg_black_gradient01.png");

		//Sound
		this.game.load.audio("01Ambient", "sound/01_ambient_ritual_incompetech.ogg");
		this.game.load.audio("click01", "sound/00_click01.ogg");

	},
	create: function () {
		this.game.stage.backgroundColor = '#000000';
		this.game.state.start("stateSplash");
		//this.game.state.start("stateMenu");
	}
}
