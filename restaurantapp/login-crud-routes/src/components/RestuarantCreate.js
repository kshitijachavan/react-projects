import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import NavBarMenu from './NavBarMenu';

export default class RestuarantCreate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            address:null,
            rating:null
        }
    }
    create(){
        
        fetch("http://localhost:3000/restaurant", {
            method:'POST',
            headers:{
                'Content-type': "application/json"
            },
            body:JSON.stringify(this.state)
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.warn(result)
                alert("added")
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu></NavBarMenu>
                <h1>Restuarant Create</h1>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="name"></input>
                    <br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="address"></input>
                    <br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="rating"></input>
                    <br /><br />
                    <Button onClick={()=>{this.create()}}>Add</Button>
                </div>
            </div>
        )
    }
}
