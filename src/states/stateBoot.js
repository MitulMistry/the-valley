import Phaser from 'phaser';

var boot = function (game) {
	console.log("%cStarting game", "color:white; background:red");
};

boot.prototype = {
	preload: function () {
		this.game.load.image("loading", "./assets/images/menu_loading.png");
	},
	create: function () {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		//this.scale.pageAlignVertically = true;
		this.scale.setScreenSize();
		this.game.state.start("statePreload");
		this.game.stage.backgroundColor = '#000000';
	}
}
