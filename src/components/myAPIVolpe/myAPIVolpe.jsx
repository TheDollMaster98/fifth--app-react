import React, {Component} from "react";
import {Card, Button} from 'react-bootstrap'
import axios from 'axios'
/**
 * creare un programma con un Button, quando lo premo viene
 * invocata l'API e stampa l'immagine della volpe
 */
export default class MyFox extends Component {
  constructor(){
    super()
    this.state = {
      image: "",
    }
  }
// CON AXIOS
fetchVolpe = () => {
  axios.get(`https://randomfox.ca/floof/?ref=apilist.fun`)
  .then(res => {
  this.setState({ image: res.data.image});
})
}

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
          <Card.Header className="text-center">MyFoxAPI</Card.Header>
          <Card.Img variant="top" src={this.state.image} fluid={true}/>
          <Card.Body>
            <Button onClick={this.fetchVolpe} type="button" class="btn btn-success" variant="primary" >Go to MyFox</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

}
