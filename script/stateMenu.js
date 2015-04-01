var mainMenu = function (game) { }

mainMenu.prototype = {
	create: function () {
		var gameTitle = this.game.add.sprite(400, 160, "gametitle");
		gameTitle.anchor.setTo(0.5, 0.5);
		var newGameButton = this.game.add.button(400, 320, "newgame", this.newGameStart, this);
		newGameButton.anchor.setTo(0.5, 0.5);
		
	},
	newGameStart: function () {
		this.game.state.start("stateAdventure");
		//this.game.stage.backgroundColor = '#CC0000';
	},
	loadGameStart: function () {
		this.game.state.start("stateAdventure");
	},
	quitGame: function () {

	}
}