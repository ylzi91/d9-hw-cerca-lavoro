import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { IoIosHome } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";



export default function HomeHeader () {
    const location = useLocation().pathname
    
    const numberOfFav = useSelector((state)=> state.favourites.jobs.length)

    return(

        <Navbar bg="dark" variant="dark" data-bs-theme="dark">
        <Container>
          <Link to = '/' className="navbar-brand">RJS</Link>
          <Nav className="me-auto">
            <Link to = '/' className={`nav-link ${location === '/' ? 'active' : ''}`} ><IoIosHome /></Link>
            <Link to = "/favorite" className={`nav-link ${location === 'favorite' ? 'active' : ''}`}>Lista Preferiti {numberOfFav > 0 && <Badge text="dark" bg="light">{numberOfFav}</Badge>} </Link>
          </Nav>
        </Container>
      </Navbar>
        // <Button variant="dark"> <IoIosHome /> </Button>
    )
}