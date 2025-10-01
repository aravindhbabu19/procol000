import React from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
      <div class='courses-div'>
        <div className=''>
        <h1 class='courses-h1 d-flex justify-content-center'>Courses</h1>
        </div>
      </div>
      <div class='courses-div1'>
      <div>
        <h1 class='about-h1 d-flex justify-content-center mt-5'>Current Courses</h1>
      </div>
      <div class='row courses-row mt-5'>
        <div class='col-12 col-sm-12 col-md-4 col-lg-6 d-flex justify-content-center'>
          <img src='/Images/College/current.jpg' alt=''  class='courses-img'/>
        </div>
        <div class='col-12 col-sm-12 col-md-4 col-lg-6 mt-3'>
          <p>Diploma in Ophthalmic Assistant (DOA)</p>
          <p>A 2-year recognized diploma program designed to train students in eye care, vision testing, prescription of glasses, basic ophthalmic procedures, and assisting in surgeries.</p>
          <p>The course combines classroom learning, demo lab practice, and hospital-based clinical training at Renuka Multi-Speciality Hospital (NABH Accredited).</p>
        </div>
      </div>
      <div>
        <h1 class='about-h1 d-flex justify-content-center mt-5'>Examination Pattern (2-Year Diploma Course)</h1>
      </div>
      <div class='row courses-row mt-5'>
        <div class='col-12 col-sm-12 col-md-4 col-lg-6 d-flex justify-content-center'>
          <img src='/Images/College/pattern.jpg' alt=''  class='courses-img'/>
        </div>
        <div class='col-12 col-sm-12 col-md-4 col-lg-6 mt-3'>
          <p class=''>At Mounika Paramedical College, the Diploma in Ophthalmic Assistant (DOA) follows a structured examination system that ensures students are well-prepared both academically and practically.</p>
          <h4 class='about-p12'>1. Exam Schedule</h4>
          <p class=''>Examination dates and application deadlines are announced by the Government.

          Examination Centre: Kurnool Medical College.
          </p>
          <h4 class='about-p12'>2. Theory Examinations</h4>
          <p>Students will appear for three written papers: Paper 1, Paper 2, and Paper 3.

          All theory exams are conducted at Kurnool Medical College.
          </p>
          <h4 class='about-p12'>3. Practical Examinations</h4>
          <p>Practical exams are conducted shortly after the theory exams.

          Venue: Regional Eye Hospital, Government General Hospital, Kurnool.

          Students must:
 
          Maintain and submit a record book throughout the course (guided by faculty).

          Demonstrate all practical skills learned during training.
          </p>
          <h4 class='about-p12'>4. Preparation & Practice</h4>
          <p>The final 3 months of the course are dedicated to:

          Complete syllabus revision

          Intensive exam preparation

          Pre-final assessments for confidence building
          </p>
          <h4 class='about-p12'>5. Eligibility & Attendance</h4>
          <p>Students must secure a minimum of 75% attendance to be eligible for examinations.

          Internal Assessment:

          Carries 20% weightage

          Marks are awarded by the college based on overall performance and participation during the course.</p>
          <Link to='https://youtube.com/@mounikaparamedicalcollege?si=sDU2iq9ons-Zu-gH'>
          <button class='courses-button'>View Youtube</button>
          </Link>
        </div>
        
      </div>
      <div>
        <h1 class='about-h1 d-flex justify-content-center mt-5'>Future Course Plans</h1>
      </div>
      <div class='row courses-row mt-5'>
        <div class='col-12 col-sm-12 col-md-4 col-lg-6 d-flex justify-content-center'>
          <img src='/Images/College/future.jpg' alt=''  class='courses-img'/>
        </div>
        <div class='col-12 col-sm-12 col-md-4 col-lg-6 mt-3'>
          <p class=''>To expand opportunities in eye care and allied health sciences, Mounika Paramedical College is planning to introduce:</p>
          <p class=''>B.Sc. Optometry – Undergraduate program for advanced optometry training.</p>
          <p class=''>M.Sc. Optometry – Postgraduate program for specialization and research in vision sciences.</p>
          <p class=''>Additional paramedical diploma and certificate courses in allied health areas (coming soon).</p>
        </div>
      </div>
       <div>
        <h1 class='about-h1 d-flex justify-content-center mt-5'>Career Opportunities</h1>
      </div>
      <div class='row courses-row mt-5'>
        <div class='col-12 col-sm-12 col-md-4 col-lg-6 d-flex justify-content-center'>
          <img src='/Images/College/carreer.jpg' alt='' height={235} width={235}  class='courses-img1'/>
        </div>
        <div class='col-12 col-sm-12 col-md-4 col-lg-6 mt-3'>
          <p class=''>Students graduating from Mounika Paramedical College will have diverse career pathways, including:</p>
          <p>
          Work in Hospitals & Clinics – as OPD/OT Assistants, Technicians, or Hospital Managers.
          Optical & Fashion Industry – sales, consulting, or running your own optical store.
          </p>
          <p>Community Health & NGOs – outreach, screening camps, and awareness programs.
          Entrepreneurship – start optical shops, eye care centers, or mobile vision services.
          </p>
          <p>Industry Roles – lens/frame manufacturing, quality control, and wholesale distribution.</p>
        </div>
      </div>
       <div>
        <h1 class='about-h1 d-flex justify-content-center mt-5'>Associated With</h1>
      </div>
      <div class='row courses-row mt-5'>
        <div class='col-12 col-sm-12 col-md-4 col-lg-6 d-flex justify-content-center'>
          <img src='/Images/College/logo.jpg' alt='' height={200} width={200}  class='courses-img1'/>
        </div>
        <div class='col-12 col-sm-12 col-md-4 col-lg-6 mt-3'>
         <p>Renuka Multi-Speciality Hospital (Kurnool) – NABH Accredited, offering real-world hospital training in ophthalmology, orthopedics, and emergency care.</p>
         <p>Expert Faculty & Mentors – including Dr. B. Rajeswari Devi (Principal) and<br></br> Dr. J. Raghunatha Reddy (Correspondent).</p>
         <p>Community Outreach Programs – building leadership, teamwork, and patient-care skills.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Courses