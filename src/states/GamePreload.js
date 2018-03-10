import Phaser from 'phaser';

import globals from '../globals/globals';
import systems from '../globals/systems';

var timeOut;

export default class extends Phaser.State {
	init() {
	}

	preload() {
		var loadingBar = this.add.sprite(this.game.width / 2, this.game.height / 2, 'loading');
		loadingBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(loadingBar);

		// set up timeout if data doesn't load
		timeOut = this.time.events.add(Phaser.Timer.SECOND * 20, this.loadingTimeOut, this);
		console.log(this.time.events);

		//Load the current module into map, whichever module is currently selected (either randomly chosen for new game or next module, or module number from save game. Or else have the randomness all determined in the save game object itself.
		systems.mainTextManager.loadModule(systems.currentSaveGame.currentModule);
	}

	create() {
	}

	update() {
		//Wait for JSON data to finish loading
		if (globals.JSONLoadedFlag) {
			this.time.events.remove(timeOut);
			globals.JSONLoadedFlag = false;
			this.state.start('Game');
		}
	}

	loadingTimeOut() {
		console.log('Story loading timed out.');
		this.state.start('Menu');
	}
}
