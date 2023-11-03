const changeBtn = document.querySelectorAll(".js-changeBtn");
const check = document.querySelectorAll(".js-check");
changeBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    // 利用forEach來判斷的【點擊到】的是哪個
    changeBtn.forEach((check) => {
      if (item.classList.contains("changeBtn--active")) {
        console.log("目前點擊中");
        return;
      } else {
        // 移除等待狀態
        check.classList.remove("changeBtn--active");
      }
    });
    // 將等待狀態加入效果
    show(item);
    item.classList.add("changeBtn--active");
  });
});

function show(changeBtnActive) {
  console.log(changeBtnActive);
  if (changeBtnActive.classList.contains("changeBtn--active")) {
    return;
  } else {
    // console.log("切換");
    check.forEach((item) => {
      if (!item.classList.contains("offer_active")) {
        console.log("切換");
        item.classList.add("offer_active");
      } else {
        item.classList.remove("offer_active");
      }
    });
  }
}
const activeOfferBtn = document.querySelectorAll("[data-name]");
activeOfferBtn.forEach((OfferBtn, offerInd) => {
  OfferBtn.addEventListener("click", () => {
    if (OfferBtn.dataset.name == "whiteOil") {
      console.log("whiteOil");
      a(offerInd);
      return;
    } else {
      console.log("clockGene");
      a(offerInd);
    }
  });
});

function a(offerInd) {
  changeBtn.forEach((item, ind) => {
    if (offerInd == ind) {
      // 利用forEach來判斷的【點擊到】的是哪個
      changeBtn.forEach((check) => {
        if (item.classList.contains("changeBtn--active")) {
          console.log("目前點擊中");
          return;
        } else {
          // 移除等待狀態
          check.classList.remove("changeBtn--active");
        }
      });
      // 將等待狀態加入效果
      show(item);
      item.classList.add("changeBtn--active");
    }
  });
}

// const popclick = document.querySelector(".saleClick");
// const popBG = document.querySelector(".popBG");
// // const xmark = document.querySelectorAll('.js-xmark');
// popclick.addEventListener('click',()=>{
//   popBG.classList.add("popBG--active")
//   document.body.style.overflow="hidden"
//   popBG.style.overflowY="scroll"
// })

// xmark.forEach(item=>{
//   item.addEventListener('click',()=>{
//     popBG.classList.remove("popBG--active")
//     document.body.style.overflow="visible"
//     popBG.style.overflowY="hidden"
//   })
// })
