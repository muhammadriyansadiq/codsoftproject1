
function openunseenhamberg(){

    var a = document.querySelector(".unseenhamberg")
    var b = document.querySelector(".hamberg")
if(a.style.display === "none"){
a.style.display = "block"
b.style.display = "none"
}
else{
    a.style.display = "none"
 
}
}

function cross(){
    var a = document.querySelector(".unseenhamberg")
    var b = document.querySelector(".hamberg")

    // a.style.display = "none"
if(a.style.display === "block"){
    a.style.display = "none"
    b.style.display = "block"

}
else{
    a.style.display = "block"
}
}