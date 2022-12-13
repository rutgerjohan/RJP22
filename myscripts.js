// var i=0;
// var txt = "My name is Rutger. I am 20 years old and currently studying Communication and Multimedia Design at The Amsterdam University of Applied Sciences. I am looking for an <strong>internship</strong> regarding UX/UI design or front end development for february 2023.";
// var speed = 50;
// var txtBox = document.querySelector("main section:nth-of-type(2)>p");
// txtBox.addEventListener("click", typeWriter);

// function typeWriter() {
//     if (i < txt.length) {
//         document.querySelector("main section:nth-of-type(2) > p").innerHTML =+ txt.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }



// IMAGE HOVER ON FIRST SECTION
const items = document.querySelectorAll('.item')
const image = document.querySelector('main section:first-of-type img')

items.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    imageData = e.target.getAttribute('data-image')
    console.log(imageData)
    e.target.style.zIndex = 99
    image.setAttribute('src', imageData)
  })
  el.addEventListener('mousemove', (e) => {
    image.style.top = e.clientY + 'px'
    image.style.left = e.clientX + 'px'
  })
  el.addEventListener('mouseleave', (e) => {
    e.target.style.zIndex = 1
    image.setAttribute('src', '')
  })
})


// EXPANDABLE MENU
var menuExpanded = document.querySelector('body>div');
var headerEl = document.querySelector('body>header');
var buttonMenu = document.querySelector('header nav button');

buttonMenu.addEventListener('click', () => {
  menuExpanded.classList.toggle('menuAppear');
  headerEl.classList.toggle('menuAppear');
  
  if (buttonMenu.innerHTML === 'Menu') {
    buttonMenu.innerHTML = "Close";
  } else {
    buttonMenu.innerHTML = "Menu"
  }
}) ;