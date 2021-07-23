import React from 'react';

const App = (props) => {
    return (
        <div>{props.product? props.product: 'lololo'}</div>
      );
}
 
export default App;
