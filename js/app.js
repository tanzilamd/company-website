const navTrigger = document.getElementById('nav_trigger');
const navLinks = document.getElementById('nav_links');
const navClose = document.querySelector('.nav_close');
const navCloseId = document.getElementById('nav_close');

navTrigger.addEventListener ('click', function(e) {
    e.preventDefault();
    navLinks.classList.toggle('nav_show');
    console.log(e.target.id);
    
})
navClose.addEventListener ('click', function(e) {
    e.preventDefault();
    navLinks.classList.toggle('nav_show');
    console.log('e.target.value');
})


document.onclick = function(e) {
    if (e.target.id !== 'nav_links' && e.target.id !== 'nav_trigger' && e.target.id !== 'nav_close')
    {
        navLinks.classList.remove('nav_show')
        console.log('hi');
    } 
}