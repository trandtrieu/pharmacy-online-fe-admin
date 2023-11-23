import React, { Component } from 'react';
import { deleteAccount, getAccounts } from '../services/AccountService';
import { toast } from 'react-toastify';
import ReactModal from 'react-modal';
import { faCalendarDays, faEnvelope, faPhone, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const customStyles = {
    content: {
        top: "35%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        width: "30%",
        transform: "translate(-40%, -10%)",
    },
};

class Accounts extends Component {


    constructor(props) {
        super(props)

        this.state = {
            accounts: [],
            isMOpen: false,
            currentUserId: null, // Track the currently viewed user
            AVATAR_URL: '../assets/images/avatar/'
        }

        this.deleteAccount = this.deleteAccount.bind(this)
        this.updateAccount = this.updateAccount.bind(this)
        this.addAccount = this.addAccount.bind(this)
        this.modelOpen = this.modelOpen.bind(this)
    }

    deleteAccount(id) {
        if (window.confirm("Are you sure to delete this user?")) {
            deleteAccount(id).then(
                response => {
                    this.setState({
                        accounts: this.state.accounts.filter(account => account.id !== id),
                        currentUserId: null, // Close the modal after deletion
                    });
                }
            )
        }
    }

    updateAccount(id) {
        this.props.history.push("/update-account/" + id)
    }

    addAccount() {
        this.props.history.push("/create-account")
    }

    componentDidMount() {
        getAccounts().then(
            response => {
                this.setState({
                    accounts: response.data
                })
            }
        )
    }

    modelOpen(userId) {
        this.setState({
            isMOpen: !this.state.isMOpen,
            currentUserId: userId, // Set the ID of the currently viewed user
        });
    }

    render() {
        return (
            <>
                <div className="body-wrapper">
                    <h2 className='text-center'>Account List</h2>
                    <div className='container'>
                        <button className='btn btn-primary' style={{ marginBottom: "10px" }} onClick={this.addAccount}>Create Account</button>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th className='col-md-3'>Username</th>
                                    <th className='col-md-3'>Full Name</th>
                                    <th className='col-md-3'>Email</th>
                                    <th className='col-md-3'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.accounts.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.username}</td>
                                        <td>{user.name}</td>
                                        <td>{user.mail}</td>
                                        <td>
                                            <button onClick={() => this.updateAccount(user.id)} className='btn btn-info'>Update</button>
                                            <button onClick={() => this.deleteAccount(user.id)} style={{ marginLeft: '10px' }} className='btn btn-warning'>Delete</button>
                                            <button onClick={() => this.modelOpen(user.id)} className='btn btn-success' style={{ marginLeft: '10px' }}>View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <ReactModal isOpen={this.state.isMOpen} style={customStyles}>
                        {this.state.accounts.map((user) => {
                            if (user.id === this.state.currentUserId) {
                                return (
                                    <div key={user.id} className='container-fluid'>

                                        <div className='text-center'>
                                        <img className='rounded' style={{ width: '130px' }} src={`${this.state.AVATAR_URL}/${user.avatar}`} alt="" />
                                        </div>

                                        <div className='row mt-3'>
                                            <FontAwesomeIcon className='col-md-2' icon={faUserTie} style={{ fontSize: '2em' }} />
                                            <h4 className='col-md-7'>{user.name}</h4>
                                        </div>

                                        <div className='row mt-3'>
                                        <FontAwesomeIcon  className='col-md-2' icon={faEnvelope} style={{ fontSize: '2em' }} />
                                            <h4 className='col-md-5'>{user.mail}</h4>
                                        </div>

                                        <div className='row mt-3'>
                                        <FontAwesomeIcon  className='col-md-2' icon={faPhone} style={{ fontSize: '2em' }} />
                                            <h4 className='col-md-5'>{user.phone}</h4>
                                        </div>

                                        <div className='row mt-3'>
                                        <FontAwesomeIcon  className='col-md-2' icon={faCalendarDays} style={{ fontSize: '2em' }} />
                                            <h4 className='col-md-5'>{user.dob}</h4>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                        <button style={{float: "right"}} onClick={() => this.modelOpen(null)} className='btn btn-primary '>Close</button>
                    </ReactModal>
                </div>
            </>
        );
    }
}

export default Accounts;
