import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

export default class Header extends Component {
  render() {
    const navStyles="text-slate-900";

    return (
        <div className='bg-transparent h-20 p-4 w-full fixed top-0 z-10 '>
        <div className=' w-full h-full '>
            <div className='flex w-full h-full items-center'>
                <div className='w-1/2'>
                    <div className='font-Poppins font-bold text-slate-900 text-4xl '>Araliya Medical-Center</div>
                </div>
                <div className='w-1/2'>
                    <div className='flex w-full justify-end gap-12 text-2xl text-slate-900 font-bold '>
                      
                        <NavLink to={"/home"} className={({isActive})=>(isActive? navStyles:"text-slate-900 decoration-transparent")}>Home</NavLink>
                        <NavLink to={"/chanelling"} className={({isActive})=>(isActive? navStyles:"text-slate-900 decoration-transparent ")}>Chanelling</NavLink>
                        <NavLink to={"/doctors"} className={({isActive})=>(isActive? navStyles:'text-slate-900 decoration-transparent')}>Doctors</NavLink>
                        <NavLink to={"/contact"} className={({isActive})=>(isActive? navStyles:'text-slate-900 decoration-transparent')}>Contact</NavLink>
                        <NavLink to={"/"} className={({isActive})=>(isActive? navStyles:'text-slate-900 decoration-transparent')}><LogoutIcon/></NavLink>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
  }
}
