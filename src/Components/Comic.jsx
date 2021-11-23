import React, { useContext, useState } from "react";
import { Card, Button, Row } from "react-bootstrap";

import {AppDispatchContext, AppContext} from "../context/appContext";
import ComicDetails from "./ComicDetails";

const Comic = ({ comic }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { cart } = useContext(AppContext);
    const dispatcher = useContext(AppDispatchContext);

    const img = comic.thumbnail.path + "/portrait_fantastic." + comic.thumbnail.extension
    const title = comic.title

    const handleDetails = () => {
        setIsModalOpen(!isModalOpen)
    }

    const increment = () => {
        dispatcher('cart', [...cart, comic])
    }

    return (
        <Card id={comic.id} style={{ width: '15rem', marginBottom: "1rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Row className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={handleDetails}>Detalhes</Button>
                    <Button variant="success" className="mt-1" onClick={increment}>Comprar</Button>
                </Row>
            </Card.Body>
            <ComicDetails comic={comic} isOpen={isModalOpen} handleClose={handleDetails} />
        </Card>
    )
}

export default Comic