import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function WishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handleWishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  return (
    <div style={{marginTop:"100px", marginBottom:"50px"}}>
      <Row className='ms-5 me-3'>
        { wishlistArray?.length>0?
          wishlistArray?.map((item)=>(<Col style={{marginTop:"50px"}} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem',  boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',borderRadius: '25px'}}>
            <Card.Img variant="top" src={item.thumbnail} style={{height:"200px", borderRadius:"25px 25px 0px 0px "}} />
            <Card.Body>
              <Card.Title>{item.title.slice(0,20)}...</Card.Title>
              <Card.Text>
                <p>{item.description.slice(0,40)}...</p>
                <p className='fw-bolder'>Price : $ {item.price}</p>
              </Card.Text>
              <div className='d-flex align-items-center justify-content-between'>
                <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
                <Button onClick={()=>handleWishlist(item)} variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
              </div>
            </Card.Body>
          </Card>
            </Col>))
          :<div style={{height:"90vh"}} className='d-flex align-items-center justify-content-center flex-column'>
            <img style={{height:"50vh"}} src="https://o.remove.bg/downloads/3daf70a9-8f5a-404e-a5fb-6bf775e8fa0a/shopping-cart-sign-shopping-cart-empty-ico-11563228005rnccz3lvl0-removebg-preview-removebg-preview.png" alt="" />
            <h3>Your wishlist is empty</h3>
            <Link className='btn btn-success' to={'/'}><span style={{color:"green"}}><i class="me-2 fa-solid fa-arrow-left"></i>Back to home</span></Link>
          </div>

          
          }
      </Row>
    </div>
  )
}

export default WishList