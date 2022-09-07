import React from 'react';

interface IEmoji {
  label: string;
  symbol: string;
}

function Emoji({ label, symbol }: IEmoji) {
  return (
    <span className="emoji" role="img" aria-label={label || ''} aria-hidden={label ? 'false' : 'true'}>
      {symbol}
    </span>
  );
}

export default Emoji;
