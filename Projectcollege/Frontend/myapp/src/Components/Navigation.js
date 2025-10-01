import React from 'react'
import {Link} from 'react-router-dom'
const Navigation = () => {
  return (
    <div class=''>
        <nav class="navbar navi navbar-dark text-white navbar-expand-lg">
            <Link class='text-decoration-none' to={'/'}>
                <img src='./Images/College/logo1.jpg' alt='' height={100} width={100} class='rounded'/>
            </Link>
            <Link class='text-decoration-none' to={'/'}>
                <a class="navbar-brand text-dark ms-2" href="# ">Mounika Paramedical College</a>
            </Link>
            <div class='navi-button'>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#ull" >
                <span class="navbar-toggler-icon"></span>
            </button>
            </div>
            <div class="collapse navbar-collapse" id="ull">
                <ul class="navbar-nav ms-auto">
                    <Link class='text-decoration-none' to={'/'}>
                       <li class="nav-item ms-1 me-5"><a class="nav-link nav1-color" href="">Home</a></li>
                    </Link>
                    <Link class='text-decoration-none ' to={'/About'}>
                       <li class="nav-item ms-1 me-5"><a class="nav-link nav1-color" href="">About</a></li>
                    </Link>
                    <Link class='text-decoration-none' to={'/Courses'}>
                       <li class="nav-item ms-1 me-5"><a class="nav-link nav1-color" href="">Courses</a></li>
                    </Link>
                    <Link class='text-decoration-none' to={'/Faculty'}>
                       <li class="nav-item ms-1 me-5"><a class="nav-link nav1-color" href="">Faculty</a></li>
                    </Link>
                    <Link class='text-decoration-none' to={'/Gallery'}>
                       <li class="nav-item ms-1 me-5"><a class="nav-link nav1-color" href="">Gallery</a></li>
                    </Link>
                    <Link class='text-decoration-none' to={'/Contact'}>
                       <li class="nav-item ms-1 me-5"><a class="nav-link nav1-color" href="">Contact</a></li>
                    </Link>

                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navigation