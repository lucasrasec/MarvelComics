import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Conection from "../../services/Conection";
import Navbar from "../Navbar"
import { AppContext, AppDispatchContext } from "../../context/appContext";
import Gallery from "../Gallery";


const Content = () => {
    const [start, setStart] = useState(false)

    const { page, query } = useContext(AppContext);
    const dispatcher = useContext(AppDispatchContext);

    useEffect(() => {
        const search = async () => {
                if (!query) {
                    const { data } = await Conection.get(`/comics?format=comic&orderBy=-focDate&limit=8&offset=${page}`);
                    return dispatcher('comics', data.data.results);
                }

                const { data } = await Conection.get(`/comics?format=comic&orderBy=-focDate&limit=8&offset=${page}${query && '&titleStartsWith='+ query}`)
                return dispatcher('comics', data.data.results);
            }
            search()
        }, [page])

    const load = () => {
        const value = page + 8
        dispatcher('page', value)
        if (page === 0) {
            setStart(!start)
        }
    }

    const back = () => {
        const value = page - 8
        dispatcher('page', value)
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