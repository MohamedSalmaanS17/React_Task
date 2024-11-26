import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
    return (
        <Navbar expand="lg" className=" navbar-light bg-dark">
            <Container>
                <Navbar.Brand className='text-white' href="#home">Delicious Food Corner</Navbar.Brand>
                <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-white' href="#about">About</Nav.Link>
                        <Nav.Link className='text-white' href="#Tour">Our Menu</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;