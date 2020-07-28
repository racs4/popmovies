import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import store from "./redux/store";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MoviePage from './MoviePage';
import SearchPage from './SearchPage';
import Header from './Header';
import Error from './widgets/Error/Error';
import { PAGE_NOT_FOUND } from './widgets/Error/ErrorConstants';

ReactDOM.render(
  <Provider store={store}>    
    <Router>            
      <Switch>
          <Route path="/movie/:id" component={MoviePage} />
          <Route path="/search/:query/:pageNumber" component={SearchPage} />
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/">
            <Error type={PAGE_NOT_FOUND}  />
          </Route>
        </Switch>            
      <Header />
    </Router>    
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
