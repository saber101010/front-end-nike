import {Navbar,Nav,Container, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'



function navbar(){
    return(
<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Link to='/'><Navbar.Brand href="#home">Nike</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Men</Nav.Link>
      <Nav.Link href="#pricing">Women</Nav.Link>
      <Nav.Link href="#pricing">Kid's</Nav.Link>
    </Nav>
    
    <Nav>
     <Link to='/registre'> <Nav.Link href="#deets">Registre </Nav.Link></Link>
     <Link to='/Login'> <Nav.Link  href="#memes"> 
        Login
      </Nav.Link></Link>
     <FormControl></FormControl>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    )
}

export default navbar