import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AppContext } from "../../context/appContext";
import Comic from "../Comic/Index";


const Gallery = () => {
    const { comics } = useContext(AppContext);

    return (
        <Container>
            <Row>
                {
                    comics && comics.map(comic => (
                        <Col lg={3} xs={6} className="d-flex justify-content-center" key={comic.id}>
                            <Comic comic={comic} key={comic.id} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Gallery;
