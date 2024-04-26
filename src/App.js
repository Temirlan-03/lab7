// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Content from './Content';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const theme = createTheme({
    palette: {
      mode: 'light', // You can change this to 'dark' for dark mode
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <CssBaseline />
          <div>
            <Header toggleDrawer={toggleMenu} />
            <Menu isOpen={isMenuOpen} toggleDrawer={toggleMenu} />
            <Switch>
              <Route path="/about" component={Content} />
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать!</p>
    </div>
  );
};

export default App;
