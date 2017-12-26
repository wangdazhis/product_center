require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RoutePage from './Route'
class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <div className="router">
          {
            RoutePage.map((val, ind) => {
              return <Route key={ind} {...val}/>
            })
          }
        </div>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
