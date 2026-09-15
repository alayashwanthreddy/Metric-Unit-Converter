let inputEl=document.getElementById("input-el")
let convertBtn=document.getElementById("convert-btn")
let lengthDis=document.getElementById("length-dis")
let volumeDis=document.getElementById("volume-dis")
let massDis=document.getElementById("mass-dis")
function length(){
    let len=Number(inputEl.value)*3.281
    return len.toFixed(2)
}
function volume(){
    let vol=Number(inputEl.value)*0.264
    return vol.toFixed(2)
}
function mass(){
    let ma=Number(inputEl.value)*2.204
    return ma.toFixed(2)
}
convertBtn.addEventListener("click",function(){
    let meter=length()
    let liter=volume()
    let kilo=mass()
    lengthDis.innerHTML+=`<br><p id="cmeter">${inputEl.value} meters=${meter}feet</p>`
    volumeDis.innerHTML+=`<br><p id="cliter">${inputEl.value} liter=${liter}gallon</p>`
    massDis.innerHTML+=`<br><p id="ckilo">${inputEl.value} kilogram=${kilo}pound</p>`
    inputEl.value=""
})
