export const APP_MENU = [
    {
        href: "/services",
        label: "common.menu.service",
        subMenu: [
            {
                href: "/home-cleaning",
                label: "common.menu.homeCleaning"
            },
            {
                href: "/big-cleaning",
                label: "common.menu.bigCleaning"
            },
            {
                href: "/disinfection-cleaning",
                label: "common.menu.disinfection"
            },
            {
                href: "/upholstery-cleaning",
                label: "common.menu.upholstery"
            },
        ]
    },
    {
        href: "/yindee-clean-standard",
        label: "common.menu.standard"
    },
    {
        href: "/article",
        label: "common.menu.article"
    },
    {
        href: "/about",
        label: "common.menu.about"
    },
    {
        href: "/contact",
        label: "common.menu.contact"
    },
]

export const serviceKeys = ['Home cleaning', 'Big cleaning', 'Disinfection cleaning', 'Upholstery cleaning'];

export const serviceImages = [
    "/clean2.jpg",
    "/clean7.jpg",
    "/clean4.jpg",
    "/homeclean2.jpg",
]

export const whyIcons = [
    "/icons/experts.png",
    "/icons/global.png",
    "/icons/blueprint.png",
    "/icons/badge.png",
]

export const steps = [
  { key: "step1" },
  { key: "step2" },
  { key: "step3" },
  { key: "step4" },
  { key: "step5" },
];

export const audienceMenus = [
  {
    value: 'developers',
    label: 'Developers',
    hint: 'Go from idea to UI faster.',
    title: 'Build product UI without giving up control',
    description:
      'Start with accessible parts and shape them to your app instead of working around a preset design system.',
    links: [
      {
        href: '/react/overview/quick-start',
        title: 'Quick start',
        description: 'Install Base UI and get your first interactive primitive on screen fast.',
      },
      {
        href: '/react/handbook/composition',
        title: 'Composition',
        description: 'Wrap and combine parts to match your product structure without hacks.',
      },
    ],
  },
 
] as const;


export const CONTACT = {
    phone : "0657479789",
    address : "37 ถ. นางลิ้นจี่ แขวงช่องนนทรี เขตยานนาวา กรุงเทพมหานคร 10120"
}