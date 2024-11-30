import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Navigacio() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Admin</Nav.Link>
    </Nav.Item>
    {/* <Nav.Item>
      <Nav.Link eventKey="link-1">Option 2</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item> */}
  </Nav>
  )
}

export default Navigacio



