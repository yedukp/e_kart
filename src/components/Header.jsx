import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../components/Header.css'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  //to access state useSelector hook is used
  const wishlist= useSelector((state)=>state.wishlistReducer) //here the state represent store
  /* console.log(wishlist); */
  const cart = useSelector((state)=>state.cartReducer)
  /* console.log(cart); */
  return (
    <div>
      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100 " style={{zIndex:"1"}} >
    <Container>
      <Navbar.Brand href="#home" style={{color:"white",}}><Link style={{textDecoration:"none", color:"white"}} to={'/'}><i class="fa-solid fa-cart-shopping fa-bounce"></i><span className='ecartnav' style={{fontSize:"30px"}}>E-CART</span></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">

          <Nav.Link className='btn btn-outline-info border rounded me-3'><Link style={{textDecoration:"none", color:"white"}} to={'/wishlist'}><i style={{color:"red"}} class="fa-solid fa-heart"></i> <span style={{fontSize:"20px"}}>WishList</span><Badge className='p-2 ms-2' bg="danger">{wishlist.length}</Badge></Link></Nav.Link>

          <Nav.Link  className='btn btn-outline-info border rounded '><Link style={{textDecoration:"none", color:"white"}} to={'/cart'}><i style={{color:"yellow"}} class="ms-2 fa-solid fa-cart-shopping fa-flip-horizontal"></i><span  style={{fontSize:"20px"}}>Cart</span><Badge className='p-2 ms-2 ' bg="warning">{cart.length}</Badge></Link></Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header