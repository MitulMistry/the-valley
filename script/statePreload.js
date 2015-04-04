var preload = function (game) { }

preload.prototype = {
	preload: function () {
		var loadingBar = this.add.sprite(this.game.width / 2, this.game.height / 2, "loading");
		loadingBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(loadingBar);

		//Load assets
		//-------------------------
		//Main menu graphics
		this.game.load.image("gametitle", "img/menu_gametitle.png");
		this.game.load.image("newgame", "img/menu_newgame.png");
		this.game.load.image("loadgame", "img/menu_loadgame.png");
		this.game.load.image("quit", "img/menu_quit.png");
		this.game.load.image("logo", "img/menu_logo.png");
		this.game.load.image("menu_bg01", "img/menu_bg01.png");

		//Icons
		this.game.load.image("font", "img/icon_font.png");
		this.game.load.image("save", "img/icon_save.png");
		this.game.load.image("sound", "img/icon_sound.png");
		this.game.load.image("facebook", "img/icon_facebook.png");
		this.game.load.image("facebook_color", "img/icon_facebook_color.png");
		this.game.load.image("twitter", "img/icon_twitter.png");
		this.game.load.image("twitter_color", "img/icon_twitter_color.png");

		//Game graphics
		this.game.load.image("slider01", "img/slider01.png");
		this.game.load.image("slider01_hover", "img/slider01_hover.png");
		this.game.load.image("slider01_press", "img/slider01_press.png");
		this.game.load.image("slider01_back", "img/slider01_back.png");
		this.game.load.image("slider02_back", "img/slider02_back.png");

		this.game.load.image("rectangle_black", "img/primitive_rectangle_black.png");
	},
	create: function () {
		this.game.stage.backgroundColor = '#000000';
		this.game.state.start("stateMenu");
	}
}