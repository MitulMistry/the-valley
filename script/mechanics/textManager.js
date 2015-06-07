//-------Constants--------

//Story module numbers
var MODULE_ASCENT_OF_MAN = 1; //AA
var MODULE_VALLEY_SPIRIT = 2; //AB
var MODULE_LOTTERY_IN_BABYLON = 3; //AC
var MODULE_THE_PROMETHEANS = 4; //AD
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
var POINT_BOOST_JACKPOT = 25;

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

var choice = function (text, karmaCost, karmaBoost, intellectCost, intellectBoost, loveCost, loveBoost, powerCost, powerBoost, darkTetradCost, darkTetradBoost, destinationA, desinationA_Percentage, destinationB, desinationB_Percentage, destinationC, desinationC_Percentage, destinationD, desinationD_Percentage, additionalVariableCostA_Key, additionalVariableCostA, additionalVariableCostB_Key, additionalVariableCostB, additionalVariableBoostA_Key, additionalVariableBoostA, additionalVariableBoostB_Key, additionalVariableBoostB) {
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
	this.destinationA;
	this.destinationA_Percentage = 1;
	this.destinationB;
	this.destinationB_Percentage = 0;
	this.destinationC;
	this.destinationC_Percentage = 0;
	this.destinationD;
	this.destinationD_Percentage = 0;
	this.additionalVariableCostA_Key;
	this.additionalVariableCostA = 0;
	this.additionalVariableCostB_Key;
	this.additionalVariableCostB = 0;
	this.additionalVariableBoostA_Key;
	this.additionalVariableBoostA = 0;
	this.additionalVariableBoostB_Key;
	this.additionalVariableBoostB = 0;

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
	if (typeof additionalVariableCostA_Key !== 'undefined') {
		this.additionalVariableCostA_Key = additionalVariableCostA_Key;
	}
	if (typeof additionalVariableCostA !== 'undefined') {
		this.additionalVariableCostA = additionalVariableCostA;
	}
	if (typeof additionalVariableCostB_Key !== 'undefined') {
		this.additionalVariableCostB_Key = additionalVariableCostB_Key;
	}
	if (typeof additionalVariableCostB !== 'undefined') {
		this.additionalVariableCostB = additionalVariableCostB;
	}
	if (typeof additionalVariableBoostA_Key !== 'undefined') {
		this.additionalVariableBoostA_Key = additionalVariableBoostA_Key;
	}
	if (typeof additionalVariableBoostA !== 'undefined') {
		this.additionalVariableBoostA = additionalVariableBoostA;
	}
	if (typeof additionalVariableBoostB_Key !== 'undefined') {
		this.additionalVariableBoostB_Key = additionalVariableBoostB_Key;
	}
	if (typeof additionalVariableBoostB !== 'undefined') {
		this.additionalVariableBoostB = additionalVariableBoostB;
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

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
var testStoryModuleMap = new Map();
var testChoicesModuleMap = new Map();

//Maybe use a csv file instead of hand coding all this shit?
//http://papaparse.com/docs

testStoryModuleMap.set("AA000AA000AB", "You join the hunting party and your father looks at you skeptically, unsure of what to make of your character. Your brother hardly pays you notice and the other hunters follow into the forest.\n\nAfter many hours of searching, the dogs come across the tracks of a group of wild pigs. The hunters prepare their nets and spears and follow the tracks. You see the pigs in the thickets and the others stalk them quietly. Your father holds you back, however, and together you observe the hunters’ tactics.\n\nOne of the pigs gets spooked and raises the alarm and the hunters chase the sprinting hogs. You make to follow, but turn abruptly at the nearby primal grunting. Before you stands a monstrous hulk of a boar with brutal tusks turned outward. The boar charges into your father and gores him and he struggles with the animal on the ground.\n\nWhat do you do?");

var choiceAA000AA000AB = new choice({ text: "Help your father. The boar is very dangerous and you are a weak young man, but you must do something to help before it’s too late.", destinationA: "AA001AA000AA", destinationA_Percentage: .5, destinationB: "AA002AA000AA", destinationB_Percentage: .5});
testChoicesModuleMap.set("AA000AA000AB", choiceAA000AA000AB);

var currentModuleText;
var currentModuleChoices;

var textManager = function ()
{

}

textManager.prototype.loadModule = function (moduleNumber)
{
	//this.loadJSON();
	if (typeof moduleNumber === 'number')
	{
		if (moduleNumber == MODULE_ASCENT_OF_MAN)
		{
			currentNodeKey = "AA000AA000AA";
			this.loadJSON({ currentModuleTextPath: "/script/storyModules/module01AscentOfManTEXT.json", currentModuleChoicesPath: "/script/storyModules/module01AscentOfManCHOICES.json" });
		}
		else if (moduleNumber == MODULE_VALLEY_SPIRIT)
		{
			//currentNodeKey = "";
			this.loadJSON({ currentModuleTextPath: "/script/storyModules/module02ValleySpiritTEXT.json", currentModuleChoicesPath: "/script/storyModules/module02ValleySpiritCHOICES.json" });
		}
		else if (moduleNumber == MODULE_LOTTERY_IN_BABYLON)
		{
			//currentNodeKey = "";
			this.loadJSON({ currentModuleTextPath: "/script/storyModules/module03LotteryInBabylonTEXT.json", currentModuleChoicesPath: "/script/storyModules/module03LotteryInBabylonCHOICES.json" });
		}
		else if (moduleNumber == MODULE_THE_PROMETHEANS)
		{
			//currentNodeKey = "";
			this.loadJSON({ currentModuleTextPath: "/script/storyModules/module04ThePrometheansTEXT.json", currentModuleChoicesPath: "/script/storyModules/module04ThePrometheansCHOICES.json" });
		}
		else if (moduleNumber == MODULE_DEAD_PRESIDENTS)
		{
			//currentNodeKey = "";
			this.loadJSON({ currentModuleTextPath: "/script/storyModules/module05DeadPresidentsTEXT.json", currentModuleChoicesPath: "/script/storyModules/module05DeadPresidentsCHOICES.json" });
		}
		else if (moduleNumber == MODULE_SHAKE_HANDS_WITH_THE_DEVIL)
		{
			//currentNodeKey = "";
			this.loadJSON({ currentModuleTextPath: "/script/storyModules/module06ShakeHandsWithTheDevilTEXT.json", currentModuleChoicesPath: "/script/storyModules/module06ShakeHandsWithTheDevilCHOICES.json" });
		}
		else if (moduleNumber == MODULE_MORAL_HAZZARD)
		{
			//currentNodeKey = "";
			this.loadJSON({ currentModuleTextPath: "/script/storyModules/module07MoralHazzardTEXT.json", currentModuleChoicesPath: "/script/storyModules/module07MoralHazzardCHOICES.json" });
		}
		else if (moduleNumber == MODULE_PLUTOCRATS_OF_MARS)
		{
			//currentNodeKey = "";
			this.loadJSON({ currentModuleTextPath: "/script/storyModules/module08PlutocratsOfMarsTEXT.json", currentModuleChoicesPath: "/script/storyModules/module08PlutocratsOfMarsCHOICES.json" });
		}
		else if (moduleNumber == MODULE_GHOSTS_OF_PERSIA)
		{
			//currentNodeKey = "";
			this.loadJSON({ currentModuleTextPath: "/script/storyModules/module09GhostsOfPersiaTEXT.json", currentModuleChoicesPath: "/script/storyModules/module09GhostsOfPersiaCHOICES.json" });
		}
		else {
			//error - do nothing
		}
	}
}

textManager.prototype.parseModule = function (currentModuleTextPath, currentModuleChoicesPath)
{

	//http://iviewsource.com/codingtutorials/getting-started-with-javascript-object-notation-json-for-absolute-beginners/
	//currentModuleText = JSON.parse("/script/storyModules/CSV_TEST.json");

	//var config = buildConfig();
	//"../script/storyModules/module01AscentOfManTEXT.csv"
	//"../script/storyModules/module01AscentOfManCHOICES.csv"
	//http://mitulmistry.com/test/module01AscentOfManTEXT.csv
	//http://mitulmistry.com/test/module01AscentOfManCHOICES.csv
	//"../script/mechanics/CSV_TEST2.csv"

	//Papa.parse("http://example.com/file.csv", { download: true, complete: function(results) { console.log(results); } });

	//testPASSED = true;
	//http://stackoverflow.com/questions/26266459/retrieve-parsed-data-from-csv-in-javascript-object-using-papa-parse

	//https://www.google.com/search?q=fileInput.files&ie=utf-8&oe=utf-8#q=javascript+local+database
	/*
	Papa.parse("/script/mechanics/CSV_TEST2.csv", {
		//header: true, //treats first line as header
		//dynamicTyping: true, //makes sure data is parsed as correct types as opposed to all strings
		download: true,
		complete: function (results) {
			console.log(results);
			currentModuleText = results; //callback
		}
	});
	*/

	/*
	Papa.parse(currentModuleTextPath, {
		header: true, //treats first line as header
		dynamicTyping: true, //makes sure data is parsed as correct types as opposed to all strings
		complete: function (results) {
			currentModuleText = results; //callback
		}
	});

	Papa.parse(currentModuleChoicesPath, {
		header: true,
		dynamicTyping: true,
		complete: function (results) {
			currentModuleChoices = results;
		}
	});
	*/
}

textManager.prototype.getText = function (key)
{
	//$ just means jquery, so $.getJSON means jquery.getJSON
	if (typeof key !== 'undefined') {
		$.getJSON('/script/storyModules/module01AscentOfManTEXT.json', function (data) {
			console.log("SUCCESS: " + data[1].TEXT);
			//return data[key].text;
		});
	}
}

var currentModuleTextMap = new Map();
var currentModuleChoicesMap = new Map();
var currentModuleChoicesData;

textManager.prototype.loadJSON = function (currentModuleTextPath, currentModuleChoicesPath) {
	//if (typeof (currentModuleTextPath && currentModuleChoicesPath) !== 'undefined') {
		$.getJSON('/script/storyModules/module01AscentOfManTEXT.json', function (data) {
			//--This following section is the AJAX callback - executes upon successfully loading the data
			for (var i = 0; i < data.length; i++) {
				currentModuleTextMap.set(data[i].KEY, data[i].TEXT);
				//console.log("SUCCESS: " + data[i].KEY + data[i].TEXT);
			}
			dataLoadedFlag1 = true;
			//--End AJAX callback
		});

		$.getJSON('/script/storyModules/module01AscentOfManCHOICES.json', function (data) {
			//--This following section is the AJAX callback - executes upon successfully loading the data
			currentModuleChoicesData = data;
			dataLoadedFlag2 = true;
			//--End AJAX callback
		});
	//}
}