import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { getAlbumById } from '../../api/photos';
import './style.css';

const TIME_OF_HIDING = 1000;

const renerInfoRow = (title, text) => (
  <div>
    <span>{title}: </span>
    <span>{text}</span>
  </div>
);

class PhotoInfoAlert extends Component {
  state = {
    title: null,
    albumId: null,
    isShowed: false,
    loading: false
  };

  show = async (photoInfo) => {
    const { albumId } = photoInfo;
    const album = await getAlbumById(albumId);
    this.setState({
      photoInfo: { ...photoInfo, album: album.title },
      isShowed: true
    });
    this.timerId = setTimeout(this.hide, TIME_OF_HIDING);
  }

  hide = () => {
    this.setState({
      photoInfo: null,
      isShowed: false
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    const { photoInfo } = this.state;
    return (
      <Fragment>
        {this.state.isShowed && (<div id='photo-info-alert'>
          {renerInfoRow('Title', photoInfo.title)}
          {renerInfoRow('Album', photoInfo.album)}
        </div>)}
      </Fragment>
    )
  }
}

export default PhotoInfoAlert;