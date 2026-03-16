// Loader

window.addEventListener("load",()=>{

setTimeout(()=>{

document.querySelector(".loader").style.display="none"

},1500)

})




// HERO PARALLAX

window.addEventListener("scroll",()=>{

const heroContent = document.querySelector(".heroContent")

let scroll = window.scrollY

heroContent.style.transform = `translateY(${scroll*0.3}px)`

heroContent.style.opacity = 1 - scroll/600

})




// VIDEO HOVER PLAY

document.querySelectorAll("video").forEach(v=>{

v.addEventListener("mouseenter",()=>{

v.play()

})

v.addEventListener("mouseleave",()=>{

v.pause()

})

})
