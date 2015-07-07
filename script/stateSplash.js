var splash = function (game) { }

splash.prototype = {
	create: function () {

		var fadeInLength = 750;
		var delay = 1500;
		var fadeOutLength = 300;

		this.game.stage.backgroundColor = '#000000';

		if (!debugMode) {

			var logo = this.game.add.sprite(this.game.width / 2, this.game.height / 2, "splashLogo");
			logo.anchor.setTo(0.5, 0.5);

			//Fade in
			var blackFade = this.game.add.sprite(0, 0, "rectangle_black");
			blackFade.height = this.game.height;
			blackFade.width = this.game.width;
			this.game.add.tween(blackFade).to({ alpha: 0 }, fadeInLength, Phaser.Easing.Linear.None, true);

			this.game.time.events.add(fadeInLength + delay, function () {

				//Fade out
				var blackFade2 = this.game.add.sprite(0, 0, "rectangle_black");
				blackFade2.height = this.game.height;
				blackFade2.width = this.game.width;
				blackFade2.alpha = 0;
				this.game.add.tween(blackFade2).to({ alpha: 1 }, fadeOutLength, Phaser.Easing.Linear.None, true);

			}, this);

			this.game.time.events.add(fadeInLength + delay + fadeOutLength, function () {

				this.game.state.start("stateMenu");

			}, this);
		}
		else
		{
			this.game.state.start("stateMenu");
		}

			
	}
}