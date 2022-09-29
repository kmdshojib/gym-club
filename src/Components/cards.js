import React from 'react'
import {Button,Card} from 'react-bootstrap';




const Cards = ({name,img,id,time,handleClick}) =>  {
  
  return (
    <Card key={id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>Time required : {time}s</Card.Text>
        <Button variant="primary" onClick={() => handleClick(time)}>Add to list</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards;