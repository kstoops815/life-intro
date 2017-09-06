//IIFE model
// let Something = (function(oldSomething){
//	const animals = ["cats", "dogs"];
// 	oldSomething.niceFunction = function(){
// 		console.log("I'm a nice function");
// 	}

// 	return oldSomething;

// })(Something || {});


var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	const spacecrafts = ["Sputnik", "Explorer 1", "Vanguard I", "Apollo 13", "Hitchhiker 18"];

	oldSolarSystem.getPlanets = function(){
		return planets;
	};

	oldSolarSystem.setPlanet = function(newPlanet){
		planets.push(newPlanet);
	};

	oldSolarSystem.getSpacecraft = function(){
		return spacecraft;
	};

	oldSolarSystem.setSpacecraft = function(newSpacecraft){
		spacecrafts.push(newSpacecraft);
	};

return oldSolarSystem;
})(SolarSystem || {});

let myPlanets = SolarSystem.getPlanets();
console.log("myPlanets", myPlanets);

