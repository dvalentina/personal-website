import React from 'react';

import { GitHub, LinkedIn, Telegram } from '@mui/icons-material';

import { ISocialElement } from '../types';

export const EMAILJS_SERVICE_ID = 'service_titan_qt0p3tf';
export const EMAILJS_TEMPLATE_ID = 'template_qxht1p9';
export const EMAILJS_USER_ID = 'wsilYoYSWQLkddDnQ';

export const SOCIAL_MEDIA: ISocialElement[] = [
  {
    key: 'LinkedIn',
    link: 'https://www.linkedin.com/in/valentina-danilova-564576237/',
    icon: <LinkedIn fontSize="large" />,
  },
  {
    key: 'GitHub',
    link: 'https://github.com/dvalentina',
    icon: <GitHub fontSize="large" />,
  },
  {
    key: 'Telegram',
    link: 'https://t.me/danilova_v_v',
    icon: <Telegram fontSize="large" />,
  },
];

export const EMAIL = 'contact@dvalentina.me';

export const CV_LINK = 'files/CV_01-09-2022.pdf';
export const CV_DOWNLOAD_NAME = 'CV_React-Dev_D-Valentina.pdf';
