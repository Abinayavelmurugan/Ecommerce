import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShpoContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products,currency,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size,setSize]=useState('');

  const FetchProductData = async () => {
    if (products && products.length > 0) {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setImage(product.image[0]);
        console.log(product);
      }
    }
  };

  useEffect(() => {
    console.log(productId);
    FetchProductData();
  }, [productId, FetchProductData]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product image gallery */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer object-cover"
                alt=""
              />
            ))}
          </div>
          {/* Main product image */}
          <div className="w-full sm:w-[80%] flex justify-center items-center">
            <img className="w-full h-auto max-h-screen object-contain" src={image} alt="" />
          </div>
        </div>
        {/* product  info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>  
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-3'>{122}</p>
        
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p  className='mt-5 text-gray-500'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select size</p>
            <div className='flex gap-3'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div> 
          {/* getting size from the state variable */}
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add to cart</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
            <p></p>
          </div>
        </div>

      </div>
      {/* description and review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm '>Reviews {122}</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Shop confidently with [Your Store Name], where quality meets affordability. Experience hassle-free returns, exceptional customer support, and an ever-growing inventory designed to meet your lifestyle.</p>
          <p>Discover a world of convenience and variety with [Your Store Name], the ultimate e-commerce platform for all your shopping needs. From trendy fashion and cutting-edge electronics to home essentials and unique gifts, we bring an extensive range of high-quality products right to your fingertips.</p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div className="text-center mt-10">Loading...</div>
  );
};

export default Product;
