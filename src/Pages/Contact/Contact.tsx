import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import  Title  from '../../components/Title/Title'
import TextField from '@mui/material/TextField'

export default class Contact extends Component {
  render() {
    return (
      <>
        <Header/>
            <div className='pb-20 bg-gradient-to-r from-blue-500 h-screen'>
            
              <div className="grid grid-cols-2 gap-4 p-36  h-screen ">
                <div className=" p-10 space-y-5 justify-center ">
                      <h1 className='text-6xl text-slate-900'>Contact Us</h1>
                      <section className=' p-5 flex border-2 border-white h-5/6'>
                      <form>
                          <div  className='flex justify-start space-x-5'>
                          <TextField id="standard-basic" 
                          label="Standard" 
                          variant="standard" />
                          </div>
                          <div className=''></div>
                          <div className=''></div>
                      </form>
                      </section>
                  </div>
        
                  <div className=" p-4 space-y-5 ">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7936.657002903287!2d80.53991679471252!3d5.949391826140512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae138d69cff158b%3A0x6b5f7c4109b7c445!2sDistrict%20General%20Hospital%20-%20Matara!5e0!3m2!1sen!2slk!4v1683183883087!5m2!1sen!2slk" width="770" height="650" className='rounded-2xl shadow-2xl shadow-black'   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  </div>
            </div>
            </div>

      </>
    )
  }
}
 