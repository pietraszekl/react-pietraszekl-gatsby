const cloudinaryUrl =
  'https://res.cloudinary.com/dtxfvmuvk/image/upload/v1528781226/'

module.exports = {
  person: {
    photo: '/assets/images/lukasz-pietraszek.jpg',
    name: 'Łukasz Pietraszek',
    title: 'Front-end developer',
    intro: `A passionate web developer with over six years industry experience. I'm specializing in creating Front-end architecture for SAP Hybris based projects, leading team of developers and helping clients to embrace the principles of responsive web design.`,
    specialities: `Specialities: HTML5, CSS3, JavaScript, RWD, Usability, Web Standards`,
    btnText: `Download my CV`,
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
  },
  skills: {
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
  },
  recommendations: [
    {
      id: 1,
      text:
        "Lukasz is a great addition to our UI team at Portaltech Reply. He is a 'go-to' person when you need a quick and complete solution. Technical and with a keen eye for detail, Lukasz also has the rare quality of genuine self drive which has displayed itself whilst being UI project lead for one of our largest global clients.",
      author: 'Simon Davies - Lead UI at Portaltech Reply',
    },
    {
      id: 2,
      text:
        'Lukasz has a very good knowledge of CSS3 and HTML5. He is really up to date to the new technics and to new frontiers of web developing. His puts his experience and his skills in his job providing opinions even on the UX side. He is a great worker and while we have worked together I haven’t had to assign him few jobs ‘cause he was able to understand what was needed from him by the company. He is always punctual and he has a great respect of the work that is doing.',
      author: 'Fabio Salimbeni - Front-end developer at BioMed Central',
    },
    {
      id: 3,
      text:
        'I had the pleasure working with Lukasz and I have absolutely no hesitation to recommend him to anyone. He is a professional, dedicated and hard working individual who keeps himself up to date with the latest technologies and skills. He is a nice guy and I would love to work with him again in the future.',
      author: 'Ali Khan - UI developer at Portaltech Reply',
    },
  ],
  projects: {
    title: 'Projects',
    intro:
      'During my 6+ years of professional experience I have helped build websites and services for well-known companies - B2C and B2B as well as for independent artists and charities. Click on the logos of selected projects for more details.',
    list: [
      // {
      //   id: 'arsenal',
      //   name: 'Arsenal Direct',
      //   logo: `arsenal-logo.jpg`,
      // },
      {
        id: 'bat',
        name: 'BST',
        logo: `bat-logo.jpg`,
      },
      {
        id: 'delhaize',
        name: 'Delhaize Group',
        logo: `delhaize-logo.jpg`,
      },
      {
        id: 'dreams',
        name: 'Dreams',
        logo: `dreams-logo.jpg`,
      },
      {
        id: 'gucci',
        name: 'Gucci',
        logo: `gucci-logo.jpg`,
      },
      {
        id: 'jackwills',
        name: 'Jack Wills',
        logo: `jackwills-logo.jpg`,
      },
      {
        id: 'monsoon',
        name: 'Monsoon Accessorize',
        logo: `monsoon-accessorize-logo.jpg`,
      },
      {
        id: 'office',
        name: 'Office Shoes',
        logo: `office-logo.jpg`,
      },
      {
        id: 'phones4u',
        name: 'Phones 4u',
        logo: `phones4u-logo.jpg`,
      },
      {
        id: 'poferries',
        name: 'P&O Ferries',
        logo: `poferries-logo.jpg`,
      },
      {
        id: 'sofa',
        name: 'Sofa',
        logo: `sofa-logo.jpg`,
      },
      {
        id: 'stelladot',
        name: 'Stella & Dot',
        logo: `stelladot-logo.jpg`,
      },
    ],
  },
}
