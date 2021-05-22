import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBarMenu from './NavBarMenu';

export default class RestuarantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    getData() {
        fetch("http://localhost:3000/restaurant").then((resp) => {
            resp.json().then((result) => {
                console.warn(result)
                this.setState({ list: result })
            })
        })
    }
    componentDidMount() {
        this.getData()
    }
    delete(id) {
        fetch("http://localhost:3000/restaurant/" + id, {
            method: 'DELETE'
        }).then((resp) => {
            resp.json().then((result) => {
                console.warn(result)
                alert("Deleted")
                this.getData()
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu></NavBarMenu>
                <h1>list</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Operations</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                    this.state.list.map((item, i) =>
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td>{item.rating}</td>
                                            <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} color="orange"></FontAwesomeIcon></Link>
                                                {/* <Link to={"/delete/"+item.id}><FontAwesomeIcon icon={faTrash} color="red"></FontAwesomeIcon></Link> */}
                                                <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"></FontAwesomeIcon></span>
                                            </td>
                                        </tr>
                                    )
                                } </tbody></Table>
                        </div>
                        : <p>loading please wait...</p>
                }
            </div>
        )
    }
}
