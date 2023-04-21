import React from 'react'
import { value } from './Home';
import { useNavigate } from 'react-router-dom';
export default function Payment() {
  const navigate=useNavigate()
  const handle=()=>{
    alert(`Your payment was sucessfully completed rupees ${value}.booking confirmed`);
    navigate('/home')
  }
  return (
    <>
    <div className='payment'>
      <h1> Payment page</h1>
      <form> 
      <br/>
   <label htmlFor='checkIn'>checkIn : </label> <input type='date' id='checkIn' />  : <label htmlFor='checkOut'>checkOut : </label><input type='date'id='checkOut' /> <br/>
   <br/><br/>
   <input type='radio' value="one" name='person'/>one person <br/>
   <input type='radio' value="two"  name='person'/>two person <br/> <br/><br/>
   <i className="fa-solid fa-indian-rupee-sign"></i>{value}<button className="now" onClick={handle}>Pay now</button>


      </form>
    </div>
    </>
  )
}
