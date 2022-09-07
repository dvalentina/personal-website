import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';
import { request } from '@octokit/request';

import { ILastUpdate } from '../types';

function LastUpdate({ style }: ILastUpdate) {
  const { t } = useTranslation();

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
      url: '/repos/{owner}/{repo}/pulls?state=closed&base=main',
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

        const mergeDate = new Date(response.data[0].merged_at);
        const today = new Date();

        const days = calcDays(mergeDate, today);

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
      return t('footer.long_time');
    }

    if (daysSince === 1) {
      return t('footer.singular');
    }

    const lastDigit = daysSince % 10;

    if (lastDigit === 1 && daysSince !== 11) {
      return `${daysSince} ${t('footer.digit_one')}`;
    }

    if (lastDigit >= 2 && lastDigit <= 4 && !(daysSince >= 12 && daysSince <= 14)) {
      return `${daysSince} ${t('footer.digit_two')}`;
    }

    return `${daysSince} ${t('footer.plural')}`;
  }

  if (error) {
    return null;
  }

  return (
    <Typography sx={style('left')} component="p" variant="body2">
      {t('footer.last_update')}
      {loading ? t('footer.loading') : composeMessage()}
    </Typography>
  );
}

export default LastUpdate;
