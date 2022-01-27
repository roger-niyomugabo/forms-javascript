let progress=document.getElementById("progress");


let next1=document.getElementById("next1");
next1.onclick=function(){
    form1.style.left="-450px";
    form2.style.left="40px";
    progress.style.width="240px";
}

let back1=document.getElementById("back1");
back1.onclick=function(){
    form2.style.left="450px";
    form1.style.left="40px";
    progress.style.width="120px";
}

let next2=document.getElementById("next2");
next2.onclick=function(){
    form2.style.left="-450px";
    form3.style.left="40px";
    progress.style.width="360px";
}

let back2=document.getElementById("back2");
back2.onclick=function(){
    form3.style.left="450px";
    form2.style.left="40px";
    progress.style.width="240px";
}



