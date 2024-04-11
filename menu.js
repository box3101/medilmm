const menu = [
  {
    category: 'sub',
    title: 'Core Technology',
    url: 'CoreTechnology',
    items: [
      { url: 'MultiModalData', title: 'Multi Modal Data' },
      { url: 'AboutMediLMM', title: 'About MediLMM' },
      { url: 'OurPlatform', title: 'Our Platform' },
    ],
    active: 'on2',
  },
  {
    active: 'on',
    category: 'sub',
    title: 'MediLMM CAD',
    url: 'SimpleModel',
    items: [
      { url: 'SimpleModel', title: 'Simple Model' },
      { url: 'UVLTransformer', title: 'UVL Transformer' },
      { url: 'CADCatch', title: 'CAD Catch' },
      { url: 'CADWrap', title: 'CAD Wrap' },
    ],
  },
  {
    category: 'sub',
    title: 'Strategy',
    url: 'Strategy',
    items: [
      { url: 'Overview', title: 'Overview' },
      { url: 'Board', title: 'BusinessStrategy' },
      { url: 'MarketingStrategy', title: 'Marketing Strategy' },
    ],
    active: 'on2',
  },
  {
    category: 'sub',
    title: 'Plan',
    url: 'Plan',
    items: [
      { url: 'MediLMMRoadmap', title: 'MediLMM Roadmap' },
      { url: 'FinancialPlan', title: 'Financial Plan' },
    ],
    active: 'on2',
  },
  {
    category: 'sub',
    title: 'Contact us',
    url: 'Contactus',
    active: 'on2',
    // items: [
    //   { url: 'MediLMMCEO', title: 'MediLMM CEO' },
    //   { url: 'Board', title: 'Board' },
    //   { url: 'Contact', title: 'Contact' },
    // ],
  },
];

export default menu;
