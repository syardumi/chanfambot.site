import { Nav, Navbar, Dropdown } from 'react-bootstrap';

function Header(props) {

  return (
    <div className="Header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;<img
              alt=""
              src="/ChanFamBot-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />&nbsp;&nbsp;ChanFamBot</Navbar.Brand>
        <Nav style={{flex: 0.95}} className="justify-content-end">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="https://github.com/syardumi/chanfambot">Twitch Bot</Nav.Link></Nav.Item>
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link}>Progress Bar</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/progress-bar">Widget</Dropdown.Item>
              <Dropdown.Item href="/progress-bar/set">Controls</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {props.children}
        </Nav>
      </Navbar>
    </div>
  )
}

export { Header };
