import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Pages/Login/Login';
// import { Login } from '@mui/icons-material';

export default class App extends Component  {
  componentDidMount(): void {
      //console.log('run')

  }

  render(): React.ReactNode {
    return (
      <div className='bg-stone-300 min-h-screen	'>
          <Login/>      
      </div>
    );
  }
}


// export default App;
