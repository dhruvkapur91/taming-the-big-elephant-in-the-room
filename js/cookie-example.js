$(function () {

    var model = {
        initialize: function () {
            this.images = 1;
	    this.description = "image";
	    this.dataUnits = "MBs";
            this.sizePerImage = 10;
	    this.tooMuchMessage = "";
         },
        update: function () {
            this.totalSize = this.images * this.sizePerImage;
	    if(this.images > 1) {
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
	    $(".spaceLeft")[0].innerHTML = Math.round(100 - (this.images*100/21000)) + "%"
	    $(".imageSize").attr("width",0.0115*this.images)
	    if(this.images > 21000) {
		console.log("Here")
		this.tooMuchMessage = "But we can't store more than 21,000 images"
	    }else {
		this.tooMuchMessage = ""
	    }
        }
    };
    
    var id = "numberOfImages";
    var element = document.getElementById(id);
    new Tangle(element,model);
    
});
