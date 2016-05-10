function fruits (apple, grape, lemon) {
	return apple + grape + lemon;	
}

console.log(fruits(1, 3, 5))

function findLast (word) {
	for(var i = 0; i < word.length; i++) { 
	}
	return word[(i-1)];
}

console.log(findLast("ends"))

function findCube (number) {
	var answer = number * number * number;
	return answer;
}

console.log(findCube(5))

function reverse (unreversed) {
	var output = "";
	for(var i = unreversed.length -1; i > -1; i--) {
		output += unreversed[i];
	}
	return output;
}

console.log(reverse("palindrome"))



function organiser (country, capital) {
	var index = { 

	};
	for (var i = 0; i < country.length; ++i) {
		index[country[i]] = capital[i]; 	
	};
	return index;
}

console.log(organiser(["Spain", "France", "Italy"], ["Madrid", "Paris", "Rome"]))

var Japan = {
	Kyoto : 100,
	Tokyo : 200,
	Hiroshima : 300
}

function disorganiser (country) {
	NewObject = {
		keys : [],
		values : []
	}
	for (var key in country) {
		NewObject.keys.push(key)	
		NewObject.values.push(country[key]) 
	}
	return NewObject 
}

console.log(disorganiser(Japan))

function getToNth (x, n) {
	var Nth = x;
	for (var i = 0; i < n; i++) {
		var Nth = Nth * x;
	}
	return Nth;
}

console.log(getToNth(5, 7))