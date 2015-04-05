var theGame = function (game) {
	spriteNumber = null;
	//number = 0;
	workingButtons = true;
	//higher = true;
	//score = 0;
}

//global variables
var text1;
var text2;
var slider01;
var slider02;

var rightSliderGap01;
var text1_distance;
var text1_topGap;

var rightSliderGap02;
var text2_distance;
var text2_topGap;

theGame.prototype = {
	create: function () {
		this.game.stage.backgroundColor = '#000000';

		//BG
		var menuBG = this.game.add.sprite(this.game.width / 2, this.game.height / 2, "menu_bg01");
		menuBG.anchor.setTo(0.5, 0.5);
		menuBG.alpha = .75;

		//Rotate BG (50000)
		//this.game.add.tween(menuBG).to({ angle: 360 }, 370000, Phaser.Easing.Linear.None, true).loop(true);

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
		slider01back.height = frame01Height;
		slider02back.height = frame02Height;
		slider01 = this.game.add.sprite(this.game.width - frame01XPos, frame01YPos, "slider01");
		slider01.frame = 0;
		slider02 = this.game.add.sprite(this.game.width - frame02XPos, frame02YPos, "slider01");
		slider02.frame = 0;

		/*
		//Adjust sliders width
		slider01.width = 16;
		slider02.width = 16;
		slider01back.width = 16;
		slider02back.width = 16;
		*/

		//--------Sliders--------
		//Maybe use a 2x2 gray png and stretch to form borders instead? Then you can update them depending on size of text / screen
		slider01.inputEnabled = true;
		slider01.input.enableDrag({ boundsSprite: slider01back });
		slider01.input.boundsSprite = slider01back;
		slider01.events.onInputOver.add(this.over, this, slider01);
		slider01.events.onInputOut.add(this.out, this, slider01);
		slider01.events.onInputDown.add(this.down, this, slider01);

		slider02.inputEnabled = true;
		slider02.input.enableDrag({ boundsSprite: slider02back });
		slider02.input.boundsSprite = slider02back;
		slider02.events.onInputOver.add(this.over, this, slider02);
		slider02.events.onInputOut.add(this.out, this, slider02);
		slider02.events.onInputDown.add(this.down, this, slider02);
				
		//-------Masks-------

		//	A mask is a Graphics object
		var textMask01 = this.game.add.graphics(0, 0);
		var textMask02 = this.game.add.graphics(0, 0);

		//	Shapes drawn to the Graphics object must be filled.
		textMask01.beginFill(0xffffff);
		textMask01.drawRect(frame01XPos, frame01YPos, this.game.width, frame01Height);
		textMask02.beginFill(0xffffff);
		textMask02.drawRect(frame02XPos, frame02YPos, this.game.width, frame02Height);

		//Embedding fonts? Google Fonts?
		var style1 = { font: '13pt Berlin Sans FB', fill: '#EFB143', align: 'left', wordWrap: true, wordWrapWidth: frame01Width };
		var style2 = { font: 'bold 12pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: frame01Width };

		//Add story text to group? Then move group as a whole with slider?
		text1 = this.game.add.text(frame01XPos, frame01YPos, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a consequat sapien. Donec blandit est sem, maximus tempor augue sagittis id. Nullam luctus nibh turpis, ut imperdiet orci porttitor ac. Nam vel posuere orci. Vestibulum sed magna mi. Aenean quis porta turpis. Aliquam non venenatis lectus.\n\nQuisque eget lorem at lorem efficitur lobortis eget id purus. Donec a purus ac massa elementum sodales tincidunt id purus. Vestibulum viverra lectus quam, vel cursus augue ultrices convallis. Sed dictum vestibulum velit nec ornare. Vivamus vitae massa quis libero pharetra lacinia. Pellentesque tristique tellus id commodo dignissim.\n\nProin molestie sagittis enim sit amet luctus. Pellentesque quis sollicitudin diam, vel rutrum leo. Suspendisse dapibus purus vel odio convallis porta. Maecenas suscipit faucibus magna id blandit. Phasellus magna nunc, suscipit vitae bibendum eget, dapibus eu est. Etiam elit neque, sagittis eget ante sed, lobortis pretium nibh. Vivamus facilisis auctor est eget aliquam. Vestibulum quis neque in lectus porta mollis.\n\nAliquam eget lectus et dui sollicitudin consectetur vitae nec velit. Pellentesque eget ante vehicula, tincidunt est sit amet, lacinia ligula. Quisque et ultricies nisi, sodales sagittis elit. Integer suscipit odio justo, nec consequat urna sagittis in. Maecenas non arcu non nulla ultrices lobortis vitae at leo. Etiam vel nisl nisi. Curabitur pellentesque, elit porta sodales pharetra, metus libero cursus libero, nec dictum eros ex nec urna. Fusce convallis facilisis semper. Quisque ultrices dignissim nibh.", style1);
		//text1.lineSpacing = 5;

		text1.mask = textMask01;

		//Add choices to group?
		text2 = this.game.add.text(frame02XPos, frame02YPos, "Morbi ultricies ante orci, vitae semper nibh consectetur dignissim. \n\nDonec odio turpis, pharetra vel dolor a, malesuada vulputate turpis. \n\nIn vel porta urna,volutpat auctor ante. \n\nPhasellus quam nisi, consequat in elementum ut, accumsan in ex.\n\nSed pulvinar nunc urna, in porttitor lectus imperdiet nec.\n\nSuspendisse accumsan congue gravida. \n\nPhasellus quam nisi, consequat in elementum ut, accumsan in ex.\n\nSed pulvinar nunc urna, in porttitor lectus imperdiet nec.\n\nSuspendisse accumsan congue gravida.", style2);
		text2.lineSpacing = -3.5;

		text2.mask = textMask02;
		
		//Adjust slider height based on amount of text, or else hide
		if (text1.height > frame01Height)
		{
			slider01.visible = true;
			slider01back.visible = true;
			slider01.height = (frame01Height / text1.height) * frame01Height;
		} else {
			slider01.height = frame01Height;
			slider01.visible = false;
			slider01back.visible = false;
		}

		if (text2.height > frame02Height) {
			slider02.visible = true;
			slider02back.visible = true;
			slider02.height = (frame02Height / text2.height) * frame02Height;
		} else {
			slider02.height = frame02Height;
			slider02.visible = false;
			slider02back.visible = false;
		}

		//Slider movement calculations
		rightSliderGap01 = slider01back.height - slider01.height;
		text1_distance = (rightSliderGap01 / slider01back.height) * text1.height;
		text1_topGap = frame01YPos;

		rightSliderGap02 = slider02back.height - slider02.height;
		text2_distance = (rightSliderGap02 / slider02back.height) * text2.height;
		text2_topGap = frame02YPos;

		//text1.inputEnabled = true;
		//text1.input.enableDrag({ lockCenter: false, pixelPerfect: false });
		//text1.input.enableDrag({ pixelPerfect: false, boundsRect: textBounding01 });

		//--------Icons--------
		var iconXoffset = this.game.width * .0625;

		var iconTwitterButton = this.game.add.button(iconXoffset, this.game.height * 0.8267, "twitter", this.iconTwitter, this);
		iconTwitterButton.anchor.setTo(0.5, 0.5);
		iconTwitterButton.input.useHandCursor = true;

		var iconFacebookButton = this.game.add.button(iconXoffset, this.game.height * 0.9283, "facebook", this.iconFacebook, this);
		iconFacebookButton.anchor.setTo(0.5, 0.5);
		iconFacebookButton.input.useHandCursor = true;

		var iconFontButton = this.game.add.button(this.game.width - iconXoffset, this.game.height * 0.72, "font", this.iconFont, this);
		iconFontButton.anchor.setTo(0.5, 0.5);

		var iconSaveButton = this.game.add.button(this.game.width - iconXoffset, this.game.height * 0.8267, "save", this.iconSave, this);
		iconSaveButton.anchor.setTo(0.5, 0.5);
		iconSaveButton.input.useHandCursor = true;

		var iconSoundButton = this.game.add.button(this.game.width - iconXoffset, this.game.height * 0.9283, "sound", this.iconSound, this);
		iconSoundButton.anchor.setTo(0.5, 0.5);
	},
	over: function (sprite) {
		sprite.frame = 1;
	},
	out: function (sprite) {
		sprite.frame = 0;
	},
	down: function (sprite) {
		sprite.frame = 2;
	},/*
	clicked: function () {
		//console.log('boom');
	},*/
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

	},/*
	render: function () {

		//this.game.debug.geom(textBounding01, '#000099');
		//this.game.debug.geom(floor,'#0fffff');

	},*/
	update: function () {
		//text1.y = -slider01.y + 145;
		//text2.y = -slider02.y + 770;

		//Move text based on sliders
		text1.y = text1_topGap - (((slider01.y - text1_topGap) / rightSliderGap01) * text1_distance);

		text2.y = text2_topGap - (((slider02.y - text2_topGap) / rightSliderGap02) * text2_distance);
	}
}