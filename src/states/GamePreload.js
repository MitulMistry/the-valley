import Phaser from 'phaser';

import globals from '../globals/globals';
import systems from '../globals/systems';

export default class extends Phaser.State {
	init() {
	}

	preload() {
		var loadingBar = this.add.sprite(this.game.width / 2, this.game.height / 2, 'loading');
		loadingBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(loadingBar);

		//Load the current module into map, whichever module is currently selected (either randomly chosen for new game or next module, or module number from save game. Or else have the randomness all determined in the save game object itself.
		systems.mainTextManager.loadModule(systems.currentSaveGame.currentModule);
	}

	create() {
	}

	update() {
		/*var testLoop = setInterval(function () {
			if (testContinue) {
				clearInterval(testLoop);
				this.game.state.start("stateAdventure");}
		}, 500);*/

		//Wait for JSON data to finish loading
		//NEED TO SET UP A TIMEOUT IF DATA DOESN'T LOAD
		if (globals.JSONLoadedFlag) {
			globals.JSONLoadedFlag = false;
			this.state.start('Game');
		}
	}
}
