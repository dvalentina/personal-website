import React from 'react';

import { Code, Handshake, LaptopMac, School } from '@mui/icons-material';

import Emoji from '../components/Emoji';
import { IExperienceElement } from '../types';

const bachelor = "MIPT bachelor's degree";
const technoTrack = 'TechnoTrack (MIPT & Mal.ru Group)';
const sberTech = 'SberTech';
const next = 'Your project!';

export const ExperienceData: IExperienceElement[] = [
  {
    key: 'bachelor',
    title: bachelor,
    subtitle: 'Education',
    icon: <School />,
    comment: '',
  },
  {
    key: 'technotrack',
    title: technoTrack,
    subtitle: 'Course',
    icon: <Code />,
    comment: '',
  },
  {
    key: 'sbertech',
    title: sberTech,
    subtitle: 'Work',
    icon: <LaptopMac />,
    comment: '',
  },
  {
    key: 'next',
    title: next,
    subtitle: <Emoji label="smiling face with sunglasses" symbol="😎" />,
    icon: <Handshake />,
    comment: '',
  },
];
