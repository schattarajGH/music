const ProjectPath = '';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
feather.replace();
//artist carousel
$('.artists').owlCarousel({
    loop:false,
    dots:false,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.trending').owlCarousel({
    loop:false,
    margin:38,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:2,
        },
        1000:{
            items:4
        }
    }
})
//scollbar for main content
$(function() {  
    $(".inner").niceScroll({cursorcolor:"#1C7492"});
});
$(function() {  
let range = document.getElementById("seek-bar");
let fill = document.getElementById("fill");
let volume = document.getElementById("volume");
let volumebar = document.getElementById("volume-bar");
let playPause = document.getElementById("playPause");
let audio = document.getElementById("audio");
let tracks = document.querySelector(".middle .tracks");
let fast  = document.getElementById("fast");
let slow  = document.getElementById("slow");
let playimg  = document.getElementById("playimg");
range.addEventListener("input",
function(){
fill.style.width=range.value+"%";
var get = audio.duration * (range.value / 100);
audio.currentTime=get;
});
range.addEventListener("input",()=>{
    fill.style.width=range.value+"%";
});
volume.addEventListener("input",()=>{
    volumebar.style.width=volume.value*100+"%";
});
playPause.addEventListener("click",()=>{
if(audio.paused){
    audio.play();
    playPause.classList.add("play");
    tracks.classList.add("play");
    playimg.classList.add("play");
}
else{
    audio.pause();
    playPause.classList.remove("play");
    tracks.classList.remove("play");
    playimg.classList.remove("play");

}
});
//audio time update
audio.addEventListener('timeupdate',function(){ 
    var nt = audio.currentTime * (100 / audio.duration);
    let time = audio.currentTime;
  
    var minutes = Math.floor(time / 60);

    var seconds = time - minutes * 60;

    var hours = Math.floor(time / 3600);

    let durationMinutes = Math.floor(audio.duration/60);
    let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

time = time - hours * 3600;
document.querySelector(".middle .currentTime .seconds").innerText=Math.floor(seconds);
document.querySelector(".middle .currentTime .minutes").innerText=minutes;
document.querySelector(".middle .durationTime .minutes").innerText=durationMinutes;
document.querySelector(".middle .durationTime .seconds").innerText=durationSeconds;
    //   range.title =time;
      fill.style.width = (nt+.3) +'%';
    range.value=nt;
    let rgval=range.value;
    if(rgval > 99.999)
    {
        playPause.classList.remove("play");
    tracks.classList.remove("play");
  }
  });
  //volume update
  volume.addEventListener("input",()=>{
      audio.volume=volume.value;
  });
  fast.addEventListener("click",()=>{
let sp = audio.playbackRate;
audio.playbackRate = sp+0.5;
  });
  slow.addEventListener("click",()=>{
    let sp = audio.playbackRate;
    audio.playbackRate = sp-0.5;
});
});
//scollbar for main content
$(function() {  
    $(".right-bar .tab-content").niceScroll({cursorcolor:"#1C7492"});
});
    function showFav(){
        document.getElementById("favourite").classList.toggle("active");
    }
//show hide form
function form(get){
    if(get=="register"){
document.querySelector(".login").classList.remove("active");
document.querySelector(".register").classList.add("active");
    }
    else{
        document.querySelector(".register").classList.remove("active");
        document.querySelector(".login").classList.add("active");
    }
}