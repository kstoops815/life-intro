var SolarSystem = (function(oldSolarSystem){
	const stars = ["Ain", "Baham", "Chara", "Diadem"];

	oldSolarSystem.getStars = function(){
		return stars;
	};

	oldSolarSystem.addStars = function(newStars){
		stars.push(newStars);
	}

	return oldSolarSystem;
})(SolarSystem || {});