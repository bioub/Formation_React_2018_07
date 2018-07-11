import React from 'react';
import { css } from 'glamor';

const rotateplane = css.keyframes({ 
  '0%': { transform: 'perspective(120px) rotateX(0deg) rotateY(0deg)'},
  '50%': { transform: 'perspective(120px) rotateX(-180.1deg) rotateY(0deg)' },
  '100%': { transform: 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)' }
});

const rule = css({
  width: '40px',
  height: '40px',
  backgroundColor: '#333',
  margin: '100px auto',
  animation: `${rotateplane} 1.2s infinite ease-in-out`,
});

export const Loading = () => <div className={rule}></div>;