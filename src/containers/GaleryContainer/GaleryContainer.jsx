import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPhotos } from '../../actions/photos';
import { getPhotos } from '../../api/photos';
import Gallery from '../../components/Gallery';

class GaleryContainer extends Component {
  componentDidMount() {
    this.getPhotos(1);
  }

  getPhotos = async (page) => {
    const { setPhotos } = this.props;
    const photos = await getPhotos(page);
    setPhotos(photos);
  }

  render() {
    const { photos } = this.props;
    return (<Gallery 
      photos={photos} 
    />);
  }
}

const mapStateToProps = state => {
  const { photos } = state.toJS();
  return { photos };
}

const mapDispatchToProps = dispatch => ({
  setPhotos: payload => dispatch(setPhotos(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(GaleryContainer)