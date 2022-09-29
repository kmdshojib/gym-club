import React from 'react'

import Accordion from 'react-bootstrap/Accordion';

function Question () {
  return (
    <Accordion defaultActiveKey="0" flush >
      <Accordion.Item eventKey="0">
        <Accordion.Header>How React Works?</Accordion.Header>
        <Accordion.Body>
        ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Props VS state?</Accordion.Header>
        <Accordion.Body>
        Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>what are the uses of  useeffect?</Accordion.Header>
        <Accordion.Body>
            Running on state change: validating input field.
            Running on state change: live filtering.
            Running on state change: trigger animation on new array value.
            Running on props change: update paragraph list on fetched API data update.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Question;