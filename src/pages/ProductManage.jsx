/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ProductServices from "../services/ProductServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faEye,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

class ProductManage extends Component {
  constructor(props) {
    super(props);
    this.searchTimeout = null;
    this.state = {
      products: [],
      search: "",
    };
    this.addProduct = this.addProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  deleteProduct(id) {
    ProductServices.deleteProduct(id).then((res) => {
      this.setState({
        products: this.state.products.filter(
          (product) => product.productId !== id
        ),
      });
      toast.success("Delete product successfully");
    });
  }

  editProduct(id) {
    this.props.history.push(`/add-product/${id}`);
  }
  viewProductById(id) {
    this.props.history.push(`/view-product-by-id/${id}`);
  }

  componentDidMount() {
    ProductServices.getProducts().then((res) => {
      this.setState({ products: res.data });
      console.log(res.data);
    });
  }

  addProduct() {
    this.props.history.push("/add-product/_add");
  }
  setSearch = (event) => {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    const searchTerm = event.target.value;

    this.searchTimeout = setTimeout(() => {
      this.setState({ search: searchTerm.toLowerCase() });
      console.log(searchTerm);
    }, 400);
  };

  render() {
    return (
      <div className="body-wrapper">
        <div class="container p-0">
          <div class="table-responsive">
            <div class="table-wrapper">
              <div style={{ width: "100%" }} className="search ">
                <div className="row col-lg-12 col-12  m-3 ">
                  <div className="col-sm-6">
                    <form action>
                      <div className="input-group">
                        <input
                          name="search"
                          type="text"
                          className="form-control"
                          placeholder="Search for products"
                          onChange={this.setSearch}
                        />
                      </div>
                    </form>
                  </div>
                  <div class="col-sm-6">
                    <a
                      onClick={this.addProduct}
                      class="btn btn-success"
                      data-toggle="modal"
                    >
                      <i class="material-icons">
                        <FontAwesomeIcon icon={faPlus} />
                      </i>{" "}
                      <span style={{ marginTop: "0" }}>Add New Product</span>
                    </a>
                  </div>
                </div>
              </div>
              <table class="table table-hover">
                <span></span>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>Image</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products
                    .filter((product) => {
                      const searchTerm = this.state.search.toLowerCase();
                      const productName = product.name.toLowerCase();
                      return searchTerm === ""
                        ? true
                        : productName.includes(searchTerm);
                    })
                    .map((product) => (
                      <tr key="{product.productId}">
                        <td>
                          <img
                            style={{ width: "100%" }}
                            src={`/assets/images/${product.imageUrls[0]}`}
                            alt=""
                            srcSet=""
                          />
                        </td>
                        <td>{product.name}</td>
                        <td> {product.brand}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>
                          <a
                            onClick={() => this.editProduct(product.productId)}
                          >
                            <span style={{ marginRight: "10px" }}>
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </span>
                          </a>
                          <a
                            onClick={() =>
                              this.deleteProduct(product.productId)
                            }
                          >
                            <span style={{ marginRight: "10px" }}>
                              <FontAwesomeIcon icon={faTrash} />
                            </span>
                          </a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target={`#myModal${product.productId}`}
                            onClick={() =>
                              this.viewProductById(product.productId)
                            }
                          >
                            <span>
                              <FontAwesomeIcon icon={faEye} />
                            </span>
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductManage;
