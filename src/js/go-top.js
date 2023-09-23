
const goTopBtn = document.querySelector(".go-top");


window.addEventListener("scroll", trackScroll);

goTopBtn.addEventListener("click", goTop);

function trackScroll() {

    const windowHeight = window.scrollY;
    console.log(windowHeight)


  if (windowHeight > 800) {

    goTopBtn.classList.add("go-top--show");
  } else {

      goTopBtn.classList.remove("go-top--show");
      goTopBtn.getBoundingClientRect()
  }
}

function goTop() {

  
    window.scrollTo(0,0);
}