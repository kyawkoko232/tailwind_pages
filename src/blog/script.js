import './style.css'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../../node_modules/waypoints/lib/noframework.waypoints'





fetch('https://dummyjson.com/posts')
.then(res=> {
    return res.json();
})
.then(data => {
  console.log(typeof data);   
})
.catch(error => console.log(error));    


const getPosts = () => {

  axios.get('https://dummyjson.com/posts?limit=10')
  .then(response => {
    console.log(response);
    
  response.data.posts.forEach(post => {  
    document.getElementById("text").innerHTML +=
    `  <article class="blog" data-aos="fade-up">
    <div class="blog-category">
      <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        ${post.tags}</span>
        <span class="text-sm">၁၆ရက်နေ့ အကြာ</span>
    </div>
    <h2 class="blog-header"><a href="#">${post.title}</a></h2>
    <p class="blog-des">${post.body}</p>
    <div class="blog-footer">
        <div class="flex items-center space-x-4">
            <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
            <span class="font-medium dark:text-white">
              hh
            </span>
        </div>
        <a href="#" class="inline-flex items-center font-medium text-primary-600 dark:text-slate-400 hover:underline">
            Read more
          <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</article>`
    
  }) 
 }).catch(error => console.error(error));
 };
 getPosts();
  
 const blogCard = document.querySelector("blog-card");
 



 let click_button = document.querySelector("#totop")
 var button = new Waypoint({
  element: document.getElementById('partner'),
  handler: function(direction) {
      
     if (direction=='down'){
         click_button.classList.remove('opacity-0');
         click_button.classList.add('animate__slideInUp','btn-danger')
         console.log("I am down");

     }else{
         click_button.classList.add('opacity-0');
         click_button.classList.remove('animate__slideInUp')
      console.log("I am up");
      
     }

  },
  offset: '100%'
})


// let wow = new WOW(
//   {
//       boxClass:     'wow',      // animated element css class (default is wow)
//       animateClass: 'animate__animated', // animation css class (default is animated)
//       offset:       350,          // distance to the element when triggering the animation (default is 0)
//       mobile:       true,       // trigger animations on mobile devices (default is true)
//       live:         true,       // act on asynchronously loaded content (default is true)
//       callback:     function(box) {
//           // the callback is fired every time an animation is started
//           // the argument that is passed in is the DOM node being animated
//       },
//       scrollContainer: null,    // optional scroll container selector, otherwise use window,
//       resetAnimation: true,     // reset animation on end (default is true)
//   }
// );

document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]');
  if (!isDropdownButton && e.target.closest('[data-dropdown]') != null )return
  
  let currentDropdown
  if (isDropdownButton){
    currentDropdown = e.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('active')
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove('active')
  } )

 })

 let mobileButton = document.querySelector(".mobile-button")
 let mobileButton1  =document.querySelector(".mobile-button1")
 let mobileMenu = document.querySelector(".mobile-nav")

 mobileButton1.addEventListener("click", ()=> {
  mobileMenu.classList.toggle("-translate-x-[500px]")
  console.log("clicked");
 });

 mobileButton.addEventListener("click", ()=> {
  mobileMenu.classList.toggle("-translate-x-[500px]")
  console.log("clicked");
 });


 




