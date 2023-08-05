import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <div className='Nav-section'>
        
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
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
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Contact">
                    Contact US
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MotoCycle
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Racing Bikes
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Street Bikes
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Cruser Bikes
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cars
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        SUV
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Cidan
                      </a>
                    </li>
                  </ul>
                </li>
                
              </ul>
              <form class="d-flex nav-btn">
                <Link class="btn btn-outline-success"  to="/Login">
                  Log in
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header
