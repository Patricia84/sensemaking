
var getWords = function(titles){
	console.log(titles)
var words = []
	var Regx = /([a-z]+)/g
titles.forEach (function(title){
	var filter = title.toLowerCase().match(Regx)
	console.log(filter);
words.push (filter)
	 
})


	return words;
}


module.exports = getWords;