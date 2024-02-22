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

//counter of products 

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

//Open the product gallery view only on desktop

  const thumbnails = document.querySelectorAll('.thumbnail');
  const view = document.querySelector('.view');
  const mainImage = document.querySelectorAll('.main-img');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      if (window.matchMedia('(min-width: 45em)').matches) {
          view.style.display = 'block';
        }
    });
  });
  
  mainImage.forEach(mainImage => {
    mainImage.addEventListener('click', () => {
          if (window.matchMedia('(min-width: 45em)').matches) {
          view.style.display = 'block';
        }
    });
  });

  // next, previous and close buttons for product gallery view 
  
  document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainView = document.querySelector('.main-view');
    const previousBtn = document.querySelector('.previous');
    const nextBtn = document.querySelector('.next');
    const closeBtn = document.querySelector('.close');
    let currentIndex = 0;

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateMainView();
      });
    });

    function updateMainView() {
      const selectedThumbnail = thumbnails[currentIndex];
      mainView.src = selectedThumbnail.src.replace('-thumbnail', '');
    }

    previousBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
      updateMainView();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % thumbnails.length;
      updateMainView();
    });

    closeBtn.addEventListener('click', () => {
      view.style.display = 'none';
    })

  });

  // next and previous buttons for product mobile version

  document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-img');
    const previousButton = document.querySelector('.previous-mob');
    const nextButton = document.querySelector('.next-mob');

    let currentIndex = 0;

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateMainImage();
      });
    });

    previousButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = thumbnails.length - 1;
      }
      updateMainImage();
    });

    nextButton.addEventListener('click', () => {
      if (currentIndex < thumbnails.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateMainImage();
    });

    function updateMainImage() {
      const selectedThumbnail = thumbnails[currentIndex];
      const imagePath = selectedThumbnail.getAttribute('src').replace('-thumbnail', '');
      mainImage.setAttribute('src', imagePath);
    }
  });
