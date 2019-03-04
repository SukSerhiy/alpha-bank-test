import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'element-react';

class SearchStr extends Component {
  static propTypes = {
    onEnter: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  state = {
    value: null
  };

  onChange = str => {
    this.setState({ value: str });
  }

  onKeyPress = e => {
    console.log(e.key);
    if (e.key === 'Enter') {
      this.inputRef.current.blur();
      this.onEnter();
    }
  }

  onEnter = () => {
    const { onEnter } = this.props;
    const { value } = this.state;
    onEnter(value);
  }

  render() {
    const { value } = this.state;
    return (<Input 
      ref={this.inputRef}
      placeholder='Search'
      value={value}
      onChange={this.onChange} 
      onKeyPress={this.onKeyPress}
      append={(
        <Button 
          type='primary' 
          icon='search' 
          onClick={this.onEnter} 
        >
          Search
        </Button>)}
    />)
  }
}

export default SearchStr;