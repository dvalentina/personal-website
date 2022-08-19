import React from 'react';

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

import { ExperienceData } from '../constants/ExperienceData';

function ExperienceComp() {
  const TimelineArray: React.ReactElement[] = ExperienceData.map((element, index, array) => {
    const isFirst = index === 0;
    const isLast = index === array.length - 1;

    return (
      <TimelineItem key={element.key}>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
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
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Timeline position="left">{TimelineArray}</Timeline>
      </Container>
    </Box>
  );
}

export default ExperienceComp;
