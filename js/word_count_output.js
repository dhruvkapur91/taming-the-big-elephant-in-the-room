var countWords = function(sentence){
    return sentence
	.split(" ")
	.reduce(function(old,curr){
	    old[curr] = (old[curr]||0)+1;return old;
	},{});
	
}

var updateWordCount = function(){
    var sentence = $(".wordCountInput").text();
    var wordCount = countWords(sentence);
    $(".wordCountOutput").text(JSON.stringify(wordCount));
}

$(function(){
    updateWordCount();

    //This is one sentence This is another sentence

    var wordZero = "This"
    var wordOne = "This is"
    var wordTwo = "This is one"
    var wordThree = "This is one sentence"
    var wordFour = "This is one sentence This"
    var wordFive = "This is one sentence This is"
    var wordSix = "This is one sentence This is another"
    var wordSeven = "This is one sentence This is another sentence"

    var wordCountFragment = function(event){
	if($(event.fragment).attr("class").includes("wordZero")){
	    $(".wordCountDictionary").text(JSON.stringify(countWords(wordZero)));
	}
	
	if($(event.fragment).attr("class").includes("wordOne")){
	    $(".wordCountDictionary").text(JSON.stringify(countWords(wordOne)));
	}

	if($(event.fragment).attr("class").includes("wordTwo")){
	    $(".wordCountDictionary").text(JSON.stringify(countWords(wordTwo)));
	}

	if($(event.fragment).attr("class").includes("wordThree")){
	    $(".wordCountDictionary").text(JSON.stringify(countWords(wordThree)));
	}

	if($(event.fragment).attr("class").includes("wordFour")){
	    $(".wordCountDictionary").text(JSON.stringify(countWords(wordFour)));
	}
	
	if($(event.fragment).attr("class").includes("wordFive")){
	    $(".wordCountDictionary").text(JSON.stringify(countWords(wordFive)));
	}

	if($(event.fragment).attr("class").includes("wordSix")){
	    $(".wordCountDictionary").text(JSON.stringify(countWords(wordSix)));
	}
	
	if($(event.fragment).attr("class").includes("wordSeven")){
	    $(".wordCountDictionary").text(JSON.stringify(countWords(wordSeven)));
	}
	    
    };
    
    Reveal.addEventListener('fragmentshown',wordCountFragment);
    Reveal.addEventListener('fragmenthidden',wordCountFragment);

    Reveal.addEventListener('functional_word_count',function(){
	$(".wordCountDictionary").text("");
    });
});
