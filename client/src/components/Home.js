import React, { useState } from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartsData from './CartData';

const Home = () => {
   const [CartData,setCartDat] = useState(CartsData)
  return (
    <>
    <section className='items_section mt-4 container'>
     <h2 className='px-4' style={{fontWeight:400}}>Restaurants in peshawar Open Now</h2>
     <div className='row mt-2 d-flex justify-content-around align-items-center'>
    
      {
        CartData.map((element,index)=> {
          return(
            <>
              <Card style={{width:'22rem',border:'none'}} className='hove mb-4'>
             <Card.Img variant='top' className='cd' src={element.imgdata} />
             <div className='card_body'>
              <div className='upper_data d-flex justify-content-between align-items-center'>
                <h4 className='mt-2'>{element.dish }</h4>
                <span> {element.rating}</span>
              </div>
              <div className='lower_data d-flex justify-content-between '>
                <h5>{element.address}</h5>
                <span>{element.price}</span>
              </div>
              <div className='extra'></div>
              <div className='last_data d-flex justify-content-between align-items-center'>
                  <img src={element.arrimg} className='limg '/>
                  <Button style={{width:'150px',background:'#ff3054db',border:'none'}} variant='outline-light'
                  className='mt-2 mb-2'
                  >Add to Cart</Button>
                  <img src={element.delimg} className='laimg '/>
              </div>
             </div>
      </Card>
            </>
          )
        })
      }

      
     </div>
    </section>
    </>
  )
}

export default Home