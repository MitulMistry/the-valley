var theGame = function (game) {
	spriteNumber = null;
	number = 0;
	workingButtons = true;
	higher = true;
	score = 0;
}

theGame.prototype = {
	create: function () {
		var textBounding01;

		textBounding01 = new Phaser.Rectangle(150, 0, 500, 400);

		var style = { font: 'bold 14pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450 };

		var text = game.add.text(game.world.centerX, game.world.centerY * .75, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a consequat sapien. Donec blandit est sem, maximus tempor augue sagittis id. Nullam luctus nibh turpis, ut imperdiet orci porttitor ac. Nam vel posuere orci. Vestibulum sed magna mi. Aenean quis porta turpis. Aliquam non venenatis lectus.", style);

		text.anchor.set(0.5);

		text.inputEnabled = true;

		text.input.enableDrag({ pixelPerfect: false, boundsRect: textBounding01 });
	},
	render: function () {

		//game.debug.geom(textBounding01, '#000099');

	},
	fupdate: function () {
	}
}