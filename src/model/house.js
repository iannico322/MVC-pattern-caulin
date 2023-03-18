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
    //Response
    this.setState({items:data})
    console.log(data)
  }

  render() {
    return this.props.children(this.state.items);
  }
}

export default Model;