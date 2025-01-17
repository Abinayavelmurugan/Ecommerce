import { createContext, useEffect, useState ,useMemo} from "react";
import {products} from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext=createContext();
const  ShopContextProvider=(props)=>{
    const currency='₹';
    const delivery_fee=10;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(true);
    const [cartItems,setCartItems]=useState({});
    const navigate=useNavigate();
    const addToCart=async (itemId,size)=>{
        if(!size){
            toast.error("Select product size");
            return;
        }
          let cartData=structuredClone(cartItems);
          if(cartData[itemId]){  // if product already exist
            if(cartData[itemId][size]){ // for same size
                cartData[itemId][size]+=1;
            }
            else{
                 cartData[itemId][size]=1;
            }
          }
          else{  //item is new to the cart
               cartData[itemId]={};
               cartData[itemId][size]=1;
          }
          setCartItems(cartData);
    }

    const getCartCount = useMemo(() => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) { // iterate through product sizes
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return totalCount;
    }, [cartItems]);
    // if we put the functions in this array we can use it in any component of the project

    // the function for updating the cart if we delete the item usig the delte icon in the cat page

    const updateQuantity=async  (itemId,size,quantity)=>{
            let cartData=structuredClone(cartItems);
            cartData[itemId][size]=quantity;
            setCartItems(cartData);
    }

    //for getting the total amount for the cart
    const getCartAmount= () =>{
        let totalAmount=0;
        for(const items in cartItems){ 
            let itemInfo=products.find((product)=>product._id===items); //if the id matches then store the info
             for(const item in cartItems[items]){
              try{
                  if(cartItems[items][item]>0){
                    totalAmount+=itemInfo.price*cartItems[items][item];
                  }
                 }
                 catch(error){

                 }
            }
        }
        return totalAmount;
    }

    const value={
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount ,updateQuantity,getCartAmount,navigate//usestae,async function then add useeffect

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;