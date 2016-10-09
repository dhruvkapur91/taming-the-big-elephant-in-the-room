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
	    $(".scaleUpSpaceLeft")[0].innerHTML = Math.round(100 - (this.numberOfImages*100/41000)) + "%"
	    $(".imageSize").attr("width",0.005*this.numberOfImages)
	    if(this.numberOfImages > 41000) {
		console.log("Here")
		this.tooMuchMessage = "But we still can't store more than 41,000 images"
	    }else {
		this.tooMuchMessage = ""
	    }
        }
    };
    
    var id = "scale_up";
    var element = document.getElementById(id);
    new Tangle(element,model);
    
});
