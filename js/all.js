// 模擬進度條的讀取過程
function simulateProgress() {
  let width = 0;
  const progressBarFill = document.querySelector(".progress-bar-fill");

  const intervalId = setInterval(() => {
    if (width >= 100) {
      clearInterval(intervalId);
      return;
    }

    width += 10;
    progressBarFill.style.width = `${width}%`;
  }, 100);
}

simulateProgress();

// Header
// const headerImg = document.querySelector(".headerImg");
// const offer01 = document.querySelector(".bg20");
// const menu = document.querySelector(".menu");
// window.addEventListener("scroll", () => {
//   if (window.scrollY >= offer01.offsetTop) {
//     console.log("hi");
//     menu.classList.add("menu--activeOffer");
//     headerImg.classList.add("headerImg--close");
//   } else {
//     menu.classList.remove("menu--activeOffer");
//     headerImg.classList.remove("headerImg--close");
//   }
// });

// 紅色按鈕
// const thing3Btns = document.querySelectorAll(".thing3__btns__item");
// thing3Btns.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("thing3__btns__item--active");
//     item.classList.toggle("thing3__btns__item--active::after");
//   });
// });
// 收合
function scrollShow(scrollID) {
  const show = document.querySelector(scrollID);
  show.classList.toggle("show");
}
// QA收合
const titleBG = document.querySelectorAll(".titleBG");
const openText = document.querySelectorAll(".wrinkle-text");
const btn = document.querySelectorAll(".open");
const openMark = document.querySelectorAll(".openMark");
const closeMark = document.querySelectorAll(".closeMark");
// const brClose = document.querySelectorAll(".brClose");

titleBG.forEach((item, ind) => {
  item.addEventListener("click", () => {
    openText.forEach((a, aInd) => {
      if (ind == aInd) {
        const name = a.getAttribute("data-name");
        console.log(name);
        if (name == "center") {
          a.classList.toggle("text--open2");
        } else {
          a.classList.toggle("text--open");
        }
      }
    });
    btn.forEach((b, bInd) => {
      if (ind == bInd) {
        b.classList.toggle("open--active");
      }
    });
    openMark.forEach((c, cInd) => {
      if (ind == cInd) {
        c.classList.toggle("markClose");
      }
    });
    closeMark.forEach((d, dInd) => {
      if (ind == dInd) {
        d.classList.toggle("markActive");
      }
    });
    if (ind == 0) {
      // e.classList.toggle("markActive");

      $(".js-br1").toggleClass("markActive");
    } else if (ind == 3) {
      // e.classList.toggle("markActive");
      $(".js-br2").toggleClass("markActive");
    }
  });
});

function popUpShow(showElement){
  document.body.style.overflow="hidden"
const show = document.querySelector(showElement)
show.classList.add("popControl--active");
document.body.style.overflow="hidden";
show.style.overflowY="scroll";
}
function popUpClose(showElement){
  document.body.style.overflow="visible"
  const show = document.querySelector(showElement)
  show.classList.remove("popControl--active");
  document.body.style.overflow="visible";
  show.style.overflowY="hidden";
}

const cta = document.querySelector("#cta")
window.addEventListener("scroll", function() {
  //要在哪出現
  let afterFV = document.getElementById("ctaStart").offsetTop;
  //要在哪消失
  let offerClose = document.getElementById("ctaEnd").offsetTop;
  // let cta = document.querySelector(".cta");

  if (window.scrollY <= afterFV) {
      cta.style.display = "none";
  } else if (window.scrollY >= offerClose) {
      cta.style.display = "none";
  } else {
      cta.style.display = "block";
  }
});