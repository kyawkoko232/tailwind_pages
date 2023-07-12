import './style.css';
import '@modules/@fortawesome/fontawesome-free/css/all.css';



document.querySelector('.hamburger-toggle').addEventListener('click',function(){
    console.log('clicked');
    document.querySelector('.sidebar').classList.toggle('-translate-x-full');

})

document.querySelector('.hamburger').addEventListener('click',function(){
    console.log('clicked');
    document.querySelector('.sidebar').classList.toggle('-translate-x-full');

})