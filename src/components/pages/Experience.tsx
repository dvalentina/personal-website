import React from 'react';
import { useTranslation } from 'react-i18next';

import { Code, Handshake, LaptopMac, School } from '@mui/icons-material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Box, Container, Typography } from '@mui/material';

import { ID_EXPERIENCE } from '../../constants/constants';
import { IExperienceElement } from '../../types';
import Emoji from '../Emoji';

function Experience() {
  const { t } = useTranslation();

  const data: IExperienceElement[] = [
    {
      key: 'bachelor',
      title: t('experience.bachelor.title'),
      subtitle: t('experience.bachelor.subtitle'),
      icon: <School />,
      comment: (
        <span>
          {t('experience.bachelor.comment_first')}
          <Typography variant="body2" color="primary" sx={{ display: 'inline' }}>
            {t('experience.bachelor.comment_highlighted')}
          </Typography>
          {t('experience.bachelor.comment_last')}
        </span>
      ),
    },
    {
      key: 'technotrack',
      title: t('experience.techno_track.title'),
      subtitle: t('experience.techno_track.subtitle'),
      icon: <Code />,
      comment: t('experience.techno_track.comment'),
    },
    {
      key: 'sbertech',
      title: t('experience.sber_tech.title'),
      subtitle: t('experience.sber_tech.subtitle'),
      icon: <LaptopMac />,
      comment: (
        <span>
          {t('experience.sber_tech.comment_first')}
          <Typography variant="body2" color="primary" sx={{ display: 'inline' }}>
            {t('experience.sber_tech.comment_highlighted')}
          </Typography>
          {t('experience.sber_tech.comment_last')}
          <Emoji label="sparkles" symbol="✨" />
        </span>
      ),
    },
    {
      key: 'next',
      title: t('experience.next.title'),
      subtitle: <Emoji label="smiling face with sunglasses" symbol="😎" />,
      icon: <Handshake />,
      comment: t('experience.next.comment'),
    },
  ];

  const timelineArray: React.ReactElement[] = data.map((element, index, array) => {
    const isFirst = index === 0;
    const isLast = index === array.length - 1;

    return (
      <TimelineItem key={element.key}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', maxWidth: { xs: '110px', sm: 'unset' } }}
          variant="body2"
          color="text.secondary"
        >
          {element.comment}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={isFirst ? { visibility: 'hidden' } : { display: 'block' }} />
          <TimelineDot color={isLast ? 'secondary' : 'primary'} variant={isLast ? 'filled' : 'outlined'}>
            {element.icon}
          </TimelineDot>
          <TimelineConnector sx={isLast ? { visibility: 'hidden' } : { display: 'block' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            {element.title}
          </Typography>
          <Typography>{element.subtitle}</Typography>
        </TimelineContent>
      </TimelineItem>
    );
  });

  return (
    <Box id={ID_EXPERIENCE} sx={{ pt: 16 }}>
      <Container maxWidth="lg">
        <Typography component="h1" variant="h4" align="center" mb={2}>
          EXPERIENCE
        </Typography>
        <Timeline position="left">{timelineArray}</Timeline>
      </Container>
    </Box>
  );
}

export default Experience;
