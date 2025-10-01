import React from 'react'
import { Link } from 'react-router-dom'

const Faculty = () => {
  return (
    <div>
        <div class='faculty-div'>
        <div className=''>
        <h1 class='courses-h2 d-flex justify-content-center'>Faculty</h1>
        </div>
        </div>
        <div>
          <div class='faculty-h3'>
          <h1 class='faculty-h1 d-flex justify-content-center mt-5'>Our Faculty</h1>
          </div>
          <p class='faculty-h mt-5 ms-2'>At Mounika Paramedical College, we strongly believe that quality education begins with experienced and passionate mentors. Our faculty members are highly qualified professionals who bring years of academic expertise and clinical experience into the classroom. By blending theoretical knowledge with practical training, they ensure that every student develops both professional competence and confidence. The teaching approach at our college is designed to give individual attention to each student, helping them learn at their own pace while building strong foundations in paramedical sciences. Through hospital tie-ups and real-time clinical exposure, students gain hands-on experience that prepares them to face real healthcare challenges. Along with technical expertise, our faculty emphasizes skill development, soft skills training, and communication, enabling students to excel not only as healthcare professionals but also as compassionate caregivers. Regular mentorship, career guidance, and counseling sessions further equip students to explore opportunities in hospitals, diagnostic centers, and healthcare institutions, ensuring they are fully job-ready and future-focused. Our dedicated faculty members go beyond teaching they mentor, inspire, and guide students to become not only skilled paramedical professionals but also compassionate contributors to society.</p>
        </div>
        <div class='container'>
        <div class="testimonial-wrapper1 d-flex justify-content-center">
         <div class="testimonial-track1">
          <div class='row mt-5'>
            <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <div class="testimonial3">
            <img src="/Images/College/founder.jpg" alt="" class='patient-img1' />
            <h4 class='faculty-found d-flex justify-content-center mt-4'>Dr. J. Raghunatha Reddy </h4>
            <h4 class='faculty-found1 d-flex justify-content-center mt-2'>Correspondent</h4>
            <p class='faculty-found2 d-flex justify-content-center'>A dedicated healthcare leader and founder of Renuka Multi-Specialty Hospital, Dr. Raghunatha Reddy brings his vast clinical and administrative experience to Mounika Paramedical College. He plays a key role in guiding students with real-world hospital exposure, leadership values, and community service orientation.</p>
            </div>
            </div>
            <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <div class="testimonial3">
            <img src="/Images/College/co-founder.jpg" alt="" class='patient-img1' />
            <h4 class='faculty-found d-flex justify-content-center mt-4'>Dr. B. Rajeswari Devi </h4>
            <h4 class='faculty-found1 d-flex justify-content-center mt-2'>Principal</h4>
            <p class='faculty-found2 d-flex justify-content-center'>A committed ophthalmologist and academician, Dr. Rajeswari Devi leads the institution with a focus on academic excellence and compassionate healthcare training. She actively mentors students, ensuring they gain the right balance of theory, practical knowledge, and patient-centered care skills.</p>
            </div>
            </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <div class="testimonial3">
            <img src="/Images/College/faculty.jpg" alt="" class='patient-img1' />
            <h4 class='faculty-found d-flex justify-content-center mt-4'>Dr. Radika </h4>
            <h4 class='faculty-found1 d-flex justify-content-center mt-2'>Visiting Professor</h4>
            <p class='faculty-found2 d-flex justify-content-center'>An inspiring mentor in medical sciences, Dr. Radika enriches the learning experience through clinical training, research-based insights, and student-focused workshops. Her sessions help learners build confidence, sharpen practical skills, and stay aligned with modern healthcare practices.</p>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        <Link to={'/Contact'} class='text-decoration-none d-flex justify-content-center text-dark'>
          <button class='about-button'>Start a Conversation</button>
        </Link>
    </div>
  )
}

export default Faculty