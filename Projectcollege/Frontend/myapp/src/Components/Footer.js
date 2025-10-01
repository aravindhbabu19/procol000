import React from 'react'
import { FaGoogle, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div class='footer-footer text-dark p-4 mt-4'>
        <div class='row footer-row'>
          {/* <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <h4 class='footer-h4'>LAKSHMI FABRICATION</h4>
            <hr class='footer-divider' />
            <p class=''></p>
            <h4 class='footer-h4'>OUR SOCIAL MEDIA</h4> <br></br>
            
            <Link class='footer-l text-decoration-none text-dark' to='https://www.facebook.com/people/Lakshmi-Fabricator/pfbid02K3t3WSxQbSydHjH1LY2UCnoZFj8VdffvqKZK8ndxTEZrpp35XH2B9hqfZoUjScDl/?rdid=zDlOPT62PqIqjKpr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AypWmgWFT%2F'>Facebook</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-dark' to='https://share.google/Tzn3BUEn5dk2Rdaus'>Google</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-dark' to='https://www.instagram.com/mounika_paramedical_college?igsh=cGk2bmpveHJqbGNt'>Instagram</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-dark' to='https://x.com/?lang=en-in'>X</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-dark' to='https://youtube.com/@mounikaparamedicalcollege?si=sDU2iq9ons-Zu-gH'>Youtube</Link><br></br><br></br>
            <Link class='footer-l text-decoration-none text-dark' to='https://www.threads.com/'>Threads</Link><br></br><br></br>
          </div> */}
          <div class='col-12 col-sm-12 col-md-4 col-lg-4 '>
            <Link to='/' class='text-decoration-none'>
            <img src='./Images/College/logo1.jpg' alt='' height={50} width={50} class='footer-img mt-4 ms-3'/>
            </Link>
            <p class='w-100 footer-para mt-3'>Mounika Paramedical College, Kurnool, offers diploma and certificate courses in ophthalmic assistant and allied health sciences. We provide students with modern classrooms, 3D demo models, digital teaching boards, and a well-equipped library. Through hospital-based training at Renuka Multi-Speciality Hospital, students learn directly from patient care, optical practice, and surgical assistance. We are committed to building the next generation of healthcare professionals who combine skills, compassion, and innovation.</p>
            <Link to='https://www.instagram.com/mounika_paramedical_college?igsh=cGk2bmpveHJqbGNt' >
            <FaInstagram class='text-decoration-none text-white '/>
            </Link>
            <Link to='https://youtube.com/@mounikaparamedicalcollege?si=sDU2iq9ons-Zu-gH'>
            <FaYoutube class='ms-2 text-white'/>
            </Link>
            <Link to='https://wa.me/qr/6KKP24KZIQEKE1'>
            <FaWhatsapp class='ms-2 text-white'/>
            </Link>
            <Link to='https://share.google/Tzn3BUEn5dk2Rdaus'>
            <FaGoogle class='ms-2 text-white'/>
            </Link>
          </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4 footer-col mt-3'>
            <h4 class='footer-h4 '>Mounika Paramedical College</h4>
            <hr class='footer-hr' />
            <p class='footer-p '>100 ft road, Nandikotkur Rd,<br></br> opp. Omega hospital,<br></br> Kurnool, Andhra Pradesh 518004</p>
            <h4 class=''>Mob :</h4>
            <p class='footer-p'>+91 9441881799, 8317680122</p>
            <h4 class=''>Email :</h4>
            <p class='footer-p '>mounikaparamedicalcollege@gmail.com</p>
            <p class='footer-p '>info@mounikaparamedicalcollege.org</p>
          </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4 footer-col mt-3'>
            <h4 class='footer-h4'>Renuka Multi-Speciality Hospital</h4>
            <hr class='footer-hr1' />
            <p class='footer-p'>Renuka multi speciality hospital,<br></br> 1st line, N R Peta,<br></br> Kurnool, Andhra Pradesh 518001</p>
            <h4 class=''>Phone :</h4>
            <p class='footer-p'>08518223800 , 08518223801</p>
          </div>
          
        </div>
        <div class='row footer-row'>
          <div class='col footer-2  mt-3'>
          <p>Copyrights © 2025 Mounika Paramedical College. All Rights Reserved</p>
          </div>
        </div>
    </div>
  )
}

export default Footer