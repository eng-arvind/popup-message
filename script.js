const popups = document.querySelectorAll(".popup");
const popup = document.querySelector(".output");
const popmessage = document.querySelector(".message");
const closebtn = document.querySelector(".close");
closebtn.addEventListener("click",function(){
    popup.classList.add("hide");
})
for(let x=0;x<popups.length;x++)
{
    popups[x].addEventListener("click",function(){
        let outputText = this.getAttribute("data-message");
        message(outputText);
    })
}

function message(output){
    popup.classList.remove("hide");
    popmessage.innerHTML = output;
}
function showtextarea(){
    let x=document.getElementById("mytextarea").value;
    popup.classList.remove("hide");
    popmessage.innerHTML = x;
    // document.getElementById("demo").innerHTML = x;
}