import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react'
import { useContext } from 'react';
import BasketContext from '../context/BasketContext';



function Cards( { item } ) {

  const basket = useContext(BasketContext)
  

  
  return (
    <div>
      
    
      
        <Card className='cards'>
        
          <Card.Img className='cardimage' variant="top" src={item.ImagePath} />
            <Card.Body className='cardbody'>
            <Link className='routerLink' to={`/products/${item.Id}`}>
            <Card.Title className='cardtitle'>{item.BookTitle}</Card.Title>
            <Card.Text>{item.Author}</Card.Text> 
            <Card.Text><b>Fiyat: {item.Price}TL</b></Card.Text>
            </Link>
          <Button onClick={() => basket.addBasket(item)}  colorScheme='teal'>Sepete Ekle</Button>
        </Card.Body>
        
      </Card>
      
    
    
    
    </div>
  );
}

export default Cards;
