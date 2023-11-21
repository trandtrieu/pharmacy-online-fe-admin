import React, { Component } from "react";
import { createDiscountCode, getGenerateCode } from "../services/DiscountService";

class DiscountCodeCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            discountPercentage: "",
            expiryDate: "",
            timesUsable: "",
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

    handleAdd = (e) => {
        e.preventDefault();
        const { code, discountPercentage, expiryDate, timesUsable } = this.state;
        const discountCode = {
            code: code,
            discountPercentage: discountPercentage,
            expiryDate: expiryDate,
            timesUsable: timesUsable,
            status: 1,
        };

        createDiscountCode(discountCode).then((response) => {
            console.log(response.data);
            this.props.history.push("/discountcodes")
        });
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
                                <h3 className="text-center">Create Account</h3>
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
                                            />
                                            <button
                                                className="btn btn-primary"
                                                style={{ float: "right", marginTop: "3px" }}
                                                onClick={this.generateCode}
                                            >
                                                Generate Code
                                            </button>
                                        </div>
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
                                            />
                                        </div>
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
                                            />
                                        </div>
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
