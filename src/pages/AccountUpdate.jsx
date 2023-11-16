import React, { Component } from 'react';
import {getAccountById, updateAccount} from '../services/AccountService';

class AccountUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: "",
            username:"",
            mail: "",
            address: "",
            dob: "",
            phone: ""
        }

        this.changeNameHandler = this.changeNameHandler.bind(this)
        this.changeMailHandler = this.changeMailHandler.bind(this)
        this.changeAddressHandler = this.changeAddressHandler.bind(this)
        this.changeDOBHandler = this.changeDOBHandler.bind(this)
        this.changePhoneHandler = this.changePhoneHandler.bind(this)
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this)

    }

    componentDidMount() {
        getAccountById(this.state.id).then(
            response => {
                let employee = response.data
                this.setState(
                    {
                        name: employee.name,
                        mail: employee.mail,
                        dob: employee.dob,
                        phone: employee.phone,
                        username: employee.username,
                    }
                )
            }
        )
    }

    updateUser = e => {
        e.preventDefault();
    
        // Validation
        if (!this.state.name) {
            alert('Name cannot be empty');
            return;
        }
    
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.state.mail)) {
            alert('Invalid email address');
            return;
        }
    
        // Phone number validation
        const phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(this.state.phone)) {
            alert('Phone number must be 11 digits');
            return;
        }
    
        // If validation passes, proceed with the update
        let user = {
            name: this.state.name,
            mail: this.state.mail,
            dob: this.state.dob,
            phone: this.state.phone,
            username : this.state.username
        };
    
        updateAccount(this.state.id, user).then(response => {
            this.props.history.push('/accounts');
        });
    }

    cancel = () => {
        this.props.history.push('/accounts')
    }

    changeUsernameHandler = e => {
        this.setState({
            username : e.target.value
        })
    }

    changeNameHandler = e => {
        this.setState({
            name: e.target.value
        })
    }

    changeMailHandler = e => {
        this.setState({
            mail: e.target.value
        })
    }


    changeAddressHandler = e => {
        this.setState({
            address: e.target.value
        })
    }

    changeDOBHandler = e => {
        this.setState({
            dob: e.target.value
        })
    }

    changePhoneHandler = e => {
        this.setState({
            phone: e.target.value
        })
    }


    render() {
        return (
            <>
                <div className="body-wrapper">
                    <div>
                        <div className='container'>
                            <div className='row'>
                                <div className='card col-md-6 offset-md-3'>
                                    <h3 className='text-center'>Update User</h3>
                                    <div className='card-body'>
                                        <form action="">
                                            <div className='form-group'>
                                                <label htmlFor="name">Name:</label>
                                                <input placeholder='Name' id='name' name='name' className='form-control' value={this.state.name} onChange={this.changeNameHandler} type="text" />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor="Username">Username:</label>
                                                <input placeholder='Username' id='Username' name='name' className='form-control' value={this.state.username} onChange={this.changeUsernameHandler} type="text" />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor="mail">Mail:</label>
                                                <input placeholder='Mail' id="mail" name='mail' className='form-control' value={this.state.mail} onChange={this.changeMailHandler} type="email" />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor="address">Address:</label>
                                                <input placeholder='Address' id="address" name='address' className='form-control' value={"Quang nam"} onChange={this.changeAddressHandler} type="text" />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor="dob">Date of birth:</label>
                                                <input placeholder='DOB' id="dob" name='email' className='form-control' value={this.state.dob} onChange={this.changeDOBHandler} type="date" />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor="phone">Phone:</label>
                                                <input placeholder='Phone'  id="phone" name='email' className='form-control' value={this.state.phone} onChange={this.changePhoneHandler} type="number" />
                                            </div>
                                            <button className='btn btn-success' onClick={this.updateUser}>Save</button>
                                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div >

                    </div >
                </div>

            </>

        );
    }
}

export default AccountUpdate;