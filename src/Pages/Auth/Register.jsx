import React, { useState } from 'react'
import './auth.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Register = () => {

  const [input ,setInput] = useState({
    username:'',
    email:'',
    password:'',
  })


  
  const handleChange=(e)=>
  {
    setInput(prev=>({...prev , [e.target.name]:[e.target.value]}))

 
  }



  
  const navigate =useNavigate()

  const handelsubmit=async(e)=>
  {
    e.preventDefault();
    try{
      const res= await axios.post('http://localhost:5000/api/v1/auth/register',input)
    setInput(res.data)
    navigate('/Login')
 
    }
    catch (err){
      console.log(err)
    }
  }


  return (
    <div className='Register'>
    <div className="Register_section ">
    <div className="container"> 
        <form action="" className='form d-flex flex-column justifiy-content-center align-items-center m-auto  '>
        <h4 className='fs-2 fw-bold text-center '>Register</h4>
            <div className='input d-flex flex-column w-100 mt-4'>
                <label htmlFor="">User Name</label>
                <input type="text" name='username'  onChange={handleChange}/>
            </div>
            <div className='input d-flex flex-column w-100 mt-4'>
                <label htmlFor="">Email</label>
                <input type="email" name='email'  onChange={handleChange}/>
            </div>
            <div className='input d-flex flex-column w-100 mt-4'>
                <label htmlFor="">Password</label>
                <input type="password" name='password' onChange={handleChange}/>
            </div>


            <div className="action mt-5">
            <div className='d-flex gap-2'>
              <p className='text-white'>I have an account already</p>
              <Link to="/Login">Login</Link>
            </div>
            <button className='btn ' onClick={handelsubmit}>Register</button>
            </div>
        </form>
    </div>
  </div>
</div>
  )
}

export default Register
