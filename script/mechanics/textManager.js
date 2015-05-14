//-------Constants--------

//Story module numbers
var MODULE_ASCENT_OF_MAN = 1; //AA
var MODULE_VALLEY_SPIRIT = 2; //AB
var MODULE_LOTTERY_IN_BABYLON = 3; //AC
var MODULE_PROMETHEANS = 4; //AD
var MODULE_DEAD_PRESIDENTS = 5; //AE
var MODULE_SHAKE_HANDS_WITH_THE_DEVIL = 6; //AF
var MODULE_MORAL_HAZZARD = 7; //AG
var MODULE_PLUTOCRATS_OF_MARS = 8; //AH
var MODULE_GHOSTS_OF_PERSIA = 9; //AI

//Point boost values for power, intellect, love, etc. for decisions
var POINT_BOOST_SMALL = 1;
var POINT_BOOST_MEDIUM = 2;
var POINT_BOOST_LARGE = 4;
var POINT_BOOST_HUGE = 12;

//Point costs for decisions
var POINT_COST_MINI_01 = 1;
var POINT_COST_MINI_02 = 3;
var POINT_COST_MINI_03 = 5;

var POINT_COST_MODERATE_01 = 10;
var POINT_COST_MODERATE_02 = 15;
var POINT_COST_MODERATE_03 = 20;

var POINT_COST_HEAVY_01 = 30;
var POINT_COST_HEAVY_02 = 40;
var POINT_COST_HEAVY_03 = 50;

var POINT_COST_MEGA_01 = 75;
var POINT_COST_MEGA_02 = 100;
var POINT_COST_MEGA_03 = 150;

var choice = function (text, karma, intellect, love, power, darkTetrad, destination) {
	this.text;
	this.karma = 0;
	this.intellect = 0;
	this.love = 0;
	this.power = 0;
	this.darkTetrad = 0;
	this.destination;

	//additional variables

	if (typeof text !== 'undefined') {
		this.text = text;
	}
	if (typeof karma !== 'undefined') {
		this.karma = karma;
	}
	if (typeof intellect !== 'undefined') {
		this.intellect = intellect;
	}
	if (typeof love !== 'undefined') {
		this.love = love;
	}
	if (typeof power !== 'undefined') {
		this.power = power;
	}
	if (typeof darkTetrad !== 'undefined') {
		this.darkTetrad = darkTetrad;
	}
	if (typeof destination !== 'undefined') {
		this.destination = destination;
	}
}

var storyNode = function (referenceLabel, text) {
	this.referenceLabel;
	this.text;
	this.choicesArray = [];

	if (typeof referenceLabel !== 'undefined') {
		this.referenceLabel = referenceLabel;
	}
	if (typeof text !== 'undefined') {
		this.text = text;
	}
}

//Add choice to set of choices in story node
storyNode.prototype.addChoice = function (text, karma, intellect, love, power, darkTetrad, destination) {
	choicesArray.push({ text: text, karma: karma, intellect: intellect, love: love, power: power, darkTetrad: darkTetrad, destination: destination });
};