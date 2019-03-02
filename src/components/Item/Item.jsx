import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  const { item: { title, thumbnailUrl, url, albumId } } = props;

  const _onShowInfo = () => {
    const { item, onShowInfo } = props;
    onShowInfo(item);
  }

  return (
    <div className='gallery-item'>
      <img src={thumbnailUrl}></img>
      <div className='note'>
        <span>{title}</span>
      </div>
      <div class='overlay'>
        <div 
          className='info-icon' 
          onClick={_onShowInfo}>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  albumId: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string
};

export default Item;