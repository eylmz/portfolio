import { Employment } from '../types';

export const ACTIVE_PAGE_INDEX = 2;
export const TYPING_WORDS: string|string[] = 'developer';
export const PERSONAL_INFO = {
  fullName: 'Emre YILMAZ',
  birthday: 'June 01, 1996',
  location: 'Turkey, Istanbul',
  telephone: '+90 546 472 13 82',
  email: 'eylmz058@gmail.com'
};
export const SOCIAL_MEDIA_LINKS = {
  github: 'https://github.com/eylmz',
  linkedin: 'https://www.linkedin.com/in/eylmz058/',
  twitter: 'https://twitter.com/eylmz058',
  instagram: 'https://www.instagram.com/eylmz058/',
  email: 'eylmz058@gmail.com'
};
export const EMPLOYMENTS: Employment[] = [
  {
    date: 'February 2019 - Currently',
    position: 'Associate Developer',
    company: 'Trendyol Group',
    city: 'Turkey, Istanbul'
  },
  {
    date: 'July 2018 - January 2019',
    position: 'Full Stack Developer',
    company: 'EKYL Yazılım',
    city: 'Turkey, Sivas'
  },
  {
    date: 'October 2017 - May 2018',
    position: 'Full Stack Developer',
    company: 'Mobileasy',
    city: 'Turkey, Sivas'
  },
  {
    date: 'July 2017 - October 2017',
    position: 'Intern',
    company: 'Havelsan',
    city: 'Turkey, Ankara'
  },
  {
    date: 'July 2016 - July 2017',
    position: 'Full Stack Developer',
    company: 'Mobileasy',
    city: 'Turkey, Sivas'
  },
  {
    date: '2014 - 2016',
    position: 'Back-end Developer',
    company: 'Freelancer',
    city: 'Turkey'
  }
];
