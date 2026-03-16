// HERO PARALLAX

window.addEventListener("scroll",()=>{

const heroContent = document.querySelector(".heroContent")

let scroll = window.scrollY

heroContent.style.transform = `translateY(${scroll*0.25}px)`

heroContent.style.opacity = 1 - scroll/500

})




// VIDEO HOVER PLAY

document.querySelectorAll("video").forEach(video=>{

video.addEventListener("mouseenter",()=>{

video.play()

})

video.addEventListener("mouseleave",()=>{

video.pause()

})

})

const heroImage = document.querySelector(".serviceHero img");

window.addEventListener("scroll", () => {

if(heroImage){

const scroll = window.scrollY;

heroImage.style.transform = "translateY(" + scroll * 0.35 + "px)";

}

});

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});


document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

const target = this.getAttribute("href");

if(target && target.includes(".html")){

e.preventDefault();

document.body.classList.remove("loaded");

setTimeout(()=>{

window.location = target;

},400);

}

});

});
