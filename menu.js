const menu = [
  {
    category: 'sub',
    title: 'Core Technology',
    url: 'MultiModalData',
    items: [
      { url: 'MultiModalData', title: 'Multi Modal Data' },
      { url: 'AboutMediLMM', title: 'About MediLMM' },
      { url: 'OurPlatform', title: 'Our Platform' },
    ],
    active2: 'on',
  },
  {
    category: 'sub',
    title: 'MediLMM CAD',
    url: 'SimpleModel',
    items: [
      { url: 'SimpleModel', title: 'Simple Model' },
      { url: 'UVLTransformer', title: 'UVL Transformer' },
      { url: 'CADCatch', title: 'CAD Catch' },
      { url: 'CADWrap', title: 'CAD Wrap' },
    ],
    active: 'on',
    active2: 'on',
  },
  {
    category: 'sub',
    title: 'Strategy',
    url: 'Overview',
    items: [
      { url: 'Overview', title: 'Overview' },
      { url: 'BusinessStrategy', title: 'BusinessStrategy' },
      { url: 'MarketingStrategy', title: 'Marketing Strategy' },
    ],
    active2: 'on',
  },
  {
    category: 'sub',
    title: 'Plan',
    url: 'MediLMMRoadmap',
    items: [
      { url: 'MediLMMRoadmap', title: 'MediLMM Roadmap' },
      { url: 'FinancialPlan', title: 'Financial Plan' },
    ],
    active2: 'on',
  },
  {
    category: 'sub',
    title: 'Contact us',
    url: 'MediLMMCEO',
    active2: 'on',
    items: [
      { url: 'MediLMMCEO', title: 'MediLMM CEO' },
      { url: 'Board', title: 'Board' },
      { url: 'BoardDetail', title: 'Board Detail' },
      { url: 'Contact', title: 'Contact' },
    ],
  },
  {
    category: 'sub',
    title: 'error',
    url: 'PageError',
    items: [
      { url: 'PageError', title: 'Page Error' },
      { url: 'ServerError', title: 'Server Error' },
    ],
  },
];

export default menu;
