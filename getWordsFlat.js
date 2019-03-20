var flatten = require('array-flatten')

var getWordsFlat = function(words){
	var wordsFlat = flatten(words)

	return wordsFlat;
}


module.exports = getWordsFlat;