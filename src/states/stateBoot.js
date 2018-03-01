import Phaser from 'phaser';
import WebFont from 'webfontloader';
import config from '../config';

// var boot = function (game) {
// 	console.log("%cStarting game", "color:white; background:red");
// };
//
// boot.prototype = {
// 	preload: function () {
// 		this.game.load.image("loading", "./assets/images/menu_loading.png");
// 	},
// 	create: function () {
// 		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
// 		this.scale.pageAlignHorizontally = true;
// 		//this.scale.pageAlignVertically = true;
// 		this.scale.setScreenSize();
// 		this.game.state.start("statePreload");
// 		this.game.stage.backgroundColor = '#000000';
// 	}
// }

export default class extends Phaser.State {
	init() {
		console.log("%cStarting game", "color:white; background:red");

		this.stage.backgroundColor = '#000000';

		// this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		// this.scale.pageAlignHorizontally = true;
		// NOT USED: this.scale.pageAlignVertically = true;
		// this.scale.setScreenSize(true);

		this.fontsReady = false;
		this.fontsLoaded = this.fontsLoaded.bind(this);
	}

	preload() {
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
      this.state.start('Preload')
    }
    if (!config.webfonts.length) {
      this.state.start('Preload')
    }
	}

	fontsLoaded() {
		this.fontsReady = true;
	}
}
