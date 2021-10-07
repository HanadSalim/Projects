const menu = document.getElementById("#Hamburger");
const overlay = document.getElementById("#Overlay");
const body = document.querySelector('body');
// const mobileMenu=document.getElementById('fade');
var click = false;

menu.addEventListener('click', ()=>{
    click?close():open();
});

// Adds animation for open, overLay and mobile menu. Also stops scroll
function open(){
    menu.classList.add('open');
    overlay.classList.add('addTint');
    body.classList.add('noscroll');
    // mobileMenu.classList.add('fade-in');

    
    click=true;
}

function close(){
    menu.classList.remove('open');  
    menu.classList.add('close');
    overlay.classList.add('removeTint');
    // mobileMenu.classList.add('fade-out');
    setTimeout(()=>{
    // After animation is complete remove all changes
        overlay.classList.remove('addTint');
        menu.classList.remove('close');
        overlay.classList.remove('removeTint');
        body.classList.remove('noscroll');
        // mobileMenu.classList.remove('fade-in');
        // mobileMenu.classList.remove('fade-out');
    },300)


    click=false;
}