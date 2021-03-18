import React from 'react'
import flowers from "../data.js";
import { Container, Figure } from "react-bootstrap";

function Homepage()
{
    return (
        <Container >
            {flowers.map((flower, i) => (

                <Figure key={i}>
                    <Figure.Image src={flower.picture} alt="" />
                    <Figure.Caption >{flower.name}
                    </Figure.Caption>
                </Figure>
            ))}
        </Container >
    )
}

export default Homepage;