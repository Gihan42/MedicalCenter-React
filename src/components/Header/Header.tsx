import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
        <div className='bg-slate-900 h-20 p-4 w-full fixed top-0 z-10 '>
        <div className=' w-full h-full	'>
            <div className='flex w-full h-full items-center'>
                <div className='w-1/2'>
                    <div className='font-Poppins font-bold text-slate-300 text-2xl	'>My feed.com</div>
                </div>
                <div className='w-1/2'>
                    <div className='flex w-full justify-end gap-12 '>
                      
                        <NavLink to={"/home"} className= 'cursor-pointer text-slate-300 pr-0'>Home</NavLink>
                        <NavLink to={"/about"} className='text-slate-300 '>About</NavLink>
                        <NavLink to={"/contact"} className='text-slate-300 '>Contact</NavLink>
                        <NavLink to={"/profile"} className='text-slate-300 '>Profile</NavLink>
                    

                    </div>

                </div>
            </div>
        </div>
        </div>
    )
  }
}
