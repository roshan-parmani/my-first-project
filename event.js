let btn = document.querySelector("#ev");
btn.onclick = (evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
};

// btn.onclick = () =>{
//     console.log("button was clicked");
//     let a=30;
//     a++;
//     console.log(a);
// }
let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are inside box ");
};

