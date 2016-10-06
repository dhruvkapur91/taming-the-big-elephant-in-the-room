$(function () {

    var model = {
        initialize: function () {
            this.images = 1;
	    this.description = "image"
	    this.dataUnits = "MBs"
            this.sizePerImage = 10;
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
        }
    };
    
    var id = "numberOfImages";
    var element = document.getElementById(id);
    new Tangle(element,model);
    
});
