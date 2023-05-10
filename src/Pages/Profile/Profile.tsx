import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TextField, { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextFieldVariants } from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button/Button';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import  bgImage from '../../assets/rm222batch2-mind-03.jpg';


type PatientDetails = {
  email: string;
  userName: string;
  password: string;
};
type PatientProps = {};
type PatientState = {
  PatientList: PatientDetails[];
  email: string;
  userName: string;
  password: string;
};

export default class Profile extends Component <PatientProps, PatientState> {
  constructor(props: PatientProps) {
    super(props);
    this.state = {
      PatientList: [],
      email: "",
      userName: "",
      password: "",
    };
  }
  render() {
    return (
        <>
        <Header/>
        <div className='h-screen    bg-cover ' style={{ backgroundImage: `url(${bgImage})`}}>
          <div className='pr-14 pt-16 pl-14 w-full'>
          <div className="grid grid-cols-2 gap-4 p-10  h-auto ">
          <div className="  w-auto space-y-5  ">
              
              <section className='justify-center items-center'>
                <div className='flex justify-start space-x-8 mb-4'>
                    <h1 className='text-3xl mt-3 ml-4 font-bold'>Enter Your Email Address</h1><TextField id="email" 
                               sx={{width:290}}  
                    label="Email Address "autoComplete="email" variant="outlined" />
                    <button type="button" className="btn btn-primary space-x-4">Search <SearchIcon/></button>
                </div>
                <div className='justify-center border-2 border-abc-100 mt-1 rounded-2xl pt-4 pb-3 bg-transparent backdrop-blur-3xl pl-8 shadow-2xl shadow-black'>
                    <h1 className='text-green-700'>Your  Appoinment</h1>
                <div className='flex justify-start space-x-8 mt-3'> 
                    <h1 className='text-3xl text-sky-900 '>Appointment No</h1><h2 className='text-3xl'>A001</h2>
                </div>
                <div className='flex justify-start space-x-8 mt-3'> 
                    <h1 className='text-3xl text-sky-900 '>Doctor Name</h1>
                     <select className=" form-select form-select-lg pl-10 pr-12 border-2 border-lime-500 bg-transparent h-14  w-auto text-3xl" aria-label=".form-select-sm example">
                    <option selected>Specialization</option>
                    <option value="1">Doctors</option>
                    <option value="2">Hospital</option>
                  </select>
                  <select className=" form-select form-select-lg pl-10 pr-12 border-2 border-lime-500 bg-transparent h-14  w-auto text-3xl" aria-label=".form-select-sm example">
                    <option selected>Doctor Name</option>
                    
                  </select>
                </div>
                <div className='flex justify-start space-x-8 mt-2'> 
                    <h1 className='text-3xl text-sky-900 mt-2 '>Appointment Date</h1><TextField id="standard-basic" label=" " variant="standard" type='date' 
                      sx={{width:235,fontSize:20}} 
                    />
                </div>
                <div className='flex justify-start space-x-8 mt-3'> 
                    <h1 className='text-3xl text-sky-900 '>Your Payment </h1> <h2 className='text-3xl'>5000,00</h2>
                </div>
                <div className='flex justify-start space-x-8 mt-3'> 
                    <h1 className='text-3xl text-sky-900 '>Wards No </h1> <h2 className='text-3xl'>02</h2>
                    <Button variant="contained" color="success">Update</Button>
                <Button variant="contained" color='error' startIcon={<DeleteIcon />}>Delete</Button>
                </div>
                </div>  
                <div className='h-auto mt-3 p-2'>
                <table className="table">
                      <thead className="table-dark">
                      <tr >
                        <th scope="col">Appoinment No</th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Wards No</th>
                        <th scope="col">Date</th>
                        <th scope="col"><DeleteIcon/></th>
                      </tr>
                     </thead>
                      <tbody>
                      <tr>
                       <td>A001</td>
                       <td>Dr P Darshana</td>
                       <td>02</td>
                       <td>2023/06/06</td>
                       <td><CloseIcon/></td>
                     </tr>

                     </tbody>
                    </table>
                </div> 
              </section>
          </div>
          <div className=" p-4 space-y-5  ml-52  h-auto">
            <section className='grid grid-rows-2'>

              <div className='flex justify-center items-center   h-auto'>
                <div className='flex justify-center items-center'>

                <svg xmlns="http://www.w3.org/2000/svg" width="188" height="188" fill="currentColor" className="bi bi-person-bounding-box shadow-2xl cursor-pointer hover:text-green-700" viewBox="0 0 16 16">
                 <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                </svg>
                 </div>
                 
              </div>
              <div className=' justify-center items-center  pl-5 h-auto pt-5'>
                <form action="">
                <h1 className='text-2xl'>Kamal Ruvindra</h1>
                <div className='justify-start flex space-x-5'>
                  <h2 className='text-xl mt-3'>Patien Name :- </h2><TextField id="standard-basic" label="Patien Name " variant="standard" />
                </div>
                <div className='justify-start flex space-x-5'>
                  <h2 className='text-xl mt-3'> Patien Email:- </h2><TextField id="email" label="Email Address " autoComplete="email" variant="standard" />
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
