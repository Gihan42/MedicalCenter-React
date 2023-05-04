import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import bgImage from '../../assets/26357.jpg'

export default class Channeling extends Component {
  render() {
    return (
      <>
      <Header/>
      <div className='mt-16 p-36 h-screen bg-cover' style={{ backgroundImage: `url(${bgImage})`}}>

      <div className="border-2 border-black backdrop-blur-3xl ">
        <div className='justify-center items-center flex'>
        <h2 className="text-6xl">Channel Your Doctor</h2>
        </div>
    <div className='justify-center items-center flex'>
    <ul className="nav nav-tabs"  role="tablist">
    <li className="nav-item text-2xl font-bold text-green-700" role="presentation">
        <button className="nav-link active  " id="pillsprofileHometab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Specialization</button>
    </li>
    <li className="nav-item text-2xl font-bold text-green-700" role="presentation">
        <button className="nav-link " id="pillsprofiletab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Doctors</button>
    </li>
    <li className="nav-item text-2xl font-bold text-green-700"  role="presentation">
        <button className="nav-link " id="navcontacttab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Hospital</button>
    </li>

</ul>
    </div>
   
<div className="tab-content" id="myTabContent" >
    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" >
        <div className="container text-center">
            <div className="row" id="premiumTab">


        </div>
        </div>
    </div>

    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab">
        <div className="container text-center">
            <div className="row" id="generalTab" >

    </div>
    </div>
    </div>
    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" >
        <div className="container text-center">
            <div className="row"  id="luxuryTab">

        </div>

    </div>
    </div>
</div>
</div>
      </div>

      </>
    )
  }
}
