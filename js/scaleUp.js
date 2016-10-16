$(function () {

    var model = {
        initialize: function () {
            this.numberOfImages = 1;
	    this.description = "image";
	    this.dataUnits = "MBs";
            this.sizePerImage = 10;
	    this.tooMuchMessage = "";
         },
        update: function () {
	    var actualSize = this.numberOfImages * this.sizePerImage;
            this.totalSize = actualSize
	    if(this.numberOfImages > 1) {
		this.description = "images"
	    } else {
		this.description = "image"
	    }
	    if(this.totalSize > 1024){
		this.totalSize = Math.round(this.totalSize * 100 / 1024)/100
		this.dataUnits = "GBs"
	    }else{
		this.dataUnits = "MBs"
	    }
	    if(this.totalSize > 1024){
		this.totalSize = Math.round(this.totalSize * 100 / (1024))/100
		this.dataUnits = "TBs"
	    }
	    $("#scale_up_limit .imageSize").attr("width",0.0115*this.numberOfImages)
	    if(this.numberOfImages > 21000 && this.numberOfImages < 260000){
		var factor = 0.00023;
		var factorFill = factor*0.8;
		$("#scale_up_limit .imageSize").attr("width",241 + factorFill*this.numberOfImages);
		$(".slide-background .present").css("background-color","rgba(255,0,0,0)");		
		$("#scale_up_limit .laptopSize").attr("width",250 + (this.numberOfImages-21000.0)*factor);
		$("#scale_up_limit .laptopSize").attr("height",156 + (this.numberOfImages-21000.0)*factor);
		$("#scale_up_limit .imageSize").attr("height",146 + factorFill*this.numberOfImages);
		$("#scale_up_limit .appleLogo").attr("x",155 + (this.numberOfImages-21000.0)*factor*0.6);
		$("#scale_up_limit .appleLogo").attr("y",150 + (this.numberOfImages-21000.0)*factor*0.6);
		$("#scale_up_limit svg text")[0].innerHTML = "Buying more disk..."
		this.tooMuchMessage = "";
	    } else if(this.numberOfImages >= 260000){
//		console.log("Not here!!")
		var alpha = Math.min(0.4,(this.numberOfImages - 260000)/1000)
		$(".slide-background .present").css("background-color","rgba(255,0,0,"+alpha+")");
		this.tooMuchMessage = "Sadly limited on how much memory/disk we can have... <br/> Both physically and economically";
		$("#scale_up_limit svg text")[0].innerHTML = "No more. Too costly!"
		$("#scale_up_limit .imageSize").attr("height",200);		
		$("#scale_up_limit .imageSize").attr("width",295);		
	    } else{
//		console.log($(".imageSize").attr("width"))		
		$("#scale_up_limit .laptopSize").attr("width",250);
		$("#scale_up_limit .laptopSize").attr("height",156);
		$("#scale_up_limit .imageSize").attr("height",146);
		$("#scale_up_limit .appleLogo").attr("x",155);
		$("#scale_up_limit .appleLogo").attr("y",150);
		$(".slide-background .present").css("background-color","rgba(255,0,0,0)");
		this.tooMuchMessage = "";
	    }
        }
    };

    var element = $("#scale_up_limit .change_number_of_images")[0]
    new Tangle(element,model);
    
});
