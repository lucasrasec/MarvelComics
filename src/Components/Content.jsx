import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Conection from "../services/Conection";
import Navbar from "./Navbar"
import { AppContext, AppDispatchContext } from "../context/appContext";
import Gallery from "./Gallery";


const Content = () => {
    const [start, setStart] = useState(false)

    const { page, query } = useContext(AppContext);
    const dispatcher = useContext(AppDispatchContext);

    useEffect(() => {
        const search = async () => {
                const response = await Conection.get(`/comics?format=comic&orderBy=-focDate&limit=8&offset=${page}`)
                .then(({ data }) => dispatcher('comics', data.data.results))
            }
            search()
        }, [])

    useEffect(() => {
        const search = async () => {
            const response = await Conection.get(`/comics?format=comic&orderBy=-focDate&limit=8&offset=${page}${query && '&titleStartsWith='+query}`)
            .then(({ data }) => dispatcher('comics', data.data.results))
        }
        search()
    }, [page])

    const load = () => {
        const value = page + 8
        dispatcher('page', value)
        console.log(page);
        if (page === 0) {
            setStart(!start)
        }
    }

    const back = () => {
        const value = page - 8
        dispatcher('page', value)
        console.log(page);
        if (page === 0) {
            setStart(!start)
        }
    }

    return (
        <Container>
            <Navbar />

            <Gallery />

            <Row>
                {start && (
                    <Button variant="secondary" className="page"
                        onClick={back} >Voltar</Button>
                )}
                <Button onClick={load}>Carregar mais</Button>
            </Row>
        </Container>
    )
}

export default Content