var preload = function (game) { }

preload.prototype = {
	preload: function () {
		var loadingBar = this.add.sprite(160, 240, "loading");
		loadingBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(loadingBar);
		//load assets
		this.game.load.image("gametitle", "img/menu_gametitle.png");
		this.game.load.image("newgame", "assets/menu_newgame.png");
		this.game.load.image("loadgame", "assets/menu_loadgame.png");
		/*this.game.load.spritesheet("numbers", "assets/numbers.png", 100, 100);
		this.game.load.image("gametitle", "assets/gametitle.png");*/
	},
	create: function () {
		//this.game.state.start("stateMenu");
	}
}