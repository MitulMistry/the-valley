var theGame = function (game) {
	spriteNumber = null;
	number = 0;
	workingButtons = true;
	higher = true;
	score = 0;
}

theGame.prototype = {
	create: function () {
		//this.game.stage.backgroundColor = '#000099';
		
		var textBounding01;

		textBounding01 = new Phaser.Rectangle(150, 0, 500, 400);

		var style = { font: 'bold 12pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: this.game.width * .75};

		var text = this.game.add.text(this.game.width * .1, this.game.height * .1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a consequat sapien. Donec blandit est sem, maximus tempor augue sagittis id. Nullam luctus nibh turpis, ut imperdiet orci porttitor ac. Nam vel posuere orci. Vestibulum sed magna mi. Aenean quis porta turpis. Aliquam non venenatis lectus.", style);
		//var text = this.game.add.text(this.game.world.centerX -225, this.game.world.centerY * .5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a consequat sapien. Donec blandit est sem, maximus tempor augue sagittis id. Nullam luctus nibh turpis, ut imperdiet orci porttitor ac. Nam vel posuere orci. Vestibulum sed magna mi. Aenean quis porta turpis. Aliquam non venenatis lectus.", style);

		//text.anchor.set(0.5);
		
		text.inputEnabled = true;

		text.input.enableDrag({ lockCenter: false, pixelPerfect: false });
		//text.input.enableDrag({ pixelPerfect: false, boundsRect: textBounding01 });
	},
	
	render: function () {

		//this.game.debug.geom(textBounding01, '#000099');

	},/*
	update: function () {
	
	}*/
}