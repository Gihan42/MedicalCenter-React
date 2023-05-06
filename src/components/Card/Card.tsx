import React, { Component } from 'react'
import carimage from '../../assets/icons8-doctor-male-64.png'
  


export default class Card extends Component {

 
  render() {
    return (
        
        <div className='p-4'>
          <div className='border-2 border-slate-500 h-72 w-72 rounded-3xl grid grid-rows-2 backdrop-blur-sm shadow-2xl shadow-black cursor-pointer hover:bg-cyan-500'>
              <div className='rounded-t-3xl justify-center  items-center flex p-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="" height="" fill="currentColor" className="bi bi-person-bounding-box " viewBox="0 0 16 16">
                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              </svg>

              </div>
              <div className=' rounded-b-3xl pl-2'>
                <div className='flex justify-center items-center text-xl'>
                  < h1 className='text-2xl text-lime-800'>Dr.Priyan Darshana</h1>
                </div>
                <div className='flex justify-start items-start'>
                <h2 className='text-lg text-slate-800'> contact : +977-890987</h2>
                </div>
                <div className='flex justify-start items-start'>
                <h2 className='text-lg text-slate-900'>Karapitiya General Hospital</h2>
                </div>
                <div className='flex justify-start items-start'>
                <h2 className='text-lg text-slate-900'>Karapitiya General Hospital</h2>
                </div>
              </div>

          </div>
     
     </div>
     


       
    
    )
  }
}
