var theGame = function (game) {

}

//Sprite sheet frame numbers
var iconFontBaseFrame = 0;
var iconFontOverFrame = 1;
var iconFontClickFrame = 2;
var iconSaveBaseFrame = 3;
var iconSaveOverFrame = 4;
var iconSaveClickFrame = 5;
var iconSoundBaseFrame = 6;
var iconSoundOverFrame = 7;
var iconSoundClickFrame = 8;
var iconTwitterBaseFrame01 = 9;
var iconTwitterBaseFrame02 = 10;
var iconTwitterOverFrame = 11;
var iconTwitterClickFrame = 12;
var iconFacebookBaseFrame01 = 13;
var iconFacebookBaseFrame02 = 14;
var iconFacebookOverFrame = 15;
var iconFacebookClickFrame = 16;

//DEBUG MODE - turn on and off
var debugMode = true;
var testPASSED = false; //DEBUG - delete

//global variables
var text1;
var text2;
var slider01;
var slider02;
var slider01back;
var slider02back;

var choicesTextGroup;
var choice1;
var choice2;
var choice3;
var choice4;
var choice5;
var choicesSpacer = 15;
var loadedChoices = []; //array of index numbers to be used in the loaded JSON choice data object
var choicesHeight = 100;
var continueText = "Continue..."; //Text to show when the choice is only to continue

var rightSliderGap01;
var text1_distance;
var text1_topGap;

var rightSliderGap02;
var text2_distance;
var text2_topGap;

var frame01Width;
var frame01Height;
var frame01XPos;
var frame01YPos;

var frame02Width;
var frame02Height;
var frame02XPos;
var frame02YPos;

var mainFont = '13pt Berlin Sans FB';
var mainFontColor = '#FFBD29';
var choiceColor = '#FFFFFF';
var choiceHighlightColor = '#FFF700';
var choicePressColor = '#FFB000';
var fontColorPower = '#F45E14';
var fontColorKarma = '#12B516';
var fontColorIntellect = '#00B0FF';
var fontColorLove = '#FC32DA';
var fontColorDarkTetrad = '#E60B1A';

var textPrint;

//currentNodeKey = "AA001AD000AA";

/*
--Relocated to stateMenu.js
var currentNodeKey = "AA001AD000AA"; //AA000AA000AB

var mainTextManager = new textManager(MODULE_ASCENT_OF_MAN);

var testContinue = false;
*/

theGame.prototype = {
	create: function () {
		this.game.stage.backgroundColor = '#000000';

		//BG
		var menuBG = this.game.add.sprite(this.game.width / 2, this.game.height / 2, "menu_bg01");
		menuBG.anchor.setTo(0.5, 0.5);
		menuBG.alpha = .75;

		//Rotate BG (50000)
		//this.game.add.tween(menuBG).to({ angle: 360 }, 370000, Phaser.Easing.Linear.None, true).loop(true);

		var blackGradient = this.game.add.sprite(0, 0, "blackGradient");
		var blackGradient2 = this.game.add.sprite(0, 0, "blackGradient");
		blackGradient.width = this.game.width;
		blackGradient2.width = this.game.width;
		blackGradient2.y = this.game.height;
		blackGradient2.scale.y = -1;

		//Dimensions of the text windows 
		frame01Width = this.game.width * 0.7225;
		frame01Height = this.game.height * 0.5;
		frame01XPos = ((this.game.width - frame01Width) / 2) - 11;
		frame01YPos = this.game.height * 0.12;
		
		frame02Width = frame01Width;
		frame02Height = this.game.height * 0.275; //0.3067
		frame02XPos = frame01XPos;
		frame02YPos = ((this.game.height - frame01YPos - frame01Height - frame02Height) / 2) + frame01YPos + frame01Height;

		slider01back = this.game.add.sprite(this.game.width - frame01XPos, frame01YPos, "slider01_back");
		slider02back = this.game.add.sprite(this.game.width - frame02XPos, frame02YPos, "slider02_back");
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
		slider01.input.dragFromCenter = false;
		slider01.input.allowHorizontalDrag = false;
		slider01.events.onInputOver.add(this.sliderOver, this);
		slider01.events.onInputOut.add(this.sliderOut, this);
		slider01.events.onInputDown.add(this.sliderDown, this);

		slider02.inputEnabled = true;
		slider02.input.enableDrag({ boundsSprite: slider02back });
		slider02.input.boundsSprite = slider02back;
		slider02.input.dragFromCenter = false;
		slider02.input.allowHorizontalDrag = false;
		slider02.events.onInputOver.add(this.sliderOver, this);
		slider02.events.onInputOut.add(this.sliderOut, this);
		slider02.events.onInputDown.add(this.sliderDown, this);

		//Debug items (Strip from final build)
		//-------------------------------------
		//currentNodeKey = "AA000AA000AB"; //Change start node for testing.
		//currentNodeKey = "AA001AH001AD";

		var textPointsPower;
		var textPointsKarma;
		var textPointsIntellect;
		var textPointsLove;
		var textPointsDarkTetrad;
		
		var stylePointsPower = { font: mainFont, fill: fontColorPower, align: 'left', wordWrap: true, wordWrapWidth: frame01Width };
		var stylePointsKarma = { font: mainFont, fill: fontColorKarma, align: 'left', wordWrap: true, wordWrapWidth: frame01Width };
		var stylePointsIntellect = { font: mainFont, fill: fontColorIntellect, align: 'left', wordWrap: true, wordWrapWidth: frame01Width };
		var stylePointsLove = { font: mainFont, fill: fontColorLove, align: 'left', wordWrap: true, wordWrapWidth: frame01Width };
		var stylePointsDarkTetrad = { font: mainFont, fill: fontColorDarkTetrad, align: 'left', wordWrap: true, wordWrapWidth: frame01Width };
		
		//currentSaveGame.playerPower
		if (debugMode) {
			textPointsPower = this.game.add.text(this.game.width - frame01XPos + 30, frame01YPos, "100", stylePointsPower);
			textPointsKarma = this.game.add.text(this.game.width - frame01XPos + 30, frame01YPos + 20, "100", stylePointsKarma);
			textPointsIntellect = this.game.add.text(this.game.width - frame01XPos + 30, frame01YPos + 40, "100", stylePointsIntellect);
			textPointsLove = this.game.add.text(this.game.width - frame01XPos + 30, frame01YPos + 60, "100", stylePointsLove);
			textPointsDarkTetrad = this.game.add.text(this.game.width - frame01XPos + 30, frame01YPos + 80, "100", stylePointsDarkTetrad);
		}

		//To test if the code is getting to a breakpoint (before reaching this line), put textTest = true;
		var textTEST;
		if (debugMode && testPASSED) {
			textTEST = this.game.add.text(this.game.width / 2, frame01YPos / 2, "TEST PASSED", stylePointsKarma);
		textTEST.anchor.setTo(0.5, 0.5);}

		//-------------------------------------
		
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
		var style1 = { font: mainFont, fill: mainFontColor, align: 'left', wordWrap: true, wordWrapWidth: frame01Width };
		var style2 = { font: 'bold 12pt Arial', fill: choiceColor, align: 'left', wordWrap: true, wordWrapWidth: frame01Width };

		choicesTextGroup = this.game.add.group();

		//var textPrint = testStoryModuleMap.get(currentNodeKey);
		//var textPrint = mainTextManager.getText(currentNodeKey);

		textPrint = currentModuleTextMap.get(currentNodeKey);
		
		//text1 = this.game.add.text(frame01XPos, frame01YPos, textPrint, style1);

		text1 = this.game.add.text(frame01XPos, frame01YPos, "Morbi ultricies ante orci, vitae semper nibh consectetur dignissim. \n\nDonec odio turpis, pharetra vel dolor a, malesuada vulputate turpis. In vel porta urna,volutpat auctor ante. Phasellus quam nisi, consequat in elementum ut, accumsan in ex.\n\nSed pulvinar nunc urna, in porttitor lectus imperdiet nec. Suspendisse accumsan congue gravida. \n\nPhasellus quam nisi, consequat in elementum ut, accumsan in ex. Sed pulvinar nunc urna, in porttitor lectus imperdiet nec.\n\nSuspendisse accumsan congue gravida.", style1);
		//text1.lineSpacing = 5;

		text1.mask = textMask01;

		//Add choices to group? Then move group as a whole with slider?
		choice1 = this.game.add.text(frame02XPos, frame02YPos, "Choice 1: Morbi ultricies ante orci, vitae semper nibh consectetur dignissim. Sed pulvinar nunc urna, in porttitor lectus imperdiet nec. Suspendisse accumsan congue gravida.", style2, choicesTextGroup);
		choice1.inputEnabled = true;
		choice1.input.useHandCursor = true;
		choice1.events.onInputOver.add(this.choiceOver, this);
		choice1.events.onInputOut.add(this.choiceOut, this);
		choice1.events.onInputDown.add(this.choiceDown, this);
		choice1.events.onInputUp.add(this.choiceUp1, this);

		choice2 = this.game.add.text(frame02XPos, frame02YPos + choice1.height + choicesSpacer, "Choice 2: Donec odio turpis, pharetra vel dolor a, malesuada vulputate turpis. Phasellus quam nisi, consequat in elementum ut, accumsan in ex.", style2, choicesTextGroup);
		choice2.inputEnabled = true;
		choice2.input.useHandCursor = true;
		choice2.events.onInputOver.add(this.choiceOver, this);
		choice2.events.onInputOut.add(this.choiceOut, this);
		choice2.events.onInputDown.add(this.choiceDown, this);
		choice2.events.onInputUp.add(this.choiceUp2, this);

		choice3 = this.game.add.text(frame02XPos, frame02YPos + choice1.height + choice2.height + (choicesSpacer * 2), "Choice 3: In vel porta urna,volutpat auctor ante.", style2, choicesTextGroup);
		choice3.inputEnabled = true;
		choice3.input.useHandCursor = true;
		choice3.events.onInputOver.add(this.choiceOver, this);
		choice3.events.onInputOut.add(this.choiceOut, this);
		choice3.events.onInputDown.add(this.choiceDown, this);
		choice3.events.onInputUp.add(this.choiceUp3, this);

		choice4 = this.game.add.text(frame02XPos, frame02YPos + choice1.height + choice2.height + choice3.height + (choicesSpacer * 3), "Choice 4: Phasellus quam nisi, consequat in elementum ut, accumsan in ex.", style2, choicesTextGroup);
		choice4.inputEnabled = true;
		choice4.input.useHandCursor = true;
		choice4.events.onInputOver.add(this.choiceOver, this);
		choice4.events.onInputOut.add(this.choiceOut, this);
		choice4.events.onInputDown.add(this.choiceDown, this);
		choice4.events.onInputUp.add(this.choiceUp4, this);

		choice5 = this.game.add.text(frame02XPos, frame02YPos + choice1.height + choice2.height + choice3.height + +choice4.height + (choicesSpacer * 4), "Choice 5: Suspendisse accumsan congue gravida. Phasellus quam nisi, consequat in elementum ut, accumsan in ex.", style2, choicesTextGroup);
		choice5.inputEnabled = true;
		choice5.input.useHandCursor = true;
		choice5.events.onInputOver.add(this.choiceOver, this);
		choice5.events.onInputOut.add(this.choiceOut, this);
		choice5.events.onInputDown.add(this.choiceDown, this);
		choice5.events.onInputUp.add(this.choiceUp5, this);

		choicesTextGroup.mask = textMask02;
		//choicesTextGroup.anchor.setTo(0, 0);

		this.loadChoices();

		/*text2 = this.game.add.text(frame02XPos, frame02YPos, "Morbi ultricies ante orci, vitae semper nibh consectetur dignissim. \n\nDonec odio turpis, pharetra vel dolor a, malesuada vulputate turpis. \n\nIn vel porta urna,volutpat auctor ante. \n\nPhasellus quam nisi, consequat in elementum ut, accumsan in ex.\n\nSed pulvinar nunc urna, in porttitor lectus imperdiet nec.\n\nSuspendisse accumsan congue gravida. \n\nPhasellus quam nisi, consequat in elementum ut, accumsan in ex.\n\nSed pulvinar nunc urna, in porttitor lectus imperdiet nec.\n\nSuspendisse accumsan congue gravida.", style2);
		text2.lineSpacing = -3.5;

		text2.mask = textMask02;
		*/
		this.adjustSliders();

		//Slider movement calculations
		rightSliderGap01 = slider01back.height - slider01.height;
		text1_distance = (rightSliderGap01 / slider01back.height) * text1.height;
		text1_topGap = frame01YPos;

		rightSliderGap02 = slider02back.height - slider02.height;
		text2_distance = (rightSliderGap02 / slider02back.height) * choicesTextGroup.height;
		text2_topGap = frame02YPos;

		/*rightSliderGap02 = slider02back.height - slider02.height;
		text2_distance = (rightSliderGap02 / slider02back.height) * text2.height;
		text2_topGap = frame02YPos;*/

		//text1.inputEnabled = true;
		//text1.input.enableDrag({ lockCenter: false, pixelPerfect: false });
		//text1.input.enableDrag({ pixelPerfect: false, boundsRect: textBounding01 });

		//For some reason text1 needs to be updated here and if you update earlier it shows up all wonky
		text1.setText(textPrint); //!!!!!!!!!
		this.adjustSliders();

		//--------Icons--------
		var iconXoffset = this.game.width * .0625;

		var iconTwitterButton = this.game.add.button(iconXoffset, this.game.height * 0.8267, "icons", this.iconTwitter, this);
		iconTwitterButton.anchor.setTo(0.5, 0.5);
		iconTwitterButton.frame = 9;
		iconTwitterButton.input.useHandCursor = true;
		iconTwitterButton.events.onInputOver.add(this.iconOver, this);
		iconTwitterButton.events.onInputOut.add(this.iconOut, this);
		iconTwitterButton.events.onInputDown.add(this.iconDown, this);

		var iconFacebookButton = this.game.add.button(iconXoffset, this.game.height * 0.9283, "icons", this.iconFacebook, this);
		iconFacebookButton.anchor.setTo(0.5, 0.5);
		iconFacebookButton.frame = 13;
		iconFacebookButton.input.useHandCursor = true;
		iconFacebookButton.events.onInputOver.add(this.iconOver, this);
		iconFacebookButton.events.onInputOut.add(this.iconOut, this);
		iconFacebookButton.events.onInputDown.add(this.iconDown, this);

		var iconFontButton = this.game.add.button(this.game.width - iconXoffset, this.game.height * 0.72, "icons", this.iconFont, this, iconFontOverFrame, iconFontBaseFrame, iconFontClickFrame);
		iconFontButton.anchor.setTo(0.5, 0.5);
		iconFontButton.frame = iconFontBaseFrame;

		var iconSaveButton = this.game.add.button(this.game.width - iconXoffset, this.game.height * 0.8267, "icons", this.iconSave, this, iconSaveOverFrame, iconSaveBaseFrame, iconSaveClickFrame);
		iconSaveButton.anchor.setTo(0.5, 0.5);
		iconSaveButton.frame = iconSaveBaseFrame;
		iconSaveButton.input.useHandCursor = true;

		var iconSoundButton = this.game.add.button(this.game.width - iconXoffset, this.game.height * 0.9283, "icons", this.iconSound, this, iconSoundOverFrame, iconSoundBaseFrame, iconSoundClickFrame);
		iconSoundButton.anchor.setTo(0.5, 0.5);
		iconSoundButton.frame = iconSoundBaseFrame;

		//Fade in
		var blackFade = this.game.add.sprite(0, 0, "rectangle_black");
		blackFade.height = this.game.height;
		blackFade.width = this.game.width;
		var blackFadeTween = this.game.add.tween(blackFade);
		blackFadeTween.to({ alpha: 0 }, 500);
		blackFadeTween.start();
		blackFade.destroy;
	},
	sliderOver: function (sprite) {
		sprite.frame = 1;
	},
	sliderOut: function (sprite) {
		sprite.frame = 0;
	},
	sliderDown: function (sprite) {
		sprite.frame = 2;
	},
	iconOver: function (sprite) {
		if (sprite.frame === iconTwitterBaseFrame01) {
			sprite.frame = iconTwitterBaseFrame02;
		}
		else if (sprite.frame === iconFacebookBaseFrame01) {
			sprite.frame = iconFacebookBaseFrame02;
		}
	},
	iconOut: function (sprite) {
		if (sprite.frame === iconTwitterBaseFrame02) {
			sprite.frame = iconTwitterBaseFrame01;
		}
		else if (sprite.frame === iconFacebookBaseFrame02) {
			sprite.frame = iconFacebookBaseFrame01;
		}
	},
	iconDown: function (sprite) {
		if (sprite.frame === iconTwitterBaseFrame02) {
			sprite.frame = iconTwitterBaseFrame01;
		}
		else if (sprite.frame === iconFacebookBaseFrame02) {
			sprite.frame = iconFacebookBaseFrame01;
		}
	},
	iconTwitter: function () {
		window.open("https://twitter.com/home?status=Check%20out%20the%20epic%20text%20adventure%20-%20%22The%20Valley%22%20http://MitulMistry.com/%20%23indiedev", '_blank');
	},
	iconFacebook: function () {
		window.open("https://www.facebook.com/sharer/sharer.php?u=http://MitulMistry.com", '_blank');
	},
	iconFont: function () {
		//textPrint = currentModuleTextMap.get(currentNodeKey);
		//text1.setText(textPrint);
	},
	iconSave: function () {
		this.game.state.start("stateMenu");
	},
	iconSound: function () {

	},
	adjustSliders: function() {
		//Adjust slider height based on amount of text, or else hide
		if (text1.height > frame01Height) {
			slider01.visible = true;
			slider01back.visible = true;
			slider01.height = (frame01Height / text1.height) * frame01Height;
		} else {
			slider01.height = frame01Height;
			slider01.visible = false;
			slider01back.visible = false;
		}		
		if (choicesHeight > frame02Height) {
			slider02.visible = true;
			slider02back.visible = true;
			slider02.height = (frame02Height / choicesHeight) * frame02Height;
		} else {
			slider02.height = frame02Height;
			slider02.visible = false;
			slider02back.visible = false;
		}
		/*if (choicesTextGroup.height > frame02Height) {
			slider02.visible = true;
			slider02back.visible = true;
			slider02.height = (frame02Height / choicesTextGroup.height) * frame02Height;
		} else {
			slider02.height = frame02Height;
			slider02.visible = false;
			slider02back.visible = false;
		}*/
	},
	choiceOver: function (item) {
		item.fill = choiceHighlightColor;
	},
	choiceOut: function (item) {
		item.fill = choiceColor;
		//item.fill = previous fill color;
	},
	choiceDown: function (item) {
		item.fill = choicePressColor;
	},
	choiceUp1: function (item) {
		//http://www.html5gamedevs.com/topic/5351-call-a-function-with-arguments-when-oninputdown/
		item.fill = choiceHighlightColor;
		this.makeDecision(1);
	},
	choiceUp2: function (item) {
		item.fill = choiceHighlightColor;
		this.makeDecision(2);
	},
	choiceUp3: function (item) {
		item.fill = choiceHighlightColor;
		this.makeDecision(3);
	},
	choiceUp4: function (item) {
		item.fill = choiceHighlightColor;
		this.makeDecision(4);
	},
	choiceUp5: function (item) {
		item.fill = choiceHighlightColor;
		this.makeDecision(5);
	},
	loadChoices: function() {
		var stringTest;
		loadedChoices.length = 0; //Clear the array

		//Reset choice colors to white
		choice1.fill = choiceColor;
		choice2.fill = choiceColor;
		choice3.fill = choiceColor;
		choice4.fill = choiceColor;
		choice5.fill = choiceColor;

		for (var i = 0; i < currentModuleChoicesData.length; i++) {
			stringTest = currentModuleChoicesData[i].KEY;
			if (stringTest.substring(0, 12) == currentNodeKey) {
				//console.log("SUCCESS: " + currentModuleChoicesData[i].KEY + " " + i);
				loadedChoices.push(i);
			}
		}

		if (loadedChoices.length == 1) {
			choice1.setText(continueText);
			choice1.y = frame02YPos;
			choice2.setText("");
			choice3.setText("");
			choice4.setText("");
			choice5.setText("");
			choicesHeight = choice1.height;
		}
		else if (loadedChoices.length == 2) {
			choice1.setText(currentModuleChoicesData[loadedChoices[0]].text);
			choice1.y = frame02YPos;
			choice2.setText(currentModuleChoicesData[loadedChoices[1]].text);
			choice2.y = frame02YPos + choice1.height + choicesSpacer;
			choice3.setText("");
			choice4.setText("");
			choice5.setText("");
			choicesHeight = choice1.height + choice2.height + choicesSpacer;
		}
		else if (loadedChoices.length == 3) {
			choice1.setText(currentModuleChoicesData[loadedChoices[0]].text);
			choice1.y = frame02YPos;
			choice2.setText(currentModuleChoicesData[loadedChoices[1]].text);
			choice2.y = frame02YPos + choice1.height + choicesSpacer;
			choice3.setText(currentModuleChoicesData[loadedChoices[2]].text);
			choice3.y = frame02YPos + choice1.height + choice2.height + (choicesSpacer * 2);
			choice4.setText("");
			choice5.setText("");
			choicesHeight = choice1.height + choice2.height + choice3.height + (choicesSpacer * 2);
		}
		else if (loadedChoices.length == 4) {
			choice1.setText(currentModuleChoicesData[loadedChoices[0]].text);
			choice1.y = frame02YPos;
			choice2.setText(currentModuleChoicesData[loadedChoices[1]].text);
			choice2.y = frame02YPos + choice1.height + choicesSpacer;
			choice3.setText(currentModuleChoicesData[loadedChoices[2]].text);
			choice3.y = frame02YPos + choice1.height + choice2.height + (choicesSpacer * 2);
			choice4.setText(currentModuleChoicesData[loadedChoices[3]].text);
			choice4.y = frame02YPos + choice1.height + choice2.height + choice3.height + (choicesSpacer * 3);
			choice5.setText("");
			choicesHeight = choice1.height + choice2.height + choice3.height + choice4.height + (choicesSpacer * 3);
		}
		else if (loadedChoices.length == 5) {
			choice1.setText(currentModuleChoicesData[loadedChoices[0]].text);
			choice1.y = frame02YPos;
			choice2.setText(currentModuleChoicesData[loadedChoices[1]].text);
			choice2.y = frame02YPos + choice1.height + choicesSpacer;
			choice3.setText(currentModuleChoicesData[loadedChoices[2]].text);
			choice3.y = frame02YPos + choice1.height + choice2.height + (choicesSpacer * 2);
			choice4.setText(currentModuleChoicesData[loadedChoices[3]].text);
			choice4.y = frame02YPos + choice1.height + choice2.height + choice3.height + (choicesSpacer * 3);
			choice5.setText(currentModuleChoicesData[loadedChoices[4]].text);
			choice5.y = frame02YPos + choice1.height + choice2.height + choice3.height + +choice4.height + (choicesSpacer * 4);
			choicesHeight = choice1.height + choice2.height + choice3.height + choice4.height + choice5.height + (choicesSpacer * 4);
		}
		else {
			//error
		}
	},
	makeDecision: function (choiceNumber) {
		//alert("Decision made! Choice " + choiceNumber);
		var tempReference = loadedChoices[choiceNumber - 1]; //-1 because starts with 0, so choice 1 is key 0 in the array
		var destinationA_dieRoll;
		var destinationB_dieRoll;
		var destinationC_dieRoll;
		var destinationD_dieRoll;

		//alert(currentModuleChoicesData[tempReference].destinationA_percentage);

		if (currentModuleChoicesData[tempReference].destinationA_percentage === null || currentModuleChoicesData[tempReference].destinationA_percentage == "" || currentModuleChoicesData[tempReference].destinationA_percentage == undefined) {
			//There's only one destination, go to destinationA
			this.loadStoryNode(currentModuleChoicesData[tempReference].destinationA);
		}
		else if (currentModuleChoicesData[tempReference].destinationC_percentage === null || currentModuleChoicesData[tempReference].destinationC_percentage == "" || currentModuleChoicesData[tempReference].destinationC_percentage == undefined) {
			//There's no third destination, so it's between destinationA and destinationB
			destinationA_dieRoll = (Math.floor(Math.random() * 100) + 1) * currentModuleChoicesData[tempReference].destinationA_percentage;
			destinationB_dieRoll = (Math.floor(Math.random() * 100) + 1) * currentModuleChoicesData[tempReference].destinationB_percentage;

			if (destinationA_dieRoll > destinationB_dieRoll) {
				//go to destinationA
				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationA);
			}
			else {
				//go to destinationB
				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationB);
			}
		}
		else if (currentModuleChoicesData[tempReference].destinationD_percentage === null || currentModuleChoicesData[tempReference].destinationD_percentage == "") {
			//There's no fourth destination, so it's between destinationA and destinationB and destinationC
			destinationA_dieRoll = (Math.floor(Math.random() * 100) + 1) * currentModuleChoicesData[tempReference].destinationA_percentage;
			destinationB_dieRoll = (Math.floor(Math.random() * 100) + 1) * currentModuleChoicesData[tempReference].destinationB_percentage;
			destinationC_dieRoll = (Math.floor(Math.random() * 100) + 1) * currentModuleChoicesData[tempReference].destinationC_percentage;

			if (destinationA_dieRoll > destinationB_dieRoll && destinationA_dieRoll > destinationC_dieRoll) {
				//go to destinationA
				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationA);
			}
			else if (destinationB_dieRoll > destinationC_dieRoll) {
				//go to destinationB
				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationB);
			}
			else {
				//go to destinationC
				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationC);
			}
		}
		else {
			//There are four destinations
			destinationA_dieRoll = (Math.floor(Math.random() * 100) + 1) * currentModuleChoicesData[tempReference].destinationA_percentage;
			destinationB_dieRoll = (Math.floor(Math.random() * 100) + 1) * currentModuleChoicesData[tempReference].destinationB_percentage;
			destinationC_dieRoll = (Math.floor(Math.random() * 100) + 1) * currentModuleChoicesData[tempReference].destinationC_percentage;
			destinationD_dieRoll = (Math.floor(Math.random() * 100) + 1) * currentModuleChoicesData[tempReference].destinationD_percentage;

			if (destinationA_dieRoll > destinationB_dieRoll && destinationA_dieRoll > destinationC_dieRoll && destinationA_dieRoll > destinationD_dieRoll) {
				//go to destinationA
				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationA);
			}
			else if (destinationB_dieRoll > destinationC_dieRoll && destinationB_dieRoll > destinationD_dieRoll) {
				//go to destinationB
				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationB);
			}
			else if (destinationC_dieRoll > destinationD_dieRoll) {
				//go to destinationC
				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationC);
			}
			else {
				//go to destinationD
				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationD);
			}
		}
	},
	loadStoryNode: function (destination) {
		//alert(destination);
		currentNodeKey = destination;
		textPrint = currentModuleTextMap.get(currentNodeKey);
		text1.setText(textPrint);
		text1.y = frame01YPos;

		//kern of duty text
		//text1.setText('');

		this.loadChoices();
		this.adjustSliders();
	},
	update: function () {
		//Move text based on sliders
		if (slider01.visible == true) {
			text1.y = text1_topGap - (((slider01.y - text1_topGap) / rightSliderGap01) * text1_distance);
		}
		if (slider02.visible == true) {
			choicesTextGroup.y = 1 - (((slider02.y - text2_topGap) / rightSliderGap02) * text2_distance);
		}
		//text2.y = text2_topGap - (((slider02.y - text2_topGap) / rightSliderGap02) * text2_distance);
		//text1.setText(textPrint); //!!!!!!!!!
		//this.adjustSliders();
		
	}
}