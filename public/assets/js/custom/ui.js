(function () {
  /* ///////////////////////////////////////////////////////
   공통 영문일때 클리스 f-pop 넣기
  */ ////////////////////////////////////////////////////////
  document.addEventListener('DOMContentLoaded', function () {
    function applyFont() {
      document.querySelectorAll('*').forEach(function (el) {
        if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
          let text = el.textContent.trim();
          if (text && /^[A-Za-z\s]+$/.test(text)) {
            el.classList.add('f-pop');
          }
        }
      });
    }

    applyFont();

    // 동적 콘텐츠에 대응하기 위해 MutationObserver 사용
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        applyFont();
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });

  /* ///////////////////////////////////////////////////////
   Ani.js
  */ ////////////////////////////////////////////////////////
  document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
      delay: 0,
      offset: 60,
      once: true,
      duration: 1000, // 모든 AOS 애니메이션의 지속 시간을 1초(1000밀리초)로 설정
      disable: function () {
        // 화면 너비가 768픽셀 이하이면 AOS를 비활성화
        return window.innerWidth < 768;
      },
    });
  });

  /* ///////////////////////////////////////////////////////
   메인 슬라이드 
  */ ////////////////////////////////////////////////////////

  /* ///////////////////////////////////////////////////////
   공통 탭 
  */ ////////////////////////////////////////////////////////

  const $review = document.querySelector('.review');
  if ($review) {
    const $$reviewTab_li_a = document.querySelectorAll('.review__tab li a');
    const $$reviewTabCnt = document.querySelectorAll('.review__tab-content');

    $$reviewTab_li_a.forEach((el) => {
      el.addEventListener('click', function (e) {
        e.preventDefault();

        const dataId = el.closest('li').getAttribute('data-id');

        // 모든 컨텐츠 숨기기
        $$reviewTab_li_a.forEach((el) => el.closest('li').classList.remove('on'));
        $$reviewTabCnt.forEach((el) => el.classList.remove('on'));

        // 컨텐츠 보이기
        el.closest('li').classList.add('on');
        document.querySelector(`#${dataId}`).classList.add('on');
      });
    });
  }

  /* ///////////////////////////////////////////////////////
   서브배너 효과
  */ ////////////////////////////////////////////////////////

  // .sub-banner 클래스를 가진 요소를 찾습니다.
  const subBannerElement = document.querySelector('.sub-banner');
  // 해당 요소가 존재하는 경우, 스크립트를 실행합니다.
  if (subBannerElement) {
    const boxs = document.querySelectorAll('article');

    //box를 반복
    boxs.forEach((box, idx) => {
      setTimeout(function () {
        box.classList.add('on');
      }, 10);

      const p = box.querySelector('p');
      const txt = p.innerText;

      let tags = '';

      // 각 ariticle 안쪽의 h1 문자를 다시 반복돌면서 span으로 감싸는 문자열 생성
      for (const el of txt) {
        tags += `<span>${el}</span>`;
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
  TOP 이동
  */ ////////////////////////////////////////////////////////
  document.getElementById('top-button').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
})();
