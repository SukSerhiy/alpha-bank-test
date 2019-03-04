import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPhotos, setMorePhotos, setPage } from '../../actions';
import { getPhotos } from '../../api/photos';
import Gallery from '../../components/Gallery';
import { COUNT_ON_PAGE } from '../../constants';

class GaleryContainer extends Component {
  componentDidMount() {
    const { page } = this.props;
    this.getPhotos({ page, limit: COUNT_ON_PAGE });
  }

  getPhotos = async (params) => {
    const { setPhotos } = this.props;
    this.resetPage();
    const photos = await getPhotos(params);
    setPhotos(photos);
  }

  resetPage = () => {
    const { setPage } = this.props;
    setPage(1);
  }

  getMorePhotos = async () => {
    const { page, setMorePhotos, setPage, albumId, searchStr } = this.props;
    debugger;
    const nextPage = page + 1;
    setPage(nextPage);
    const photos = await getPhotos({ page: nextPage, limit: COUNT_ON_PAGE, albumId, searchStr });
    setMorePhotos(photos);
  }

  render() {
    const { photos } = this.props;
    return (<Gallery 
      photos={photos}  
      loadMorePhotos={this.getMorePhotos}
    />);
  }
}

const mapStateToProps = state => {
  const { photos, page, albumId, searchStr } = state.toJS();
  return { photos, page, albumId, searchStr };
}

const mapDispatchToProps = dispatch => ({
  setPhotos: payload => dispatch(setPhotos(payload)),
  setMorePhotos: payload => dispatch(setMorePhotos(payload)),
  setPage: payload => dispatch(setPage(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(GaleryContainer)