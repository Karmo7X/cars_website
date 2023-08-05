import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Category from '../Category/Category'
const Home = () => {
  return (
    <>
     <div className='Home'>
     <div className="container-fluid">
        <div className="landing-section">
         <h2 className='fw-bold '>RID OR DIE</h2>
         <p >Website help you to choose your Moto or Car</p>
         <div className="landing-btn">
         <Link className="btn btn-outline-success"  to="">
                  Show More
          </Link>
         </div>
        </div>
     </div>
    </div>

    <div className="category">
      <Category/>
    </div>
    </>
   
  )
}

export default Home
