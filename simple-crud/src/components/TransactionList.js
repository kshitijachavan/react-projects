import React, { Component } from 'react'
import TransactionForm from './TransactionForm'

class TransactionList extends Component {
    //defining states
    constructor() {
        super();
        this.state = {
            currentIndex: -1,
            list: this.returnList()
        }
    }
    //listing
    returnList = () => {
        if (localStorage.getItem("transactios") == null)
            localStorage.setItem("transactios", JSON.stringify([]))
        return JSON.parse(localStorage.getItem("transactios"))
    }
    //add or edit operation
    onAddOrEdit = (data) => {
        var list = this.returnList()
        //if add
        if (this.state.currentIndex == -1)
            list.push(data)
        else
            //else edit
            list[this.state.currentIndex] = data
        localStorage.setItem('transactios', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }
    //update the currentindex value
    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }
    //delete: remove row from list array
    handleDelete = index => {
        var list = this.returnList()
        list.splice(index, 1)
        localStorage.setItem('transactios', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }
    render() {
        return (
            <div>
                <TransactionForm onAddOrEdit={this.onAddOrEdit}
                    currentIndex={this.state.currentIndex}
                    list={this.state.list} />
                <hr />
                list
                <table>
                    <tbody>
                        {
                            this.state.list.map((item, index) => {
                                return (<tr key={index}>
                                    <td>{item.accountno}</td>
                                    <td>{item.ifsc}</td>
                                    <td>{item.branchname}</td>
                                    <td>{item.amount}</td>
                                    <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                    <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
                                </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TransactionList;