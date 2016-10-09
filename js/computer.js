var computerFactory = (function($){

    function createComputer(width,totalSpace){

	var aspectRatio = 1.60;
	var computerStyle = "fill:rgb(191,191,191);stroke-width:5;stroke:rgb(0,0,0);";
	var height = width/aspectRatio;
	var percentSpaceConsumed = 0;
	var rawSpaceConsumed = 0;
	var empty = true;
	var full = false;

	// drawing numbers
	var mainXOffset = 50,
	    mainYOffset = 50,
	    keyboardXOffset = mainXOffset/2,
	    keyboardHeight = 15,
	    extraKeyboardWidth = 50,
	    strokeRatio = 0.02,
	    strokeWidth = width*strokeRatio,
	    keyboardWidth = width + extraKeyboardWidth,
	    blackMarkWidth = extraKeyboardWidth/2,
	    blackMarkHeight = 3,
	    whiteMarkerWidth = width * 0.08,
	    whiteMarkerHeight = 3,
	    whiteMarkerXLocation = keyboardWidth/2 + (0.4*extraKeyboardWidth),
	    whiteMarkerYLocation = height + mainYOffset + keyboardHeight/6,
	    keyboardYOffset = height + mainYOffset + strokeWidth*0.5,	    
	    roundness = width*0.06;

	var draw = function(drawingElementClass){

	    var shadeOfGray = "rgb(191,191,191)"

	    d3.select(drawingElementClass)
		.selectAll("*")
		.remove()
	    
	    var mainScreen = d3.select(drawingElementClass)
		.append("rect")
		.attr("x",mainXOffset)
		.attr("y",mainYOffset)
		.attr("width",width)
		.attr("height",height)
		.style("fill",shadeOfGray)
		.style("stroke-width",strokeWidth)
		.style("stroke","black")
		.style("rx",roundness);

	    var keyboard = d3.select(drawingElementClass)
		.append("rect")
		.attr("x",keyboardXOffset)
		.attr("y",keyboardYOffset)
		.attr("width",keyboardWidth)
		.attr("height",keyboardHeight)
		.style("fill","rgb(170,170,170)");

	    var blackMark = d3.select(drawingElementClass)
		.append("rect")
		.attr("x",keyboardWidth-25)
		.attr("y",height+mainYOffset+keyboardHeight/2)
		.attr("width",blackMarkWidth)
		.attr("height",blackMarkHeight)
		.attr("style","black")

	    var whiteMark = d3.select(drawingElementClass)
		.append("rect")
		.attr("x",whiteMarkerXLocation)
		.attr("y",whiteMarkerYLocation)
		.attr("width",whiteMarkerWidth)
		.attr("height",whiteMarkerHeight)
		.style("fill","white");

	    var beneathKeyboard = d3.select(drawingElementClass)
		.append("rect")
		.attr("x",mainXOffset)
		.attr("y",height+mainYOffset+keyboardHeight/6+keyboardHeight)
		.attr("width",width)
		.attr("height",5)
		.attr("fill","rgb(200,200,200)");

	    d3.select(drawingElementClass)
		.append("rect")
		.attr("x",mainXOffset + strokeWidth)
		.attr("y",mainYOffset + strokeWidth)
		.attr("width",percentSpaceConsumed*width*0.95/100) // 240
		.attr("height",height*0.94)
		.attr("fill","red")
		.attr("rx",15);

	    d3.select(drawingElementClass)
		.append("text")
		.attr("x",mainXOffset*0.5+width*0.5)
		.attr("y",mainYOffset*1.5 + width*height*0.001)
		.attr("font-size",width*height*0.001)
		.text(percentSpaceConsumed + "%");

	    d3.select(drawingElementClass)
		.append("text")
		.attr("x",mainXOffset*0.25)
		.attr("y",mainYOffset*1.5)
		.attr("text-anchor","middle")
		.attr("font-size",width*height*0.0008)
		.text("space consumed.");	    
	    


	    return this;
	    
	};
	
	return {
	    width : width,
	    height : height,
	    storeFileOfSize : function(size) {
		empty = false;
		rawSpaceConsumed += size;
		if(rawSpaceConsumed >= totalSpace){
		    full = true;
		    rawSpaceConsumed = totalSpace;
		}
		percentSpaceConsumed = rawSpaceConsumed * 100 / totalSpace
		return this;
	    },
	    removeFileOfSize : function(size) {
		rawSpaceConsumed -= size;
		if(rawSpaceConsumed < totalSpace){
		    full = false;
		}
		if(rawSpaceConsumed <= 0){
		    rawSpaceConsumed = 0;
		    empty = true;
		}
		percentSpaceConsumed = rawSpaceConsumed * 100 / totalSpace
		return this;
	    },
	    draw : draw
	}
    }

    return function(width,totalSpace) {
	return createComputer(width,totalSpace)
    }
})(d3)
