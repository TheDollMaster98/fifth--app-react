import React, {Component} from "react";
//import {Button} from "react-bootstrap"
import MyDog from "./myCardDog";
/*
create a 10 random dogs and show them in a list from Mydog component
*/

const NUMBERDOG = 3

export default class MyCardDogList extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
 
    printCard = () => {
        let CardVect = []
        for(let i = 0; i < NUMBERDOG ; i++) {
            CardVect.push(<MyDog/>)
        }

        return CardVect
    }
    
    render(){
        return(
            <div className="d-flex justify-content-center">
                {this.printCard()}
            </div>
        )
    }
}

