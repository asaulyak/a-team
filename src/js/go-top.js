
const goTopBtn = document.querySelector(".go-top");


window.addEventListener("scroll", trackScroll);
window.addEventListener("load", trackScroll);
window.addEventListener("resize", fixPosition);

goTopBtn.addEventListener("click", goTop);





function trackScroll() {
  window.removeEventListener("load", trackScroll);

  const windowHeight = window.scrollY;

 
  if (windowHeight > 800) {
    goTopBtn.classList.add("go-top--show");
  } else {

      goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {  
    window.scrollTo(0,0);
}

function fixPosition() {  
  const windowWidth = window.innerWidth;

  if (windowWidth > 1400) { goTopBtn.style.left = `${((windowWidth - 1280) / 2) + 1280}px` }
  else {
    goTopBtn.style.left =`${windowWidth - 60}px`
  };
}