import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'element-react';
import './style.css';

class LoadMore extends Component {
  static propTypes = {
    loadData: PropTypes.func
  };

  state = {
    loading: false
  }

  setStateAsync = (state) => (
    new Promise((resolve) => {
      this.setState(state, resolve)
    })
  )

  loadData = async () => {
    const { loadData } = this.props;
    await this.setStateAsync({ loading: true });
    await loadData();
    await this.setStateAsync({ loading: false });
  }

  render() {
    const icon = this.state.loading ? 'loading' : null;
    return (
      <div className='load-more'>
        <Button 
          icon={icon}
          onClick={this.loadData}
        >
          Load more
        </Button>
      </div>
    );
  }
}

export default LoadMore;