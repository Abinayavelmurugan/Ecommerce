import React ,{useContext, useState}from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShpoContext';

const PlaceOrder = () => {

  //state variable
  const [method,setMethod]=useState('cod'); //default cash on delivery 
  const {navigate}=useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 sm:pt-14 min-h-[80vh] border-top'>
      {/* left side of the page  */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
      <div className='text-xl sm:text-2xl my-3'>
        <Title text1={'Delivery'} text2={'Information'} />
      </div>
      <div className='flex gap-3'>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First name' type="text" />
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last name' type="text" />
      </div>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email' type="text" />
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' type="text" />
      <div className='flex gap-3'>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' type="text" />
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' type="text" />
      </div>
      <div className='flex gap-3'>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Pincode' type="number" />
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' type="text" />
      </div>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone number' type="number" />
      </div>
      {/* Right side of the page */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'} />
          {/* different payment method */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stri')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              {/* dynamic classname of we click that then it should be shown in green color */}
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stri' ? 'bg-green-400': ''}`}> </p>
                <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
              
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              {/* dynamic classname of we click that then it should be shown in green color */}
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay' ? 'bg-green-400': ''}`}> </p>
                <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
              
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              {/* dynamic classname of we click that then it should be shown in green color */}
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod' ? 'bg-green-400': ''}`}>  </p>
               <p className='text-gray-500 text-sm font-medium mx'>Cash on delivery</p>
             
            </div>

          </div>
          {/* button tag navigate to the orders page */}
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>Place Order</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PlaceOrder
