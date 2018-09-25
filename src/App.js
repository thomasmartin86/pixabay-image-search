import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navBar/NavBar';
import Search from './components/search/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          {' '}
          <NavBar />
          <div style={{ padding: '.5rem 1rem' }}>
            <Search />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
