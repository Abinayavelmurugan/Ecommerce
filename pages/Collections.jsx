import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShpoContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collections = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const { products,search,showSearch } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };
  useEffect(() => {
    if (products) {
      setFilterProducts(products);
    }
  }, [products]);

  useEffect(() => {
    
    if (category.length > 0) {
      setFilterProducts(products.filter((item) => category.includes(item.category)));
    } else {
      setFilterProducts(products);
    }
  }, [category, products,search,showSearch]);

  useEffect(() => {
    let filtered = products;
  
    // Apply search filter if search and showSearch are active
    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    // Apply category filter
    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }
  
    // Apply subcategory filter
    if (subCategory.length > 0) {
      filtered = filtered.filter((item) => subCategory.includes(item.subCategory));
    }
  
    setFilterProducts(filtered);
  }, [category, subCategory, products, search, showSearch]);
  
  

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Men" onChange={toggleCategory} /> Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Women" onChange={toggleCategory} /> Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Kids" onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>

       {/* Subcategory filter */}
<div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
  <p className="mb-3 text-sm font-medium">Type</p>
  <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
    <p className="flex gap-2">
      <input className="w-3" type="checkbox" value="Topwear" onChange={toggleSubCategory} /> Topwear
    </p>
    <p className="flex gap-2">
      <input className="w-3" type="checkbox" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear
    </p>
    <p className="flex gap-2">
      <input className="w-3" type="checkbox" value="Winterwear" onChange={toggleSubCategory} /> Winterwear
    </p>
  </div>
</div>

      </div>
      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="All" text2="Collections" />
          {/* Product sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => {
              const value = e.target.value;
              if (value === 'low-high') {
                setFilterProducts([...filterProducts].sort((a, b) => a.price - b.price));
              } else if (value === 'high-low') {
                setFilterProducts([...filterProducts].sort((a, b) => b.price - a.price));
              } else {
                setFilterProducts(products);
              }
            }}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
