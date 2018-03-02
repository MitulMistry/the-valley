import Phaser from 'phaser';

import globals from '../globals/globals';

export default class extends Phaser.State {
	create() {
		// music = this.add.audio("01Ambient");
		// music.volume = .5;
		// music.loop = true;
		// music.play();

		//click01 = this.add.audio("click01");
		//click01.volume = .7;

		var fadeInLength = 750;
		var delay = 1500;
		var fadeOutLength = 300;

		this.stage.backgroundColor = '#000000';

		if (!globals.debugMode) {
			var logo = this.add.sprite(this.game.width / 2, this.game.height / 2, "splashLogo");
			logo.anchor.setTo(0.5, 0.5);

			//Fade in
			var blackFade = this.add.sprite(0, 0, "rectangle_black");
			blackFade.height = this.game.height;
			blackFade.width = this.game.width;
			this.add.tween(blackFade).to({ alpha: 0 }, fadeInLength, Phaser.Easing.Linear.None, true);

			this.time.events.add(fadeInLength + delay, function () {
			//this.time.events.add(1500, function () {

				//Fade out
				var blackFade2 = this.add.sprite(0, 0, "rectangle_black");
				blackFade2.height = this.game.height;
				blackFade2.width = this.game.width;
				blackFade2.alpha = 0;
				this.add.tween(blackFade2).to({ alpha: 1 }, fadeOutLength, Phaser.Easing.Linear.None, true);

			}, this);

			this.time.events.add(fadeInLength + delay + fadeOutLength, function () {

				this.state.start("Menu");

			}, this);
		}
		else
		{
			this.state.start("Menu");
		}

	}
}
