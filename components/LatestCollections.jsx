import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShpoContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  // Loading the first 10 products into the latestProducts state
  useEffect(() => {
    console.log(products);
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10)); // Set the first 10 products
    }
  }, [products]); // Only rerun when products change

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our latest collections
        </p>
      </div>

      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.length > 0 ? (
          latestProducts.map((item) => (
            <ProductItem
              key={item._id} // Using unique product _id as key
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p>No products available</p> // Fallback in case no products are available
        )}
      </div>
    </div>
  );
};

export default LatestCollections;
