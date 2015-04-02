var mainMenu = function (game) { }

mainMenu.prototype = {
	create: function () {
		this.game.stage.backgroundColor = '#000000';

		//ADD FIRE EFFECT TO BG
		var menuBG = this.game.add.sprite(this.game.width / 2, this.game.height / 2, "menu_bg01");
		menuBG.anchor.setTo(0.5, 0.5);

		//Rotate BG
		this.game.add.tween(menuBG).to({ angle: 360 }, 50000, Phaser.Easing.Linear.None, true).loop(true);

		//Menu items
		var gameTitle = this.game.add.sprite(this.game.width / 2, this.game.height * 0.3433, "gametitle");
		gameTitle.anchor.setTo(0.5, 0.5);

		var newGameButton = this.game.add.button(this.game.width / 2, this.game.height * 0.5333, "newgame", this.newGameStart, this);
		newGameButton.anchor.setTo(0.5, 0.5);

		var loadGameButton = this.game.add.button(this.game.width / 2, this.game.height * 0.6333, "loadgame", this.loadGameStart, this);
		loadGameButton.anchor.setTo(0.5, 0.5);
		
		var quitGameButton = this.game.add.button(this.game.width / 2, this.game.height * 0.8, "quit", this.quitGame, this);
		quitGameButton.anchor.setTo(0.5, 0.5);

		var gameLogo = this.game.add.sprite(this.game.width / 2, this.game.height * 0.9033, "logo");
		gameLogo.anchor.setTo(0.5, 0.5);

		//Text info
		var styleMenuText = { font: 'bold 11pt Arial', fill: '#303030', align: 'left' };

		var menuText = this.game.add.text(this.game.width / 2, this.game.height * 0.9533, "Mitul Mistry 2015 - v0.01", styleMenuText);
		menuText.anchor.setTo(0.5, 0.5);
	},
	newGameStart: function () {
		this.game.state.start("stateAdventure");
	},
	loadGameStart: function () {
		this.game.state.start("stateAdventure");
	},
	quitGame: function () {
		this.game.destroy();
	}
}