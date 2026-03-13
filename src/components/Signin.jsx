import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Signin = () => {

  // initialize the hooks
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  // initialize other hooks like loading,sucess and error
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  const navigate=useNavigate();

  // function to send out data to the server
  const submit=async(e)=>{

    e.preventDefault()

    setLoading("please wait.....")

    try {

      const data=new FormData()

      data.append('email',email)
      data.append("password",password)

      // calling the api
      const response=await axios.post("http://mitchel.alwaysdata.net/api/signin",data)

      setLoading("")
      // check if the response has user item

      if (response.data.user){
        // if user is Found,Store user details in localstorage
        localStorage.setItem("user",JSON.stringify(response.data.user));
      
  setSuccess(response.data.message)

  // Redirect to /getproducts components

  setTimeout(()=>{

    navigate("/");

   },2000)
  }
  else{
    // User Not Found, show Error message
    setError(response.data.message)
  }

      // reset your form
      setEmail("")
      setPassword("")

      
    } catch (error) {
      setLoading("")
      setError(error.data.message)
      
    }


  }

    return (
    <div className='row justify-content-center mt-3'>

      <div className='card shadow col-md-6'>
        <h1>Sign in</h1>

        <form action=""onSubmit={submit}>
          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

        
        <input type="email" placeholder='Email' className='form-control'required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <br />

        <input type="password" placeholder='password' className='form-control' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <br />
        <input type="submit" value="Sign in" className='bg-primary w-100 form-control text-white'/>

        <p>Don't have an account?<Link to="/Signup">signup</Link></p>



        </form>
      </div>
        
    </div>
  )
}

export default Signin