(function () {
  /* ///////////////////////////////////////////////////////
    모바일 네비게이션
  */ ////////////////////////////////////////////////////////
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menuToggle')?.addEventListener('click', () => {
      document.querySelector('.menuToggle')?.classList.toggle('open');
      if (document.querySelector('.menuToggle')?.classList.contains('open')) {
        document.querySelector('.sub-img')?.setAttribute('src', '../assets/images/logo_blk.svg');
      } else {
        document.querySelector('.sub-img')?.setAttribute('src', '../assets/images/logo_wh.svg');
      }
    });

    const $$mobileNav = document.querySelectorAll('.mobileNavItem');
    const $$mobileNavItem = document.querySelectorAll('.mobileNavItem>a');

    $$mobileNavItem.forEach((el) => {
      el.addEventListener('click', (e) => {
        if (!el.closest('li')?.classList.contains('on')) {
          $$mobileNav.forEach((el) => el.classList.remove('on'));
        }

        if (el.classList.contains('on')) {
          e.preventDefault();
          el.closest('li')?.classList.toggle('on');
        } else {
        }
      });
    });
  });
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

    goTop();
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

  const subBannerElement = document.querySelector('.sub-banner');
  if (subBannerElement) {
    const boxs = document.querySelectorAll('article');

    //box를 반복
    boxs.forEach((box, idx) => {
      setTimeout(function () {
        box.classList.add('on');
      }, 10);

      const p = box.querySelector('p');
      const txt = p.innerText;

      let tags = ' ';

      // 각 ariticle 안쪽의 h1 문자를 다시 반복돌면서 span으로 감싸는 문자열 생성
      for (const el of txt) {
        tags += `<span>${el}</span>`;
      }

      // 생성된 태그구성 문자열을 h1 요소에 삽입
      p.innerHTML = tags;

      // h1안쪽의 span요소의 갯수만큼 반복을 돌면서 transitionDelay값 설정
      const $$span = p.querySelectorAll('span');

      $$span.forEach(function (el, idx) {
        el.style.transitionDelay = 0.03 * idx + 's';
        if (el.innerText === '') {
          el.style.display = 'inline';
        }
      });
    });
  }

  /* ///////////////////////////////////////////////////////
  상단이동
*/ ////////////////////////////////////////////////////////
  const goTop = () => {
    const goTop = document.querySelector('.goTop');
    const goTopAnchor = goTop.querySelector('button');

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 100) {
        goTop.classList.add('on');
        goTopAnchor.setAttribute('tabindex', '0');
      } else {
        goTop.classList.remove('on');
        goTopAnchor.setAttribute('tabindex', '-1');
      }
    });

    goTop.addEventListener('click', () => {
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    });
  };

  /* ///////////////////////////////////////////////////////
   헤더 스크롤
  */ ////////////////////////////////////////////////////////
  window.addEventListener('scroll', function () {
    // 헤더 요소를 선택합니다.
    var header = document.querySelector('.header');
    if (window.pageYOffset > 50) {
      header.classList.add('on');
      if (!document.querySelector('main').classList.contains('main')) {
        header.classList.remove('sub');
      }
    } else {
      header.classList.remove('on');
      if (!document.querySelector('main').classList.contains('main')) {
        header.classList.add('sub');
      }
    }
  });

  /* ///////////////////////////////////////////////////////
   공통 모달
  */ ////////////////////////////////////////////////////////
  const cardList_a = document.querySelectorAll('.card-list a');
  const body = document.querySelector('body');
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.modal__close');
  let modalIdx = null;
  let wid = window.innerWidth;

  const modalItem = [
    {
      title: `추가적인 학습 데이터가 없어도 스스로 학습하는 유사 데이터 라벨링 기법`,
      imgUrl: '../assets/images/p1_modal1.webp',
      moImgUrl: '../assets/images/mo_p1_modal1.webp',
    },
    {
      title: `학습 데이터의 정확도를 자체적으로 높이는 드롭아웃 방식 활용`,
      imgUrl: '../assets/images/p1_modal2.webp',
      moImgUrl: '../assets/images/mo_p1_modal2.webp',
    },
    {
      title: `GLUE* 지표를 통해 NLU 모델로서의 성능이 확인된 모델`,
      imgUrl: '../assets/images/p1_modal3.webp',
      moImgUrl: '../assets/images/mo_p1_modal3.webp',
    },
  ];

  if (modal) {
    cardList_a.forEach((el, idx) => {
      el.addEventListener('click', (e) => {
        body?.classList.add('isOpen');
        modal?.classList.add('isOpen');
        modal.querySelector('h2').innerText = modalItem[idx].title;
        modalIdx = idx;
        updateModal(idx);
      });
    });

    closeBtn?.addEventListener('click', () => {
      body?.classList.remove('isOpen');
      modal?.classList.remove('isOpen');
    });

    window.addEventListener('resize', function () {
      let wid = window.innerWidth;

      if (wid > 900) {
        resizeImg(modalIdx, modalItem[modalIdx].imgUrl);
      } else {
        resizeImg(modalIdx, modalItem[modalIdx].moImgUrl);
      }
    });

    function updateModal(idx) {
      let wid = window.innerWidth;

      if (wid > 900) {
        resizeImg(idx, modalItem[idx].imgUrl);
      } else {
        resizeImg(idx, modalItem[idx].moImgUrl);
      }
    }

    function resizeImg(idx, url) {
      const imgElement = modal.querySelector('.modal__img img');
      // Only set the src if it's different to avoid unnecessary loading
      if (imgElement.src !== url) {
        imgElement.onload = () => {
          imgElement.style.opacity = 1;
        };
        imgElement.style.opacity = 0; // Reduce opacity to fade out the current image
        imgElement.src = url; // Set the new image source which triggers the loading
      }
    }
  }
})();

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('myButton');

  if (button) {
    button.addEventListener('click', function () {
      sendInquiry();
    });
  }
});

function sendInquiry() {
  const name = document.getElementById('Name').value;
  const belong = document.getElementById('Belong').value;
  const phone = document.getElementById('Phone').value;
  const mail = document.getElementById('Mail').value;
  const inquiry = document.getElementById('Inquiry').value;
  const privacy = document.getElementById('Privacy');

  if (!name) {
    alert('이름을 입력해주세요');
    return;
  }
  if (!belong) {
    alert('소속을 입력해주세요');
    return;
  }
  if (!phone) {
    alert('연락처(휴대폰)을 입력해주세요');
    return;
  }

  if (!/^\d{10,11}$/.test(phone)) {
    alert('올바른 전화번호를 입력해주세요.');
    return;
  }

  if (!mail) {
    alert('메일을 입력해주세요');
    return;
  }
  if (!inquiry) {
    alert('문의사항을 입력해주세요');
    return;
  }

  if (!privacy.checked) {
    alert('개인정보 활용에 동의해주세요');
    return;
  }
  console.log('성공');
}
