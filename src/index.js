import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to React Boilerplate</h1>
      </div>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));

module.hot.accept();
