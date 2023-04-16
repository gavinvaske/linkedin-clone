import React from 'react';
import './News.scss';
import InfoIcon from '@mui/icons-material/Info';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function News() {

  function buildNewsItem(newsItem) {
    return (
    <div className='news-item'>
      <h5 className='news-item-header'>Musk launching OpenAI rival</h5>
      <p className='news-item-subheader'>38m ago * 2,500 readers</p>
      </div>)
  }

  return <div className="news">
    <div className="news-header">
      <p>LinkedIn News</p>
      <InfoIcon />
    </div>
    <div className="news-body">
      {buildNewsItem()}
      {buildNewsItem()}
      {buildNewsItem()}
    </div>
    <div className="news-footer">
      <p>Show more</p>
      <ArrowDropDownIcon />
    </div>
  </div>
}