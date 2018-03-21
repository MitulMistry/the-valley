import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './states/Boot';
import MenuPreloadState from './states/MenuPreload';
import SplashState from './states/Splash';
import MenuState from './states/Menu';
import GamePreloadState from './states/GamePreload';
import GameState from './states/Game';

import config from './config';

class Game extends Phaser.Game {
	constructor() {
		const docElement = document.documentElement;
		const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth;
		const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight;

		super(width, height, Phaser.CANVAS, 'content', null);

		this.state.add('Boot', BootState, false);
		this.state.add('MenuPreload', MenuPreloadState, false);
		this.state.add('Splash', SplashState, false);
		this.state.add('Menu', MenuState, false);
		this.state.add('GamePreload', GamePreloadState, false);
		this.state.add('Game', GameState, false);
		// this.state.add('AnotherLifeState', GameOver, false);

		// with Cordova we need to wait for the device to be ready so we will call the Boot state in another file
		if (!window.cordova) {
			this.state.start('Boot');
		}
	}
}

// instantiate Game and run application
window.game = new Game();

// cordova ------------------------------------
if (window.cordova) {
	var app = {
		initialize: function () {
			document.addEventListener(
				'deviceready',
				this.onDeviceReady.bind(this),
				false
			);
		},

		// deviceready Event Handler
		//
		onDeviceReady: function () {
			this.receivedEvent('deviceready');

			// When the device is ready, start Phaser Boot state.
			window.game.state.start('Boot');
		},

		receivedEvent: function (id) {
			console.log('Received Event: ' + id);
		}
	};

	app.initialize();
}
