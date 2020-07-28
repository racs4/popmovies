import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/MainPage/App';

import { Provider } from "react-redux";
import store from "./redux/store";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MoviePage from './components/MoviePage/MoviePage';
import SearchPage from './components/SearchPage/SearchPage';
import Header from './components/Header/Header';
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
