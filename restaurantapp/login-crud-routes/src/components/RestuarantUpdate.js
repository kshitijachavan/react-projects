import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import NavBarMenu from './NavBarMenu';

export default class RestuarantUpdate extends Component {
    constructor() {
        super()
        this.state = {
            name: null,
            address: null,
            rating: null,
            id: null
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/restaurant/" + this.props.match.params.id).then((resp) => {
            resp.json().then((result) => {
                console.warn(result)
                this.setState({
                    name: result.name,
                    address: result.address,
                    rating: result.rating,
                    id: result.id
                })
            })
        })
    }
    update() {
        fetch("http://localhost:3000/restaurant/" + this.state.id, {
            method: 'PUT',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((resp) => {
            resp.json().then((result) => {
                console.warn(result)
                alert("updated")
                this.props.history.push('/list')
            })
        })

    }
    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                <NavBarMenu></NavBarMenu>
                <h1>update</h1>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="name" value={this.state.name}></input>
                    <br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="address" value={this.state.address}></input>
                    <br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="rating" value={this.state.rating}></input>
                    <br /><br />
                    <Button onClick={() => { this.update() }}>Update</Button>
                </div>
            </div>
        )
    }
}
