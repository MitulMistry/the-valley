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
		slider01 = this.game.add.sprite(this.game.width - frame01XPos, frame01YPos, "slider01");
		slider02 = this.game.add.sprite(this.game.width - frame02XPos, frame02YPos, "slider01");


		//--------Sliders--------
		//Maybe draw rectangle primitives instead? Then you can update them depending on size of text / screen
		slider01.inputEnabled = true;
		slider01.input.enableDrag({ boundsSprite: slider01back });
		slider01.input.boundsSprite = slider01back;
		slider01.events.onInputOver.add(this.over, this);
		slider01.events.onInputOut.add(this.out, this);

		//mouseStartDragCallback and mouseStopDragCallback
		//slider01.events.onDragStart.add(this.slider01Drag, this);

		slider02.inputEnabled = true;
		slider02.input.enableDrag({ boundsSprite: slider02back });
		slider02.input.boundsSprite = slider02back;

		//slider02.events.onDragStart.add(this.slider02Drag, this);

		//-------Masks-------

		//	A mask is a Graphics object
		var textMask01 = this.game.add.graphics(0, 0);
		var textMask02 = this.game.add.graphics(0, 0);

		//	Shapes drawn to the Graphics object must be filled.
		textMask01.beginFill(0xffffff);
		textMask01.drawRect(frame01XPos, frame01YPos, this.game.width, frame01Height);
		textMask02.beginFill(0xffffff);
		textMask02.drawRect(frame02XPos, frame02YPos, this.game.width, frame02Height);

		//var style = { font: 'bold 12pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: frame01Width };

		//Embedding fonts? Google Fonts?
		var style1 = { font: '13pt Berlin Sans FB', fill: '#EFB143', align: 'left', wordWrap: true, wordWrapWidth: frame01Width };
		var style2 = { font: 'bold 12pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: frame01Width };

		//Add story text to group? Then move group as a whole with slider?
		text1 = this.game.add.text(frame01XPos, frame01YPos, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a consequat sapien. Donec blandit est sem, maximus tempor augue sagittis id. Nullam luctus nibh turpis, ut imperdiet orci porttitor ac. Nam vel posuere orci. Vestibulum sed magna mi. Aenean quis porta turpis. Aliquam non venenatis lectus.\n\nQuisque eget lorem at lorem efficitur lobortis eget id purus. Donec a purus ac massa elementum sodales tincidunt id purus. Vestibulum viverra lectus quam, vel cursus augue ultrices convallis. Sed dictum vestibulum velit nec ornare. Vivamus vitae massa quis libero pharetra lacinia. Pellentesque tristique tellus id commodo dignissim.", style1);
		//text1.lineSpacing = 5;

		text1.mask = textMask01;

		//Add choices to group?
		text2 = this.game.add.text(frame02XPos, frame02YPos, "Morbi ultricies ante orci, vitae semper nibh consectetur dignissim. \n\nDonec odio turpis, pharetra vel dolor a, malesuada vulputate turpis. \n\nIn vel porta urna,volutpat auctor ante. \n\nPhasellus quam nisi, consequat in elementum ut, accumsan in ex.", style2);

		text2.mask = textMask02;
		
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

		var iconSoundButton = this.game.add.button(this.game.width - iconXoffset, this.game.height * 0.9283, "sound", this.iconSound, this);
		iconSoundButton.anchor.setTo(0.5, 0.5);
	},
	over: function () {
		//slider01.alpha = 0.5;
		slider01.loadTexture("slider01_hover");
		//sprite.loadTexture(change);
	},
	out: function () {
		//slider01.alpha = 1;
		slider01.loadTexture("slider01");
	},
	clicked: function () {
		//console.log('boom');
	},
	/*
	slider01Drag: function () {
		//this.game.stage.backgroundColor = '#550000';
		text1.y = slider01.y;
	},
	slider02Drag: function () {
		//this.game.stage.backgroundColor = '#000055';
		text2.y = slider02.y;
	},
	*/
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
		text1.y = -slider01.y + 145;
		text2.y = -slider02.y + 790;
	}
}