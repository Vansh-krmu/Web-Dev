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

const clock=document.getElementById("clock")
setInterval(()=>clock.textContent=new Date().toLocaleTimeString(),1000)

const out=document.getElementById("terminal-output")
const input=document.getElementById("terminal-input")
input.addEventListener("input",typeSound)

let hack=false

input.addEventListener("keydown",e=>{
if(e.key==="Enter"){
execute(input.value.trim())
input.value=""
}
})

function write(t){
out.innerHTML+=`<div>${t}</div>`
out.scrollTop=out.scrollHeight
}

function execute(cmd){
write("> "+cmd)
if(cmd==="help") write("help scan status hack clear")
else if(cmd==="scan"){
write("Networks detected: 4")
updateCred(1)
}
else if(cmd==="status") write(hack?"System compromised":"System stable")
else if(cmd==="hack"){
toggleHack()
updateCred(3)
}
else if(cmd==="clear") out.innerHTML=""
else write("Unknown command")
}

function toggleHack(){
hack=!hack
document.body.classList.toggle("hack")
glitchSound.currentTime=0
glitchSound.play()
write(hack?"Hack mode enabled":"Hack mode disabled")
}

document.getElementById("hackBtn").onclick=toggleHack

const missions=JSON.parse(localStorage.getItem("missions")||"[]")
const list=document.getElementById("mission-list")
const minput=document.getElementById("mission-input")
minput.addEventListener("input",typeSound)

function render(){
list.innerHTML=""
missions.forEach((m,i)=>{
const li=document.createElement("li")
li.textContent=m
li.onclick=()=>{
missions.splice(i,1)
save()
}
list.appendChild(li)
})
}

minput.addEventListener("keydown",e=>{
if(e.key==="Enter"){
missions.push(minput.value)
minput.value=""
save()
}
})

function save(){
localStorage.setItem("missions",JSON.stringify(missions))
render()
}

render()

function r(){return Math.floor(Math.random()*70)+20}

setInterval(()=>{
cpu.style.width=r()+"%"
net.style.width=r()+"%"
mem.style.width=r()+"%"
},1800)

let cred=42
const credValue=document.getElementById("credValue")
const credBar=document.getElementById("credBar")

function updateCred(n){
cred=Math.max(0,Math.min(100,cred+n))
credValue.textContent=cred
credBar.style.width=cred+"%"
}

const feed=document.getElementById("feed")
const messages=[
"Arasaka stock surges after covert op",
"Trauma Team deployed in Watson",
"NetWatch activity detected",
"Ripperdoc shortages reported",
"Gang violence rising in Pacifica"
]

setInterval(()=>{
const d=document.createElement("div")
d.textContent=messages[Math.floor(Math.random()*messages.length)]
feed.prepend(d)
if(feed.children.length>6) feed.removeChild(feed.lastChild)
},3000)

document.querySelectorAll("#implants li").forEach(li=>{
li.onclick=()=>{
li.classList.toggle("active")
updateCred(li.classList.contains("active")?2:-2)
}
})
