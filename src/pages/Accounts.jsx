import React, { Component } from 'react';
import { deleteAccount, getAccounts } from '../services/AccountService';
import { toast } from 'react-toastify';
import ReactModal from 'react-modal';
import { Modal } from 'bootstrap';

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
            accounts: []
        }

        this.deleteAccount = this.deleteAccount.bind(this)
        this.updateAccount = this.updateAccount.bind(this)
        this.addAccount = this.addAccount.bind(this)

    }

    deleteAccount(id) {
        if (window.confirm("Are you sure to delete this user?")) {
            deleteAccount(id).then(
                response => {
                    this.setState(
                        {
                            accounts: this.state.accounts.filter(
                                account => account.id !== id
                            )
                        }
                    )
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



    render() {
        return (
            <>




                <div className="body-wrapper">

                    <h2 className='text-center'>Account List</h2>
                    <div className='container'>
                        <button className='btn btn-primary' style={{ marginBottom: "10px" }} onClick={this.addAccount} >Create Account</button>
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
                                            <button onClick={() => this.updateAccount(user.id)} className='btn btn-info'>
                                                Update
                                            </button>
                                            <button onClick={() => this.deleteAccount(user.id)} style={{ marginLeft: '10px' }} className='btn btn-warning'>
                                                Delete
                                            </button>
                                            <button className='btn btn-success' style={{ marginLeft: '10px' }}>
                                                View
                                            </button>
                                        </td>

                                        <ReactModal isOpen={false} style={customStyles}>
                                            <img style={{
                                                width: '50px'
                                            }} src="../assets/images/avatar/1.jpg" alt="" />
                                        <h2>{user.username}</h2>
                                        <h2>{user.mail}</h2>
                                        <h2></h2>
                                        </ReactModal>

                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>

        );
    }
}

export default Accounts
