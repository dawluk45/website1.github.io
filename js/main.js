// scroll to Top
let pageHeight = innerHeight / 2;

window.onscroll = function(){
    
    let YOffset= window.pageYOffset;

    if(YOffset > pageHeight){
        document.getElementById('to_top').style.display = "block";    
    } else {
       document.getElementById('to_top').style.display = "inherit";
  }    
}