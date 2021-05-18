import React, { Component } from 'react'

class TransactionForm extends Component {
    //define state and props(will give error of undefined index if props inside brackets is not mention[eg:TypeError: Cannot read property 'currentIndex ' of undefined])
    constructor(props) {
        super(props);
        this.state = {
            ...this.returnStateObject()
        }
    }
    //will give values to input feild
    componentDidUpdate(previousProps) {
        if (previousProps.currentIndex != this.props.currentIndex || previousProps.list.length != this.props.list.length)
            this.setState({
                ...this.returnStateObject()
            })

    }
    returnStateObject() {
        //initial stage
        if (this.props.currentIndex == -1)
            return {
                accountno: '',
                ifsc: '',
                branchname: '',
                amount: ''
            }
        else
            //update
            return this.props.list[this.props.currentIndex]
    }
    //onchange input values
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //form onsubmit
    handleSubmit = e => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off" >
                <input name="accountno" placeholder="accountno" value={this.state.accountno} onChange={this.handleInput} />
                <br />
                <input name="ifsc" placeholder="ifsc" value={this.state.ifsc} onChange={this.handleInput} />
                <br />
                <input name="branchname" placeholder="branchname" value={this.state.branchname} onChange={this.handleInput} />
                <br />
                <input name="amount" placeholder="amount" value={this.state.amount} onChange={this.handleInput} />
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}
export default TransactionForm;