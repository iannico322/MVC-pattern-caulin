import React from 'react';

import data from './data.json'
class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ items:data});
    }, 1000);
   
  }

  render() {
    return this.props.children(this.state.items);
  }
}

export default Model;