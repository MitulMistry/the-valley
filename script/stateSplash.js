var splash = function (game) { }

splash.prototype = {
	create: function () {
		this.game.stage.backgroundColor = '#000000';

		var logo = this.game.add.sprite(this.game.width / 2, this.game.height / 2, "splashLogo");
		logo.anchor.setTo(0.5, 0.5);

		var blackFade = this.game.add.sprite(0, 0, "rectangle_black");
		blackFade.height = this.game.height;
		blackFade.width = this.game.width;
		var blackFadeTween = this.game.add.tween(blackFade);
		blackFadeTween.to({ alpha: 0 }, 500);
		blackFadeTween.start();

		//this.game.time.events.add(500, fade2, this);
		/*
		var blackFadeTween2 = this.game.add.tween(blackFade);
		blackFadeTween2.to({ alpha: 100 }, 500);
		blackFadeTween2.start();
		*/
		//blackFade.destroy;
		//this.game.state.start("stateMenu");
	},
	fade2: function () {
		this.game.stage.backgroundColor = '#660000';
		//this.game.add.tween(blackFade).to( { alpha: 100 }, 500);
	}
}