import React, { useContext,useState } from 'react'
import BasketContext from '../context/BasketContext'
import Header from '../components/Header'
import { Button, ButtonGroup, Link } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { Link as ReachLink } from "react-router-dom"
import Payment from '../components/Payment';
import { Container, Row, Col } from 'react-bootstrap';

function Basket() {

    const basket = useContext(BasketContext);
    

  return (
    

    <Container >
      
       
       <ButtonGroup display={'flex'} justifyContent={'space-between'} my={50}>
            <Link as={ReachLink} to='/'><i class="fa-solid fa-arrow-left"></i>&#160;Geri Dön</Link>
            <Link>Ödeme Yap&#160;<i class="fa-solid fa-arrow-right"></i></Link>
       </ButtonGroup>
       <Row>
       <Col  xs={8}>
      {basket.addBook.length === 0 ? <div>Sepette ürün yok</div> :
      
        basket.addBook.map ((data , key) =>(
            <div key={key} className='basket__rows'>
                <div className='basket__products'>
                    <Image src={data.ImagePath} h={'80%'} alt='Book Cover' />
                    <div>{data.BookTitle}</div>
                    <div>{data.Author}</div>
                    <div>{data.Price}</div>
                    <Button backgroundColor={'red.200'} onClick={() => basket.deleteItem(data.Id)}><i class="fa-solid fa-trash fa-xs"></i></Button>
                </div>
                
            </div>
        ) )
      }
      </Col>
    <Col>
         <Payment />
    </Col>
    </Row>

    </Container>
  )
}

export default Basket
