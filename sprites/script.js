
var sprite = document.getElementById('sprite');
var interval;


function animateScript(){
    var position = 233;
    var speed = 100;
    
    interval = setInterval(()=>{

    sprite.style.backgroundPosition = `-${position}px 0px`;

    if(position < 1400){
        position+=233;
    }
    else{
        position=233;
    }
    },speed);
}



sprite.addEventListener('mouseover',animateScript);
sprite.addEventListener('mouseout',()=> clearInterval(interval));
