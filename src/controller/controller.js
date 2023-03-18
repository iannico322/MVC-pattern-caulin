import React from 'react';
import Model from '../model/house';
import View from '../view/view';

class Controller extends React.Component {
  render() {
    return (

      <Model>
   
        {items => <View items={items} />}
    
        
      </Model>
   
    );
  }
}

export default Controller;