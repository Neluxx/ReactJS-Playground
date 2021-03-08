import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('home')

  console.log(activeLink)

  return (
    <Navbar collapseOnSelect expand='lg' sticky='top' bg='dark' variant='dark'>
      <Navbar.Brand href='/'>
        Productivity-Manager
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link
            className={activeLink === 'home' ? 'active' : ''}
            href='/'
            onClick={() => setActiveLink('home')}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={activeLink === 'timer' ? 'active' : ''}
            href='/timer'
            onClick={() => setActiveLink('timer')}
          >
            Timer
          </Nav.Link>
          <Nav.Link
            className={activeLink === 'pomodoro' ? 'active' : ''}
            href='/pomodoro'
            onClick={() => setActiveLink('pomodoro')}
          >
            Pomodoro
          </Nav.Link>
          <Nav.Link
            className={activeLink === 'counter' ? 'active' : ''}
            href='/counter'
            onClick={() => setActiveLink('counter')}
          >
            Counter
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
