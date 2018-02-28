import $ from 'jquery';

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
var POINT_BOOST_LARGE02 = 8;
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


var debugMode = false; //TRIGGERS DEBUG MODE

var currentModuleTextMap = new Map();
var currentModuleChoicesData;
var currentModuleLinkNodesData;

export default class {
	constructor() {

	}

	loadModule (moduleNumber)	{
		//this.loadJSON();
		if (typeof moduleNumber === 'number')
		{
			if (moduleNumber == MODULE_ASCENT_OF_MAN)
			{
				currentNodeKey = "AA000AA000AA";
				this.loadJSON({ currentModuleTextPath: "/script/storyModules/module01AscentOfManTEXT.json", currentModuleChoicesPath: "/script/storyModules/module01AscentOfManCHOICES.json", currentModuleLinkNodesPath: "/script/storyModules/module01AscentOfManLINKNODES.json" });
			}
			else if (moduleNumber == MODULE_VALLEY_SPIRIT)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/script/storyModules/module02ValleySpiritTEXT.json", currentModuleChoicesPath: "/script/storyModules/module02ValleySpiritCHOICES.json", currentModuleLinkNodesPath: "/script/storyModules/module02ValleySpiritLINKNODES.json" });
			}
			else if (moduleNumber == MODULE_LOTTERY_IN_BABYLON)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/script/storyModules/module03LotteryInBabylonTEXT.json", currentModuleChoicesPath: "/script/storyModules/module03LotteryInBabylonCHOICES.json", currentModuleLinkNodesPath: "/script/storyModules/module03LotteryInBabylonLINKNODES.json" });
			}
			else if (moduleNumber == MODULE_THE_PROMETHEANS)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/script/storyModules/module04ThePrometheansTEXT.json", currentModuleChoicesPath: "/script/storyModules/module04ThePrometheansCHOICES.json", currentModuleLinkNodesPath: "/script/storyModules/module04ThePrometheansLINKNODES.json" });
			}
			else if (moduleNumber == MODULE_DEAD_PRESIDENTS)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/script/storyModules/module05DeadPresidentsTEXT.json", currentModuleChoicesPath: "/script/storyModules/module05DeadPresidentsCHOICES.json", currentModuleLinkNodesPath: "/script/storyModules/module05DeadPresidentsLINKNODES.json" });
			}
			else if (moduleNumber == MODULE_SHAKE_HANDS_WITH_THE_DEVIL)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/script/storyModules/module06ShakeHandsWithTheDevilTEXT.json", currentModuleChoicesPath: "/script/storyModules/module06ShakeHandsWithTheDevilCHOICES.json", currentModuleLinkNodesPath: "/script/storyModules/module06ShakeHandsWithTheDevilLINKNODES.json" });
			}
			else if (moduleNumber == MODULE_MORAL_HAZZARD)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/script/storyModules/module07MoralHazzardTEXT.json", currentModuleChoicesPath: "/script/storyModules/module07MoralHazzardCHOICES.json", currentModuleLinkNodesPath: "/script/storyModules/module07MoralHazzardLINKNODES.json" });
			}
			else if (moduleNumber == MODULE_PLUTOCRATS_OF_MARS)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/script/storyModules/module08PlutocratsOfMarsTEXT.json", currentModuleChoicesPath: "/script/storyModules/module08PlutocratsOfMarsCHOICES.json", currentModuleLinkNodesPath: "/script/storyModules/module08PlutocratsOfMarsLINKNODES.json" });
			}
			else if (moduleNumber == MODULE_GHOSTS_OF_PERSIA)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/script/storyModules/module09GhostsOfPersiaTEXT.json", currentModuleChoicesPath: "/script/storyModules/module09GhostsOfPersiaCHOICES.json", currentModuleLinkNodesPath: "/script/storyModules/module09GhostsOfPersiaLINKNODES.json" });
			}
			else {
				//error - do nothing
			}
		}
	}

	/*
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
	*/
	loadJSON (currentModuleTextPath, currentModuleChoicesPath, currentModuleLinkNodesPath) {
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

			$.getJSON('/script/storyModules/module01AscentOfManLINKNODES.json', function (data) {
				//--This following section is the AJAX callback - executes upon successfully loading the data
				currentModuleLinkNodesData = data;
				dataLoadedFlag3 = true;
				//--End AJAX callback
			});
		//}
	}
}
