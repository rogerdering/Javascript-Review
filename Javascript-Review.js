function fruits (apple, grape, lemon) {
	return apple + grape + lemon;	
}

console.log(fruits(1, 3, 5))

function findLast (word) {
	for(var i = 0; i == word.length; i++) { 
	}
	return word[i];
}

console.log(findLast("ends"))

function findCube (number) {
	var answer = number * number * number;
	return answer;
}

console.log(findCube(5))

function reverse (unreversed) {
	var output;
	for(var i = unreversed.length; i > -1; i--) {
		var output = output + unreversed[i];
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
	return Object.values(country)
	return Object.keys(country)

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