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






