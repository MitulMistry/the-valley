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

		var slider01back = this.game.add.sprite(this.game.width - frame01XPos, frame01YPos, "slider01_back");
		var slider02back = this.game.add.sprite(this.game.width - frame02XPos, frame02YPos, "slider02_back");
		var slider01 = this.game.add.sprite(this.game.width - frame01XPos, frame01YPos, "slider01");
		var slider02 = this.game.add.sprite(this.game.width - frame02XPos, frame02YPos, "slider01");

		//--------Sliders--------
		//Maybe draw rectangle primitives instead? Then you can update them depending on size of text / screen
		slider01.inputEnabled = true;
		slider01.input.enableDrag({ boundsSprite: slider01back });
		slider01.input.boundsSprite = slider01back;

		//mouseStartDragCallback and mouseStopDragCallback

		slider02.inputEnabled = true;
		slider02.input.enableDrag({ boundsSprite: slider02back });
		slider02.input.boundsSprite = slider02back;

		//var textBounding01;

		//textBounding01 = new Phaser.Rectangle(150, 0, 500, 400);

		//var style = { font: 'bold 12pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: frame01Width };

		//Embedding fonts? Google Fonts?
		var style1 = { font: '13pt Berlin Sans FB', fill: '#EFB143', align: 'left', wordWrap: true, wordWrapWidth: frame01Width };
		var style2 = { font: 'bold 12pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: frame01Width };

		//Add story text to group? Then move group as a whole with slider?
		var text1 = this.game.add.text(frame01XPos, frame01YPos, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a consequat sapien. Donec blandit est sem, maximus tempor augue sagittis id. Nullam luctus nibh turpis, ut imperdiet orci porttitor ac. Nam vel posuere orci. Vestibulum sed magna mi. Aenean quis porta turpis. Aliquam non venenatis lectus.\n\nQuisque eget lorem at lorem efficitur lobortis eget id purus. Donec a purus ac massa elementum sodales tincidunt id purus. Vestibulum viverra lectus quam, vel cursus augue ultrices convallis. Sed dictum vestibulum velit nec ornare. Vivamus vitae massa quis libero pharetra lacinia. Pellentesque tristique tellus id commodo dignissim.", style1);
		//text1.lineSpacing = 5;

		//Add choices to group?
		var text2 = this.game.add.text(frame02XPos, frame02YPos, "Morbi ultricies ante orci, vitae semper nibh consectetur dignissim. \n\nDonec odio turpis, pharetra vel dolor a, malesuada vulputate turpis. \n\nIn vel porta urna,volutpat auctor ante. \n\nPhasellus quam nisi, consequat in elementum ut, accumsan in ex.", style2);

		//text1.anchor.set(0.5);
		
		text1.inputEnabled = true;
		text1.input.enableDrag({ lockCenter: false, pixelPerfect: false });
		//text1.input.enableDrag({ pixelPerfect: false, boundsRect: textBounding01 });

		//--------Icons--------
		var iconXoffset = this.game.width * .0625;

		var iconTwitterButton = this.game.add.button(iconXoffset, this.game.height * 0.8267, "twitter", this.iconTwitter, this);
		iconTwitterButton.anchor.setTo(0.5, 0.5);

		var iconFacebookButton = this.game.add.button(iconXoffset, this.game.height * 0.9283, "facebook", this.iconFacebook, this);
		iconFacebookButton.anchor.setTo(0.5, 0.5);

		var iconFontButton = this.game.add.button(this.game.width - iconXoffset, this.game.height * 0.72, "font", this.iconFont, this);
		iconFontButton.anchor.setTo(0.5, 0.5);

		var iconSaveButton = this.game.add.button(this.game.width - iconXoffset, this.game.height * 0.8267, "save", this.iconSave, this);
		iconSaveButton.anchor.setTo(0.5, 0.5);

		var iconSoundButton = this.game.add.button(this.game.width - iconXoffset, this.game.height * 0.9283, "sound", this.iconSound, this);
		iconSoundButton.anchor.setTo(0.5, 0.5);
	},
	iconTwitter: function () {
		window.open("https://twitter.com/home?status=Check%20out%20the%20epic%20text%20adventure%20-%20%22The%20Valley%22%20http://MitulMistry.com/%20%23indiedev", '_blank');
	},
	iconFacebook: function () {
		window.open("https://www.facebook.com/sharer/sharer.php?u=http://MitulMistry.com", '_blank');
	},
	iconFont: function () {

	},
	iconSave: function () {
		this.game.state.start("stateMenu");
	},
	iconSound: function () {

	},
	
	render: function () {

		//this.game.debug.geom(textBounding01, '#000099');

	}/*,
	update: function () {
	
	}*/
}