var SolarSystem = (function(oldSolarSystem){
	const spacecrafts = ["Sputnik", "Explorer 1", "Vanguard I", "Apollo 13", "Hitchhiker 18"];

	oldSolarSystem.getSpacecraft = function(){
		return spacecrafts;
	};

	oldSolarSystem.setSpacecraft = function(newSpacecraft){
		spacecrafts.push(newSpacecraft);
	};

return oldSolarSystem;
})(SolarSystem || {});
