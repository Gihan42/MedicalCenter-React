import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import bgImage from '../../assets/26357.jpg'
import Card from '../../components/Card/Card';

export default class Doctors extends Component {
  render() {
    return (
        <>
        <Header/>
        <div className='mt-16 p-36 h-screen bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${bgImage})`}}>

<div className="border-gray-400 p-10  w-5/6 border-2 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-black">
  <div className='justify-center items-center flex'>
  <h2 className="text-6xl text-green-700">Channel Your Doctor</h2>
  </div>
<div className='justify-center items-center flex'>
<ul className="nav nav-tabs"  role="tablist">
<li className="nav-item text-2xl font-bold " role="presentation">
  <button className="nav-link active  " id="pillsprofileHometab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Specialization</button>
</li>
<li className="nav-item text-2xl font-bold " role="presentation">
  <button className="nav-link " id="pillsprofiletab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Doctors</button>
</li>
<li className="nav-item text-2xl font-bold"  role="presentation">
  <button className="nav-link " id="navcontacttab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Hospital</button>
</li>

</ul>
</div>

<div className="tab-content" id="myTabContent" >
<div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" >
  <div className="container text-center">
      <div className=" flex justify-center items-center" id="premiumTab">
          <Card/> <Card/> 

  </div>
  </div>
</div>

<div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab">
  <div className="container text-center">
      <div className="flex justify-center items-center" id="generalTab" >
      <Card/> <Card/>  <Card/> <Card/> 

</div>
</div>
</div>
<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" >
  <div className="container text-center">
      <div className="flex justify-center items-center"  id="luxuryTab">
      <Card/> <Card/>  <Card/> 
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
