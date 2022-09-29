import React from 'react'
import {Button,Card} from 'react-bootstrap';

import './cards.styles.css'



const Cards = ({name,img,id,time,handleClick}) =>  {
  
  return (
    <Card key={id} className="card-item">
      <Card.Img variant="top" src={img} className="image-item"/>
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