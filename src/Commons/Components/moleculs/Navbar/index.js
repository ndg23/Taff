import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  fixed-top w-full shadow-sm navbar-light bg-white">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Sycolo
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-na flex text-center mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  A propos{' '}
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/feed'}>
                  Actu{' '}
                </Link>
              </li>
              
            </ul>
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to={'/login'} class="nav-link border ">Se connecter</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
