import React, { useState } from 'react'
import axios from 'axios';
import { FaGoogle, FaInstagram, FaLocationDot, FaWhatsapp, FaYoutube } from "react-icons/fa6"; 
import { FaMailBulk } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Contact = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [select,setSelect]=useState("")
    const [message,setMessage]=useState("")

     const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
    // var url="https://lakshmifabrication.com/formdata1.php";
    var url="http://localhost/formdata1.php";
    const fdata=new FormData();
    fdata.append('name',name);
    fdata.append('phone',phone);
    fdata.append('email',email);
    fdata.append('select',select);
    fdata.append('message',message);
    const response = await axios.post(url, fdata);
    console.log(response.data);
    }
    catch(error){
      console.log(error)
    }
    setName('')
    setPhone('')
    setEmail('')
    setSelect('')
    setMessage('')
  }


  return (
    <div>
      
        <div class='contact-div'>
        <div className=''>
        <h1 class='courses-h d-flex justify-content-center'>Contact Us</h1>
        </div>
        </div>
        <div class="testimonial-wrapper d-flex justify-content-center mt-5">
         <div class="testimonial-track1">
          <div class='row'>
            <div class='col-12 col-sm-12 col-md-12 col-lg-4'>
            <div class="testimonial1">
            <Link to='https://share.google/Tzn3BUEn5dk2Rdaus'>
            <FaLocationDot class='contact-icon text-dark'/>
            </Link>
            <h4 class='contact-h1'>Location</h4>
            <p class='contact-h1 d-flex justify-content-center'>100 ft road, Nandikotkur Rd,<br></br>
            opp. Omega hospital,<br></br>
            Kurnool, Andhra Pradesh 518004</p>
            
            </div>
            </div>
            <div class='col-12 col-sm-12 col-md-12 col-lg-4'>
            <div class="testimonial1">
            <Link to='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new'>
            <FaMailBulk class='contact-icon text-dark'/>
            </Link>
            <h4 class='contact-h1'>Email&Phone</h4>
            <p class='contact-h1 d-flex justify-content-center'>mounikaparamedicalcollege@gmail.com
            info@mounikaparamedicalcollege.org</p>
            <h4>+91 9441881799, 8317680122</h4>
            
            </div>
            </div>
            <div class='col-12 col-sm-12 col-md-12 col-lg-4'>
            <div class="testimonial1">
            
            <IoShareSocialOutline class='contact-icon'/>
            <h4 class='contact-h1 mt-3'>Follow on Social Media</h4>
            <div class='mt-4'>
            <p class='para1 d-flex justify-content-center'><Link to='https://www.instagram.com/mounika_paramedical_college?igsh=cGk2bmpveHJqbGNt' >
            <FaInstagram class='contact-icon1 text-decoration-none text-dark'/>
            </Link>
            <Link to='https://youtube.com/@mounikaparamedicalcollege?si=sDU2iq9ons-Zu-gH'>
            <FaYoutube class='contact-icon1 ms-2 text-dark'/>
            </Link>
            <Link to='https://wa.me/qr/6KKP24KZIQEKE1'>
            <FaWhatsapp class='contact-icon1 ms-2 text-dark'/>
            </Link>
            <Link to='https://share.google/Tzn3BUEn5dk2Rdaus'>
            <FaGoogle class='contact-icon1 ms-2 text-dark'/>
            </Link></p>
            </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        <div class='container'>
        <div class='row mt-5'>
          <div class='col-12 col-sm-12 col-md-6 col-lg-6'>
            <h4 class='contact-h12'>Contact Us</h4>
            <h1 class='contact-h1'>Get In Touch For<br></br> More Information</h1>
            <p class='contact-h1'>Mounika Paramedical College, Kurnool, offers diploma and certificate courses<br></br> in ophthalmic assistant and allied health sciences.We are committed to<br></br> building the next generation of healthcare professionals<br></br> who combine skills, compassion, and innovation.</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.3097721572694!2d78.0594718738061!3d15.787611884851808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5dd982c8156cf%3A0x9dcb5c0105533e9c!2sMounika%20paramedical%20College!5e0!3m2!1sen!2sin!4v1758009847639!5m2!1sen!2sin" class='contact-map' title='add' width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        <div class='col-12 col-sm-12 col-md-6 col-lg-6 my-5 d-flex justify-content-center'>
           <form class='contact-form ' onSubmit={handleSubmit}>
                    <label class='form-label'>Full Name</label>
                    <input type="text" required='true' name='nam' class='form-control' placeholder='Your Full Name' size="50" onChange={(e)=>setName(e.target.value)}/><br></br>
                    <label class='form-label'>Email</label> 
                    <input type="text" required='true' name='ema' class='form-control' placeholder='Your Email' size="50" onChange={(e)=>setEmail(e.target.value)} /><br></br>
                    <label class='form-label'>Contact Number</label>
                    <input type="text" required='true' name='cont' class='form-control' placeholder='Your Contact Number' size="50" onChange={(e)=>setPhone(e.target.value)}/><br></br>
                    <label class='form-label'>How did you hear abous us?</label>
                    <select class='w-100 form-label1' name='sel' onChange={(e)=>setSelect(e.target.value)}>
                        <option value=''>Select</option>
                        <option value=''>Instagram Ad</option>
                        <option value=''>Facebook Ad</option>
                        <option value=''>Google</option>
                        <option value=''>Through my Friends</option>
                        <option value=''>Youtube</option>
                    </select><br></br><br></br>
                    
                    <label class='form-label'>Message</label>
                    <textarea rows='5' required='true' cols='50' name='mess' class='form-control' onChange={(e)=>setMessage(e.target.value)}></textarea>
                    <button type='submit'  class='btn btn-warning mt-3'>Submit</button>
           </form>
        </div>
          
        </div>
        </div>
    </div>
  )
}

export default Contact