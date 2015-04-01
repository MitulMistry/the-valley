var mainMenu = function (game) { }

mainMenu.prototype = {
	create: function () {
		var gameTitle = this.game.add.sprite(160, 160, "gametitle");
		gameTitle.anchor.setTo(0.5, 0.5);
		var newGameButton = this.game.add.button(160, 320, "newgame", this.newGameStart, this);
		playButton.anchor.setTo(0.5, 0.5);
		this.game.stage.backgroundColor = '#000099';
	},
	newGameStart: function () {
		this.game.state.start("stateAdventure");
	},
	loadGameStart: function () {
		this.game.state.start("stateAdventure");
	},
	quitGame: function () {

	}
}