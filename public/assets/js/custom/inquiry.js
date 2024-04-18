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
