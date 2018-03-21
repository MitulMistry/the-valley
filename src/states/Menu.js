import Phaser from 'phaser';

import config from '../config';
import constants from '../globals/constants';

export default class extends Phaser.State {
	create() {
		this.game.stage.backgroundColor = '#000000';

		// ADD FIRE EFFECT TO BG? Or Spiral galaxy effect?
		// var menuBG = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'menu_bg01');
		// menuBG.anchor.setTo(0.5, 0.5);

		var menuBG_circle01 = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'menu_bg_circle01');
		menuBG_circle01.anchor.setTo(0.5, 0.5);
		var menuBG_circle02 = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'menu_bg_circle02');
		menuBG_circle02.anchor.setTo(0.5, 0.5);
		var menuBG_circle03 = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'menu_bg_circle03');
		menuBG_circle03.anchor.setTo(0.5, 0.5);

		// Rotate BG
		// this.game.add.tween(menuBG).to({ angle: 360 }, 50000, Phaser.Easing.Linear.None, true).loop(true);

		this.game.add.tween(menuBG_circle01).to({ angle: -360 }, 130000, Phaser.Easing.Linear.None, true).loop(true);
		this.game.add.tween(menuBG_circle02).to({ angle: 360 }, 80000, Phaser.Easing.Linear.None, true).loop(true);
		this.game.add.tween(menuBG_circle03).to({ angle: -360 }, 30000, Phaser.Easing.Linear.None, true).loop(true);

		var blackGradient = this.game.add.sprite(0, 0, 'blackGradient');
		var blackGradient2 = this.game.add.sprite(0, 0, 'blackGradient');
		blackGradient.width = this.game.width;
		blackGradient2.width = this.game.width;
		blackGradient2.y = this.game.height;
		blackGradient2.scale.y = -1;

		// Menu items
		var gameTitle = this.game.add.sprite(this.game.width / 2, this.game.height * 0.3433, 'gametitle');
		gameTitle.anchor.setTo(0.5, 0.5);

		// over, out, down
		var newGameButton = this.game.add.button(this.game.width / 2, this.game.height * 0.5333, 'menu01', this.newGameStart, this, 1, 0, 2);
		newGameButton.anchor.setTo(0.5, 0.5);
		newGameButton.frame = 0;
		newGameButton.input.useHandCursor = true;

		var loadGameButton = this.game.add.button(this.game.width / 2, this.game.height * 0.6333, 'menu01', this.loadGameStart, this, 4, 3, 5);
		loadGameButton.anchor.setTo(0.5, 0.5);
		loadGameButton.frame = 3;
		// loadGameButton.input.useHandCursor = true;

		/*
		var quitGameButton = this.game.add.button(this.game.width / 2, this.game.height * 0.8, 'menu02', this.quitGame, this, 1, 0, 2);
		quitGameButton.anchor.setTo(0.5, 0.5);
		quitGameButton.frame = 0;
		quitGameButton.input.useHandCursor = true;
		*/

		var gameLogo = this.game.add.sprite(this.game.width / 2, this.game.height * 0.9033, 'logo');
		gameLogo.anchor.setTo(0.5, 0.5);

		// Email bugs / support?
		// mailto support@quantumrabbit.com ? or quantumrabbit@gmail.com

		// Icons
		var iconXoffset = this.game.width * .0625;

		// over, out, down
		// var iconTwitterButton = this.game.add.button(iconXoffset, this.game.height * 0.8267, 'icons', this.iconTwitter, this, 11, 10, 10);
		var iconTwitterButton = this.game.add.button(iconXoffset, this.game.height * 0.8267, 'icons', this.iconTwitter, this);
		iconTwitterButton.anchor.setTo(0.5, 0.5);
		iconTwitterButton.frame = 10;
		iconTwitterButton.input.useHandCursor = true;
		iconTwitterButton.events.onInputOver.add(this.iconOver, this);
		iconTwitterButton.events.onInputOut.add(this.iconOut, this);
		iconTwitterButton.events.onInputDown.add(this.iconDown, this);

		// var iconFacebookButton = this.game.add.button(iconXoffset, this.game.height * 0.9283, 'icons', this.iconFacebook, this, constants.iconFacebookOverFrame, constants.iconFacebookBaseFrame02, constants.iconFacebookBaseFrame02);
		var iconFacebookButton = this.game.add.button(iconXoffset, this.game.height * 0.9283, 'icons', this.iconFacebook, this);
		iconFacebookButton.anchor.setTo(0.5, 0.5);
		iconFacebookButton.frame = 14;
		iconFacebookButton.input.useHandCursor = true;
		iconFacebookButton.events.onInputOver.add(this.iconOver, this);
		iconFacebookButton.events.onInputOut.add(this.iconOut, this);
		iconFacebookButton.events.onInputDown.add(this.iconDown, this);

		var iconSoundButton = this.game.add.button(this.game.width - iconXoffset, this.game.height * 0.9283, 'icons', this.iconSound, this, constants.iconSoundOverFrame, constants.iconSoundBaseFrame, constants.iconSoundClickFrame);
		iconSoundButton.frame = 6;
		iconSoundButton.anchor.setTo(0.5, 0.5);
		// iconSoundButton.input.useHandCursor = true;
		// iconSoundButton.events.onInputOver.add(this.iconOver, this);
		// iconSoundButton.events.onInputOut.add(this.iconOut, this);
		// iconSoundButton.events.onInputDown.add(this.iconDown, this);
		// iconSoundButton.events.onInputUp.add(this.iconUp, this);

		// Text info
		var styleMenuText01 = { font: 'bold 12pt Arial', fill: '#3A3A3A', align: 'left' };
		var styleMenuText02 = { font: 'bold 10pt Arial', fill: '#3A3A3A', align: 'left' };

		var menuText = this.game.add.text(this.game.width / 2, this.game.height * 0.9533, 'Mitul Mistry ' + config.copyrightDate + ' v:' + config.version, styleMenuText01);
		menuText.anchor.setTo(0.5, 0.5);
		/*
		var menuText = this.game.add.text(this.game.width / 2, this.game.height * 0.98, 'Created with Phaser', styleMenuText02);
		menuText.anchor.setTo(0.5, 0.5);
		*/
		// Fade in
		var blackFade = this.game.add.sprite(0, 0, 'rectangle_black');
		blackFade.height = this.game.height;
		blackFade.width = this.game.width;
		var blackFadeTween = this.game.add.tween(blackFade);
		blackFadeTween.to({ alpha: 0 }, 500);
		blackFadeTween.start();
		blackFade.destroy;
	}

	iconOver(sprite) {
		if (sprite.frame === constants.iconTwitterBaseFrame02) {
			sprite.frame = constants.iconTwitterOverFrame;
		} else if (sprite.frame === constants.iconFacebookBaseFrame02) {
			sprite.frame = constants.iconFacebookOverFrame;
		}
		/* else if (sprite.frame === constants.iconSoundBaseFrame)
		{
			sprite.frame = constants.iconSoundOverFrame;
		}*/
	}

	iconOut(sprite) {
		if (sprite.frame === constants.iconTwitterOverFrame) {
			sprite.frame = constants.iconTwitterBaseFrame02;
		} else if (sprite.frame === constants.iconFacebookOverFrame) {
			sprite.frame = constants.iconFacebookBaseFrame02;
		}
		/* else if (sprite.frame === constants.iconSoundOverFrame || sprite.frame === constants.iconSoundClickFrame) {
			sprite.frame = constants.iconSoundBaseFrame;
		}*/
	}

	iconDown(sprite) {
		if (sprite.frame === constants.iconTwitterOverFrame) {
			sprite.frame = constants.iconTwitterBaseFrame02;
			// sprite.frame = constants.iconTwitterClickFrame;
			// this.game.time.events.add(500, iconOut(sprite), this);
		} else if (sprite.frame === constants.iconFacebookOverFrame) {
			sprite.frame = constants.iconFacebookBaseFrame02;
			// sprite.frame = constants.iconFacebookClickFrame;
		}
		/* else if (sprite.frame === constants.iconSoundOverFrame) {
			sprite.frame = constants.iconSoundClickFrame;
		}*/
	}/*
	iconUp: function (sprite) {
		if (sprite.frame === constants.iconSoundClickFrame) {
			sprite.frame = constants.iconSoundOverFrame;
		}
	},*/

	newGameStart() {
		// this.game.state.start('stateAdventure');
		// currentSaveGame = new saveGame();
		// currentSaveGame = new saveGame({ currentModule: MODULE_ASCENT_OF_MAN, currentNodeKey: 'AA000AA000AA' });

		// click01.play();
		this.game.state.start('GamePreload');
	}

	loadGameStart() {
		// this.game.state.start('stateAdventure');
	}
	/*
	quitGame: function () {
		this.game.destroy();
	},
	*/

	iconTwitter() {
		// Maybe have some funny tweets based on module you're playing, etc? 'I just killed a gopher'
		window.open('https://twitter.com/home?status=Check%20out%20the%20epic%20text%20adventure%20-%20%22The%20Valley%22%20http://MitulMistry.com/%20%23indiedev', '_blank');
	}

	iconFacebook() {
		window.open('https://www.facebook.com/sharer/sharer.php?u=http://MitulMistry.com', '_blank');
	}

	iconSound() {

	}
}
