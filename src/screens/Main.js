import { Nav, Navbar, Container } from 'react-bootstrap';

function Main() {

  return (
    <div className="Main">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>ChanFam Bot</Navbar.Brand>
          <Nav.Item><Nav.Link href="/progress-bar">Progress Bar</Nav.Link></Nav.Item>
        </Container>
      </Navbar>
      <Container>Welcome to ChanFamBot helper!</Container>
    </div>
  )
}

export { Main };
