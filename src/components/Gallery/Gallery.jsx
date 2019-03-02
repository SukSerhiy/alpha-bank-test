import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import PhotoInfoAlert from '../PhotoInfoAlert';
import './style.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.photoInfoRef = React.createRef();
  }

  onShowInfo = (photoInfo) => {
    this.photoInfoRef.current.show(photoInfo);
  }

  render() {
    const { photos } = this.props;
    return (<div className='gallery'>
      {photos.map((photo, key) => (
        <Item 
          key={key} 
          onShowInfo={this.onShowInfo} 
          item={photo} 
        />))}
      <PhotoInfoAlert ref={this.photoInfoRef} />
    </div>)
  }
}

Gallery.propTypes = {
  photos: PropTypes.array
};

export default Gallery;
