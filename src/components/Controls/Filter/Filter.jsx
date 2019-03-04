import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/lib/Async';

class Controls extends Component {
  static propTypes = {
    queryAutocomplete: PropTypes.func,
    onSelect: PropTypes.func
  };

  loadOptions = async (queryString, cb) => {
    const { queryAutocomplete } = this.props;
    const albums = await queryAutocomplete(queryString || '');
    const options = albums.map(a => ({ label: a.title, value: a.id }));
    cb(options);
  }

  onChange = opt => {
    const { onSelect } = this.props;
    onSelect(opt ? opt.value : null);
  }

  render() {
    return (
      <div className='filter'>
        <AsyncSelect 
          placeholder='Album'
          loadOptions={this.loadOptions}
          onChange={this.onChange}
          isClearable
          defaultOptions
        />
      </div>)
  }
}

export default Controls;

