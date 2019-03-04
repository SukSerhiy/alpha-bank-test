import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPhotos, setAlbumId, setSearchStr } from '../../actions';
import { getPhotos } from '../../api/photos';
import { getAlbums } from '../../api/albums';
import Controls from '../../components/Controls';

class ControlsContainer extends Component {

  setAlbumId = (albumId) => {
    const { setAlbumId } = this.props;
    setAlbumId(albumId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchStr !== this.props.searchStr) {
      this.getPhotos();
    }
    if (prevProps.albumId !== this.props.albumId) {
      this.getPhotos();
    }
  }

  setSearchString = (str) => {
    const { setSearchStr } = this.props;
    setSearchStr(str);
  }

  getPhotos = async () => {
    const { setPhotos, searchStr, albumId } = this.props;
    const photos = await getPhotos({ page: 1, limit: 10, searchStr, albumId });
    setPhotos(photos);
  }

  getAlbums = async (searchStr = '') => {
    const albums = await getAlbums({ page: 1, limit: 10, searchStr });
    return albums;
  }

  render() {
    return (<Controls
      queryAutocomplete={this.getAlbums} 
      onFilterSelect={this.setAlbumId} 
      onSearchEnter={this.setSearchString}
    />);
  }
}

const mapStateToProps = state => {
  const { photos, albumId, searchStr } = state.toJS();
  return { photos, albumId, searchStr };
}

const mapDispatchToProps = dispatch => ({
  setPhotos: payload => dispatch(setPhotos(payload)),
  setAlbumId: payload => dispatch(setAlbumId(payload)),
  setSearchStr: payload => dispatch(setSearchStr(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlsContainer)