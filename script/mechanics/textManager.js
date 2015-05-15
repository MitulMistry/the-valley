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

var choice = function (text, karmaCost, karmaBoost, intellectCost, intellectBoost, loveCost, loveBoost, powerCost, powerBoost, darkTetradCost, darkTetradBoost, additionalVariableCostA_Ref, additionalVariableCostA, additionalVariableCostB_Ref, additionalVariableCostB, additionalVariableBoostA_Ref, additionalVariableBoostA, additionalVariableBoostB_Ref, additionalVariableBoostB, destinationA, desinationA_Percentage, destinationB, desinationB_Percentage, destinationC, desinationC_Percentage, destinationD, desinationD_Percentage) {
	this.text;
	this.karmaCost = 0;
	this.karmaBoost = 0;
	this.intellectCost = 0;
	this.intellectBoost = 0;
	this.loveCost = 0;
	this.loveBoost = 0;
	this.powerCost = 0;
	this.powerBoost = 0;
	this.darkTetradCost = 0;
	this.darkTetradBoost = 0;
	this.additionalVariableCostA_Ref;
	this.additionalVariableCostA = 0;
	this.additionalVariableCostB_Ref;
	this.additionalVariableCostB = 0;
	this.additionalVariableBoostA_Ref;
	this.additionalVariableBoostA = 0;
	this.additionalVariableBoostB_Ref;
	this.additionalVariableBoostB = 0;
	this.destinationA;
	this.destinationA_Percentage = 1;
	this.destinationB;
	this.destinationB_Percentage = 0;
	this.destinationC;
	this.destinationC_Percentage = 0;
	this.destinationD;
	this.destinationD_Percentage = 0;

	//additional variables

	if (typeof text !== 'undefined') {
		this.text = text;
	}
	if (typeof karmaCost !== 'undefined') {
		this.karmaCost = karmaCost;
	}
	if (typeof karmaBoost !== 'undefined') {
		this.karmaBoost = karmaBoost;
	}
	if (typeof intellectCost !== 'undefined') {
		this.intellectCost = intellectCost;
	}
	if (typeof intellectBoost !== 'undefined') {
		this.intellectBoost = intellectBoost;
	}
	if (typeof loveCost !== 'undefined') {
		this.loveCost = loveCost;
	}
	if (typeof loveBoost !== 'undefined') {
		this.loveBoost = loveBoost;
	}
	if (typeof powerCost !== 'undefined') {
		this.powerCost = powerCost;
	}
	if (typeof powerBoost !== 'undefined') {
		this.powerBoost = powerBoost;
	}
	if (typeof darkTetradCost !== 'undefined') {
		this.darkTetradCost = darkTetradCost;
	}
	if (typeof darkTetradBoost !== 'undefined') {
		this.darkTetradBoost = darkTetradBoost;
	}
	if (typeof additionalVariableCostA_Ref !== 'undefined') {
		this.additionalVariableCostA_Ref = additionalVariableCostA_Ref;
	}
	if (typeof additionalVariableCostA !== 'undefined') {
		this.additionalVariableCostA = additionalVariableCostA;
	}
	if (typeof additionalVariableCostB_Ref !== 'undefined') {
		this.additionalVariableCostB_Ref = additionalVariableCostB_Ref;
	}
	if (typeof additionalVariableCostB !== 'undefined') {
		this.additionalVariableCostB = additionalVariableCostB;
	}
	if (typeof additionalVariableBoostA_Ref !== 'undefined') {
		this.additionalVariableBoostA_Ref = additionalVariableBoostA_Ref;
	}
	if (typeof additionalVariableBoostA !== 'undefined') {
		this.additionalVariableBoostA = additionalVariableBoostA;
	}
	if (typeof additionalVariableBoostB_Ref !== 'undefined') {
		this.additionalVariableBoostB_Ref = additionalVariableBoostB_Ref;
	}
	if (typeof additionalVariableBoostB !== 'undefined') {
		this.additionalVariableBoostB = additionalVariableBoostB;
	}
	if (typeof destinationA !== 'undefined') {
		this.destinationA = destinationA;
	}
	if (typeof destinationA_Percentage !== 'undefined') {
		this.destinationA_Percentage = destinationA_Percentage;
	}
	if (typeof destinationB !== 'undefined') {
		this.destinationB = destinationB;
	}
	if (typeof destinationB_Percentage !== 'undefined') {
		this.destinationB_Percentage = destinationB_Percentage;
	}
	if (typeof destinationC !== 'undefined') {
		this.destinationC = destinationC;
	}
	if (typeof destinationC_Percentage !== 'undefined') {
		this.destinationC_Percentage = destinationC_Percentage;
	}
	if (typeof destinationD !== 'undefined') {
		this.destinationD = destinationD;
	}
	if (typeof destinationD_Percentage !== 'undefined') {
		this.destinationD_Percentage = destinationD_Percentage;
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

var testStoryModuleMap = new map;
var testChoicesModuleMap = new map;

testStoryModuleMap.set("AA000AA000AB", "You join the hunting party and your father looks at you skeptically, unsure of what to make of your character. Your brother hardly pays you notice and the other hunters follow into the forest./n/nAfter many hours of searching, the dogs come across the tracks of a group of wild pigs. The hunters prepare their nets and spears and follow the tracks. You see the pigs in the thickets and the others stalk them quietly. Your father holds you back, however, and together you observe the hunters’ tactics./n/nOne of the pigs gets spooked and raises the alarm and the hunters chase the sprinting hogs. You make to follow, but turn abruptly at the nearby primal grunting. Before you stands a monstrous hulk of a boar with brutal tusks turned outward. The boars charges into your father and gores him and he struggles with the animal on the ground./n/nWhat do you do?");

var choiceAA000AA000AB = new choice({ text: "Help your father. The boar is very dangerous and you are a weak young man, but you must do something to help before it’s too late.", destinationA: "AA001AA000AA", destinationA_Percentage: .5, destinationB: "AA002AA000AA", destinationB_Percentage: .5});
testChoicesModuleMap.set("AA000AA000AB", choiceAA000AA000AB);