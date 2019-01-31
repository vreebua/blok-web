
var el = document.querySelector('.notification');

document.querySelector('button').addEventListener('click', function(){
    var count = Number(el.getAttribute('data-count'))
    el.setAttribute('data-count', count + 1);
});


//

var sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
var slider = document.getElementsByClassName('slider-parent')[0];
sliderTrigger.addEventListener( "click" , function(el){
if(slider.classList.contains("active")){
  slider.classList.remove("active");
 }else{
  slider.classList.add("active");
 }
});


