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

// PAGE FADE IN
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


// PAGE FADE OUT (alleen voor echte pagina links)
document.querySelectorAll("a").forEach(link => {

  const href = link.getAttribute("href");

  if(!href) return;

  if(href.startsWith("#")) return; // skip anchors

  if(href.startsWith("http")) return; // skip externe links

  link.addEventListener("click", function(e){

    e.preventDefault();

    document.body.classList.remove("loaded");

    setTimeout(()=>{

      window.location.href = href;

    }, 500);

  });

});
