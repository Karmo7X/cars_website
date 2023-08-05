import React, { useEffect } from 'react'
import './category.css'
import img from "../../assets/sportCar-category-img.jpg"
import $ from 'jquery';
const Category = () => {
  

const data=[
{
  title:'sports cars',
  desc: " offering an unparalleled experience of speed, performance, and elegance.",

 },
 {
  title:'sports cars',
  desc: " offering an unparalleled experience of speed, performance, and elegance.",

 },

 {
  title:'sports cars',
  desc: " offering an unparalleled experience of speed, performance, and elegance.",

 },

 {
  title:'sports cars',
  desc: " offering an unparalleled experience of speed, performance, and elegance.",

 },

 {
  title:'sports cars',
  desc: " offering an unparalleled experience of speed, performance, and elegance.",

 },

 {
  title:'sports cars',
  desc: " offering an unparalleled experience of speed, performance, and elegance.",

 },

]


  return (
    <div className='Category mt-5 mb-5'>
      <div className="container">
        <div className="category_section">
          <h2 className='fw-bold mb-5'>Categories</h2>
          <div className='d-flex gap-5 align-items-center justify-content-center m-auto w-100'> 
             <div className="row d-flex gap-3 align-items-center justify-content-center m-auto  w-100">
          {data.map(({title , desc},index)=>{
          return(
         
                 <div key={index} className="box mt-5  col-sm-12 col-md-6 col-lg-6 ">
            <img src={img} alt="" />
            <div className='Category_content'>
              <h3 className='text-center  fs-1'>{title}</h3>
            <p className='p-2 text-center'>{desc}</p>
            </div>
            
            
          </div>
             
            
            
            
            )
          })}</div>
       </div>
        </div>
      </div>
    </div>
  )
}

export default Category
