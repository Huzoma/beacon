import { socialLinks } from './socialLinks';

// data/footerData.js
export const footerLinks = [
  {
    title: 'COMPANY',
    links: [
      { text: 'About', url: '/about' },
      { text: 'Jobs', url: '/jobs' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [{ text: 'FAQs', url: '#' }],
  },
  {
    title: 'CONTACTS',
    links: [
      { text: 'CV Post', url: '#' },
      { text: 'Job Post', url: '#' },
      { text: 'Contact Us', url: '#' },
    ],
    socials: socialLinks,
  },
];
