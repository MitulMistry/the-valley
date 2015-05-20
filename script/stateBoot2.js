var boot = function (game) {
	console.log("%cLoading story module", "color:white; background:green");
};

boot.prototype = {
	preload: function () {
		this.game.load.image("loading", "img/menu_loading.png");
	},
	create: function () {
		//Load the current module into map, whichever module is currently selected (either randomly chosen for new game or next module, or module number from save game. Or else have the randomness all determined in the save game object itself.
		/*
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		//this.scale.pageAlignVertically = true;
		this.scale.setScreenSize();
		this.game.state.start("statePreload");
		this.game.stage.backgroundColor = '#000000';
		*/
	}
}