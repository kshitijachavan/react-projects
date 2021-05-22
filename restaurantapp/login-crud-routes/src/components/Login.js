import React, { Component } from 'react'
import { Button } from 'react-bootstrap'


export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            password: ""
        }
    }
    login() {
        console.log(this.state)
        if (this.state.name && this.state.password) {
            fetch("http://localhost:3000/login?q=" + this.state.name).then((resp) => {
                resp.json().then((result) => {
                    console.warn(result)
                    if (result.length > 0) {
                        localStorage.setItem('login', JSON.stringify(result))
                        this.props.history.push('list')
                    } else {
                        alert("please check user name and password")
                    }
                })
            })
        } else {
            alert("please enter name and password")
        }
    }
    render() {
        return (
            <div>
                <input type="text" name="user" placeholder="enter username" onChange={(event) => this.setState({ name: event.target.value })} ></input>
                <br /><br />
                <input type="password" name="password" placeholder="enter password" onChange={(event) => this.setState({ password: event.target.value })} ></input>
                <br /><br />
                <Button onClick={() => this.login()}>Login</Button>
            </div>
        )
    }
}
