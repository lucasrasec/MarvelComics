import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { AppContext, AppDispatchContext } from "../../context/appContext";
import Comic from "../Comic";


const Gallery = () => {
    const { comics } = useContext(AppContext);

    return (
        <Container>
            <Row>
                {
                    comics && comics.map(comic => (
                        <Col lg={3} xs={6} className="d-flex justify-content-center">
                            <Comic comic={comic} key={comic.id} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Gallery;
