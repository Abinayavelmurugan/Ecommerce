import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShpoContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  //getting data from context api
 // we need to get the items from cotext as objects else it will give typeerri

//destructe the funftion from the contest
  const{products,currency,cartItems, updateQuantity,navigate}=useContext(ShopContext);
  //state variable
  const [cartData,setCartData]=useState([]);
  //whenever cartitems get updated this useeffect function will executed
  useEffect(()=>{
   const temp=[];
   for(const items in cartItems){
    for(const item in cartItems[items]){
      if(cartItems[items][item]>0){
        temp.push({
          _id:items,
          size:item,
          quantity:cartItems[items][item]
        })
      }
    }
   }
   setCartData(temp);
  },[cartItems]);
  return (
    <div className='border-t pt-14' >
      <div className='text-2xl mb-3'>
        <Title text1={'Your'} text2={'Cart'} />
      </div>
      <div>{
        cartData.map((item,index)=>{
          const productData=products.find((product)=>product._id===item._id);
          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 grid  grid-col-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] item-center gap-4'>
              <div className='flex items-start gap-6'>
                {/* displaying the image */}
                <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                <div className=''>
                  {/* product name */}
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size} </p>
                  </div>
                </div>

              </div>
              {/* by using the onchange we get the value of the input field value is 0 or empty return null else we need to update the cart size in the top navegar image */}
              <input onChange={(e)=>e.target.value==='' || e.target.value==='0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className='border w-12 h-8 px-2 py-1 rounded-md' type="number" min={1} defaultValue={item.quantity} />
              <img  onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
              </div>
          )
        })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3' >Proceed to Checkout</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
