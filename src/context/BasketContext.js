import React, { useState,useEffect } from "react";
import { createContext } from "react";

export const BasketContext = createContext();

export const BasketProvider = ( {children} ) => {

    
    const [addBook,setAddBook] = useState([])
    
    
    const addBasket = (item) => {
    setAddBook((prev) => [...prev , item])      //SEPETE EKLEME
    if(item.Id === addBook.Id){
        setAddBook('')
    }
   }
  console.log(addBook)
  
   const deleteItem = (id) => {
    
    const newList = addBook.filter((item) => item.Id !== id);     //SEPETTEN CIKARMA

    setAddBook(newList);
   
  }
 
  

    const values = {
        addBasket,
        addBook,
        deleteItem,
        
    }

   

    return <BasketContext.Provider value={values}>
        {children}
    </BasketContext.Provider>

}
export default BasketContext;