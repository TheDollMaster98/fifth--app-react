//* API: https://digimon-api.herokuapp.com
//* https://digimon-api.vercel.app/api/digimon
/*
1 > Fetch dati totali
2 > creo una maschera 

1-Card base 
il componente card ha 3 props 
che sono 

name img level
*/
import React from "react";
import {Card, Button} from 'react-bootstrap'

const MyCardDigimon = (props) => {
    
    return (
        
        <>
            <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    <strong>{props.level}</strong>
                </Card.Text>
                <Button variant="primary">Apri scheda Digimon</Button>
            </Card.Body>
            </Card>
        </>
    )
}

export default MyCardDigimon