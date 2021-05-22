import React, { Component } from 'react'
import { Table, Form, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBarMenu from './NavBarMenu';


export default class RestuarantSearch extends Component {

    constructor() {
        super()
        this.state = {
            searchData: null,
            noData: false,
            lastSearch: ""
        }
    }
    delete(id) {
        fetch("http://localhost:3000/restaurant/" + id, {
            method: 'DELETE'
        }).then((resp) => {
            resp.json().then((result) => {
                console.warn(result)
                alert("Deleted")
                this.search(this.state.lastSearch)
            })
        })
    }
    search(key) {
        console.log(key)
        this.setState({ lastSearch: key })
        if (key.length > 0) {
            fetch("http://localhost:3000/restaurant?q=" + key).then((resp) => {
                resp.json().then((result) => {
                    console.warn(result)
                    if (result.length > 0) {
                        this.setState({ searchData: result, noData: false })
                    } else {
                        this.setState({ noData: true, searchData: null })
                    }
                })
            })
        } else {
            this.setState({ noData: false, searchData: null })
        }
    }
    render() {
        return (
            <div>
                <NavBarMenu></NavBarMenu>

                <Container>
                    <h1>RestuarantSearch</h1>
                    {/* <input type='text' onChange={(event) => this.search(event.target.value)}></input> */}
                    <Form>
                        <Form.Control type="text" placeholder="Enter text" onChange={(event) => this.search(event.target.value)} />
                    </Form>
                    <div>{

                        this.state.searchData ?
                            <div>
                                {
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
                                                this.state.searchData.map((item, i) =>
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

                                }
                            </div>
                            : ""
                    }
                        {
                            this.state.noData ? <h3>No data found</h3> : null
                        }
                    </div>
                </Container>
            </div>
        )
    }
}
