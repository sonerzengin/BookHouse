import React from 'react'
import '../App.css' ;
import { useNavigate } from 'react-router-dom';
import { Flex, Spacer,Button,ButtonGroup,Box,Image, } from '@chakra-ui/react'
import {BsBasket} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Top from './Top';

function Header( { isLoggedIn , username }) {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/SignUp`; 
    navigate(path);
  }
  const routeChange2 = () =>{ 
    let path = `../basket`; 
    navigate(path);
  }
  
  console.log(username)

  return (
    <div className='container'>
       <Top />

        <Flex minWidth='max-content' alignItems='center' justifyContent='space-evenly' gap='10' flexDirection={{md:'row',sm:'column'}}  mt={2}>
          <Box p='2'>
          <Link to={'/'}>
          <Image  w={{sm:'100%' , md:'50%'}} src="https://i.pinimg.com/originals/8c/64/69/8c64695ea89ddb51f9b53fa9dfe315e3.png" alt="logo" className='logo' />
          </Link>
          </Box>
          
          <Box gap={'3'} >
          <Spacer />
            <Link className='header__links'  to={`/gununsozu`}>Günün Alıntısı</Link>
          </Box>
          <Spacer />
        <ButtonGroup gap='2'>
          
         {!isLoggedIn && 
         <Button colorScheme='teal' onClick={routeChange}>Üye Ol / Giriş Yap</Button> 
         }
          { isLoggedIn &&
          
              <Button colorScheme='teal'>Cikis Yap</Button> 
          } 
        
        <Button colorScheme='teal' onClick={routeChange2}>Sepetim <BsBasket className='basket-icon'/> </Button> 
        </ButtonGroup>
      </Flex>


     
    </div>
  )
}

export default Header;