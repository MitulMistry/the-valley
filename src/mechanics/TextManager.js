import $ from 'jquery';

import globals from '../globals';
import constants from '../constants';

export default class {
	constructor() {
		// this.currentModuleTextMap = new Map();
		// this.currentModuleChoicesData = {};
		// this.currentModuleLinkNodesData = {};
	}

	// get currentModuleTextMap() { return this.currentModuleTextMap; }
  //
	// get currentModuleChoicesData() { return this.currentModuleChoicesData; }
  //
	// get currentModuleLinkNodesData() { return this.currentModuleLinkNodesData; }

	loadModule (moduleNumber)	{
		//this.loadJSON();
		if (typeof moduleNumber === 'number')
		{
			if (moduleNumber == constants.MODULE_ASCENT_OF_MAN)
			{
				// currentNodeKey = "AA000AA000AA";
				this.loadJSON({ currentModuleTextPath: "/src/storyModules/module01AscentOfManTEXT.json", currentModuleChoicesPath: "/src/storyModules/module01AscentOfManCHOICES.json", currentModuleLinkNodesPath: "/src/storyModules/module01AscentOfManLINKNODES.json" });
			}
			else if (moduleNumber == constants.MODULE_VALLEY_SPIRIT)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/src/storyModules/module02ValleySpiritTEXT.json", currentModuleChoicesPath: "/src/storyModules/module02ValleySpiritCHOICES.json", currentModuleLinkNodesPath: "/src/storyModules/module02ValleySpiritLINKNODES.json" });
			}
			else if (moduleNumber == constants.MODULE_LOTTERY_IN_BABYLON)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/src/storyModules/module03LotteryInBabylonTEXT.json", currentModuleChoicesPath: "/src/storyModules/module03LotteryInBabylonCHOICES.json", currentModuleLinkNodesPath: "/src/storyModules/module03LotteryInBabylonLINKNODES.json" });
			}
			else if (moduleNumber == constants.MODULE_THE_PROMETHEANS)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/src/storyModules/module04ThePrometheansTEXT.json", currentModuleChoicesPath: "/src/storyModules/module04ThePrometheansCHOICES.json", currentModuleLinkNodesPath: "/src/storyModules/module04ThePrometheansLINKNODES.json" });
			}
			else if (moduleNumber == constants.MODULE_DEAD_PRESIDENTS)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/src/storyModules/module05DeadPresidentsTEXT.json", currentModuleChoicesPath: "/src/storyModules/module05DeadPresidentsCHOICES.json", currentModuleLinkNodesPath: "/src/storyModules/module05DeadPresidentsLINKNODES.json" });
			}
			else if (moduleNumber == constants.MODULE_SHAKE_HANDS_WITH_THE_DEVIL)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/src/storyModules/module06ShakeHandsWithTheDevilTEXT.json", currentModuleChoicesPath: "/src/storyModules/module06ShakeHandsWithTheDevilCHOICES.json", currentModuleLinkNodesPath: "/src/storyModules/module06ShakeHandsWithTheDevilLINKNODES.json" });
			}
			else if (moduleNumber == constants.MODULE_MORAL_HAZZARD)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/src/storyModules/module07MoralHazzardTEXT.json", currentModuleChoicesPath: "/src/storyModules/module07MoralHazzardCHOICES.json", currentModuleLinkNodesPath: "/src/storyModules/module07MoralHazzardLINKNODES.json" });
			}
			else if (moduleNumber == constants.MODULE_PLUTOCRATS_OF_MARS)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/src/storyModules/module08PlutocratsOfMarsTEXT.json", currentModuleChoicesPath: "/src/storyModules/module08PlutocratsOfMarsCHOICES.json", currentModuleLinkNodesPath: "/src/storyModules/module08PlutocratsOfMarsLINKNODES.json" });
			}
			else if (moduleNumber == constants.MODULE_GHOSTS_OF_PERSIA)
			{
				//currentNodeKey = "";
				this.loadJSON({ currentModuleTextPath: "/src/storyModules/module09GhostsOfPersiaTEXT.json", currentModuleChoicesPath: "/src/storyModules/module09GhostsOfPersiaCHOICES.json", currentModuleLinkNodesPath: "/src/storyModules/module09GhostsOfPersiaLINKNODES.json" });
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
			$.getJSON('/src/storyModules/module01AscentOfManTEXT.json', function (data) {
				console.log("SUCCESS: " + data[1].TEXT);
				//return data[key].text;
			});
		}
	}
	*/
	loadJSON (currentModuleTextPath, currentModuleChoicesPath, currentModuleLinkNodesPath) {
		//if (typeof (currentModuleTextPath && currentModuleChoicesPath) !== 'undefined') {
		// let thisObj = this;

			$.getJSON('/src/storyModules/module01AscentOfManTEXT.json', function (data) {
				//--This following section is the AJAX callback - executes upon successfully loading the data
				for (var i = 0; i < data.length; i++) {
					// thisObj.currentModuleTextMap.set(data[i].KEY, data[i].TEXT);
					globals.currentModuleTextMap.set(data[i].KEY, data[i].TEXT);
					//console.log("SUCCESS: " + data[i].KEY + data[i].TEXT);
				}
				globals.dataLoadedFlag1 = true;
				//--End AJAX callback
			});

			$.getJSON('/src/storyModules/module01AscentOfManCHOICES.json', function (data) {
				//--This following section is the AJAX callback - executes upon successfully loading the data
				// thisObj.currentModuleChoicesData = data;
				globals.currentModuleChoicesData = data;
				globals.dataLoadedFlag2 = true;
				//--End AJAX callback
			});

			$.getJSON('/src/storyModules/module01AscentOfManLINKNODES.json', function (data) {
				//--This following section is the AJAX callback - executes upon successfully loading the data
				// thisObj.currentModuleLinkNodesData = data;
				globals.currentModuleLinkNodesData = data;
				globals.dataLoadedFlag3 = true;
				//--End AJAX callback
			});
		//}
	}
}
