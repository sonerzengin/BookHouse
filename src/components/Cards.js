import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react'



function Cards( { item } ) {
   
  return (
    <div>
      
    
      
        <Card className='cards'>
        <Link className='routerLink' to={`/products/${item.Id}`}>
          <Card.Img className='cardimage' variant="top" src={item.ImagePath} />
            <Card.Body className='cardbody'>
            <Card.Title className='cardtitle'>{item.BookTitle}</Card.Title>
            <Card.Text>{item.Author}</Card.Text> 
            <Card.Text><b>Fiyat: {item.Price}TL</b></Card.Text>
          <Button colorScheme='teal'>Satın Al</Button>
        </Card.Body>
        </Link>
      </Card>
      
    
    
    
    </div>
  );
}

export default Cards;
