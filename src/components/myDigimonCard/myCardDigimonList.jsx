import React, { Component } from "react";
import MyCardDigimon from "./myCardDigimon";
import axios from "axios";
import { Col } from "react-bootstrap";
/*
render===> vettore di tutti i digimon
*/
export default class MyCardDigimonList extends Component {
  constructor() {
    super();
    this.state = {
     digimon: []
    };
  }
  componentDidMount(){
    this.fetchDigimon()
  } 
  
  // CON AXIOS
  fetchDigimon = () => {
    axios.get(`https://digimon-api.vercel.app/api/digimon`)
    .then(res => {
      this.setState({digimon: res.data});
  })
  }
  render() {
    return (
      <>
        {
          this.state.digimon.map((item => (
            <Col md ={3} className="mt-3">
          
              <MyCardDigimon name={item.name} img={item.img} level={item.level}/>
        
           </Col>
          )
          ))
  }
      </>
    );
  }
}
