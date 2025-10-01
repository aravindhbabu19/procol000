import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div>
      <div class='gallery-div'>
        <div className=''>
        <h1 class='courses-h1 d-flex justify-content-center'>Gallery</h1>
        </div>
      </div> 
      <div>
        <h1 class='gallery-head d-flex justify-content-center mt-4'>Our Gallery</h1>
        <p class='gallery-para d-flex justify-content-center mt-4'>Mounika Paramedical College</p>
      </div>
      <div class='container'>
        <div class='row'>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <img src='./Images/College/img.jpg' alt='' height={270}  class='gallery-img mt-3'/>
          </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <img src='./Images/College/img2.jpg' alt='' height={270}  class='gallery-img mt-3'/>
          </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <img src='./Images/College/img3.jpg' alt='' height={270}  class='gallery-img mt-3'/>
          </div>
        </div>
        <div class='row mt-3'>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <img src='./Images/College/img4.jpg' alt='' height={270}  class='gallery-img mt-3'/>
          </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <img src='./Images/College/img5.jpg' alt='' height={270}  class='gallery-img mt-3'/>
          </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <img src='./Images/College/img6.jpg' alt='' height={270}  class='gallery-img mt-3'/>
          </div>
        </div>
        <div class='row mt-3'>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <img src='./Images/College/img7.jpg' alt='' height={270}  class='gallery-img mt-3'/>
          </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <img src='./Images/College/img8.jpg' alt='' height={270}  class='gallery-img mt-3'/>
          </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <img src='./Images/College/img9.jpg' alt='' height={270}  class='gallery-img mt-3'/>
          </div>
        </div>
        <div class='row mt-3 pb-5'>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <img src='./Images/College/img10.jpg' alt='' height={270}  class='gallery-img mt-3'/>
          </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <img src='./Images/College/img11.jpg' alt='' height={270}  class='gallery-img mt-3'/>
          </div>
          <div class='col-12 col-sm-12 col-md-4 col-lg-4'>
            <img src='./Images/College/img12.jpg' alt='' height={270}  class='gallery-img mt-3'/>
          </div>
        </div>
      </div>
      <div class='d-flex justify-content-center'>
        <Link to='https://www.instagram.com/mounika_paramedical_college?igsh=cGk2bmpveHJqbGNt'>
        <button class='gallery-button'>View Instagram</button>
        </Link>
      </div>
    </div>
  )
}

export default Gallery