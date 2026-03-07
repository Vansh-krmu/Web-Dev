const login=document.getElementById("login")
const boot=document.getElementById("boot")
const os=document.getElementById("os")
const loginBtn=document.getElementById("loginBtn")
const keySound=document.getElementById("keySound")
const glitchSound=document.getElementById("glitchSound")

let audioUnlocked=false

document.addEventListener("keydown",()=>{
if(!audioUnlocked){
keySound.play().then(()=>keySound.pause())
audioUnlocked=true
}
},{once:true})

function typeSound(){
keySound.currentTime=0
keySound.play()
}

document.getElementById("user").addEventListener("input",typeSound)
document.getElementById("pass").addEventListener("input",typeSound)

loginBtn.onclick=()=>{
typeSound()
login.style.display="none"
boot.style.display="block"
typeBoot()

setTimeout(()=>{
boot.style.display="none"
os.style.display="block"
},4500)
}

function typeBoot(){
const lines=document.querySelectorAll(".boot-line")
let l=0
let c=0

function run(){
if(l>=lines.length) return
const t=lines[l].dataset.text
if(c<t.length){
lines[l].textContent+=t[c]
typeSound()
c++
setTimeout(run,40)
}else{
l++
c=0
setTimeout(run,500)
}
}
run()
}
