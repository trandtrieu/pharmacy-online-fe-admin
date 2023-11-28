import React, { Component } from "react";
import { createDiscountCode, getGenerateCode } from "../services/DiscountService";
import { toast } from "react-toastify";

class DiscountCodeCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            discountPercentage: "",
            expiryDate: "",
            timesUsable: "",
            condition: "",
            codeMS: "",
            discountPercentageMS: "",
            expiryDateMS: "",
            timesUsableMS: "",
            allMS: ""
        };
    }

    generateCode = (e) => {
        e.preventDefault();

        getGenerateCode().then((response) => {
            this.setState({ code: response.data });
        });
    };

    handleCodeChange = (e) => {
        this.setState({ code: e.target.value });
    };

    handlePercentChange = (e) => {
        this.setState({ discountPercentage: e.target.value });
    };

    handleExpiryChange = (e) => {
        this.setState({ expiryDate: e.target.value });
    };

    handleTimesChange = (e) => {
        this.setState({ timesUsable: e.target.value });
    };

    handleConditionChange = e => {
        this.setState({
            condition: e.target.value
        })
    }

    handleCO = e => {
        if (e.target.value == "") {
            this.setState({
                codeMS: "Cant not be empty"
            })
        } else {
            this.setState({
                codeMS: ""
            })
        }
    }

    handlePO = e => {
        if (e.target.value < 0 || e.target.value > 100) {
            this.setState({
                discountPercentageMS: "Must be between 0 -> 100%"
            })
        } else {
            this.setState({
                discountPercentageMS: ""
            })
        }

    }


    handleEO = e => {

    }


    handleTO = e => {
        if (e.target.value === "") {
            this.setState({
                timesUsableMS: "Cant not be empty"
            })
        }
    }



    handleAdd = (e) => {
        e.preventDefault();
        if (!this.state.code || !this.state.discountPercentage || !this.state.expiryDate || !this.state.timesUsable) {
            this.setState(
                {
                    allMS: "Check again!"
                }
            )
        } else {
            const { code, discountPercentage, expiryDate, timesUsable, condition } = this.state;
            const discountCode = {
                code: code,
                discountPercentage: discountPercentage,
                expiryDate: expiryDate,
                timesUsable: timesUsable,
                condition: condition,
                status: 1,
            };

            createDiscountCode(discountCode).then((response) => {
                console.log(response.data);
                this.props.history.push("/discountcodes")
                toast.success("Create successfully!")
            });
        }

    };

    handleCancel = e => {
        e.preventDefault()
        this.props.history.push("/discountcodes")
    }

    render() {
        const { code, discountPercentage, expiryDate, timesUsable } = this.state;

        return (
            <div className="body-wrapper">
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3">
                                <h3 className="text-center">Create Discount code</h3>
                                <div className="card-body">
                                    <form action="">
                                        <div className="form-group">
                                            <label htmlFor="code">
                                                Code: <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                placeholder="Code"
                                                id="code"
                                                name="code"
                                                className="form-control"
                                                value={code}
                                                type="text"
                                                onChange={this.handleCodeChange}
                                                onBlur={this.handleCO}
                                            />
                                            <button
                                                className="btn btn-primary"
                                                style={{ float: "right", marginTop: "3px" }}
                                                onClick={this.generateCode}
                                            >
                                                Generate Code
                                            </button>
                                        </div>
                                        <p className="text-danger">{this.state.codeMS}</p>

                                        <div className="form-group">
                                            <label htmlFor="discount">
                                                Discount %:<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                placeholder="Discount %"
                                                id="discount"
                                                name="discount"
                                                className="form-control"
                                                value={discountPercentage}
                                                type="number"
                                                onChange={this.handlePercentChange}
                                                onBlur={this.handlePO}
                                            />

                                        </div>
                                        <p className="text-danger">{this.state.discountPercentageMS}</p>

                                        <div className="form-group">
                                            <label htmlFor="phone">
                                                Expiry Date:<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                placeholder="Phone"
                                                id="phone"
                                                name="email"
                                                className="form-control"
                                                type="datetime-local"
                                                value={expiryDate}
                                                onChange={this.handleExpiryChange}
                                                onBlur={this.handleEO}

                                            />
                                        </div>
                                        <p className="text-danger">{this.state.expiryDateMS}</p>

                                        <div className="form-group">
                                            <label htmlFor="times">Times useable:</label>
                                            <input
                                                placeholder=""
                                                id="times"
                                                name="times"
                                                className="form-control"
                                                type="number"
                                                value={timesUsable}
                                                onChange={this.handleTimesChange}
                                                onBlur={this.handleTO}

                                            />
                                        </div>
                                        <p className="text-danger">{this.state.timesUsableMS}</p>

                                        <div className="form-group">
                                            <label htmlFor="condition">Active condition:</label>
                                            <input
                                                placeholder=""
                                                id="condition"
                                                name="condition"
                                                className="form-control"
                                                type="number"
                                                value={this.state.condition}
                                                onChange={this.handleConditionChange}
                                            />
                                        </div>
                                        
                                        <button
                                            className="btn btn-success"
                                            onClick={this.handleAdd}
                                        >
                                            Add
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            style={{ marginLeft: "10px" }}
                                            onClick={this.handleCancel}
                                        >
                                            Cancel
                                        </button>
                                        <p className="text-danger">{this.state.allMS}</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DiscountCodeCreate;
