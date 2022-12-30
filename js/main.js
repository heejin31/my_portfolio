"use strict";

/*****************  메인 홈 마우스효과 *******************/
const text = document.querySelectorAll(".main_text");
const text_second = document.querySelectorAll(".main_text_second");
const text_third = document.querySelectorAll(".main_text_third");
const halfX = window.innerWidth / 2;
const halfY = window.innerHeight / 2;

text.forEach((el, i) => {
  TweenMax.to(el, 1, {
    z: 1 * (i + 8),
  });
});

document.addEventListener("mousemove", (e) => {
  text.forEach((el, i) => {
    TweenMax.to(el, 0.5, {
      x: (e.clientX - halfX) * (i + 1) * 0.01,
      y: (e.clientY - halfY) * (i + 1) * 0.01,
    });
  });
});

document.addEventListener("mousemove", (e) => {
  text_second.forEach((el, i) => {
    TweenMax.to(el, 0.5, {
      x: (e.clientX - halfX) * (i + 1) * 0.01,
      y: (e.clientY - halfY) * (i + 1) * 0.01,
    });
  });
});
document.addEventListener("mousemove", (e) => {
  text_third.forEach((el, i) => {
    TweenMax.to(el, 0.5, {
      x: (e.clientX - halfX) * (i + 1) * 0.01,
      y: (e.clientY - halfY) * (i + 1) * 0.01,
    });
  });
});

/***************** 네브바 클릭하면 섹션 이동하기 *******************/
const navbarMenu = document.querySelector(".navbar_menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

/***************** 반응형 네브바 클릭시 나타나게 하기 *******************/
const navbarToggleBtn = document.querySelector(".navbar_toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

/***************** 포트폴리오 스와이퍼 *******************/
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 100,
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  /***************** 스킬 숫자 카운트 *******************/
  //숫자 카운트 
  let numAnimation = document.querySelectorAll(".num_animation");
  let skillList = document.querySelectorAll(".skill_list");
  
  skillList.forEach(function(el,index){
      el.addEventListener("mouseenter",function(){
          skillList.forEach((el)=>{
              el.classList.remove("active");
          });
          el.classList.add("active");
          changeNum(index);
      });
      el.addEventListener("mouseleave",function(){
          skillList.forEach((el)=>{
              el.classList.remove("active");
          });
      });
  });

  //숫자 카운트 함수
  function changeNum(index){
      let num = 0;
      let targetNum = numAnimation[index].getAttribute("data-rate");
      let timer = setInterval(function(){
      ++num;
      numAnimation[index].innerText = num;
      if(num == targetNum){
              clearInterval(timer);
          }
      },10);
  }
