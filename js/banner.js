var banner=document.getElementById("banner");
var header=document.getElementById("header");
var page=document.getElementsByClassName("page");
var aa=0;
var bantimer=null;
autoplay();

header.onmouseover=function(){
    clearInterval(bantimer)
}
header.onmouseout=function(){
    autoplay()
}

function autoplay(){
    bantimer=setInterval(function() {
	    aa++;
	    if(aa>=7) {
	        banner.style.left = "0rem";
	        aa=1; 
	    }
	    move(banner,"left",-3.75*aa);
	    pageCSS()
    }, 2000)
}

function pageCSS(){
    for(var l=0;l<page.length;l++){
        page[l].style.background="none";
    }
    page[aa===6?0:aa].style.background="#fff";
}


for(var k = 0; k < bpage.length; k++) {
	page[k].index = k;
   	page[k].onclick = function() {
   		if(this.index > aa) {
   			move(banner, "left", -3.75 * this.index);
   		} else {
   			move(banner, "right", -3.75 * this.index);
   		}
   		aa = this.index;
   	}
}

function move(ele, dir, end) {
    clearInterval(ele.bantimer)
    if(dir==="left") {
        ele.bantimer=setInterval(function(){
            ele.style.left=ele.offsetLeft-0.30+"rem";
            if(ele.offsetLeft<=end){
                clearInterval(ele.bantimer);
                ele.style.left=end+"rem";
            }
        })
    }else{
        ele.bantimer=setInterval(function(){
            ele.style.left=ele.offsetLeft+0.30+"rem";
            if(ele.offsetLeft>=end){
                clearInterval(ele.bantimer);
                ele.style.left=end+"rem";
            }
        });
    }
}