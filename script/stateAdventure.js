var theGame = function (game) {
	spriteNumber = null;
	number = 0;
	workingButtons = true;
	higher = true;
	score = 0;
}

theGame.prototype = {
	create: function () {
		this.game.stage.backgroundColor = '#000000';

		var frame01Width = this.game.width * 0.7225;
		var frame01Height = this.game.height * 0.5;
		var frame01XPos = ((this.game.width - frame01Width) / 2) - 11;
		var frame01YPos = this.game.height * 0.12;
		
		var frame02Width = frame01Width;
		var frame02Height = this.game.height * 0.3067;
		var frame02XPos = frame01XPos;
		var frame02YPos = ((this.game.height - frame01YPos - frame01Height - frame02Height) / 2) + frame01YPos + frame01Height;

		//var textBounding01;

		//textBounding01 = new Phaser.Rectangle(150, 0, 500, 400);

		//var style = { font: 'bold 12pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: frame01Width };

		//Embedding fonts? Google Fonts?
		var style1 = { font: '14pt Berlin Sans FB', fill: '#EFB143', align: 'left', wordWrap: true, wordWrapWidth: frame01Width };
		var style2 = { font: 'bold 12pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: frame01Width };

		var text1 = this.game.add.text(frame01XPos, frame01YPos, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a consequat sapien. Donec blandit est sem, maximus tempor augue sagittis id. Nullam luctus nibh turpis, ut imperdiet orci porttitor ac. Nam vel posuere orci. Vestibulum sed magna mi. Aenean quis porta turpis. Aliquam non venenatis lectus.", style1);
		var text2 = this.game.add.text(frame02XPos, frame02YPos, "Morbi ultricies ante orci, vitae semper nibh consectetur dignissim. Donec odio turpis, pharetra vel dolor a, malesuada vulputate turpis. In vel porta urna, volutpat auctor ante. Phasellus quam nisi, consequat in elementum ut, accumsan in ex. Donec feugiat dapibus fringilla.", style2);

		//text1.anchor.set(0.5);
		
		text1.inputEnabled = true;
		text1.input.enableDrag({ lockCenter: false, pixelPerfect: false });
		//text1.input.enableDrag({ pixelPerfect: false, boundsRect: textBounding01 });
	},
	
	render: function () {

		//this.game.debug.geom(textBounding01, '#000099');

	}/*,
	update: function () {
	
	}*/
}