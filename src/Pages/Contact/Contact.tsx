import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import  Title  from '../../components/Title/Title'
import TextField from '@mui/material/TextField';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddLocationIcon from '@mui/icons-material/AddLocation';
export default class Contact extends Component {
  render() {
    return (
      <>
        <Header/>
            <div className='pb-20 bg-gradient-to-r from-blue-500 h-screen'>
            
              <div className="grid grid-cols-2 gap-4 p-36  h-screen ">
                <div className="  space-y-5 justify-center ">
                      <h1 className='text-6xl text-slate-900'>Contact Us</h1>
                      <section className=' p-5 flex rounded-2xl h-auto shadow-2xl shadow-black bg-white border-2 border-white '>
                      <form className='w-full flex flex-col space-y-3 mt-3'>
                          <div  className='flex justify-start space-x-5 text-2xl '>
                            <AddIcCallIcon className='text-slate-800' style={{fontSize: "48px"}}/>
                              <h2 className='text-3xl font-bold text-cyan-900'>Phone</h2>
                          </div>
                          <h2 className='text-2xl font-bold text-emerald-900 pl-16 relative bottom-8 space-x-5'>+971-2345678 , +971-2345679 </h2>
                          
                          <div  className='flex justify-start space-x-5 text-2xl '>
                            <AddLocationIcon className='text-slate-800 ' style={{fontSize: "48px"}}/>
                              <h2 className='text-3xl font-bold text-cyan-900'>Address</h2>
                          </div>
                          <h2 className='text-2xl font-bold text-emerald-900 pl-16 relative bottom-8 space-x-5'>No 456,GalleRoad,Matara </h2>
                          
                          <div  className='flex justify-start space-x-5 text-2xl '>
                            <AddLocationIcon className='text-slate-800 ' style={{fontSize: "48px"}}/>
                              <h2 className='text-3xl font-bold text-cyan-900'>Email</h2>
                          </div>
                          <h2 className='text-2xl font-bold text-emerald-900 pl-16 relative bottom-8 space-x-5'>araliyamcenter@gmail.com</h2>
                           
                          <TextField
                            label="Type Message Here"
                            type="text"
                            variant="outlined"
                            name="description"
                            placeholder="send message"
                            fullWidth={true}
                            multiline
                            minRows={5}
                            maxRows={Infinity}
                            required
                          />
                           <button className="py-2 bg-slate-800 text-white rounded">
                            <h6>send message</h6>
                          </button>
                      
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
 