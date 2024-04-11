const menu = [
  {
    category: "sub",
    title: "보미오라 소개",
    url: "보미오라소개"
  },
  {
    active: "on",
    category: "sub",
    title: "제품",
    url: "제품리스트",
    items: [
      { "url": "제품리스트", "title": "신상품" },
      { "url": "제품리스트", "title": "베스트" },
      { "url": "제품리스트", "title": "다이어트", "active": "on" ,"active2": "on" },
      { "url": "제품리스트", "title": "디톡스", "active": "on" ,"active2": "on" },
      { "url": "제품리스트", "title": "건강/면역" },
      { "url": "제품리스트", "title": "뷰티/코스메틱" },
      { "url": "제품리스트", "title": "헤어/탈모" }
    ],
  },
  {
    category: "sub",
    title: "체험단",
    url: "체험단",
  },
  {
    category: "sub",
    title: "리뷰",
    url: "리뷰-로그인"
  },
  {
    category: "sub",
    title: "온라인상담",
    url: "온라인상담"
  },
];

export default menu