import React from 'react'
import {Button,Card} from 'react-bootstrap';

import './cards.styles.css'



const Cards = ({name,img,id,time,handleClick,description}) =>  {
  
  return (
    <Card key={id} className="card-item">
      <Card.Img variant="top" src={img} className="image-item"/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>Time required : {time}s</Card.Text>
        <Button variant="primary" onClick={(e) => handleClick(time,e)}>Add to list</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards;