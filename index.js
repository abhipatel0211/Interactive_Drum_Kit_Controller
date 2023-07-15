for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    // alert("Hii i got clicked");
    // console.log(this.innerHTML);    
    // this.style.color="white";
    var btninnerHTML = this.innerHTML;
    // var keypressed = this.event.key;
    // console.log("keypressed"+ keypressed);
    makesound (btninnerHTML);

    btnAnimation(btninnerHTML);
})
}

// var audio=new Audio("sounds/tom-1.mp3");
//     audio.play();

document.addEventListener("keypress",function (event){
    // var keypressed=event.key;
    // console.log("keypressed"+ keypressed);
    makesound(event.key); 
    btnAnimation(event.key);
})

function makesound(key)
{
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default:
            console.log(keypressed); 
            break;
    }
}

function btnAnimation(currentkey)
{
    // alert("Hii");
    var activebtn = document.querySelector("." + currentkey);
    activebtn.classList.add("pressed");
    setTimeout(function(){activebtn.classList.remove("pressed");},50);
    // activebtn.classList.remove("pressed");
}