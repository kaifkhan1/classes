// const menu = document.getElementById('bars-menu');
// const navItems = document.querySelector('.nav-items');

// menu.addEventListener('click',function(e){
//     showMenu();
//     hideMenu();
// });


// function showMenu(){
        
//     navItems.style.display = 'flex';

//     menu.innerHTML = `<i class='fas fa-times'></i>`

//     menu.id = 'bars-menu-active';
// }

// function hideMenu(){
//     const menuActive = document.getElementById('bars-menu-active');

//     menuActive.addEventListener('click',function(){
//         navItems.style.display = 'none';
    
//         menu.innerHTML = `<i class='fas fa-bars'></i>`
    
//         menu.id = 'bars-menu'
//     })
// }

const menu = document.getElementById('bars-menu');
const navItems = document.querySelector('.nav-items');

menu.addEventListener('click', function(){
    navItems.classList.toggle('active');

    
    if(navItems.classList.contains('active')){
        menu.innerHTML = `<i class='fas fa-times'></i>`
    }
    else{
        menu.innerHTML = `<i class='fas fa-bars'></i>`
    }

})


// Carousel 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    let i;
    const slides = document.getElementsByClassName('carousel-fade');

    if(n > slides.length){slideIndex = 1}
    if(n < 1){slideIndex = slides.length}

    for(i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }

    slides[slideIndex-1].style.display = 'block';
}

// Nav Bar Animation 


const navBar = document.querySelector('.nav-container');

let scrolled = false;

window.onscroll = function () {

    if(window.pageYOffset > 100){
        navBar.classList.remove('fixed');
        if(!scrolled){
            navBar.style.transform = 'translateY(-500px)'; 
        }
        setTimeout(function(){
            navBar.style.transform = 'translateY(0)';
            scrolled = true;
        },200);

    }
    else{
        navBar.classList.add('fixed');
        scrolled = false;
    }

}


$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".nav-item").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
