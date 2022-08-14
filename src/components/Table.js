import React from 'react'

import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react'

function Table( { filteredName } ) {
  return (
    <div>
      <Container>
      
      <Card  className='cards'>
      <Link textDecoration={'none'} to={`/products/${filteredName.Id}`}>
        <Card.Img className='cardimage' variant="top" src={filteredName.ImagePath} />
          <Card.Body className='cardbody' >
          <Card.Title className='cardtitle'>{filteredName.BookTitle}</Card.Title>
          <Card.Text>{filteredName.Author}</Card.Text> 
          <Card.Text><b>Fiyat: {filteredName.Price}TL</b></Card.Text>
        <Button colorScheme='teal'>Satın Al</Button>
      </Card.Body>
      </Link>
    </Card>
    
  
  
  </Container>
    </div>
  )
}

export default Table
