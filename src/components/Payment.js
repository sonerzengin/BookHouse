import { Input,Flex,Text, Button } from '@chakra-ui/react'
import React,{ useContext } from 'react'
import BasketContext from '../context/BasketContext'
import {Alert,AlertIcon} from '@chakra-ui/react'

function Payment() {
  const basket = useContext(BasketContext);

  const arr = basket.addBook;                // sepetteki ürünler dizisi
  
  const prices = arr.map(data => parseInt(data.Price))  
                                                         // ürünlerin fiyatlarına ulaşıp parse'lama
                                                        // fiyat,nokta değil virgüllü geldiği için küsüratı hesaplamıyor!!!
  let total = 0; 
  let kargo = 15;
  for (let i= 0; i < prices.length;i++ ) {        // fiyatların toplanması 
    total += prices[i] 
    
  }
  if(total < 50){
    total += kargo
  }



  return (
    <div>
      <Flex justifyContent={'space-between'} backgroundColor={'teal.200'} borderRadius={'md'} px={3} my={3} h={10} alignItems={'center'}>
      <h2>Toplam Tutar:</h2>
     
      <div className='totalPrice'> {total > 15 ? total : '00'} <small><sup><u>.00 ₺</u></sup></small></div>

      </Flex>


      <Alert status='info' borderRadius={'md'} my={3}>
      <AlertIcon />
      50.00 ₺ üzeri alışverişlerde kargo ücretsiz
      </Alert>

      <div className='paymentBox'>
      <p>Kart Numarası</p>
      <Input />
      <p>Adı Soyadı</p>
      <Input />
      <Flex justifyContent={'space-between'} > 
        <div>
        Son Kull. Tarihi<br/><small>(Ay/Yıl)</small>
        <Input />
        </div>
        <div>
        Güvenlik<br/><small>(son 3 hane)</small>
        <Input />
        </div>
      </Flex>
      <Button backgroundColor={'teal.200'} className='payment__button'>Gönder</Button>
      </div>
      
    </div>
  )
}

export default Payment
