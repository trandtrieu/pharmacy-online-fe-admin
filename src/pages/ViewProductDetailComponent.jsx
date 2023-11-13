import React, { Component } from 'react';
import ProductServices from '../services/ProductServices';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ViewProductDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            productDetail: ''
        }
        this.cancel = this.cancel.bind(this)

    }

    componentDidMount() {
        ProductServices.getProductById(this.state.id).then((res) => {
            this.setState({ productDetail: res.data })
        })
    }
    cancel() {
        this.props.history.push('/product-manage');
    }


    render() {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{ marginLeft: '20%', height: "100vh" }}>
                <div className="container mt-5 mb-5">
                    <button className="btn btn-success" onClick={this.cancel.bind(this)} ><FontAwesomeIcon icon={faBackward} /></button>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="images p-3">
                                            <div className="text-center p-4">
                                                {" "}
                                                <img
                                                    id="main-image"
                                                    src={`/assets/images/${this.state.productDetail.imageUrls}`}
                                                    width={250}
                                                />{" "}
                                            </div>
                                            <div className="thumbnail text-center">
                                                <p><b>Price:</b> {this.state.productDetail.price} $</p>
                                                <p><b>Quantity:</b> {this.state.productDetail.quantity}</p>
                                                <p><b>Category:</b> {this.state.productDetail.category_name}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product p-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    {" "}
                                                    <i className="fa fa-long-arrow-left" />{" "}

                                                </div>{" "}
                                                <i className="fa fa-shopping-cart text-muted" />
                                            </div>
                                            <div className="mt-4 mb-3">
                                                {" "}
                                                <span className="text-uppercase text-muted brand"><b>Brand:</b> {this.state.productDetail.brand}</span>
                                                <h5 className="text-uppercase">{this.state.productDetail.name}</h5>
                                                <div className="price d-flex flex-row align-items-center">
                                                    {" "}
                                                    <span className="act-price">Status: {this.state.productDetail.status}</span>
                                                    <div className="ml-2">
                                                        {" "}
                                                        <small className="dis-price"></small>{" "}
                                                        <span>Type: {this.state.productDetail.type}</span>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                            <p style={{ overflowY: 'auto', height: '320px' }} className="about">
                                                <p><b>DrugInteractions: </b>{this.state.productDetail.drugInteractions}</p>
                                                <p><b>Contraindications: </b>{this.state.productDetail.contraindications}</p>
                                                <p><b>Ingredients: </b>{this.state.productDetail.ingredients}</p>
                                                <p><b>Packaging: </b>{this.state.productDetail.packaging}</p>
                                                <p><b>SideEffects: </b>{this.state.productDetail.sideEffects}</p>
                                                <p><b>Storage: </b>{this.state.productDetail.storage}</p>
                                                <p><b>Packaging: </b>{this.state.productDetail.dosageAndUsage}</p>
                                                <p><b>DosageAndUsage: </b>{this.state.productDetail.dosageAndUsage}</p>
                                                <p><b>MadeIn: </b>{this.state.productDetail.madeIn}</p>
                                                <p><b>Precautions: </b>{this.state.productDetail.precautions}</p>
                                                <p><b>Indications: </b>{this.state.productDetail.indications}</p>
                                            </p>
                                            {/* <div style={{overflowY:'auto', height:'150px'}} className="sizes mt-5">
                                                


                                            </div> */}
                                            <div className="cart mt-4 align-items-center">
                                                {" "}

                                                <i className="fa fa-heart text-muted" />{" "}
                                                <i className="fa fa-share-alt text-muted" />{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}



export default ViewProductDetailComponent;