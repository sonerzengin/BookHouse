import { useState,useEffect } from "react";
import React from 'react'
import Cards from "./Cards";
import { Box, Grid } from '@chakra-ui/react';



function Products() {
    const [data,setData] = useState([]);

    useEffect(()=> {
      fetch(`https://dewbysbg.com.tr/schemas/db.json`)
      .then(res => res.json()).then(data =>setData(data));   
    },[data]);
    

  return (
      
      <div className='cards__main'>
        <Grid templateColumns={{md:'repeat(4, 1fr)',sm:'repeat(2, 1fr)',base:'repeat(1, 5fr)'}} gap={9} >
        {
            data.map ((item,key) => (
                <Box boxShadow='base' transition='all 0.5s ease' borderRadius={5} _hover={{textColor: 'teal',boxShadow:'dark-lg'}} >
                <Cards key={key} item={item} />  
                
                </Box>
                
            ))
        }
        </Grid>
        
        </div>
    
  )
}

export default Products
