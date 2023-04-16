import React from 'react';
import './Widgets.scss';
import News from './News/News';

export default function Widgets() {
  return <div className='widgets'>
    <div className="news-widget">
      <News /> 
    </div>

  </div>
}