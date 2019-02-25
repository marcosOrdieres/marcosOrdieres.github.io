import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import {Home, NotFound} from '../';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircle } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faCircle, faEnvelope);

class App extends Component {
  render () {
    return (
      <div className='app'>
        {/* <div className="container mt-4"> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
        {/* </div> */}
      </div>
    );
  }
}

export default App;
