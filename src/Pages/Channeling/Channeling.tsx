import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import TextField from '@mui/material/TextField'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SearchIcon from '@mui/icons-material/Search';

export default class Channeling extends Component {
  render() {
    return (
      <>
      <Header/>
      <div className='pb-20 bg-cover h-screen' style={{ backgroundImage: `url(${''})`}}>
         <div className='flex justify-center items-center pt-24'><h1 className='text-5xl'>Channel Your Doctor</h1> </div>
      <div className='grid grid-cols-3 gap-3 pr-20 pl-20 p-3 w-auto'>
        <section className='border-2 border-red-300 w-auto'>
          column 01
          <div className=' border-2 border-gray-700 pl-5 rounded-3xl backdrop-blur-3xl bg-transparent pr-5 pt-3  shadow-2xl shadow-black'>
            <form action="">
            <div className='justify-start flex space-x-5 '>
                  <h2 className='text-2xl mt-3 text-sky-900 '>Enter Your Email :- </h2><TextField id="email" label="email " type='email'  autoComplete="email" variant="standard" />
                  <button type="button" className="btn btn-success space-x-4">Search <SearchIcon/></button>
            </div>
            <div className='justify-start flex space-x-5 '>
                  <h2 className='text-2xl  text-sky-900 mt-3'>Name </h2><TextField id="standard-basic" label="enter your name" variant="standard" type='text'/>
            </div>
            <div className='flex justify-start space-x-8 mt-2'> 
                    <h1 className='text-2xl text-sky-900 mt-3 '>Patien Age</h1><TextField id="standard-basic" label="enter your age" variant="standard" type='number'/>
            </div>
            <div className='flex justify-start space-x-8 mt-2'> 
                    <h1 className='text-2xl text-sky-900 mt-3 '>Address</h1><TextField id="standard-basic" label="enter your address" variant="standard" type='text'/>
            </div>
            <div className='flex justify-start space-x-8 mt-3'> 
                    <h1 className='text-2xl text-sky-900 '>Appoinment No</h1><h1 className='text-2xl '>01</h1>
            </div>
            <div className='flex justify-start space-x-8 '> 
                    <h1 className='text-2xl text-sky-900 mt-3 '>Appointment Date</h1><TextField id="standard-basic" label=" " variant="standard" type='date'/>
            </div>

            </form>
          </div>

        </section>
        <section className='border-2 border-black w-auto'>
          column-2
          < div className=' border-2 border-gray-700 pl-5 rounded-3xl  bg-transparent pr-5 pt-3  shadow-2xl shadow-black '>
            <form action="">
            <div className='flex justify-start space-x-8 mt-3'> 
                    <h1 className='text-2xl text-sky-900 mt-2'>Doctor Name</h1>
                     <select className=" form-select form-select-md pl-10 pr-12 border-2 border-lime-500 bg-transparent h-14  w-auto text-3xl" aria-label=".form-select-sm example">
                    <option selected>Specialization</option>
                    <option value="1">Doctors</option>
                    <option value="2">Hospital</option>
                  </select>
                  <select className=" form-select form-select-md pl-10 pr-12 border-2 border-lime-500 bg-transparent h-14  w-auto text-3xl" aria-label=".form-select-sm example">
                    <option selected>Doctor Name</option>
                  </select>
                </div>
            <div className='flex justify-start space-x-8 mt-3'> 
                    <h1 className='text-2xl text-sky-900 '>Doctor Chargers</h1><h1 className='text-2xl '>2500.00</h1>
            </div>
            <div className='flex justify-start space-x-8 mt-3'> 
                    <h1 className='text-2xl text-sky-900 '>Word No</h1><h1 className='text-2xl '>02</h1>
            </div>
            <div className='flex justify-start space-x-8 mt-3'> 
                    <h1 className='text-2xl text-sky-900 '>Time</h1><h1 className='text-2xl '>4.00 p.m</h1>
            </div>
            <div className='flex justify-start space-x-8 mt-3'> 
                    <h1 className='text-2xl text-sky-900 '>Hospital</h1><h1 className='text-2xl '>Matarat General Hospital</h1>
            </div>

            </form>
          </div>

        </section>
        <section className='border-2 border-green-500'>
          column-3
        </section>
      </div>
      </div>
    

      </>
    )
  }
}
