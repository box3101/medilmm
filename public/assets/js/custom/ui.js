(function () {

  /* ///////////////////////////////////////////////////////
   Ani.js
  */////////////////////////////////////////////////////////
  document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      delay: 0,
      offset: 60,
      once: true,
      duration: 1000, // 모든 AOS 애니메이션의 지속 시간을 1초(1000밀리초)로 설정
      disable: function () {
        // 화면 너비가 768픽셀 이하이면 AOS를 비활성화
        return window.innerWidth < 768;
      }
    });
  });


  /* ///////////////////////////////////////////////////////
   메인 슬라이드 
  */////////////////////////////////////////////////////////

  const $mainSwiper = document.querySelector('#main-swiper');
  if ($mainSwiper) {
    const mainSwiper = new Swiper('#main-swiper', {
      loop: true,
      speed: 1000, // 슬라이드 전환 속도 설정 (1초)
      autoplay: { // 자동 재생 설정
        delay: 2500, // 슬라이드 간의 지연 시간 (밀리초)
        disableOnInteraction: false, // 사용자 인터랙션 후에도 자동 재생 계속
      },
      pagination: { // 페이징 설정
        el: '.swiper-pagination', // 페이징 요소 선택자
        clickable: true, // 클릭 가능하게 만들기
      },
      on: {
        slideChange: function () {
          const images = document.querySelectorAll('.main-img img');
          images.forEach(img => {
            img.classList.remove('zoom-effect'); // 이전 이미지의 줌 효과 제거
          });
          const activeImg = this.slides[this.activeIndex].querySelector('.main-img img');
          if (activeImg) {
            activeImg.classList.add('zoom-effect'); // 현재 활성화된 이미지에 줌 효과 적용
          }
        },
      },
    });
  }

  /* ///////////////////////////////////////////////////////
   제품상세 슬라이드 
  */////////////////////////////////////////////////////////
  const $productGallery = document.querySelector('#product-gallery');
  if ($productGallery) {
    const productGalleryThumbs = new Swiper('#product-gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    });
    const productGallery = new Swiper('#product-gallery', {
      loop: true,
      thumbs: {
        swiper: productGalleryThumbs,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  /* ///////////////////////////////////////////////////////
   리뷰 평가 슬라이드 
  */////////////////////////////////////////////////////////
  const $reviewSlide = document.querySelector('#review-swiper');
  if ($reviewSlide) {
    const reviewSlide = new Swiper('#review-swiper', {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      slidesPerView: 2,
      spaceBetween: 15,
      breakpoints: {
        900: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }
    });
  }

  /* ///////////////////////////////////////////////////////
   체험단 상세 슬라이드 
  */////////////////////////////////////////////////////////

  const $testerSlide = document.querySelector('#tester-swiper');
  if ($testerSlide) {
    const testerSwiperThumbs = new Swiper('#tester-swiper-thumbs', {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    });
    const testerSwiper = new Swiper('#tester-swiper', {
      loop: true,
      thumbs: {
        swiper: testerSwiperThumbs,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  /* ///////////////////////////////////////////////////////
   공통 탭 
  */////////////////////////////////////////////////////////

  const $review = document.querySelector('.review');
  if ($review) {
    const $$reviewTab_li_a = document.querySelectorAll('.review__tab li a');
    const $$reviewTabCnt = document.querySelectorAll('.review__tab-content');

    $$reviewTab_li_a.forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();

        const dataId = el.closest("li").getAttribute('data-id');

        // 모든 컨텐츠 숨기기
        $$reviewTab_li_a.forEach((el) => el.closest("li").classList.remove("on"));
        $$reviewTabCnt.forEach((el) => el.classList.remove("on"));

        // 컨텐츠 보이기
        el.closest("li").classList.add("on");
        document.querySelector(`#${dataId}`).classList.add("on");

      })
    });

  }

  /* ///////////////////////////////////////////////////////
   공통 FAQ 
  */////////////////////////////////////////////////////////

  const $$noticWrap = document.querySelector('.notic-wrap');
  if ($$noticWrap) {
    const $$question = document.querySelectorAll('.question');
    $$question.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.target.closest(".product_notic_layout_2").querySelector(".answer").classList.toggle("on")
      })
    })
  }

  /* ///////////////////////////////////////////////////////
   서브배너 효과
  */////////////////////////////////////////////////////////

  // .sub-banner 클래스를 가진 요소를 찾습니다.
  const subBannerElement = document.querySelector('.sub-banner');
  // 해당 요소가 존재하는 경우, 스크립트를 실행합니다.
  if (subBannerElement) {
    const boxs = document.querySelectorAll('article');

    //box를 반복
    boxs.forEach((box, idx) => {
      setTimeout(function () {
        box.classList.add("on");
      }, 10)

      const p = box.querySelector('p');
      const txt = p.innerText;

      let tags = '';

      // 각 ariticle 안쪽의 h1 문자를 다시 반복돌면서 span으로 감싸는 문자열 생성
      for (const el of txt) {
        tags += `<span>${el}</span>`
      }

      // 생성된 태그구성 문자열을 h1 요소에 삽입
      p.innerHTML = tags;

      // h1안쪽의 span요소의 갯수만큼 반복을 돌면서 transitionDelay값 설정
      const $$span = p.querySelectorAll('span');

      $$span.forEach(function (el, idx) {
        el.style.transitionDelay = 0.05 * idx + 's';
      });
    });
  }

  /* ///////////////////////////////////////////////////////
   Heart Active
  */////////////////////////////////////////////////////////
  const $$heartBtn = document.querySelectorAll('.heart-btn');
  if ($$heartBtn) {
    $$heartBtn.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();

        const heartIcon = e.target.querySelector('img');
        console.log(heartIcon);
        if (heartIcon.getAttribute('src') === '../assets/img/ico-heart.svg') {
          heartIcon.setAttribute('src', '../assets/img/ico-heart-filled.svg');
          el.classList.add("on");
        } else {
          heartIcon.setAttribute('src', '../assets/img/ico-heart.svg');
          el.classList.remove("on");
        }
      });
    })
  }

  /* ///////////////////////////////////////////////////////
  TOP 이동
  */////////////////////////////////////////////////////////
  document.getElementById('top-button').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });

  /* ///////////////////////////////////////////////////////
  Count 이벤트
  */////////////////////////////////////////////////////////
  const $main = document.querySelector('#main');
  if ($main) {
    // 시작 숫자와 최종 숫자 설정

    // 카운터 업데이트 함수
    function updateCounter() {
      const endNumber = 46500;
      const counter = document.getElementById('counter');
      const speed = 400; // 숫자가 증가하는 속도 조절 (낮을수록 빠름)

      // 현재 표시된 숫자 가져오기 (포맷 제거)
      const currentNumber = parseInt(counter.innerText.replace(/,/g, ''));

      // 증가분 계산 (최종 값에 도달하는데 필요한 증가분)
      const increment = endNumber / speed;

      // 현재 숫자가 최종 숫자보다 작은 경우 업데이트
      if (currentNumber < endNumber) {
        // 새로운 값 설정 (포맷 적용)
        counter.innerText = Math.ceil(currentNumber + increment).toLocaleString();
        // 다음 업데이트를 위한 타임아웃 설정
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = endNumber.toLocaleString(); // 최종 값으로 설정 (포맷 적용)
      }
    }

    // 카운터 업데이트 시작
   updateCounter(); 

    // 카운터 업데이트 함수
    function updateCounter2() {
      const endNumber = 425;
      const counter = document.getElementById('counter2');
      const speed = 600; // 숫자가 증가하는 속도 조절 (낮을수록 빠름)

      // 현재 표시된 숫자 가져오기 (포맷 제거)
      const currentNumber = parseInt(counter.innerText.replace(/,/g, ''));

      // 증가분 계산 (최종 값에 도달하는데 필요한 증가분)
      const increment = endNumber / speed;

      // 현재 숫자가 최종 숫자보다 작은 경우 업데이트
      if (currentNumber < endNumber) {
        // 새로운 값 설정 (포맷 적용)
        counter.innerText = Math.ceil(currentNumber + increment).toLocaleString();
        // 다음 업데이트를 위한 타임아웃 설정
        setTimeout(updateCounter2, 1);
      } else {
        counter.innerText = endNumber.toLocaleString(); // 최종 값으로 설정 (포맷 적용)
      }
    }

    // 카운터 업데이트 시작
    updateCounter2();

    const windowWidth = window.innerWidth;

    window.addEventListener('load', function () {
      if (window.innerWidth >= 1200) {
        bgScrollMotion();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1200) {
        bgScrollMotion();
      }
    })

    function bgScrollMotion() {
      window.addEventListener("scroll", () => {
        if (window.innerWidth >= 1200) { // 1200 이상일 때만 실행
          // const $body = document.querySelector('body');
          const $sec2 = document.querySelector('.sec2');
          const $sec2Top = document.querySelector('.sec2').offsetTop;
          let scroll = this.scrollY;
          if (scroll >= ($sec2Top - 200)) {
            // 1-2. 마우스 scroll은 0부터 다시 시작 됨.
            scroll = (scroll - $sec2Top + 200);
            // 2. .sec2의 background-position-y가 마우스 스크롤 만큼 올라감.
            $sec2.style.backgroundPositionY = `-${scroll}px`
            // 3. background-position-y가 -365px 이 넘어가면 365px 값으로 고정
            if (scroll >= 365) {
              scroll = 365;
              $sec2.style.backgroundPositionY = `-${scroll}px`
            }
          }
        }
      });
    }
  }

})();