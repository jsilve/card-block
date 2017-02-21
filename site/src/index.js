import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import { AppContainer,CardBlockView } from './views';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

var store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={AppContainer}>
            <IndexRoute component={CardBlockView} />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
