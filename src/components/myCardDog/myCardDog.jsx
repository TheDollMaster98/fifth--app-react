import React, {Component} from "react";
import {Card} from 'react-bootstrap'
import axios from 'axios'
/**
 * creare un programma con un Button, quando lo premo viene
 * invocata l'API e stampa l'immagine della volpe
 * https://random.dog/woof.json?ref=apilist.fun
 * Creare una card  che mostra all'interno img del cane
*/
export default class MyDog extends Component {
  constructor(){
    super()
    this.state = {
      image: "",
    }
  }

componentDidMount(){
  this.fetchCane()
} 

// CON AXIOS
fetchCane = () => {
  axios.get(`https://random.dog/woof.json?ref=apilist.fun`)
  .then(res => {
  this.setState({ image: res.data.url });
})
}
/*
fetchCane = () => {
fetch('https://random.dog/woof.json?ref=apilist.fun')
.then(response => response.json())
.then(data => this.setState({image: data.image, link: data.link}))
}
*/
render(){
  if(this.state.name === ""){
    return(
      <>
        <h1>Loading...</h1>
      </>
    )
  } else {
    return(
      <>
        <Card style={{ width: '10rem' }}>
          <Card.Header className="text-center">MyDogAPI</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={this.state.image} fluid={true} alt="DOG"/>
            </Card.Body>
        </Card>
      </>
    );
  }
}

}
