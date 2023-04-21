import React from 'react'
import back from '../images/back.jpg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Sign() {

    const navigate=useNavigate();

    const [data, setData] = useState({
        firstName: "",
        lastName:"",
        email: "",
        password: "",
        mobile:""
      });

      
const handledata=()=>{
    alert("Registeration complete sucessfully")
    navigate("/home")
  }
   
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
  
  <>
   <div>
    <img  src={back} alt="background images"/>    
   </div>
   <div className='signup' >
        <h1>REGISTER FORM</h1>
        <form onSubmit={handledata}>
          <label htmlFor="name">FirstName : </label>
          <input
            required
            type="text"
            id="name"
            value={data.firstName}
            name="firstName"
            onChange={handleChange}
            placeholder="Enter a firstName..."

          />
           <br></br>
           <label htmlFor="lname">LastName : </label>
          <input
            required
            type="text"
            id="lname"
            value={data.lastName}
            name="lastName"
            onChange={handleChange}
            placeholder="Enter a lastName..."
          />
          <br></br>
          <label htmlFor="email">Email : </label>
          <input
            required
            type="email"
            id="email"
            value={data.email}
            name="email"
            onChange={handleChange}
            placeholder="Enter a email here!..."

          />
          <br></br>
          <label htmlFor="password">password : </label>
          <input
            required
            type="password"
            id="password"
            value={data.password}
            name="password"
            onChange={handleChange}
            placeholder="Enter a password?...."
          />
          <br></br>
          <label htmlFor="Mobile">Mobile : </label>
          <input
            required
            type="number"
            id="Mobile"
            value={data.mobile}
            name="mobile"
            onChange={handleChange}
            placeholder="Enter a mobile number"
          />
           <br></br>
          <button type="submit" className="submit" >
          Submit
        </button>
        </form>

       
      
      </div>
    
  






  
  </>
   
  )
}
