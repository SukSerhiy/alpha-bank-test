import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import PhotoInfoAlert from '../PhotoInfoAlert';
import LoadMore from '../LoadMore';
import './style.css';

class Gallery extends Component {
  static propTypes = {
    photos: PropTypes.array,
    loadMorePhotos: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.photoInfoRef = React.createRef();
  }

  showInfo = (photoInfo) => {
    this.photoInfoRef.current.show(photoInfo);
  }

  hideInfo = () => {
    this.photoInfoRef.current.hide();
  }

  render() {
    const { photos, loadMorePhotos } = this.props;
    return (<div className='gallery'>
    <div className='gallery-items'>
        {photos.map((photo, key) => (
        <Item 
            key={key} 
            showInfo={this.showInfo} 
            hideInfo={this.hideInfo}
            item={photo} 
          />))}
        </div>
      <PhotoInfoAlert ref={this.photoInfoRef} />
      <LoadMore loadData={loadMorePhotos} />
    </div>)
  }
}

export default Gallery;
