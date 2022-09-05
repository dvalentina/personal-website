import React, { useEffect, useState } from 'react';

import { Typography } from '@mui/material';
import { request } from '@octokit/request';

import { ILastUpdate } from '../types';

function LastUpdate({ style }: ILastUpdate) {
  const [error, setError] = useState('');
  const [daysSince, setDaysSince] = useState(100);
  const [loading, setLoading] = useState(true);

  function calcDays(date1: Date, date2: Date) {
    const difference = Math.abs(date1.getTime() - date2.getTime());
    const result = Math.floor(difference / (1000 * 3600 * 24));

    return result;
  }

  useEffect(() => {
    request({
      method: 'GET',
      url: '/repos/{owner}/{repo}/pulls?base=gh-pages',
      owner: 'dvalentina',
      repo: 'personal-website',
    })
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.status.toString());
        }

        if (response.data.length === 0) {
          throw Error('Empty');
        }

        const lastEvent = new Date(response.data[0].created_at);
        const today = new Date();

        const days = calcDays(lastEvent, today);

        if (days < daysSince) {
          setDaysSince(days);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  });

  function composeMessage() {
    if (daysSince > 90) {
      return 'more than 90 days ago';
    }

    const lastDigit = daysSince % 10;

    if (lastDigit === 1) {
      return `${daysSince} день назад`;
    }

    if (lastDigit === 2) {
      return `${daysSince} дня назад`;
    }

    return `${daysSince} дней назад`;
  }

  if (error) {
    return null;
  }

  return (
    <Typography sx={style('left')} component="p" variant="body2">
      Last update: {loading ? 'loading...' : composeMessage()}
    </Typography>
  );
}

export default LastUpdate;
