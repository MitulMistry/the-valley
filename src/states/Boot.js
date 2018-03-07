import Phaser from 'phaser';
import WebFont from 'webfontloader';

import config from '../config';

export default class extends Phaser.State {
	init() {
		console.log('%cStarting game', 'color:white; background:red');

		this.stage.backgroundColor = '#000000';

		// this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		// this.scale.pageAlignHorizontally = true;
		// NOT USED: this.scale.pageAlignVertically = true;
		// DEPRECATED: this.scale.setScreenSize(true);
		// this.game.scale.refresh();

		this.fontsReady = false;
		this.fontsLoaded = this.fontsLoaded.bind(this);
	}

	preload() {
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

	fontsLoaded() {
		this.fontsReady = true;
	}
}
