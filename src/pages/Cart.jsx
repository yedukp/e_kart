import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';


function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  /* console.log(cartArray); */

  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()

  //function to find the sum of given array
  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  console.log(total);

  useEffect(()=>{
    getTotal()
  },[cartArray])

const handlecart = ()=>{
  alert('Thank you. Your Order Placed Successfully')
  dispatch(emptyCart())
  navigate('/')
}

  return (
    <div style={{marginTop:"100px"}}>

       {cartArray?.length>0?
        <div className='row w-100'>
          
            <div className='col-lg-6 m-5'>
            <table className='table shadow border'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              
                <tbody>
                {cartArray?.map((item,index)=>(<tr>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td><img style={{width:"100px", height:"100px"}} src={item.thumbnail} alt="no image" /></td>
                  <td>$ {item.price}</td>
                  <td><Button onClick={()=>dispatch(removeFromCart(item.id))} style={{width:"70px", height:"55px"}} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button></td>
                </tr>))
                  }
              </tbody>
  
            </table>
          </div>

                   <div className='col-lg-4 d-flex justify-content-center align-items-center flex-column'>
                    <div className='border shadow p-4'>
                      <h3 className='text-success'>Cart Summary</h3>
                      <h4>Total number of Products : <span className='fw-bolder fs-2 text-primary'>{cartArray.length}</span></h4>
                      <h4>Total Price : <span className='fw-bolder'>$</span> <span className='fw-bolder text-warning fs-2'>$ {total}</span></h4>
                      <button onClick={handlecart} className='btn btn-success border border-3 rounded w-100'>Checkout</button>
                    </div>
                  </div>

        </div>:<div style={{height:"90vh"}} className='d-flex align-items-center justify-content-center flex-column'>
              <img style={{height:"50vh"}} src="https://o.remove.bg/downloads/3daf70a9-8f5a-404e-a5fb-6bf775e8fa0a/shopping-cart-sign-shopping-cart-empty-ico-11563228005rnccz3lvl0-removebg-preview-removebg-preview.png" alt="" />
              <h3>Your cart is empty</h3>
              <Link className='btn btn-success' to={'/'}><span style={{color:"green"}}><i class="me-2 fa-solid fa-arrow-left"></i>Back to home</span></Link>
            </div>
        }
      

    </div>
  )
}

export default Cart