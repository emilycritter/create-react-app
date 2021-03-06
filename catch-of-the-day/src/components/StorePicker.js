import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(event){
    event.preventDefault();
    const storeId = this.storeInput.value;
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render(){
    // Example of a comment in the render function
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
      { /* Example of a comment in the return statement */ }
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={
            getFunName()} ref={(input) => {this.storeInput = input}}/>
        <button type="submit">Visit Store -> </button>
      </form>
    )
  }
}
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
