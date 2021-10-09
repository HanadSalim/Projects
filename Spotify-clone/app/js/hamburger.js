const toggleMenu = document.getElementById("#Hamburger");
const overlay = document.getElementById("#Overlay");
const mobileMenu=document.getElementById('#mobileMenu');
const body = document.querySelector('body');
var click = false;

toggleMenu.addEventListener('click', ()=>{
    click?close():open();
});

// Adds animation for open, overLay and mobile menu. Also stops scroll
function open(){
    toggleMenu.classList.add('open');
    overlay.classList.add('addTint'); 
    mobileMenu.classList.add('addFade');
    body.classList.add('noscroll');
    click=true;
}

function close(){
    toggleMenu.classList.remove('open');  
    toggleMenu.classList.add('close');
    overlay.classList.add('removeTint');
    mobileMenu.classList.add('removeFade');
    setTimeout(()=>{
    // After animation is complete remove all changes
        overlay.classList.remove('addTint');
        toggleMenu.classList.remove('close');
        overlay.classList.remove('removeTint');
        body.classList.remove('noscroll');
        mobileMenu.classList.remove('addFade');
        mobileMenu.classList.remove('removeFade');
    },300)


    click=false;
}