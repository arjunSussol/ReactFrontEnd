import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to React Front-end</h1>
      </div>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
