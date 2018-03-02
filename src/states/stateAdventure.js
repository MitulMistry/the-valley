import Phaser from 'phaser';

import globals from '../globals';

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
//var debugMode = true; //Moved to textManager.js

var textPointsPower;
var textPointsKarma;
var textPointsIntellect;
var textPointsLove;
var textPointsDarkTetrad;

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
var choicesColorArray = []; // array of colors for each choice # to reference which color to return to after a mouse over
var choicesHeight = 100;
var continueText = "Continue..."; //Text to show when the choice is only to continue

var textFadeInLength = 500;
var choicesFadeInLength = 200;
//var textUpdateIndex = 0;
//var textUpdateLine = '';

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

var mainFont = '13pt BRLNSR';
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
//var activeChoiceColor = "";

export default class extends Phaser.State {
	create() {
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
		frame01Width = Math.round( this.game.width * 0.7225 );
		frame01Height = Math.round( this.game.height * 0.5 );
		frame01XPos = Math.round( ((this.game.width - frame01Width) / 2) - 11 );
		frame01YPos = Math.round( this.game.height * 0.12 );

		frame02Width = Math.round( frame01Width );
		frame02Height = Math.round( this.game.height * 0.275 - 5); //0.3067 --- The -5 is there just to keep it from cutting off a line - can modify or remove depending on font size, etc. Actually, it may not much matter because different combinations of lines and line breaks cause unevenness, and it cuts lines off at different points.
		frame02XPos = frame01XPos;
		frame02YPos = Math.round( ((this.game.height - frame01YPos - frame01Height - frame02Height) / 2) + frame01YPos + frame01Height );

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
		if (globals.debugMode) {
			//currentSaveGame.currentNodeKey = "AA000AA000AB"; "AA001AH001AD" //Change start node for testing.
			currentSaveGame.currentNodeKey = "AA001AG001AA"; //"AA004BM004AA"
			//currentSaveGame.writeToAdditionalVariables("01MountainPeopleSaved");

			//currentSaveGame.currentNodeKey = "AA004BM004AE";
			//currentSaveGame.writeToAdditionalVariables("01JenethHappiness", 10); 01MountainPeopleSaved

			var stylePointsPower = { font: mainFont, fill: fontColorPower, align: 'left' };
			var stylePointsKarma = { font: mainFont, fill: fontColorKarma, align: 'left' };
			var stylePointsIntellect = { font: mainFont, fill: fontColorIntellect, align: 'left' };
			var stylePointsLove = { font: mainFont, fill: fontColorLove, align: 'left' };
			var stylePointsDarkTetrad = { font: mainFont, fill: fontColorDarkTetrad, align: 'left' };

			textPointsPower = this.game.add.text(this.game.width - frame01XPos + 30, frame01YPos, String(currentSaveGame.playerPower), stylePointsPower);
			textPointsKarma = this.game.add.text(this.game.width - frame01XPos + 30, frame01YPos + 20, String(currentSaveGame.playerKarma), stylePointsKarma);
			textPointsIntellect = this.game.add.text(this.game.width - frame01XPos + 30, frame01YPos + 40, String(currentSaveGame.playerIntellect), stylePointsIntellect);
			textPointsLove = this.game.add.text(this.game.width - frame01XPos + 30, frame01YPos + 60, String(currentSaveGame.playerLove), stylePointsLove);
			textPointsDarkTetrad = this.game.add.text(this.game.width - frame01XPos + 30, frame01YPos + 80, String(currentSaveGame.playerDarkTetrad), stylePointsDarkTetrad);
		}

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
		//var style2 = { font: mainFont, fill: choiceColor, align: 'left', wordWrap: true, wordWrapWidth: frame01Width };

		choicesTextGroup = this.game.add.group();

		textPrint = currentModuleTextMap.get(currentSaveGame.currentNodeKey);

		//text1 = this.game.add.text(frame01XPos, frame01YPos, textPrint, style1);

		text1 = this.game.add.text(frame01XPos, frame01YPos, "Morbi ultricies ante orci, vitae semper nibh consectetur dignissim. \n\nDonec odio turpis, pharetra vel dolor a, malesuada vulputate turpis. In vel porta urna,volutpat auctor ante. Phasellus quam nisi, consequat in elementum ut, accumsan in ex.\n\nSed pulvinar nunc urna, in porttitor lectus imperdiet nec. Suspendisse accumsan congue gravida. \n\nPhasellus quam nisi, consequat in elementum ut, accumsan in ex. Sed pulvinar nunc urna, in porttitor lectus imperdiet nec.\n\nSuspendisse accumsan congue gravida.", style1);
		//text1.lineSpacing = 5;

		text1.mask = textMask01;

		//Add choices to group? Then move group as a whole with slider?
		choice1 = this.game.add.text(frame02XPos, frame02YPos, "Choice 1: Morbi ultricies ante orci, vitae semper nibh consectetur dignissim. Sed pulvinar nunc urna, in porttitor lectus imperdiet nec. Suspendisse accumsan congue gravida.", style2, choicesTextGroup);
		choice1.inputEnabled = true;
		choice1.input.useHandCursor = true;
		choice1.events.onInputOver.add(this.choiceOver, this);
		choice1.events.onInputOut.add(this.choiceOut1, this);
		choice1.events.onInputDown.add(this.choiceDown, this);
		choice1.events.onInputUp.add(this.choiceUp1, this);

		choice2 = this.game.add.text(frame02XPos, frame02YPos + choice1.height + choicesSpacer, "Choice 2: Donec odio turpis, pharetra vel dolor a, malesuada vulputate turpis. Phasellus quam nisi, consequat in elementum ut, accumsan in ex.", style2, choicesTextGroup);
		choice2.inputEnabled = true;
		choice2.input.useHandCursor = true;
		choice2.events.onInputOver.add(this.choiceOver, this);
		choice2.events.onInputOut.add(this.choiceOut2, this);
		choice2.events.onInputDown.add(this.choiceDown, this);
		choice2.events.onInputUp.add(this.choiceUp2, this);

		choice3 = this.game.add.text(frame02XPos, frame02YPos + choice1.height + choice2.height + (choicesSpacer * 2), "Choice 3: In vel porta urna,volutpat auctor ante.", style2, choicesTextGroup);
		choice3.inputEnabled = true;
		choice3.input.useHandCursor = true;
		choice3.events.onInputOver.add(this.choiceOver, this);
		choice3.events.onInputOut.add(this.choiceOut3, this);
		choice3.events.onInputDown.add(this.choiceDown, this);
		choice3.events.onInputUp.add(this.choiceUp3, this);

		choice4 = this.game.add.text(frame02XPos, frame02YPos + choice1.height + choice2.height + choice3.height + (choicesSpacer * 3), "Choice 4: Phasellus quam nisi, consequat in elementum ut, accumsan in ex.", style2, choicesTextGroup);
		choice4.inputEnabled = true;
		choice4.input.useHandCursor = true;
		choice4.events.onInputOver.add(this.choiceOver, this);
		choice4.events.onInputOut.add(this.choiceOut4, this);
		choice4.events.onInputDown.add(this.choiceDown, this);
		choice4.events.onInputUp.add(this.choiceUp4, this);

		choice5 = this.game.add.text(frame02XPos, frame02YPos + choice1.height + choice2.height + choice3.height + +choice4.height + (choicesSpacer * 4), "Choice 5: Suspendisse accumsan congue gravida. Phasellus quam nisi, consequat in elementum ut, accumsan in ex.", style2, choicesTextGroup);
		choice5.inputEnabled = true;
		choice5.input.useHandCursor = true;
		choice5.events.onInputOver.add(this.choiceOver, this);
		choice5.events.onInputOut.add(this.choiceOut5, this);
		choice5.events.onInputDown.add(this.choiceDown, this);
		choice5.events.onInputUp.add(this.choiceUp5, this);

		choicesTextGroup.mask = textMask02;
		//choicesTextGroup.anchor.setTo(0, 0);

		this.loadChoices();
		this.adjustSliders();

		/*
		//Slider movement calculations
		rightSliderGap01 = slider01back.height - slider01.height;
		text1_distance = (rightSliderGap01 / slider01back.height) * text1.height;
		text1_topGap = frame01YPos;

		rightSliderGap02 = slider02back.height - slider02.height;
		text2_distance = (rightSliderGap02 / slider02back.height) * choicesTextGroup.height;
		text2_topGap = frame02YPos;
		*/

		//For some reason text1 needs to be updated here and if you update earlier it shows up all wonky
		text1.setText(textPrint); //!!!!!!!!!
		this.fadeInText();
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
	}

	sliderOver(sprite) {
		sprite.frame = 1;
	}

	sliderOut(sprite) {
		sprite.frame = 0;
	}

	sliderDown(sprite) {
		sprite.frame = 2;
	}

	iconOver(sprite) {
		if (sprite.frame === iconTwitterBaseFrame01) {
			sprite.frame = iconTwitterBaseFrame02;
		}
		else if (sprite.frame === iconFacebookBaseFrame01) {
			sprite.frame = iconFacebookBaseFrame02;
		}
	}

	iconOut(sprite) {
		if (sprite.frame === iconTwitterBaseFrame02) {
			sprite.frame = iconTwitterBaseFrame01;
		}
		else if (sprite.frame === iconFacebookBaseFrame02) {
			sprite.frame = iconFacebookBaseFrame01;
		}
	}

	iconDown(sprite) {
		if (sprite.frame === iconTwitterBaseFrame02) {
			sprite.frame = iconTwitterBaseFrame01;
		}
		else if (sprite.frame === iconFacebookBaseFrame02) {
			sprite.frame = iconFacebookBaseFrame01;
		}
	}

	iconTwitter() {
		window.open("https://twitter.com/home?status=Check%20out%20the%20epic%20text%20adventure%20-%20%22The%20Valley%22%20http://MitulMistry.com/%20%23indiedev", '_blank');
	}

	iconFacebook() {
		window.open("https://www.facebook.com/sharer/sharer.php?u=http://MitulMistry.com", '_blank');
	}

	iconFont() {

	}

	iconSave() {
		this.game.state.start("stateMenu");
	}

	iconSound() {

	}

	adjustSliders() {
		//Adjust slider height based on amount of text, or else hide
		slider01.y = frame01YPos;
		slider02.y = frame02YPos;

		if (text1.height > frame01Height) {
			slider01.visible = true;
			slider01back.visible = true;
			slider01.height = (frame01Height / text1.height) * frame01Height;
			this.fadeSlider(slider01, 0, textFadeInLength);
			this.fadeSlider(slider01back, 0, textFadeInLength);

			//Slider movement calculations
			rightSliderGap01 = slider01back.height - slider01.height;
			text1_distance = (rightSliderGap01 / slider01back.height) * text1.height;
			text1_topGap = frame01YPos;
		} else {
			slider01.height = frame01Height;
			slider01.visible = false;
			slider01back.visible = false;
		}
		if (choicesHeight > frame02Height) {
			slider02.visible = true;
			slider02back.visible = true;
			slider02.height = (frame02Height / choicesHeight) * frame02Height;
			this.fadeSlider(slider02, textFadeInLength, choicesFadeInLength);
			this.fadeSlider(slider02back, textFadeInLength, choicesFadeInLength);

			//Slider movement calculations
			rightSliderGap02 = slider02back.height - slider02.height;
			text2_distance = (rightSliderGap02 / slider02back.height) * choicesTextGroup.height;
			text2_topGap = frame02YPos;
		} else {
			slider02.height = frame02Height;
			slider02.visible = false;
			slider02back.visible = false;
		}
	}

	fadeSlider(slider, delay, duration) {
		slider.alpha = 0;

		this.game.time.events.add(delay, function () {

			this.game.add.tween(slider).to({ alpha: 1 }, duration, Phaser.Easing.Linear.None, true);

		}, this);
	}

	choiceOver(item) {
		item.fill = choiceHighlightColor;
		//activeChoiceColor = item.fill;
	}

	/*
	choiceOut: function (item) {
		item.fill = choiceColor;
	},
	*/
	choiceOut1(item) {
		item.fill = choicesColorArray[0];
	}

	choiceOut2(item) {
		item.fill = choicesColorArray[1];
	}

	choiceOut3(item) {
		item.fill = choicesColorArray[2];
	}

	choiceOut4(item) {
		item.fill = choicesColorArray[3];
	}

	choiceOut5(item) {
		item.fill = choicesColorArray[4];
	}

	choiceDown(item) {
		//click01.play();
		item.fill = choicePressColor;
	}

	choiceUp1(item) {
		//http://www.html5gamedevs.com/topic/5351-call-a-function-with-arguments-when-oninputdown/
		item.fill = choiceHighlightColor;
		this.makeDecision(1);
	}

	choiceUp2(item) {
		item.fill = choiceHighlightColor;
		this.makeDecision(2);
	}

	choiceUp3(item) {
		item.fill = choiceHighlightColor;
		this.makeDecision(3);
	}

	choiceUp4(item) {
		item.fill = choiceHighlightColor;
		this.makeDecision(4);
	}

	choiceUp5(item) {
		item.fill = choiceHighlightColor;
		this.makeDecision(5);
	}

	loadChoices() {
		this.updateDebug(); //update debug items if debug mode is enabled

		var stringTest;
		loadedChoices.length = 0; //Clear the array
		choicesColorArray.length = 0;

		//Reset choice colors to white
		choice1.fill = choiceColor;
		choice2.fill = choiceColor;
		choice3.fill = choiceColor;
		choice4.fill = choiceColor;
		choice5.fill = choiceColor;

		for (var i = 0; i < currentModuleChoicesData.length; i++) {
			stringTest = currentModuleChoicesData[i].KEY;
			if (stringTest.substring(0, 12) == currentSaveGame.currentNodeKey) {
				if (this.checkChoice(i)) {
					loadedChoices.push(i);
				}
			}
		}

		choicesTextGroup.y = 0; //reset y position of the text group

		if (loadedChoices.length == 1) {
			choice1.setText(continueText);
			choice1.y = frame02YPos;
			choicesColorArray.push(choice1.fill);
			this.fadeInChoice(choice1, textFadeInLength);
			choice2.setText("");
			choice3.setText("");
			choice4.setText("");
			choice5.setText("");
			choicesHeight = choice1.height;
		}
		else if (loadedChoices.length == 2) {
			choice1.setText(currentModuleChoicesData[loadedChoices[0]].text);
			choice1.y = frame02YPos;
			choicesColorArray.push(choice1.fill);
			this.fadeInChoice(choice1, textFadeInLength);
			choice2.setText(currentModuleChoicesData[loadedChoices[1]].text);
			choice2.y = frame02YPos + choice1.height + choicesSpacer;
			choicesColorArray.push(choice2.fill);
			this.fadeInChoice(choice2, textFadeInLength + choicesFadeInLength);
			choice3.setText("");
			choice4.setText("");
			choice5.setText("");
			choicesHeight = choice1.height + choice2.height + choicesSpacer;
		}
		else if (loadedChoices.length == 3) {
			choice1.setText(currentModuleChoicesData[loadedChoices[0]].text);
			choice1.y = frame02YPos;
			this.fadeInChoice(choice1, textFadeInLength);
			choicesColorArray.push(choice1.fill);
			choice2.setText(currentModuleChoicesData[loadedChoices[1]].text);
			choice2.y = frame02YPos + choice1.height + choicesSpacer;
			choicesColorArray.push(choice2.fill);
			this.fadeInChoice(choice2, textFadeInLength + choicesFadeInLength);
			choice3.setText(currentModuleChoicesData[loadedChoices[2]].text);
			choice3.y = frame02YPos + choice1.height + choice2.height + (choicesSpacer * 2);
			choice3.fill = this.checkChoiceColor(loadedChoices[2]);
			choicesColorArray.push(choice3.fill);
			this.fadeInChoice(choice3, textFadeInLength + (2 * choicesFadeInLength));
			choice4.setText("");
			choice5.setText("");
			choicesHeight = choice1.height + choice2.height + choice3.height + (choicesSpacer * 2);
		}
		else if (loadedChoices.length == 4) {
			choice1.setText(currentModuleChoicesData[loadedChoices[0]].text);
			choice1.y = frame02YPos;
			choicesColorArray.push(choice1.fill);
			this.fadeInChoice(choice1, textFadeInLength);
			choice2.setText(currentModuleChoicesData[loadedChoices[1]].text);
			choice2.y = frame02YPos + choice1.height + choicesSpacer;
			choicesColorArray.push(choice2.fill);
			this.fadeInChoice(choice2, textFadeInLength + choicesFadeInLength);
			choice3.setText(currentModuleChoicesData[loadedChoices[2]].text);
			choice3.y = frame02YPos + choice1.height + choice2.height + (choicesSpacer * 2);
			choice3.fill = this.checkChoiceColor(loadedChoices[2]);
			choicesColorArray.push(choice3.fill);
			this.fadeInChoice(choice3, textFadeInLength + (2 * choicesFadeInLength));
			choice4.setText(currentModuleChoicesData[loadedChoices[3]].text);
			choice4.y = frame02YPos + choice1.height + choice2.height + choice3.height + (choicesSpacer * 3);
			choice4.fill = this.checkChoiceColor(loadedChoices[3]);
			choicesColorArray.push(choice4.fill);
			this.fadeInChoice(choice4, textFadeInLength + (3 * choicesFadeInLength));
			choice5.setText("");
			choicesHeight = choice1.height + choice2.height + choice3.height + choice4.height + (choicesSpacer * 3);
		}
		else if (loadedChoices.length == 5) {
			choice1.setText(currentModuleChoicesData[loadedChoices[0]].text);
			choice1.y = frame02YPos;
			choicesColorArray.push(choice1.fill);
			this.fadeInChoice(choice1, textFadeInLength);
			choice2.setText(currentModuleChoicesData[loadedChoices[1]].text);
			choice2.y = frame02YPos + choice1.height + choicesSpacer;
			choicesColorArray.push(choice2.fill);
			this.fadeInChoice(choice2, textFadeInLength + choicesFadeInLength);
			choice3.setText(currentModuleChoicesData[loadedChoices[2]].text);
			choice3.y = frame02YPos + choice1.height + choice2.height + (choicesSpacer * 2);
			choice3.fill = this.checkChoiceColor(loadedChoices[2]);
			choicesColorArray.push(choice3.fill);
			this.fadeInChoice(choice3, textFadeInLength + (2 * choicesFadeInLength));
			choice4.setText(currentModuleChoicesData[loadedChoices[3]].text);
			choice4.y = frame02YPos + choice1.height + choice2.height + choice3.height + (choicesSpacer * 3);
			choice4.fill = this.checkChoiceColor(loadedChoices[3]);
			choicesColorArray.push(choice4.fill);
			this.fadeInChoice(choice4, textFadeInLength + (3 * choicesFadeInLength));
			choice5.setText(currentModuleChoicesData[loadedChoices[4]].text);
			choice5.y = frame02YPos + choice1.height + choice2.height + choice3.height + +choice4.height + (choicesSpacer * 4);
			choice5.fill = this.checkChoiceColor(loadedChoices[4]);
			choicesColorArray.push(choice5.fill);
			this.fadeInChoice(choice5, textFadeInLength + (4 * choicesFadeInLength));
			choicesHeight = choice1.height + choice2.height + choice3.height + choice4.height + choice5.height + (choicesSpacer * 4);
		}
		else {
			//error
			alert("ERROR: loadedChoices.length is out of bounds");
		}
	}

	checkChoice(choiceArrayKey) {
		if (currentModuleChoicesData[choiceArrayKey].karmaCost !== "" && currentModuleChoicesData[choiceArrayKey].karmaCost !== null && currentModuleChoicesData[choiceArrayKey].karmaCost !== undefined) {
			if (currentSaveGame.playerKarma >= this.parseChoiceCost(currentModuleChoicesData[choiceArrayKey].karmaCost)) {
				return true;
			}
			else {
				return false;
			}
		}
		else if (currentModuleChoicesData[choiceArrayKey].powerCost !== "" && currentModuleChoicesData[choiceArrayKey].powerCost !== null && currentModuleChoicesData[choiceArrayKey].powerCost !== undefined) {
			if (currentSaveGame.playerPower >= this.parseChoiceCost(currentModuleChoicesData[choiceArrayKey].powerCost)) {
				return true;
			}
			else {
				return false;
			}
		}
		else if (currentModuleChoicesData[choiceArrayKey].intellectCost !== "" && currentModuleChoicesData[choiceArrayKey].intellectCost !== null && currentModuleChoicesData[choiceArrayKey].intellectCost !== undefined) {
			if (currentSaveGame.playerIntellect >= this.parseChoiceCost(currentModuleChoicesData[choiceArrayKey].intellectCost)) {
				return true;
			}
			else {
				return false;
			}
		}
		else if (currentModuleChoicesData[choiceArrayKey].loveCost !== "" && currentModuleChoicesData[choiceArrayKey].loveCost !== null && currentModuleChoicesData[choiceArrayKey].loveCost !== undefined) {
			if (currentSaveGame.playerLove >= this.parseChoiceCost(currentModuleChoicesData[choiceArrayKey].loveCost)) {
				return true;
			}
			else {
				return false;
			}
		}
		else if (currentModuleChoicesData[choiceArrayKey].darkTetradCost !== "" && currentModuleChoicesData[choiceArrayKey].darkTetradCost !== null && currentModuleChoicesData[choiceArrayKey].darkTetradCost !== undefined) {
			if (currentSaveGame.playerDarkTetrad >= this.parseChoiceCost(currentModuleChoicesData[choiceArrayKey].powerDarkTetrad)) {
				return true;
			}
			else {
				return false;
			}
		}
		//CHECK FOR ADDITIONAL VARIABLES
		else if (currentModuleChoicesData[choiceArrayKey].additionalVariableCostA_Key !== "" && currentModuleChoicesData[choiceArrayKey].additionalVariableCostA_Key !== null && currentModuleChoicesData[choiceArrayKey].additionalVariableCostA_Key !== undefined)
		{

			if (currentModuleChoicesData[choiceArrayKey].additionalVariableCostB_Key !== "" && currentModuleChoicesData[choiceArrayKey].additionalVariableCostB_Key !== null && currentModuleChoicesData[choiceArrayKey].additionalVariableCostB_Key !== undefined)
			{
				//There are two additional variable costs
				if (currentModuleChoicesData[choiceArrayKey].additionalVariableCost_Operator === "&&")
				{
					if (currentSaveGame.checkAdditionalVariables(currentModuleChoicesData[choiceArrayKey].additionalVariableCostA_Key, currentModuleChoicesData[choiceArrayKey].additionalVariableCostA_Equivalence, currentModuleChoicesData[choiceArrayKey].additionalVariableCostA_Value) && currentSaveGame.checkAdditionalVariables(currentModuleChoicesData[choiceArrayKey].additionalVariableCostB_Key, currentModuleChoicesData[choiceArrayKey].additionalVariableCostB_Equivalence, currentModuleChoicesData[choiceArrayKey].additionalVariableCostB_Value)) {
						return true;
					}
					else {
						return false;
					}
				}
				else if (currentModuleChoicesData[choiceArrayKey].additionalVariableCost_Operator === "||")
				{
					if (currentSaveGame.checkAdditionalVariables(currentModuleChoicesData[choiceArrayKey].additionalVariableCostA_Key, currentModuleChoicesData[choiceArrayKey].additionalVariableCostA_Equivalence, currentModuleChoicesData[choiceArrayKey].additionalVariableCostA_Value) || currentSaveGame.checkAdditionalVariables(currentModuleChoicesData[choiceArrayKey].additionalVariableCostB_Key, currentModuleChoicesData[choiceArrayKey].additionalVariableCostB_Equivalence, currentModuleChoicesData[choiceArrayKey].additionalVariableCostB_Value)) {
						return true;
					}
					else {
						return false;
					}
				}
				else
				{
					//Then there's an error
					false;
				}
			}
			else
			{
				//There's only one additional variable cost
				if ( currentSaveGame.checkAdditionalVariables(currentModuleChoicesData[choiceArrayKey].additionalVariableCostA_Key, currentModuleChoicesData[choiceArrayKey].additionalVariableCostA_Equivalence, currentModuleChoicesData[choiceArrayKey].additionalVariableCostA_Value) )
				{
					return true;
				}
				else
				{
					return false;
				}
			}
		}
		else
		{
			//there are no costs for this choice, so return true
			return true;
		}
	}

	checkChoiceColor(choiceArrayKey) {
		//returns what color the text should be
		if (currentModuleChoicesData[choiceArrayKey].karmaCost !== "")	{
			return fontColorKarma;
		}
		else if (currentModuleChoicesData[choiceArrayKey].powerCost !== "") {
			return fontColorPower;
		}
		else if (currentModuleChoicesData[choiceArrayKey].intellectCost !== "") {
			return fontColorIntellect;
		}
		else if (currentModuleChoicesData[choiceArrayKey].loveCost !== "") {
			return fontColorLove;
		}
		else if (currentModuleChoicesData[choiceArrayKey].darkTetradCost !== "") {
			return fontColorDarkTetrad;
		}
		else {
			return choiceColor;
		}
	}

	parseChoiceCost(stringToParse) {
		if (stringToParse === "mini01") {
			return POINT_COST_MINI_01;
		}
		else if (stringToParse === "mini02") {
			return POINT_COST_MINI_02;
		}
		else if (stringToParse === "mini03") {
			return POINT_COST_MINI_03;
		}
		else if (stringToParse === "moderate01") {
			return POINT_COST_MODERATE_01;
		}
		else if (stringToParse === "moderate02") {
			return POINT_COST_MODERATE_02;
		}
		else if (stringToParse === "moderate03") {
			return POINT_COST_MODERATE_03;
		}
		else if (stringToParse === "heavy01") {
			return POINT_COST_HEAVY_01;
		}
		else if (stringToParse === "heavy02") {
			return POINT_COST_HEAVY_02;
		}
		else if (stringToParse === "heavy03") {
			return POINT_COST_HEAVY_03;
		}
		else if (stringToParse === "mega01") {
			return POINT_COST_MEGA_01;
		}
		else if (stringToParse === "mega02") {
			return POINT_COST_MEGA_02;
		}
		else if (stringToParse === "mega03") {
			return POINT_COST_MEGA_03;
		}
		else {
			return 0;
		}
	}

	parseChoiceBoost(stringToParse) {
		if (stringToParse === "small") {
			return POINT_BOOST_SMALL;
		}
		else if (stringToParse === "medium") {
			return POINT_BOOST_MEDIUM;
		}
		else if (stringToParse === "large") {
			return POINT_BOOST_LARGE;
		}
		else if (stringToParse === "large02") {
			return POINT_BOOST_LARGE02;
		}
		else if (stringToParse === "huge") {
			return POINT_BOOST_HUGE;
		}
		else if (stringToParse === "medium") {
			return POINT_BOOST_JACKPOT;
		}
		else {
			return 0;
		}
	}

	makeDecision(choiceNumber) {
		currentSaveGame.writeToGameLog(currentSaveGame.currentNodeKey, choiceNumber);

		var tempReference = loadedChoices[choiceNumber - 1]; //-1 because starts with 0, so choice 1 is key 0 in the array

		//------------------Adjust player spirit points------------------
		this.adjustPlayerPoints(currentModuleChoicesData[tempReference].karmaBoost, currentModuleChoicesData[tempReference].intellectBoost, currentModuleChoicesData[tempReference].loveBoost, currentModuleChoicesData[tempReference].powerBoost, currentModuleChoicesData[tempReference].darkTetradBoost, currentModuleChoicesData[tempReference].additionalVariableBoostA_Key, currentModuleChoicesData[tempReference].additionalVariableBoostA_Value, currentModuleChoicesData[tempReference].additionalVariableBoostB_Key, currentModuleChoicesData[tempReference].additionalVariableBoostB_Value);

		//------------------Randomize destinations------------------

		var destinationA_dieRoll;
		var destinationB_dieRoll;
		var destinationC_dieRoll;
		var destinationD_dieRoll;

		//alert(currentModuleChoicesData[tempReference].destinationA_percentage);

		if (currentModuleChoicesData[tempReference].destinationA_percentage === null || currentModuleChoicesData[tempReference].destinationA_percentage == "" || currentModuleChoicesData[tempReference].destinationA_percentage == undefined) {
			//There's only one destination, go to destinationA
			this.adjustPlayerPoints(currentModuleChoicesData[tempReference].destinationA_karmaBoost, currentModuleChoicesData[tempReference].destinationA_intellectBoost, currentModuleChoicesData[tempReference].destinationA_loveBoost, currentModuleChoicesData[tempReference].destinationA_powerBoost, currentModuleChoicesData[tempReference].destinationA_darkTetradBoost, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostA_Key, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostA_Value, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostB_Key, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostB_Value);

			this.loadStoryNode(currentModuleChoicesData[tempReference].destinationA);
		}
		else if (currentModuleChoicesData[tempReference].destinationC_percentage === null || currentModuleChoicesData[tempReference].destinationC_percentage == "" || currentModuleChoicesData[tempReference].destinationC_percentage == undefined) {
			//There's no third destination, so it's between destinationA and destinationB
			destinationA_dieRoll = (Math.floor(Math.random() * 100) + 1) * currentModuleChoicesData[tempReference].destinationA_percentage;
			destinationB_dieRoll = (Math.floor(Math.random() * 100) + 1) * currentModuleChoicesData[tempReference].destinationB_percentage;

			if (destinationA_dieRoll > destinationB_dieRoll) {
				//go to destinationA
				this.adjustPlayerPoints(currentModuleChoicesData[tempReference].destinationA_karmaBoost, currentModuleChoicesData[tempReference].destinationA_intellectBoost, currentModuleChoicesData[tempReference].destinationA_loveBoost, currentModuleChoicesData[tempReference].destinationA_powerBoost, currentModuleChoicesData[tempReference].destinationA_darkTetradBoost, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostA_Key, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostA_Value, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostB_Key, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostB_Value);

				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationA);
			}
			else {
				//go to destinationB
				this.adjustPlayerPoints(currentModuleChoicesData[tempReference].destinationB_karmaBoost, currentModuleChoicesData[tempReference].destinationB_intellectBoost, currentModuleChoicesData[tempReference].destinationB_loveBoost, currentModuleChoicesData[tempReference].destinationB_powerBoost, currentModuleChoicesData[tempReference].destinationB_darkTetradBoost, currentModuleChoicesData[tempReference].destinationB_additionalVariableBoostA_Key, currentModuleChoicesData[tempReference].destinationB_additionalVariableBoostA_Value, currentModuleChoicesData[tempReference].destinationB_additionalVariableBoostB_Key, currentModuleChoicesData[tempReference].destinationB_additionalVariableBoostB_Value);

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
				this.adjustPlayerPoints(currentModuleChoicesData[tempReference].destinationA_karmaBoost, currentModuleChoicesData[tempReference].destinationA_intellectBoost, currentModuleChoicesData[tempReference].destinationA_loveBoost, currentModuleChoicesData[tempReference].destinationA_powerBoost, currentModuleChoicesData[tempReference].destinationA_darkTetradBoost, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostA_Key, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostA_Value, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostB_Key, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostB_Value);

				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationA);
			}
			else if (destinationB_dieRoll > destinationC_dieRoll) {
				//go to destinationB
				this.adjustPlayerPoints(currentModuleChoicesData[tempReference].destinationB_karmaBoost, currentModuleChoicesData[tempReference].destinationB_intellectBoost, currentModuleChoicesData[tempReference].destinationB_loveBoost, currentModuleChoicesData[tempReference].destinationB_powerBoost, currentModuleChoicesData[tempReference].destinationB_darkTetradBoost, currentModuleChoicesData[tempReference].destinationB_additionalVariableBoostA_Key, currentModuleChoicesData[tempReference].destinationB_additionalVariableBoostA_Value, currentModuleChoicesData[tempReference].destinationB_additionalVariableBoostB_Key, currentModuleChoicesData[tempReference].destinationB_additionalVariableBoostB_Value);

				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationB);
			}
			else {
				//go to destinationC
				this.adjustPlayerPoints(currentModuleChoicesData[tempReference].destinationC_karmaBoost, currentModuleChoicesData[tempReference].destinationC_intellectBoost, currentModuleChoicesData[tempReference].destinationC_loveBoost, currentModuleChoicesData[tempReference].destinationC_powerBoost, currentModuleChoicesData[tempReference].destinationC_darkTetradBoost, currentModuleChoicesData[tempReference].destinationC_additionalVariableBoostA_Key, currentModuleChoicesData[tempReference].destinationC_additionalVariableBoostA_Value, currentModuleChoicesData[tempReference].destinationC_additionalVariableBoostB_Key, currentModuleChoicesData[tempReference].destinationC_additionalVariableBoostB_Value);

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
				this.adjustPlayerPoints(currentModuleChoicesData[tempReference].destinationA_karmaBoost, currentModuleChoicesData[tempReference].destinationA_intellectBoost, currentModuleChoicesData[tempReference].destinationA_loveBoost, currentModuleChoicesData[tempReference].destinationA_powerBoost, currentModuleChoicesData[tempReference].destinationA_darkTetradBoost, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostA_Key, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostA_Value, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostB_Key, currentModuleChoicesData[tempReference].destinationA_additionalVariableBoostB_Value);

				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationA);
			}
			else if (destinationB_dieRoll > destinationC_dieRoll && destinationB_dieRoll > destinationD_dieRoll) {
				//go to destinationB
				this.adjustPlayerPoints(currentModuleChoicesData[tempReference].destinationB_karmaBoost, currentModuleChoicesData[tempReference].destinationB_intellectBoost, currentModuleChoicesData[tempReference].destinationB_loveBoost, currentModuleChoicesData[tempReference].destinationB_powerBoost, currentModuleChoicesData[tempReference].destinationB_darkTetradBoost, currentModuleChoicesData[tempReference].destinationB_additionalVariableBoostA_Key, currentModuleChoicesData[tempReference].destinationB_additionalVariableBoostA_Value, currentModuleChoicesData[tempReference].destinationB_additionalVariableBoostB_Key, currentModuleChoicesData[tempReference].destinationB_additionalVariableBoostB_Value);

				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationB);
			}
			else if (destinationC_dieRoll > destinationD_dieRoll) {
				//go to destinationC
				this.adjustPlayerPoints(currentModuleChoicesData[tempReference].destinationC_karmaBoost, currentModuleChoicesData[tempReference].destinationC_intellectBoost, currentModuleChoicesData[tempReference].destinationC_loveBoost, currentModuleChoicesData[tempReference].destinationC_powerBoost, currentModuleChoicesData[tempReference].destinationC_darkTetradBoost, currentModuleChoicesData[tempReference].destinationC_additionalVariableBoostA_Key, currentModuleChoicesData[tempReference].destinationC_additionalVariableBoostA_Value, currentModuleChoicesData[tempReference].destinationC_additionalVariableBoostB_Key, currentModuleChoicesData[tempReference].destinationC_additionalVariableBoostB_Value);

				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationC);
			}
			else {
				//go to destinationD
				this.adjustPlayerPoints(currentModuleChoicesData[tempReference].destinationD_karmaBoost, currentModuleChoicesData[tempReference].destinationD_intellectBoost, currentModuleChoicesData[tempReference].destinationD_loveBoost, currentModuleChoicesData[tempReference].destinationD_powerBoost, currentModuleChoicesData[tempReference].destinationD_darkTetradBoost, currentModuleChoicesData[tempReference].destinationD_additionalVariableBoostA_Key, currentModuleChoicesData[tempReference].destinationD_additionalVariableBoostA_Value, currentModuleChoicesData[tempReference].destinationD_additionalVariableBoostB_Key, currentModuleChoicesData[tempReference].destinationD_additionalVariableBoostB_Value);

				this.loadStoryNode(currentModuleChoicesData[tempReference].destinationD);
			}
		}
	}

	adjustPlayerPoints(karmaBoost, intellectBoost, loveBoost, powerBoost, darkTetradBoost, additionalVariableBoostA_Key, additionalVariableBoostA_Value, additionalVariableBoostB_Key, additionalVariableBoostB_Value) {
		//Adjust player spirit points
		if (karmaBoost != null && karmaBoost != "" && karmaBoost != undefined) {
			currentSaveGame.playerKarma += this.parseChoiceBoost(karmaBoost);
		}

		if (intellectBoost != null && intellectBoost != "" && intellectBoost != undefined) {
			currentSaveGame.playerIntellect += this.parseChoiceBoost(intellectBoost);
		}

		if (loveBoost != null && loveBoost != "" && loveBoost != undefined) {
			currentSaveGame.playerLove += this.parseChoiceBoost(loveBoost);
		}

		if (powerBoost != null && powerBoost != "" && powerBoost != undefined) {
			currentSaveGame.playerPower += this.parseChoiceBoost(powerBoost);
		}

		if (darkTetradBoost != null && darkTetradBoost != "" && darkTetradBoost != undefined) {
			currentSaveGame.playerDarkTetrad += this.parseChoiceBoost(darkTetradBoost);
		}

		if (additionalVariableBoostA_Key != null && additionalVariableBoostA_Key != "" && additionalVariableBoostA_Key != undefined) {

			currentSaveGame.writeToAdditionalVariables(additionalVariableBoostA_Key, additionalVariableBoostA_Value);

			if (additionalVariableBoostB_Key != null && additionalVariableBoostB_Key != "" && additionalVariableBoostB_Key != undefined) {

				currentSaveGame.writeToAdditionalVariables(additionalVariableBoostB_Key, additionalVariableBoostB_Value);
			}
		}
	}

	loadStoryNode(destination) {
		if (destination === "DEATH")
		{
			textPrint = "DEATH";
			text1.setText(textPrint);
			text1.y = frame01YPos;
			this.fadeInText();

			choice1.setText("");
			currentSaveGame.currentNodeKey = "AA000AA000AA";
			this.game.time.events.add(1500, function () {

				this.game.state.start("stateMenu");

			}, this);
		}
		else if (destination === "END") {
			textPrint = "END";
			text1.setText(textPrint);
			text1.y = frame01YPos;
			this.fadeInText();

			choice1.setText("");
			currentSaveGame.currentNodeKey = "AA000AA000AA";
			this.game.time.events.add(1500, function () {

				this.game.state.start("stateMenu");

			}, this);
		}
		else
		{
			if (destination.substring(0, 1) != "X") {

				currentSaveGame.currentNodeKey = destination;

				textPrint = currentModuleTextMap.get(currentSaveGame.currentNodeKey);
				text1.setText(textPrint);
				text1.y = frame01YPos;
				this.fadeInText();

				//text1.setText('');
				//this.loadStoryText();
			}
			else {
				//link node logic - loop through as many link nodes as necessary
				var tempKey = this.processLinkNode(destination);
				var tempDestination = tempKey;

				while (tempKey.substring(0, 1) == "X") {
					tempKey = this.processLinkNode(tempDestination);
					tempDestination = tempKey;
				}

				currentSaveGame.currentNodeKey = tempDestination;

				textPrint = currentModuleTextMap.get(currentSaveGame.currentNodeKey);
				text1.setText(textPrint);
				text1.y = frame01YPos;
				this.fadeInText();
			}
		}

		//kern of duty text
		//text1.setText('');

		this.loadChoices();
		this.adjustSliders();
	}

	fadeInText() {
		text1.alpha = 0;
		//http://www.html5gamedevs.com/topic/8639-fade-out-text-after-2-second-delay/
		this.game.add.tween(text1).to({ alpha: 1 }, textFadeInLength, Phaser.Easing.Linear.None, true);
	}

	fadeInChoice(choice, delay) {
		choice.alpha = 0;

		this.game.time.events.add(delay, function () {

			this.game.add.tween(choice).to({ alpha: 1 }, choicesFadeInLength, Phaser.Easing.Linear.None, true);

		}, this);
	}

	/*
	loadStoryText: function () {

		textUpdateIndex = 0;

		//first parameter is speed, second parameter is number of times event will repeat, third is event to fire, fourth is context - http://phaser.io/examples/v2/time/basic-repeat-event, https://phaser.io/examples/v2/text/kern-of-duty

		this.game.time.events.repeat(5, textPrint.length + 1, this.updateText, this);
	},
	updateText: function () {

		textUpdateIndex++;

		textUpdateLine = textPrint.substring(0, textUpdateIndex);
		text1.setText(textUpdateLine);
	},
	*/

	processLinkNode(destination) {
		var loadedLinkNodes = [];
		var stringTest
		var test1 = false;
		var test2 = false;
		var test3 = false;

		//load the link nodes into the temp array
		for (var i = 0; i < currentModuleLinkNodesData.length; i++)
		{
			stringTest = currentModuleLinkNodesData[i].KEY;
			if (stringTest.substring(0, 13) == destination) {
				//loadedLinkNodes.push(i);
				loadedLinkNodes.push(currentModuleLinkNodesData[i]);
			}
		}

		//or make this a while loop?
		for (var i = 0; i < loadedLinkNodes.length; i++)
		{
			if (loadedLinkNodes[i].variable1 != "ELSE")
			{
				if (loadedLinkNodes[i].variable2 === "" || loadedLinkNodes[i].variable2 === null || loadedLinkNodes[i].variable2 === undefined)
				{
					//then just check for variable1
					if (currentSaveGame.checkAdditionalVariables(loadedLinkNodes[i].variable1, loadedLinkNodes[i].equivalence1, loadedLinkNodes[i].value1))
					{
						test1 = true;
					}
				}
				else if (loadedLinkNodes[i].variable3 === "" || loadedLinkNodes[i].variable3 === null || loadedLinkNodes[i].variable3 === undefined)
				{
					//check for variable1 and variable2
					if (currentSaveGame.checkAdditionalVariables(loadedLinkNodes[i].variable1, loadedLinkNodes[i].equivalence1, loadedLinkNodes[i].value1)) {
						test1 = true;
					}

					if (currentSaveGame.checkAdditionalVariables(loadedLinkNodes[i].variable2, loadedLinkNodes[i].equivalence2, loadedLinkNodes[i].value2)) {
						test2 = true;
					}
				}
				else
				{
					//check for variable1, variable2, and variable3
					if (currentSaveGame.checkAdditionalVariables(loadedLinkNodes[i].variable1, loadedLinkNodes[i].equivalence1, loadedLinkNodes[i].value1)) {
						test1 = true;
					}

					if (currentSaveGame.checkAdditionalVariables(loadedLinkNodes[i].variable2, loadedLinkNodes[i].equivalence2, loadedLinkNodes[i].value2)) {
						test2 = true;
					}

					if (currentSaveGame.checkAdditionalVariables(loadedLinkNodes[i].variable3, loadedLinkNodes[i].equivalence3, loadedLinkNodes[i].value3)) {
						test3 = true;
					}
				}
				//-------------------------------------------------------------------------
				//Test the individual variables in combination
				//-------------------------------------------------------------------------
				if (loadedLinkNodes[i].operator1 === "" || loadedLinkNodes[i].operator1 === null || loadedLinkNodes[i].operator1 === undefined) {
					if (test1) {
						//go to destination
						return this.getRandomLinkNodeDestination(loadedLinkNodes[i]);
					}
				}
				else if (loadedLinkNodes[i].operator1 === "&&" && loadedLinkNodes[i].operator2 === "") {
					if (test1 && test2) {
						//go to destination
						return this.getRandomLinkNodeDestination(loadedLinkNodes[i]);
					}
				}
				else if (loadedLinkNodes[i].operator1 === "||" && loadedLinkNodes[i].operator2 === "") {
					if (test1 || test2) {
						//go to destination
						return this.getRandomLinkNodeDestination(loadedLinkNodes[i]);
					}
				}
				else if (loadedLinkNodes[i].operator1 === "&&" && loadedLinkNodes[i].operator2 === "&&") {
					if (test1 && test2 && test3) {
						//go to destination
						return this.getRandomLinkNodeDestination(loadedLinkNodes[i]);
					}
				}
				else if (loadedLinkNodes[i].operator1 === "||" && loadedLinkNodes[i].operator2 === "&&") {
					if (test1 || test2 && test3) {
						//go to destination
						return this.getRandomLinkNodeDestination(loadedLinkNodes[i]);
					}
				}
				else if (loadedLinkNodes[i].operator1 === "&&" && loadedLinkNodes[i].operator2 === "||") {
					if (test1 && test2 || test3) {
						//go to destination
						return this.getRandomLinkNodeDestination(loadedLinkNodes[i]);
					}
				}
				else if (loadedLinkNodes[i].operator1 === "||" && loadedLinkNodes[i].operator2 === "||") {
					if (test1 || test2 || test3) {
						//go to destination
						return this.getRandomLinkNodeDestination(loadedLinkNodes[i]);
					}
				}
			}
			else
			{
				//variable1 is ELSE and just go to destination
				return this.getRandomLinkNodeDestination(loadedLinkNodes[i]);
			}
		}
		//If nothing is found, that's an error
		alert("Something bad happened.");
		return null;
	}

	getRandomLinkNodeDestination(linkNode) {
		var destinationA_dieRoll;
		var destinationB_dieRoll;
		var destinationC_dieRoll;
		var destinationD_dieRoll;

		//alert(linkNode.destinationA_percentage);

		if (linkNode.destinationA_percentage === null || linkNode.destinationA_percentage == "" || linkNode.destinationA_percentage == undefined) {
			//There's only one destination, go to destinationA
			return linkNode.destinationA;
		}
		else if (linkNode.destinationC_percentage === null || linkNode.destinationC_percentage == "" || linkNode.destinationC_percentage == undefined) {
			//There's no third destination, so it's between destinationA and destinationB
			destinationA_dieRoll = (Math.floor(Math.random() * 100) + 1) * linkNode.destinationA_percentage;
			destinationB_dieRoll = (Math.floor(Math.random() * 100) + 1) * linkNode.destinationB_percentage;

			if (destinationA_dieRoll > destinationB_dieRoll) {
				//go to destinationA
				return linkNode.destinationA;
			}
			else {
				//go to destinationB
				return linkNode.destinationB;
			}
		}
		else if (linkNode.destinationD_percentage === null || linkNode.destinationD_percentage == "") {
			//There's no fourth destination, so it's between destinationA and destinationB and destinationC
			destinationA_dieRoll = (Math.floor(Math.random() * 100) + 1) * linkNode.destinationA_percentage;
			destinationB_dieRoll = (Math.floor(Math.random() * 100) + 1) * linkNode.destinationB_percentage;
			destinationC_dieRoll = (Math.floor(Math.random() * 100) + 1) * linkNode.destinationC_percentage;

			if (destinationA_dieRoll > destinationB_dieRoll && destinationA_dieRoll > destinationC_dieRoll) {
				//go to destinationA
				return linkNode.destinationA;
			}
			else if (destinationB_dieRoll > destinationC_dieRoll) {
				//go to destinationB
				return linkNode.destinationB;
			}
			else {
				//go to destinationC
				return linkNode.destinationC;
			}
		}
		else {
			//There are four destinations
			destinationA_dieRoll = (Math.floor(Math.random() * 100) + 1) * linkNode.destinationA_percentage;
			destinationB_dieRoll = (Math.floor(Math.random() * 100) + 1) * linkNode.destinationB_percentage;
			destinationC_dieRoll = (Math.floor(Math.random() * 100) + 1) * linkNode.destinationC_percentage;
			destinationD_dieRoll = (Math.floor(Math.random() * 100) + 1) * linkNode.destinationD_percentage;

			if (destinationA_dieRoll > destinationB_dieRoll && destinationA_dieRoll > destinationC_dieRoll && destinationA_dieRoll > destinationD_dieRoll) {
				//go to destinationA
				return linkNode.destinationA;
			}
			else if (destinationB_dieRoll > destinationC_dieRoll && destinationB_dieRoll > destinationD_dieRoll) {
				//go to destinationB
				return linkNode.destinationB;
			}
			else if (destinationC_dieRoll > destinationD_dieRoll) {
				//go to destinationC
				return linkNode.destinationC;
			}
			else {
				//go to destinationD
				return linkNode.destinationD;
			}
		}
	}

	updateDebug() {
		if (globals.debugMode) {
			textPointsPower.setText(currentSaveGame.playerPower);
			textPointsKarma.setText(currentSaveGame.playerKarma);
			textPointsIntellect.setText(currentSaveGame.playerIntellect);
			textPointsLove.setText(currentSaveGame.playerLove);
			textPointsDarkTetrad.setText(currentSaveGame.playerDarkTetrad);
		}
	}

	update() {
		//Move text based on sliders
		if (slider01.visible == true) {
			text1.y = text1_topGap - (((slider01.y - text1_topGap) / rightSliderGap01) * text1_distance);
		}
		if (slider02.visible == true) {
			choicesTextGroup.y = 1 - (((slider02.y - text2_topGap) / rightSliderGap02) * text2_distance);
		}
	}
}
