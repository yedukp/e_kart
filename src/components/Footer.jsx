import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column bg-primary text-light' style={{width:"100%",height:"300px"}}>
        <div className='footer d-flex align-items-center justify-content-evenly w-100'>
            <div className="website mt-4" style={{width:"400px"}} >
                <h4 className='ecartnav'><i class="mt-3 fa-solid fa-cart-shopping"></i> 
            {' '}
            E-CART</h4>
            <h6 className='text-light'>Ekart will provide businesses access to its extensive network of first-mile, mid-mile and last-mile transportation fleets.Ekart, a subsidiary of Walmart-owned Flipkart, has launched B2B air and surface supply chain transportation solutions for businesses</h6>
            </div>

            <div className="link d-flex flex-column">
                <h4 className='ecartnav' style={{overflowY:"hidden"}}>Links</h4>
                <Link to={'/'} style={{textDecoration:"none", color:"white"}}>Home Page</Link>
                <Link to={'/cart'} style={{textDecoration:"none", color:"white"}}>Cart</Link>
                <Link to={'/wishlist'} style={{textDecoration:"none", color:"white"}}>WishList</Link>
            </div>

            <div className="guides d-flex flex-column">
                <h4 className='ecartnav'>Guides</h4>
                <Link to={'/'} style={{textDecoration:"none", color:"white"}}>React</Link>
                <Link to={'/home'} style={{textDecoration:"none", color:"white"}}>Bootstrap</Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:"none", color:"white"}}>Bootswatch</Link>
            </div>

            <div className="contact mt-3">
                <h4 className='ecartnav mt-3'>Contact Us</h4>
                <div className='d-flex mb-3'>
                    <input type="text" className='form-control' placeholder='Enter your EmailID' />
                    <button className='btn btn-outline-success text-white ms-2 w-50'>Subscribe </button>
                </div>
                <div className='d-flex justify-content-evenly '>
                    <Link to={'https://www.instagram.com/_ye.du_/'}  style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-instagram fa-2x  me-2"></i></Link>
                    <Link to={'https://www.instagram.com/_ye.du_/'} style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-facebook-f fa-2x me-2"></i></Link>
                    <Link to={'https://www.instagram.com/_ye.du_/'} style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-twitter fa-2x  me-2"></i></Link>
                    <Link to={'https://www.instagram.com/_ye.du_/'} style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-linkedin fa-2x  me-2"></i></Link>
                </div>
            </div>
        </div>
        <p className='mt-5'>Copyright © 2023 Media Player. Built with React</p>
    </div>
  )

  }
export default Footer