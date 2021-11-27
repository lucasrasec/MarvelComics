import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


const numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return parseInt(parts.join(","), 10);
}

const ListItem = ({ comic }) => {
    const img = comic.thumbnail.path + "/standard_small." + comic.thumbnail.extension
    const title = comic.title

    return (
        <Container>
            <Row className="d-flex">
                <Col xs={6} md={4}>
                    <Image src={img} thumbnail />
                </Col>
                <Col className="ms-2">
                    <div className="fw-bold">{title}</div>
                    {comic.upc}
                </Col>
                <Col>
                    <h5>R$ {numberWithCommas(comic.id).toFixed(2)}</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default ListItem;