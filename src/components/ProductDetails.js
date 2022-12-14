
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from "react";
import { Button } from '@chakra-ui/react';
import { Container,Col,Row } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BasketContext from '../context/BasketContext';



function ProductDetails() {
  
  const basket = useContext(BasketContext);
  
  

  
 

  const [data,setData] = useState([]);

  useEffect(()=> {
    fetch(`https://dewbysbg.com.tr/schemas/db/${Id}.json`)
    .then(res => res.json()).then(data =>setData(data));
  },[data]);

    const {Id} = useParams();


  return (
    
    <Container>

      <Header/>

        <Row>
        <Col></Col>
        <Col xs={8} className='productDetails__main'>
          <Row>
        <div className='col-md-4'>
          <img alt='DR'  src={data.ImagePath} className="productDetails__productImage" />
        </div>
        <div className='col-md-8 productDetails'>
            
            <div className='row'>
            <h2 className='productDetails__productTitle'>{data.BookTitle}</h2>
                <div className='productDetails__productAuthor'>
                        <p><b>{data.Author}</b></p> 
                        <p>ISBN: 012248563547</p>
                        
                  </div>
                  <p className='productDetails__productDescription'>{data.Description}</p>
            </div>
            <div className='productDetails__group2'>
            <p className='productDetails__productPrice'>Fiyat : {data.Price}</p>

            <Button onClick={() => basket.addBasket(data)} colorScheme='teal' size='lg' px='10' >
              Sepete Ekle
            </Button>
           
            </div>
            
        </div>
      </Row>
        </Col>
        <Col></Col>
      </Row>
      
    
    
      <Footer />
    </Container>
    
  )
  
}

export default ProductDetails
