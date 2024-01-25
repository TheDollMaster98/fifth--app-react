/**
 * creare una inputbox che prende il nome del digimon
 * clicca il cerca
 * https://digimon-api.herokuapp.com/api/digimon/name/PARAMENTO-IN-INGRESSO
 * cercare il parametro,
 * componenete: CardDigimon
 * + api 
 * + event listener
 * + state
 * fonte: https://it.reactjs.org/docs/forms.html
 * font2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find?retiredLocale=it
*/
import React from "react";
import axios from "axios";
import MyCardDigimon from "./myCardDigimon";
import {Card, Button} from "react-bootstrap"
export default class MySearcDigimon extends React.Component {
    constructor() {
        super();
        this.state = {
            digimon: []
        };
    }
    //TODO: la funzione handleChange viene eseguita ad ogni battitura per aggiornare lo stato di React
    //TODO: il valore visualizzato verrà aggiornato man mano che l’utente preme i tasti.
    handleChange = (item) => {
        this.setState({name: item.target.value})
    }
    handleClick = () => {
        axios.get(`https://digimon-api.vercel.app/api/digimon/name/${this.state.name}`)
        .then(res => {
            this.setState({digimon: res.data});
        })
    }
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Header className="text-center">MySearchDigimon</Card.Header>
                    <Card.Body>
                        <Card.Title>Digimon Search</Card.Title>
                        <Card.Text>
                            <input type="text" placeholder="Digimon name" onChange={this.handleChange}/>
                            <Button variant="primary" onClick={this.handleClick}>Search</Button>
                        </Card.Text>
            
                <hr />
                <ul>
                    {
                        this.state.digimon.find(item => item.name === this.state.name) ?
                        <MyCardDigimon name={this.state.digimon.find(item => item.name === this.state.name).name} img={this.state.digimon.find(item => item.name === this.state.name).img} level={this.state.digimon.find(item => item.name === this.state.name).level}/>
                        : <h6>Digimon non trovato</h6>
                    
                    }
                </ul>
                    </Card.Body>
                </Card>
            </>
        ) 
    }
}

/* BRUTTO MA VA
<>
                <input type="text" value = {this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                <button onClick={() => this.fetchDigimonByName()}>Cerca</button>
                <hr />
                <ul>
                    {
                        this.state.digimon.find(item => item.name === this.state.name) ?
                        <MyCardDigimon name={this.state.digimon.find(item => item.name === this.state.name).name} img={this.state.digimon.find(item => item.name === this.state.name).img} level={this.state.digimon.find(item => item.name === this.state.name).level}/>
                        : <h1>Digimon non trovato</h1>
                    
                    }
                </ul>

            </>
*/