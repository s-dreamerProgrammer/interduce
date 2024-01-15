let skills=document.querySelectorAll(".hStyle")

for(let i=0;i<skills.length;i++){
    skills[i].addEventListener("mouseover",()=>{
        skills[i].classList.add("hNew")
    })
    skills[i].addEventListener("mouseout",()=>{
        skills[i].classList.remove("hNew")
    })
}
let parent=document.getElementById("container")
let Circle=document.getElementById("circle")
let Bott=document.getElementById("bottom")
let img=document.getElementById("image")
let Pimg=document.getElementById("pic")
parent.addEventListener("mouseover",()=>{
    Circle.style.top=-280+"px"
    Bott.style.bottom=0
    img.style.scale=70+"%"
    Pimg.style.border="10px solid black"
})
parent.addEventListener("mouseout",()=>{
    Circle.style.top=-450+"px"
    Bott.style.bottom=-40+"px"
    img.style.scale=100+"%"
    Pimg.style.border="none"
})

