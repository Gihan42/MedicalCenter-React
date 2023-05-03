import React, { Component } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Login from './Pages/Login/Login';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
// import { Login } from '@mui/icons-material';

export default class App extends Component  {
  componentDidMount(): void {
      //console.log('run')

  }

  render(): React.ReactNode {
    return (
      <div className='bg-stone-300 min-h-screen	'>
         <Content/>
       {/* <Home/> */}

      </div>
    );
  }
}


// export default App;
