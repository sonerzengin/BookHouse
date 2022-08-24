import React, { useContext } from 'react'
import '../App.css' ;
import { useNavigate } from 'react-router-dom';
import { Flex, Spacer,Button,ButtonGroup,Box,Image, } from '@chakra-ui/react'
import {BsBasket} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Top from './Top';
import { UserContext } from '../context/UserContext';
import BasketContext from '../context/BasketContext';



function Header( ) {

  
  const data = useContext(UserContext)
  const basket = useContext(BasketContext)
 

  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/SignUp`; 
    navigate(path);
  }
  const routeChange2 = () =>{ 
    let path = `../basket`; 
    navigate(path);
  }
  const routeChange3 = () =>{ 
    let path = `/login`; 
    navigate(path);
  }

 const logout = () => {
  localStorage.clear();
  data.setLoggedIn('false') ;
 }



  return (
    <div className='container'>
       <Top />

        <Flex maxWidth='full' alignItems='center' justifyContent='space-evenly' gap='10' flexDirection={{base:'column',md:'row',sm:'column'}}  mt={2}>
          <Box p='2'>
          <Link to={'/'}>
          <Image  w={{base:'100%',sm:'100%' , md:'50%'}} src="https://i.pinimg.com/originals/8c/64/69/8c64695ea89ddb51f9b53fa9dfe315e3.png" alt="logo" className='logo' />
          </Link>
          </Box>
          
          <Box gap={'3'} >
          <Spacer />
            <Link className='header__links'  to={`/gununsozu`}>Kitaplardan Alıntılar</Link>
          </Box>
          <Spacer />
        <ButtonGroup gap='2'>
        
         {data.loggedIn === 'true' && 
         <div className='whenLoggedIn'>
        <p className='header__username'>Hoş geldiniz <br/>  {localStorage.getItem('username')}</p> 
         <Button colorScheme={'teal'} onClick={logout}>Çıkış Yap</Button> 
         </div> 
         }
        {
          data.loggedIn === 'false' &&
          <>
          <Button colorScheme={'teal'} onClick={routeChange}>Üye Ol</Button> 
          <Button colorScheme='teal' onClick={routeChange3}>Giriş Yap</Button> 
          </>
        }
           
        
        <Button colorScheme='teal' onClick={routeChange2}><BsBasket className='basket-icon'/>{basket.addBook.length}</Button> 
        </ButtonGroup>
      </Flex>


     
    </div>
  )
}

export default Header;