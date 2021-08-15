//DOM Elements
const numEl = document.getElementsByClassName("number");
const funcEl = document.getElementsByClassName("function");
const decEl = document.querySelector(".decimal");



//Event listener
for(let i=0; i<numEl.length; i++){
    const num = numEl[i];
    num.addEventListener('click', () => {
        numclick(num.innerHTML);
    })
}

const numclick = (e) => {
    console.log(e);
}