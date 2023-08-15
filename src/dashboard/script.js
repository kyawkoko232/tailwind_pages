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



let dropdown = document.querySelectorAll('.dropdown');
let SidebarDropdownMenu = document.querySelectorAll('.sidebar-dropdown-menu');
let sidebarLink = document.querySelectorAll('.sidebar-link');

for (let i = 0; i < sidebarLink.length; i++)
sidebarLink[i].addEventListener('click', function(){
    SidebarDropdownMenu[i].classList.toggle("menu-active");

});
