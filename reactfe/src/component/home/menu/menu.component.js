import {useState} from 'react'
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap'; 
import DropDownMenu from '../../common/dropdown-menu/dropdown.menu';

const HomeMenu = () =>{
  const [dropdown] = useState({
    title: "Categories",
    data: [
      {
      name: "samsung",
      slug: "/category/samsung"
    },
      {
      name: "electronics",
      slug: "/category/electronics"
    },
  ]
  })
  const [profile] = useState({
    title: "Your Profile",
    data: [
      {
      name: "Logout",
      slug: "/logout"
    },
      {
      name: "Change Password ",
      slug: "/change-password"
    },
  ]
  })
  return (
    <>
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="/">Uttam</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/home">Home</Link >
            <Link className="nav-link" to="/login">Login</Link >
            <Link className="nav-link" to="/register">Register</Link >

            <DropDownMenu data={dropdown} id="cates"/>
            
          </Nav>
          <Nav className= "me-auto, justify-content-end">
            <DropDownMenu data={profile} id="hey"/>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
export default HomeMenu;