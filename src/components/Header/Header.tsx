import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

export default class Header extends Component {
  render() {
    const navStyles="font-bold border-b-2";

    return (
        <div className='bg-transparent h-20 p-4 w-full fixed top-0 z-10 '>
        <div className=' w-full h-full	'>
            <div className='flex w-full h-full items-center'>
                <div className='w-1/2'>
                    <div className='font-Poppins font-bold text-slate-900 text-4xl	'>Araliya Medical-Center</div>
                </div>
                <div className='w-1/2'>
                    <div className='flex w-full justify-end gap-12 '>
                      
                        <NavLink to={"/home"} className= 'cursor-pointer text-slate-900 pr-0 font-bold text-2xl'>Home</NavLink>
                        <NavLink to={"/chanelling"} className='text-slate-900 font-bold text-2xl'>Chanelling</NavLink>
                        <NavLink to={"/doctors"} className='text-slate-900 font-bold text-2xl'>Doctors</NavLink>
                        <NavLink to={"/contact"} className='text-slate-900 font-bold text-2xl'>Contact</NavLink>
                        <NavLink to={"/"} className='text-slate-900 font-bold text-2xl'><LogoutIcon/></NavLink>


                    </div>

                </div>
            </div>
        </div>
        </div>
    )
  }
}
