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
            this.totalSize = this.numberOfImages * this.sizePerImage;
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
	    $(".spaceLeft")[0].innerHTML = Math.round(100 - (this.numberOfImages*100/21000)) + "%"
	    $(".imageSize").attr("width",0.0115*this.numberOfImages)
	    if(this.numberOfImages > 21000) {
		console.log("Here")
		this.tooMuchMessage = "But we can't store more than 21,000 images"
		var alpha = Math.min(0.4,(this.numberOfImages - 21000)/1000)
		$(".slide-background .present").css("background-color","rgba(255,0,0,"+alpha+")");
		
	    }else {
		this.tooMuchMessage = ""
		$(".slide-background .present").css("background-color","rgba(255,0,0,0)");
	    }
        }
    };
    
    var id = "change_number_of_images";
    var element = document.getElementById(id);
    new Tangle(element,model);
    
});
