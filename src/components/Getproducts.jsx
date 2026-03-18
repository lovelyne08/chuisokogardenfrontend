import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Getproducts = () => {


  // initialize your hooks
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])
  const navigate=useNavigate()

  // a variable to store our images
  const img_url="http://mitchel.alwaysdata.net/static/images/"

  // a function to get/fetch our products from api
  const fetchProducts=async()=>{
    setLoading("please wait as we retrieve your products")

    try {
    

    // call your api
    const response=await axios.get("http://mitchel.alwaysdata.net/api/getproductdetails")

    setProducts(response.data)
    console.log("The response is",response)
    setLoading("")

  } catch (error) {

    setLoading("")
    setError(error.message)
  }


  }
  // end of the function where we call our useEffect
  useEffect(()=>{
    fetchProducts()
  },[])




  return (
    <div className='row'>
      <h1>Available Products</h1>

      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

{/* mapping through the poroducts */}
{products.map((product)=>(

      <div className='col-md-3 justify-content-center '>

        <div className='card shadow mt-3'>
          <img src={img_url+product.product_photo} alt="blue clay" className='product_img'/>
          
          <div className='card-body'>
            <h6 className='text-success'>{product.product_name}</h6>
            <p className='text-secondary'>{product.product_description}</p>
            <b className='text-warning'>{product.product_cost}</b>
            <br />
            <input type="button"value='Purchase Now'className='btn btn-secondary w-100'onClick={()=>navigate("/mpesa",{state:{product}})} />

          </div>
          
        </div>


      </div>
))}



    </div>
  )
}

export default Getproducts