import React from 'react';

class StorePicker extends React.Component {
  render(){
    // Example of a comment in the render function
    return (
      <form className="store-selector">
      { /* Example of a comment in the return statement */ }
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store -> </button>
      </form>
    )
  }
}

export default StorePicker;
