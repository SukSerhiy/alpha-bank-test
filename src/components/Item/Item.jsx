import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  const { item: { title, thumbnailUrl } } = props;

  const _onMouseDown = () => {
    const { item, showInfo } = props;
    showInfo(item);
  }

  const _onMouseLeave = () => {
    const { hideInfo } = props;
    hideInfo();
  }

  return (
    <div className='gallery-item'>
      <img alt={title} src={thumbnailUrl}></img>
      <div className='note'>
        <span>{title}</span>
      </div>
      <div className='overlay'>
        <div 
          className='info-icon' 
          onMouseDown={_onMouseDown}
          onMouseLeave={_onMouseLeave}
        >
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    albumId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string
  }),
  showInfo: PropTypes.func,
  hideInfo: PropTypes.func
};

export default Item;