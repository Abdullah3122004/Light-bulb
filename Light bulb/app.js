var  btn_on= document.getElementById("btn_on")
var  btn_off= document.getElementById("btn_off")
var  img= document.getElementById("img")

btn_on.addEventListener("click", function () {

    img.src="images/img1.PNG"
    
})
btn_off.addEventListener("click", function () {
    
    img.src="images/img.PNG"
})