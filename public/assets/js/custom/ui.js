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

  document.addEventListener('DOMContentLoaded', function (e) {
    cardList_a.forEach((el, idx) => {
      el.addEventListener('click', (e) => {
        body?.classList.add('isOpen');
        modal?.classList.add('isOpen');
        modal.querySelector('h2').innerText = modalItem[idx].title;
        modalIdx = idx;
        updateModal(modalIdx);
      });
    });

    closeBtn?.addEventListener('click', () => {
      body?.classList.remove('isOpen');
      modal?.classList.remove('isOpen');
    });
  });

  window.addEventListener('resize', function () {
    let wid = window.innerWidth;

    if (wid > 900) {
      console.log('pc');
      resizeImg(modalIdx, modalItem[modalIdx].imgUrl);
    } else {
      console.log('모바일');
      resizeImg(modalIdx, modalItem[modalIdx].moImgUrl);
    }
  });

  function updateModal(idx) {
    if (wid > 900) {
      console.log('pc2');
      resizeImg(idx, modalItem[idx].imgUrl);
    } else {
      console.log('모바일2');
      resizeImg(idx, modalItem[idx].moImgUrl);
    }
  }

  function resizeImg(idx, url) {
    console.log(idx);
    console.log(url);
    modal.querySelector('.modal__img img').setAttribute('src', url);
  }
})();

// 카운트 업
// additional-count-section 숫자 카운팅
document.addEventListener('DOMContentLoaded', function () {
  let count01 = 0;
  const increment01 = 5;

  function countUp01() {
    if (count01 < 500) {
      isCounting01 = true;
      document.getElementById('count01').innerText = count01.toLocaleString();
      count01 += increment01;
      requestAnimationFrame(countUp01);
    } else {
      document.getElementById('count01').innerText = '500';
      isCounting01 = false;
      count01 = 0;
    }
  }

  let isCounting01 = false;

  //공통요소, 뷰포트 height
  const windowHeight = window.outerHeight;
  let focusingSec = [false];
  focusingSec[2] = false;

  //특정 html태그의 DOM상 위치 계산
  function getSectionPositionOf(sectionName) {
    var section = document.getElementById(sectionName);

    //찾으려는 객체의 top
    const sectionTop = section.offsetTop;
    //찾으려는 객체의 bottom
    const sectionBottom = sectionTop + section.offsetHeight;

    return {
      sectionTop: sectionTop,
      sectionBottom: sectionBottom,
    };
  }

  const targetSection = getSectionPositionOf('st-bs-bottom-wrap');
  //section의 뷰포트 중심 확인
  function checkViewport(_targetSection) {
    var scrollTop = window.scrollY;
    var scrollBottom = scrollTop + windowHeight;
    if (
      scrollBottom - windowHeight / 10 > _targetSection.sectionTop &&
      _targetSection.sectionBottom > scrollTop + windowHeight / 10
    ) {
      return true;
    } else {
      return false;
    }
  }

  //해당섹션에서 새로고침시 애니메이션 이벤트
  if (checkViewport(targetSection)) {
    countUp01();
    focusingSec[2] = true;
  }

  //스크롤 이동시
  window.addEventListener('scroll', function (e1) {
    //뷰포트가 selectSection을 입장할떄 (상/하 입장)
    if (checkViewport(targetSection)) {
      if (!isCounting01 && !focusingSec[2]) countUp01();
      focusingSec[2] = true;
    } else {
      focusingSec[2] = false;
    }
  });
});

// 2
document.addEventListener('DOMContentLoaded', function () {
  let count02 = 0;
  const increment02 = 50;

  function countUp02() {
    if (count02 < 5250) {
      isCounting02 = true;
      document.getElementById('count02').innerText = count02.toLocaleString();
      count02 += increment02;
      requestAnimationFrame(countUp02);
    } else {
      document.getElementById('count02').innerText = '5,250';
      isCounting02 = false;
      count02 = 0;
    }
  }

  let isCounting02 = false;

  //공통요소, 뷰포트 height
  const windowHeight = window.outerHeight;
  let focusingSec = [false];
  focusingSec[2] = false;

  //특정 html태그의 DOM상 위치 계산
  function getSectionPositionOf(sectionName) {
    var section = document.getElementById(sectionName);

    //찾으려는 객체의 top
    const sectionTop = section.offsetTop;
    //찾으려는 객체의 bottom
    const sectionBottom = sectionTop + section.offsetHeight;

    return {
      sectionTop: sectionTop,
      sectionBottom: sectionBottom,
    };
  }

  const targetSection = getSectionPositionOf('st-bs-bottom-wrap');
  //section의 뷰포트 중심 확인
  function checkViewport(_targetSection) {
    var scrollTop = window.scrollY;
    var scrollBottom = scrollTop + windowHeight;
    if (
      scrollBottom - windowHeight / 10 > _targetSection.sectionTop &&
      _targetSection.sectionBottom > scrollTop + windowHeight / 10
    ) {
      return true;
    } else {
      return false;
    }
  }

  //해당섹션에서 새로고침시 애니메이션 이벤트
  if (checkViewport(targetSection)) {
    countUp02();
    focusingSec[2] = true;
  }

  //스크롤 이동시
  window.addEventListener('scroll', function (e1) {
    //뷰포트가 selectSection을 입장할떄 (상/하 입장)
    if (checkViewport(targetSection)) {
      if (!isCounting02 && !focusingSec[2]) countUp02();
      focusingSec[2] = true;
    } else {
      focusingSec[2] = false;
    }
  });
});

// 3
document.addEventListener('DOMContentLoaded', function () {
  let count03 = 0;
  const increment03 = 50;

  function countUp03() {
    if (count03 < 7314) {
      isCounting03 = true;
      document.getElementById('count03').innerText = count03.toLocaleString();
      count03 += increment03;
      requestAnimationFrame(countUp03);
    } else {
      document.getElementById('count03').innerText = '7,314';
      isCounting03 = false;
      count03 = 0;
    }
  }

  let isCounting03 = false;

  //공통요소, 뷰포트 height
  const windowHeight = window.outerHeight;
  let focusingSec = [false];
  focusingSec[2] = false;

  //특정 html태그의 DOM상 위치 계산
  function getSectionPositionOf(sectionName) {
    var section = document.getElementById(sectionName);

    //찾으려는 객체의 top
    const sectionTop = section.offsetTop;
    //찾으려는 객체의 bottom
    const sectionBottom = sectionTop + section.offsetHeight;

    return {
      sectionTop: sectionTop,
      sectionBottom: sectionBottom,
    };
  }

  const targetSection = getSectionPositionOf('st-bs-bottom-wrap');
  //section의 뷰포트 중심 확인
  function checkViewport(_targetSection) {
    var scrollTop = window.scrollY;
    var scrollBottom = scrollTop + windowHeight;
    if (
      scrollBottom - windowHeight / 10 > _targetSection.sectionTop &&
      _targetSection.sectionBottom > scrollTop + windowHeight / 10
    ) {
      return true;
    } else {
      return false;
    }
  }

  //해당섹션에서 새로고침시 애니메이션 이벤트
  if (checkViewport(targetSection)) {
    countUp03();
    focusingSec[2] = true;
  }

  //스크롤 이동시
  window.addEventListener('scroll', function (e1) {
    //뷰포트가 selectSection을 입장할떄 (상/하 입장)
    if (checkViewport(targetSection)) {
      if (!isCounting03 && !focusingSec[2]) countUp03();
      focusingSec[2] = true;
    } else {
      focusingSec[2] = false;
    }
  });
});
