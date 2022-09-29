import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <Nav defaultActiveKey="/home" as="ul" className='d-flex flex-column'>
      <h3 className='text-muted'>Muscle Freaks</h3>
      <h5>Select Today's Exercise</h5>
    </Nav>
  );
}

export default Header;
