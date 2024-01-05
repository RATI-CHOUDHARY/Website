import React ,{useEffect, useState} from 'react'
import './Style/Cart.css'
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'

const Cart = ({cart,setCart,handleChange}) => {
  const[price,setPrice]=useState(0);
  const [success,setSuccess]=useState(false);
  const [errormsg,setErromsg]=useState('');
// const [orderId,setOrderId]=useState(false);
  const handleprice=()=>{
    let ans=0;
    cart.map((item)=>(
        ans+=item.amount*item.price
    ))
    setPrice(ans);
  }
  const remove=(id)=>{
    const arr=cart.filter((item)=>item.id!==id)
    setCart(arr)
  }
  console.log(success)
  console.log(errormsg)
  useEffect(()=>{
    handleprice()
  })
  /* const createOrder=(data,actions)=>{
return actions.order.create({
  purchase_units:[
    {
      description:'dress',
      amount:{currency_code:'USD',
    value:20},
    },
  ],
  application_context:{
    shipping_preference:'NO_SHIPPING'
  }
})
.then((orderId)=>{
  setOrderId(orderID)
  return orderID
})
  } */
  const onApprove=(data,actions)=>{
return actions.order.capture().then(function(details){
  // const {payer}=details
  setSuccess(true)
})
  }
  const onError=(data,actions)=>{
    setErromsg("An error occured ")
  }
return (
   <article>
    {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img alt="n" src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                      <button onClick={()=>handleChange(item,+1)}>+</button>
                      <button>{item.amount}</button>
                      <button onClick={()=>handleChange(item,-1)}>-</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>remove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
        </div>
        <PayPalScriptProvider 
      options={{'client-id':'AfmsZ_fbpEjumsYrB5WEHIlhVlpTjojkghy8sAo4HOU8pfPB761PN444bo2n5CUhzpTYjKQdEtviaj6e'}}>
{/* <button onClick={()=>setShow(true)}></button> */}
<PayPalButtons style={{layout:'vertical'}} /* createOrder={createOrder} */ onApprove={onApprove} onError={onError}/>
</PayPalScriptProvider>
   </article>
  )
}
export default Cart