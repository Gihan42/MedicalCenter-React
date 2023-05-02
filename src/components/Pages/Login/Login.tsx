import React, { Component } from 'react'
import backgroundImage from '../../../assets/medium-shot-doctors-wearing-protective-equipment.jpg'

export default class Login extends Component {
  render() {
    return (
      <>
        <div className='h-screen bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='border-2 border-gray-500  w-1/2 h-96 rounded-3xl shadow-gray-500 shadow-lg hover:drop-shadow-xl backdrop-blur-sm flex justify-center '>
                
            </div>
        </div>
       </>

    )
  }
}
