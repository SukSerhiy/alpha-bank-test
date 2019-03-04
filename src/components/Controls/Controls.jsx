import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import SearchStr from './SearchStr';

const Controls = props => {
  const { queryAutocomplete, onFilterSelect, onSearchEnter } = props;
  return (
    <div className='controls'>
      <Filter 
        queryAutocomplete={queryAutocomplete}
        onSelect={onFilterSelect}
      />
      <div className='search-input'>
        <SearchStr onEnter={onSearchEnter} />
      </div>
    </div>
  );
}

Controls.propTypes = {
  queryAutocomplete: PropTypes.func,
  onFilterSelect: PropTypes.func,
  onSearchEnter: PropTypes.func
};

export default Controls;