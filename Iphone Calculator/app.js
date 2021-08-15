//DOM Elements
const numEl = document.getElementsByClassName("number");
const funcEl = document.getElementsByClassName("function");
const decEl = document.querySelector(".decimal");
const screen = document.querySelector(".screen");
var point = false;

//Number EventListener
for(let i=0; i<numEl.length; i++){
    const num = numEl[i];
    num.addEventListener('click', () => {
        numclick(num.innerHTML);
    })
}

const numclick = (e) => {
    if(screen.innerHTML=="0"){
        screen.innerHTML=e;
    }else{
        screen.innerHTML=screen.innerHTML+e;
    }
}

//Decimal EventListener
decEl.addEventListener('click', () => {
    if (point == false)
    {
        screen.innerHTML=screen.innerHTML+".";
        point = true;
    }
})

//Function event listener
for(let i=0; i<funcEl.length; i++){
    const func = funcEl[i];
    func.addEventListener('click', () => {
        funcclick(func);
    })
}

const funcclick = (func) => {
    if(func.innerHTML=="AC"){
        screen.innerHTML=0;
        point = false;
    }
    // if(func.innerHTML=="C"){
    //     screen.innerHTML=0;
    // }
}



