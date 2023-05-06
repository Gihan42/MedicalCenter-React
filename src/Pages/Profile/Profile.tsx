import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TextField, { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextFieldVariants } from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button/Button';

export default class Profile extends Component {
  render() {
    return (
        <>
        <Header/>
        <div className='h-screen   bg-cover ' style={{ backgroundImage: `url(${''})`}}>
          <div className='p-14 w-full'>
          <div className="grid grid-cols-2 gap-4 p-10  h-auto ">
          <div className=" p-4 w-auto space-y-5 border-2 border-black ">
              coloumn 01
          </div>
          <div className=" p-4 space-y-5 border-2 border-red-400 ml-52  h-auto">
            <section className='grid grid-rows-2'>

              <div className='flex justify-center items-center  border-2 border-green-600 h-auto'>
                <div className='flex justify-center items-center'>

                <svg xmlns="http://www.w3.org/2000/svg" width="188" height="188" fill="currentColor" className="bi bi-person-bounding-box shadow-2xl cursor-pointer hover:text-green-700" viewBox="0 0 16 16">
                 <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                </svg>
                 </div>
                 
              </div>
              <div className=' justify-center items-center border-2 border-pink-600 pl-5 h-auto pt-5'>
                <form action="">
                <h1 className='text-2xl'>Kamal Ruvindra</h1>
                <div className='justify-start flex space-x-5'>
                  <h2 className='text-xl mt-3'>Patien Name :- </h2><TextField id="standard-basic" label="Patien Name " variant="standard" />
                </div>
                <div className='justify-start flex space-x-5'>
                  <h2 className='text-xl mt-3'> Patien Email:- </h2><TextField id="email" label="Email Address " autoComplete="email" variant="standard" />
                  {/* <select className="form-select form-select-sm pl-10 pr-12 bg-transparent h-10 mt-3 w-auto " aria-label=".form-select-sm example">
                    <option selected>Doctor Name</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select> */}
                </div>
                <div className='justify-start flex space-x-5'>
                  <h2 className='text-xl mt-3'>Password :- </h2><TextField id="standard-basic" label="Password "  variant="standard" />
                </div>
                <div className='justify-start flex space-x-5'>
                  <h2 className='text-xl mt-3'>Re Enter Password :- </h2><TextField id="standard-basic" label="Password " type='password' variant="standard" />
                </div>
                <div className='justify-start flex space-x-5 mt-4'>
                <Button variant="contained" color="success">Update</Button>
                <Button variant="contained" color='error' startIcon={<DeleteIcon />}>Delete</Button>

                </div>
                </form>
              </div>
            </section>
          </div>
            </div>
          </div>
        
          </div>

        </>
    )
  }
}
