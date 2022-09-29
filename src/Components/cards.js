import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Cards({name, img,time,handleClick}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>Time required : {time}s</Card.Text>
        <Button variant="primary" onClick={handleClick}>Add to list</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards;