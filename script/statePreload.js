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
		this.game.load.image("newgame", "img/menu_newgame.png");
		this.game.load.image("loadgame", "img/menu_loadgame.png");
		this.game.load.image("quit", "img/menu_quit.png");
		this.game.load.image("logo", "img/menu_logo.png");
		this.game.load.image("menu_bg01", "img/menu_bg01.png");

		//Icons
		this.game.load.spritesheet("icons", "img/icons_01.png", 40, 40);

		//Game graphics
		this.game.load.spritesheet("slider01", "img/slider01_sprite.png", 13, 62);
		this.game.load.image("slider01_back", "img/slider01_back.png");
		this.game.load.image("slider02_back", "img/slider02_back.png");

		this.game.load.image("rectangle_black", "img/primitive_rectangle_black.png");
	},
	create: function () {
		this.game.stage.backgroundColor = '#000000';
		//this.game.state.start("stateSplash");
		this.game.state.start("stateMenu");
	}
}