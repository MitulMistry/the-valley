import Phaser from 'phaser';
import WebFont from 'webfontloader';

import config from '../config';

export default class extends Phaser.State {
	init() {
		console.log('%cStarting game', 'color:white; background:red');

		this.stage.backgroundColor = '#000000';

		this.fontsReady = false;
		this.fontsLoaded = this.fontsLoaded.bind(this);
	}

	preload() {
		this.initializeScaleMode();

		this.load.image('loading', 'assets/images/menu_loading.png');

		if (config.webfonts.length) { // check if webfonts set in config
			WebFont.load({
				google: {
          families: config.webfonts
        },
        active: this.fontsLoaded
			});
		}

		//Loading bar/message?
	}

	render() {
		if (config.webfonts.length && this.fontsReady) {
      this.state.start('MenuPreload');
    }
    if (!config.webfonts.length) {
      this.state.start('MenuPreload');
    }
	}

	initializeScaleMode() { // set game screen to scale proportionally
		// https://phaser.io/examples/v2/input/game-scale
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.setMinMax(config.gameMinWidth, config.gameMinHeight, config.gameWidth, config.gameHeight);
		this.scale.pageAlignHorizontally = true;
	 	this.scale.pageAlignVertically = false;
		this.scale.windowConstraints.bottom = 'visual'; // constrain to displayed screen area
	}

	fontsLoaded() {
		this.fontsReady = true;
	}
}
