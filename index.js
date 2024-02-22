// navigation

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

//counter

let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

//product images 

  const thumbnails = document.querySelectorAll('.thumbnail');
  const view = document.querySelector('.view');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      view.style.display = 'block';
    });
  });

  const mainImage = document.querySelectorAll('.main-img');
  
  mainImage.forEach(mainImage => {
    mainImage.addEventListener('click', () => {
        view.style.display = 'block';
    });
  });

  //
  
  