import React, { Component } from 'react'
import backgroundImage from '../../../assets/medium-shot-doctors-wearing-protective-equipment.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default class Login extends Component {
  render() {
    return (
      <>
        <div className='h-screen bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='border-2 border-gray-500  w-1/2 h-96 rounded-3xl shadow-gray-500 shadow-lg hover:drop-shadow-xl backdrop-blur-sm flex justify-center space-x-5 p-10'>
                <h2 className='text-4xl '>INTENSIFYING <span>  </span></h2> <h2 className='text-4xl '> LIFE <span>  </span></h2><h2 className='text-4xl '> AND </h2><h2 className='text-4xl '>CARE</h2>
            </div>
        </div>
       </>

    )
  }
}
