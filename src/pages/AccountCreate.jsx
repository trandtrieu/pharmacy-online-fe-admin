import React, { Component } from 'react';
import { addAccount } from '../services/AccountService';
import { toast } from 'react-toastify';

class AccountCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            username: "",
            mail: "",
            dob: "",
            password: "",
            phone: "",
            nameMS: "",
            usernameMS: "",
            mailMS: "",
            dobMS: "",
            passwordMS: "",
            phoneMS: "",
            allMS: ""
        }

        this.changeNameHandler = this.changeNameHandler.bind(this)
        this.changeMailHandler = this.changeMailHandler.bind(this)
        this.changeDOBHandler = this.changeDOBHandler.bind(this)
        this.changePhoneHandler = this.changePhoneHandler.bind(this)
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this)
        this.changePasswordHandler = this.changePasswordHandler.bind(this)
        this.createAccount = this.createAccount.bind(this)
        this.validateName = this.validateName.bind(this)
        this.validateMail = this.validateMail.bind(this)
        this.validatePhone = this.validatePhone.bind(this)
        this.validateUsername = this.validateUsername.bind(this)
        this.validatePassword = this.validatePassword.bind(this)
        this.validateDob = this.validateDob.bind(this)
    }

    validateName = (e) => {
        const name = e.target.value

        if (name.trim() === "") {
            this.setState({
                nameMS: "Name cannot be empty"
            })
        } else {
            this.setState({
                nameMS: ""
            })
        }
    }

    validateMail = e => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!emailRegex.test(this.state.mail)) {
            this.setState({
                mailMS: "Invalid email format"
            })
        } else {
            this.setState({
                mailMS: ""
            })
        }
    }

    validatePhone = e => {
        const phoneRegex = /^\d{10}$/

        if (!phoneRegex.test(this.state.phone)) {
            this.setState(
                {
                    phoneMS: "Phone must be 10 digits"
                }
            )
        } else {
            this.setState(
                {
                    phoneMS: ""
                }
            )
        }
    }

    validateUsername = e => {
        const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{7,}$/

        if (!usernameRegex.test(this.state.username)) {
            this.setState(
                {
                    usernameMS: "Username must be atleast 8 letter and start with a letter"
                }
            )
        } else {
            this.setState(
                {
                    usernameMS: ""
                }
            )
        }
    }

    validatePassword = e => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{7,}$/
        if (!passwordRegex.test(this.state.password)) {
            this.setState(
                {
                    passwordMS: "Password must be atleast 8 letter and contain 1 number and 1 Uppercase letter"
                }
            )
        } else {
            this.setState(
                {
                    passwordMS: ""
                }
            )
        }
    }

    validateDob = e => {
        const currentDate = new Date();
        const selectedDOB = new Date(this.state.dob);

        if (selectedDOB >= currentDate) {
            this.setState(
                {
                    dobMS: 'Date of birth cannot be in the future'
                });
        }

        const minAgeDate = new Date();
        minAgeDate.setFullYear(minAgeDate.getFullYear() - 18); // Minimum age of 10 years
        if (selectedDOB > minAgeDate) {
            this.setState(
                {
                    dobMS: 'You must enough 18 year old'
                });
        }
    }





    createAccount = e => {
        e.preventDefault();
        if (!this.state.name || !this.state.mail || !this.state.phone || !this.state.username || !this.state.password) {
            this.setState(
                {
                    allMS: "Check again!"
                }
            )
        } else {
            // If validation passes, proceed with the update
            let account = {
                name: this.state.name,
                username: this.state.username,
                password: this.state.password,
                mail: this.state.mail,
                dob: this.state.dob,
                phone: this.state.phone
            };

            addAccount(account).then(response => {
                this.props.history.push('/accounts');
                toast.success('Create account successully!')
            });
        }
    }

    cancel = () => {
        this.props.history.push('/accounts')
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

    changeUsernameHandler = e => {
        this.setState({
            username: e.target.value
        })
    }

    changePasswordHandler = e => {
        this.setState({
            password: e.target.value
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
                                    <h3 className='text-center'>Create Account</h3>
                                    <div className='card-body'>
                                        <form action="">
                                            <div className='form-group'>
                                                <label htmlFor="name">Name: <span style={{ color: 'red' }}>*</span></label>
                                                <input placeholder='Name' id='name' name='name' className='form-control' value={this.state.name} onBlur={this.validateName} onChange={this.changeNameHandler} type="text" />
                                            </div>
                                            <p className='text-danger'>{this.state.nameMS}</p>
                                            <div className='form-group'>
                                                <label htmlFor="mail">Mail:<span style={{ color: 'red' }}>*</span></label>
                                                <input placeholder='Mail' id="mail" name='mail' className='form-control' value={this.state.mail} onBlur={this.validateMail} onChange={this.changeMailHandler} type="email" />
                                            </div>
                                            <p className='text-danger'>{this.state.mailMS}</p>
                                            <div className='form-group'>
                                                <label htmlFor="phone">Phone:<span style={{ color: 'red' }}>*</span></label>
                                                <input placeholder='Phone' id="phone" name='email' className='form-control' value={this.state.phone} onBlur={this.validatePhone} onChange={this.changePhoneHandler} type="number" />
                                            </div>
                                            <p className='text-danger'>{this.state.phoneMS}</p>
                                            <div className='form-group'>
                                                <label htmlFor="dob">Date of birth:</label>
                                                <input placeholder='DOB' id="dob" name='email' defaultValue="2012-01-01" className='form-control' onBlur={this.validateDob} value={this.state.dob} onChange={this.changeDOBHandler} type="date" />
                                            </div>
                                            <p className='text-danger'>{this.state.dobMS}</p>
                                            <div className='form-group'>
                                                <label htmlFor="username">Username:<span style={{ color: 'red' }}>*</span></label>
                                                <input placeholder='Username' id="username" name='username' className='form-control' onBlur={this.validateUsername} value={this.state.username} onChange={this.changeUsernameHandler} type="text" />
                                            </div>
                                            <p className='text-danger'>{this.state.usernameMS}</p>
                                            <div className='form-group'>
                                                <label htmlFor="password">Password:<span style={{ color: 'red' }}>*</span></label>
                                                <input placeholder='Password' id="password" name='password' className='form-control' onBlur={this.validatePassword} value={this.state.password} onChange={this.changePasswordHandler} type="text" />
                                            </div>
                                            <p className='text-danger'>{this.state.passwordMS}</p>
                                            <button className='btn btn-success' onClick={this.createAccount}>Add</button>
                                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                            <p className='text-danger'>{this.state.allMS}</p>
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

export default AccountCreate;