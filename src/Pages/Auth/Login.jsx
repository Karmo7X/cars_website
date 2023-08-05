import React, { useContext, useState } from 'react'
import './auth.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './Authcontext'
const Login = () => {

  const [inputs ,setInput]=useState({
    username:"",
    password:"",
  })


  const handleChange=(e)=>{
    setInput(prev =>({...prev ,[e.target.name]:e.target.value}))
  }



  const navigate=useNavigate()
  const {login}=useContext(AuthContext)
  

  const handelsubmit=async(e)=>
  {
    
    e.preventDefault()
    
    try{
      await login (inputs)
      navigate('/')
    }
    catch(error)
    {
      console.log(error.response.data)
    }
  }




  return (
    <div className='Login'>
        <div className="login_section">
        <div className="container"> 
            <form action="" className='form d-flex flex-column justifiy-content-center align-items-center m-auto  '>
            <h4 className='fs-2 fw-bold text-center '>Log IN</h4>
                <div className='input d-flex flex-column w-100 mt-4'>
                    <label htmlFor="">User Name</label>
                    <input type="text" name='username' required  onChange={handleChange}/>
                </div>
                <div className='input d-flex flex-column w-100 mt-4'>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' required onChange={handleChange}/>
                </div>


                <div className="action mt-5">
                <div className='d-flex gap-2'>
                  <p className='text-white'>Don't have an account</p>
                  <Link to="/Register">Register</Link>
                </div>
                <button className='btn'onClick={handelsubmit}>Log IN</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
