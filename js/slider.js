function STAslider(a,b,c,d){
  const imgChange = document.querySelectorAll(a);
  const imgShow = document.querySelectorAll(b);
  const imgControl = document.querySelector(c);
  
  // 圖片總數
  const imgCount = imgChange.length;
  // console.log(imgCount)
  // 一開始要顯示的圖，0 的話就是顯示第一張
  let counter = 0;
  // 每 2 秒換圖
  const timer = 5000;
  // 設定循環
  let interval = window.setInterval(showNext, timer);
  
  function showCurrent() {
    // 目前要顯示第幾張圖
    let itemToShow = Math.abs(counter % imgCount); // 取餘數才能無限循環
    // console.log(itemToShow);
    //   移除所有含有【active】的img
    imgChange.forEach((item) => {
      item.classList.remove("active");
    });
    //目前顯示第幾張
    imgChange[itemToShow].classList.add("active");
    imgShow.forEach((item, ind) => {
      if (ind == itemToShow) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  
  showCurrent();
  // 切換下一張
  function showNext() {
    counter++;
    showCurrent();
    // console.log(counter, "我是Counter");
  }
  // 滑入選單停止輪播
  imgControl.addEventListener("mouseover", () => {
    //   console.log("IN");
    clearInterval(interval);
  });
  // 滑出選單重新輪播
  imgControl.addEventListener("mouseout", () => {
    //   console.log("OUT");
    interval = window.setInterval(showNext, timer);
  });
  // 點擊顯示指定圖片
  imgChange.forEach((item) => {
    const num = item.getAttribute("data-id");
    item.addEventListener("click", () => {
      // console.log(num);
      counter = num;
      showCurrent();
    });
  });
  
  // 滑到在開始輪播
  const sliderShow = document.querySelector(d);
  let arr = "";
  window.addEventListener("scroll", () => {
    if(window.innerWidth<=768){
      if (window.scrollY >= sliderShow.offsetTop -150) {
        if (arr == "") {
          // console.log("重第一張開始");
          arr = "sliderActive";
          clearInterval(interval);
          counter = 0;
          showCurrent();
          interval = window.setInterval(showNext, timer);
        }
      } else {
        // console.log("重新判斷");
        arr = "";
      }
    }else{
      if (window.scrollY >= sliderShow.offsetTop -50) {
        if (arr == "") {
          // console.log("重第一張開始");
          arr = "sliderActive";
          clearInterval(interval);
          counter = 0;
          showCurrent();
          interval = window.setInterval(showNext, timer);
        }
      } else {
        console.log("重新判斷");
        arr = "";
      }
    }
   
  });
}

