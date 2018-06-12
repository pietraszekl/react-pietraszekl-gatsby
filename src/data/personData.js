const cloudinaryUrl =
  'https://res.cloudinary.com/dtxfvmuvk/image/upload/v1528781226/'

const about = {
  photo: '/images/lukasz-pietraszek.jpg',
  name: 'Lukasz Pietraszek',
  title: 'Front-end developer',
  about:
    'Freelance UI/Front-end developer with proven track-record over five years in creating clean, accessible and user-friendly responsive websites. Self motivated and adaptable, independent minded, with a keen eye for detail. Experienced in working with Agile methodologies.',
  specialities:
    'Specialities: HTML5, CSS3, Web Design/Development, RWD, Usability, Web Standards, Axure RP',
  cv: {
    btnLink: '#',
    btnTxt: 'Download my CV',
  },
  connect: [
    {
      icon: 'icon-twitter',
      link: 'https://twitter.com/pietraszekl',
      name: 'twitter',
    },
    {
      icon: 'icon-linkedin',
      link: 'https://uk.linkedin.com/in/pietraszekl',
      name: 'linkedin',
    },
    {
      icon: 'icon-github',
      link: 'https://github.com/pietraszekl',
      name: 'github',
    },
  ],
}
const skills = {
  header: 'Skills',
  intro:
    'I hand-code all of my HTML, CSS and Javascript due to the strong belief that robust solutions depend upon a deep understanding of all the front-end code. This discipline also enables efficient fixing of bugs when they arise.',
  list: [
    'HTML5 & CSS3',
    'JavaScript & jQuery',
    'Git & SVN',
    'SASS & LESS',
    'Agile/Scrum experience',
    'Responsive/mobile-first sites',
  ],
}

const projects = {
  title: 'Projects',
  intro:
    'During my 6+ years of professional experience I have helped build websites and services for well-known companies - B2C and B2B as well as for independet artisits and charities. Click on the logos of selected projects for more details.',
  list: {
    bat: {
      desc:
        'B2B project developed for British American Tobacco Australia to provided their client base with the best possible experience for desktop as well as tablet/mobile devices when ordering larger volumes of products.',
      id: 'bat',
      img: [
        {
          altText: 'British American Tobacco wesbite',
          id: '1',
          src: '/images/bat/bat-veo-1.jpg',
        },
      ],
      logo: `${cloudinaryUrl}logos/bat-logo.jpg`,
      name: 'British American Tobacco',
      tech: ['HTML', 'Sass', 'jQuery', 'Bootstrap 3', 'Responsive'],
      year: '2014/2015',
    },
    delhaize: {
      desc:
        "Developing two e-grocery shops for Delhaize Group. French/Belgian version consist of eshop as well as 'Loyalty on Web' which allows customers to register loyalty cards and to accrue points on purchases where they present the registered card. These were build using Bootstrap 2 and Less. Greek version of e-shop and corporate platform were build using Bootstrap 3 and Sass.",
      id: 'delhaize',
      img: [
        {
          altText: 'Delhaize website',
          id: '1',
          src: '/images/delhaize/delhaize-1.jpg',
        },
        {
          altText: 'Delhaize website',
          id: '2',
          src: '/images/delhaize/delhaize-2.jpg',
        },
        {
          altText: 'Delhaize website',
          id: '3',
          src: '/images/delhaize/delhaize-3.jpg',
        },
        {
          altText: 'Delhaize website',
          id: '4',
          src: '/images/delhaize/delhaize-5.jpg',
        },
        {
          altText: 'Delhaize website',
          id: '5',
          src: '/images/delhaize/delhaize-6.jpg',
        },
        {
          altText: 'Delhaize website',
          id: '6',
          src: '/images/delhaize/delhaize-7.jpg',
        },
        {
          altText: 'Delhaize website',
          id: '7',
          src: '/images/delhaize/delhaize-8.jpg',
        },
        {
          altText: 'Delhaize website',
          id: '8',
          src: '/images/delhaize/delhaize-9.jpg',
        },
      ],
      links: [
        {
          text: 'Visit Delahize website',
          url: 'http://shop.delhaize.be/',
        },
        {
          text: 'Visit AB website',
          url: 'http://www.ab.gr/click2shop/',
        },
      ],
      logo: `${cloudinaryUrl}logos/delhaize-logo.jpg`,
      name: 'Delhaize Group',
      tech: ['SAP Hybris', 'Bootstrap 2 & 3', 'JavaScript', 'Sass&Less'],
      year: '2013/2014',
    },
    gucci: {
      desc:
        "Working at DigitasLbi Commerce (previously known as Sceneric). on integrating front-end prototype with SAP Hybris for Gucci's new ecommerce website.",
      id: 'gucci',
      img: [
        {
          altText: 'Gucci website',
          id: 1,
          src: '/images/gucci/gucci-1.jpg',
        },
      ],
      links: [
        {
          text: 'Visit Gucci website',
          url: 'https://www.gucci.com/us/en/',
        },
      ],
      logo: `${cloudinaryUrl}logos/gucci-logo.jpg`,
      name: 'Gucci',
      tech: [
        'SAP Hybris',
        'Sass',
        'Grunt',
        'jQuery',
        'RequireJS',
        'AJAX',
        'Handlebars',
        'Git',
      ],
      year: '2015/2016',
    },
    jackwills: {
      desc:
        'Maintaining and bug fixing main website. Tech stack: Demandware, RequireJS, HTML, LESS Maintaining and bug fixing main website as well as creating micro pages using AngularJS.',
      id: 'jackwills',
      img: [
        {
          altText: 'Jack Wills website',
          id: '1',
          src: '/images/jackwills/jackwills-1.jpg',
        },
        {
          altText: 'Jack Wills website',
          id: '2',
          src: '/images/jackwills/jackwills-2.jpg',
        },
      ],
      links: [
        {
          text: 'Visit Jack Wills',
          url: 'http://www.stelladot.com/',
        },
      ],
      logo: `${cloudinaryUrl}logos/jackwills-logo.jpg`,
      name: 'Jack Wills',
      tech: [
        'HTML5',
        'Less',
        'Grunt',
        'jQuery',
        'AJAX',
        'AngularJS',
        'RequireJS',
        'Handlebars',
        'GSAP',
        'Git',
      ],
      year: '2015',
    },
    monsoon: {
      desc:
        "I've been working on numbers of change request related to mini basket, checkout view, product grid view and product details pages for both Monsoon and Accessorize sites as well as fixing reported bugs.",
      id: 'monsoon',
      img: [
        {
          altText: 'Monsoon website',
          id: '1',
          src: '/images/monsoon/monsoon-1.jpg',
        },
        {
          altText: 'Monsoon PDP',
          id: '2',
          src: '/images/monsoon/monsoon-2.jpg',
        },
      ],
      links: [
        {
          text: 'Visit Monsoon website',
          url: 'http://uk.monsoon.co.uk/',
        },
        {
          text: 'Visit Accessorize website',
          url: 'http://uk.accessorize.com/',
        },
      ],
      logo: `${cloudinaryUrl}logos/monsoon-accessorize-logo.jpg`,
      name: 'Monsoon Accessorize',
      tech: ['SAP Hybris', 'jQuery', 'CSS'],
      year: '2013',
    },
    office: {
      desc:
        "Creating mobile version of the site for Office shoes using jQuery mobile framework and Hyrbis e-commerce platform. Functionality I've been building includes navigation, grid view and checkout process.",
      id: 'office',
      img: [
        {
          altText: 'Office shoes website',
          id: '1',
          src: '/images/office/office-1.jpg',
        },
        {
          altText: 'Office shoes website',
          id: '2',
          src: '/images/office/office-1.jpg',
        },
      ],
      logo: `${cloudinaryUrl}logos/phones4u-logo.jpg`,
      name: 'Office Shoes',
      tech: ['SAP Hybris', 'jQuery Mobile', 'CSS', 'HTML'],
      year: '2013/2014',
    },
    phones4u: {
      desc:
        'Implementation of SAP Hybris and Responsive Web Design for one of largest mobile phone retailers (at that time) in the United Kingdom.',
      id: 'phones4u',
      img: [
        {
          altText: 'Phones 4u website',
          id: '1',
          src: '/images/phones4u/phones4u-1.jpg',
        },
        {
          altText: 'Phones 4u website',
          id: '2',
          src: '/images/phones4u/phones4u-2.jpg',
        },
      ],
      logo: `${cloudinaryUrl}/logos/poferries-logo.jpg`,
      name: 'Phones 4u',
      tech: ['SAP Hybris', 'Bootstrap 3', 'jQuery', 'Responsive', 'Less'],
      year: '2013',
    },
    poferries: {
      desc:
        'Development of templates for desktop version for the website. The pages were tested and integrated into SAP Hybris e-commerce platform.',
      id: 'poferries',
      img: [
        {
          altText: 'P&O Ferriers website',
          id: '1',
          src: '/images/poferries/poferries-1.jpg',
        },
      ],
      links: [
        {
          text: 'Visit P&O Ferries website',
          url: 'http://www.poferries.com/',
        },
      ],
      logo: `${cloudinaryUrl}logos/poferries-logo.jpg`,
      name: 'P&O Ferries',
      tech: ['SAP Hybris', 'Bootstrap 3', 'jQuery', 'Responsive', 'Less'],
      year: '2014',
    },
    stelladot: {
      desc:
        'Working on converting static pages to Angular based templates. Collaborating with team in US (San Francisco) in delivering new layouts for European version of the website. Creating custom responsive pages and developing prototypes for marketing team.',
      id: 'stelladot',
      img: [
        {
          altText: 'Stella & Dot website',
          id: '1',
          src: '/images/stelladot/stelladot-1.jpg',
        },
      ],
      links: [
        {
          text: 'Visit Stella & Dot',
          url: 'http://www.stelladot.com/',
        },
      ],
      logo: `${cloudinaryUrl}logos/stelladot-logo.jpg`,
      name: 'Stella & Dot',
      tech: ['jQuery', 'AJAX', 'AngularJS', 'Git'],
      year: '2016',
    },
  },
}
export { about, skills, projects }
