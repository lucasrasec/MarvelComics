import React, { useContext, useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { AppContext, AppDispatchContext } from "../../context/appContext";
import Conection from "../../services/Conection";
import Cart from "../Cart";


const AppNavbar = () => {
    const [show, setShow] = useState(false);

    const toggleCart = () => setShow(!show);

    const { page, query } = useContext(AppContext);
    const dispatcher = useContext(AppDispatchContext);


    const debounceEvent = (fn, wait = 1000, time) =>  (...args) =>
            clearTimeout(time, time = setTimeout(() => fn(...args), wait))

    function handleKeyUp(event) {
        dispatcher('query', event.target.value)
    }

    useEffect(() => {
        document.querySelector("input").addEventListener("keyup", debounceEvent(handleKeyUp, 500))
    }, [])

    return (
        <Navbar bg="light" expand="lg" className="mt-4 mb-4">
            <Container>
                <Navbar.Brand href="#home">Marvel Comics</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" className="w-100">
                    <Nav.Item className="w-100">
                        <Form.Control
                            autoFocus
                            size="lg" 
                            type="text" 
                            placeholder="Pesquisar" 
                        />
                    </Nav.Item>
                    <Nav.Link href="#" className="ms-auto" onClick={toggleCart}>
                        <BsCart3 size={26} />
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <Cart isOpen={show} handleClose={toggleCart} />
        </Navbar>
    )
}

export default AppNavbar;
