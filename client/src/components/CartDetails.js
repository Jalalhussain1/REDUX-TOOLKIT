import React, { useEffect, useState } from 'react';
import './Cartstyle.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart,removeSingleIteams,emptycartIteam } from '../redux/feature/cartSlice';

const CartDetails = () => {
  const { carts } = useSelector((state) => state.carts);

  const [totalPrice,setTotalPrice] = useState(0);
  const [totalQuantity,setTotalQuantity] = useState(0);

  const dispatch = useDispatch();

  // add to cart
  const handleIncrement = (e) => {
    dispatch(addToCart(e))
  }

  // remove to cart
  const handleDecrement = (e) => {
    dispatch(removeToCart(e))
  }

  // remove single item
  const handleSingleDecrement = (e) =>{
    dispatch(removeSingleIteams(e))
  }

  // clear cart
  const emptycart = () => {
    dispatch(emptycartIteam());
  }

  // total price
  const total = ()=>{
    let totalPrice = 0
    carts.map((ele,ind)  => {
      totalPrice = ele.price * ele.qnty + totalPrice
    })
    setTotalPrice(totalPrice)
  }

  // total quantity
  const countquantity = ()=>{
    let totalQuantity = 0
    carts.map((ele,ind)  => {
      totalQuantity = ele.qnty  + totalQuantity
    })
    setTotalQuantity(totalQuantity)
  }

  useEffect(() => {
    countquantity();
},[countquantity])

  useEffect(() => {
       total()
  },[total])


  return (
    <>
      <div className='row justify-content-center m-0'>
        <div className='col-md-8 mt-5 mb-5 CardDetails'>
          <div className='card'>
            <div className='card-header bg-dark p-3 d-flex justify-content-between align-items-center'>
              <h5 className='text-white m-0'>Cart Calculation{carts.length >0 ? `(${carts.length})` : ''}</h5>
              {carts.length > 0 ? (
                <button className='btn btn-danger btn-sm'  onClick={emptycart}>
                  <i className="fa-solid fa-trash"></i>
                  <span> Empty Cart</span>
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className='card-body p-0'>
            {carts.length === 0 ? (
              <table className='table cart-table mb-0'>
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <div className='cart-empty '>
                        <i className="fa-solid fa-trash"></i>
                        <p>YOUR CART IS EMPTY</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <table className='table cart-table mb-0 table-responsive-sm'>
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className='text-end'>
                      <span id='amount' className='amount'>Total Amount</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <button className='prdct-delete'
                        onClick={()=>handleDecrement(data.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                      <td>
                        <div className='product-img img '>
                          <img src={data.imgdata} alt='Product' className='img-fluid' />
                        </div>
                      </td>
                      <td><div className='product-name'><p>{data.dish}</p></div></td>
                      <td>{data.price}</td>
                      <td>
                        <div className='prdct-qty-container'>
                          <button className='prdct-qty-btn' type='button' onClick={data.qnty <=1 ?()=>handleDecrement(data.id):()=>handleSingleDecrement(data)}>
                            <i className='fa fa-minus'></i>
                          </button>
                          <input type='text' className='qty-input-box' value={data.qnty} disabled name='' id='' />
                          <button className='prdct-qty-btn' type='button' onClick={() => handleIncrement(data)}>
                            <i className='fa fa-plus' ></i>
                          </button>
                        </div>
                      </td>
                      <td className='text-right'>{data.qnty * data.price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th colSpan={3}>&nbsp;</th>
                    <th>Items In Cart <span className='ml-2 mr-2'>:</span><spa className='text-danger'>{totalQuantity}</spa></th>
                    <th className='text-right'>Total Amount <span className='ml-2 mr-2'>:</span><spa className='text-danger'>{totalPrice}</spa></th>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;

