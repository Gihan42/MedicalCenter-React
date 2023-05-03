import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import backgroundImage from '../../assets/medium-shot-doctors-wearing-protective-equipment.jpg'
import GridGoldenratioIcon from '@mui/icons-material/GridGoldenratio';

export default class Home extends Component {
  render() {
    return (
        <>
        <Header/>
        <div className='  h-screen   bg-cover ' style={{ backgroundImage: `url(${backgroundImage})`}}>
          <div className="grid grid-cols-2 gap-4 p-36  h-screen ">
          <div className=" p-4 space-y-5 border-2 border-white ">
                <div className='flex justify-start'>
                  <h1 className='text-7xl text-gray-900'>Your Healthy is</h1>
                </div>
                <div className='flex justify-start pb-10'>
                  <h1 className='text-7xl  text-gray-300'>our priority.</h1>
                </div>
                <div className='flex justify-start pb-12'>
                  <p className='text-2xl text-black'>
                  A medical center is a facility that provides a range of medical services to 
                  patients. These services may include primary care, specialty care, diagnostic 
                  testing, emergency care, and surgical procedures. Medical centers may also offer
                  various support services such as physical therapy, occupational therapy, and 
                  mental health counseling.
                  </p>
                </div>
                <div className='flex justify-start'>
                <div className='border-2 border-white w-80  p-4 text-2xl text-white bg-pink-600 hover:bg-lime-800 cursor-pointer '>Book An Appoinment  </div><div className='p-5 text-black bg-white '><GridGoldenratioIcon/></div>
                </div>
          </div>
          <div className=" p-4 space-y-5 border-2 border-white  ">
            column 02
          </div>
            </div>
            <div className='bg-white drop-shadow-2xl rounded-full border-2 border-zinc-500 ml-8 h-40 w-1/2 relative bottom-40 left-96 justify-center items-center hover:bottom-48 cursor-pointer'></div>
          </div>
       
        </>
      
    )
  }
}
