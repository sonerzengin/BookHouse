import React, { useEffect } from 'react'
import { Input} from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios';
import { Flex,Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function SearchInput( ) {

  const [query, setQuery] = useState('');
  const [data,setData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    
  }
  
  useEffect(()=>{
    const fetchBooks = async () => {
      const res = await axios.get('http://127.0.0.1/kodluyoruz/db.json')
      setData(res.data)
    }
    fetchBooks()
},[query])



 
 
   return (
    <div >
      <div className='inputSearch'>
      <Input placeholder='Kitap adı giriniz...' htmlSize={4} width='40%' onChange={handleChange} variant='filled' mb={5}/>
      </div>
      {query.length > 0 && data.filter(name => name.BookTitle.toLowerCase().includes(query)).map((filteredName,key) => ( 
        <div key={key}>
         <Box>
  
  <Flex className='search__results' border='2px' borderColor='gray.200' justifyContent={'space-between'}>
    <Box pt={2}  w='300px' h='10'>{filteredName.BookTitle}</Box>
    
    <Box pt={2} w='300px' h='10'>{filteredName.Author}</Box>
    
    <Box pt={2} w='300px' h='10'>{filteredName.Price}TL</Box>
    <Link to={`/products/${filteredName.Id}`} className='link__button' >Git</Link>
  </Flex>
  </Box>
        </div>
  ))}
      
    </div>
  
  )}
  

export default SearchInput;
