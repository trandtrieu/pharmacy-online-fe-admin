import React, { Component } from "react";
import ProductServices from "../services/ProductServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
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
    });
  }

  editProduct(id) {
    this.props.history.push(`/add-product/${id}`);
  }

  componentDidMount() {
    ProductServices.getProducts().then((res) => {
      this.setState({ products: res.data });
    });
  }

  addProduct() {
    this.props.history.push("/add-product/_add");
  }
  // setSearch = (event) => {
  //     // this.setState = ({ search: event.target.value });
  //     this.setState({ search: event.target.value });

  //     console.log(event.target.value)
  // }
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
              <div class="table-title">
                <div class="col-sm-6 p-4">
                  <h2>
                    Manage <b>Products</b>
                  </h2>
                </div>
              </div>
              <div style={{ width: "100%" }} className="search ">
                <div className="col-lg-4 col-6 text-left m-3 ">
                  <form action>
                    <div className="input-group">
                      <input
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for products"
                        onChange={this.setSearch}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search" />
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <table class="table table-striped table-hover">
                <span></span>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>Image</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
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
                        <td>
                          <button
                            onClick={() => this.editProduct(product.productId)}
                            className="btn"
                          >
                            <span>
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </span>
                          </button>
                          <button
                            onClick={() =>
                              this.deleteProduct(product.productId)
                            }
                            className="btn"
                          >
                            <span>
                              <FontAwesomeIcon icon={faTrash} />
                            </span>
                          </button>
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target={`#myModal${product.productId}`}
                            className="btn"
                          >
                            <span>
                              <FontAwesomeIcon icon={faEye} />
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
                {this.state.products.map((product) => (
                  <div class="container">
                    <div
                      key={product.productId}
                      class="modal fade modal-lg "
                      style={{
                        maxWidth: "10000px",
                        width: "100p0x",
                        margin: "0 auto",
                        marginTop: "",
                        paddingRight: "0",
                      }}
                      id={`myModal${product.productId}`}
                      role="dialog"
                    >
                      <div style={{ maxWidth: "700px" }} class="modal-dialog">
                        {/* <!-- Modal content--> */}
                        <div class="modal-content">
                          <div
                            style={{ backgroundColor: "#FFD333" }}
                            class="modal-header"
                          >
                            <h4 class="modal-title">
                              Detail: <b>{product.name}</b>
                            </h4>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </button>
                          </div>
                          <div class="modal-body">
                            <table class="table table-striped table-bordered table-hover">
                              <tr>
                                <th>Image</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Component</th>
                                <th>Guide</th>
                                {/* <th>Instruction</th>
                                                                    <th>Made in</th> */}
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    style={{ width: "100%" }}
                                    src={`/assets/images/${product.imageUrls[0]}`}
                                    alt=""
                                    srcSet=""
                                  />
                                </td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td>{product.component}</td>
                                <td>{product.guide}</td>
                                {/* <td>{product.instruction}</td>
                                                                    <td>{product.madeIn}</td> */}
                              </tr>
                            </table>
                            <p>
                              <strong>Instruction: </strong>
                              {product.instruction}
                            </p>
                            <p>
                              <strong>madeIn: </strong>
                              {product.madeIn}
                            </p>
                            <p>
                              <strong>Object: </strong>
                              {product.object}
                            </p>
                            <p>
                              <strong>Preservation: </strong>
                              {product.preservation}
                            </p>
                            <p>
                              <strong>Store: </strong>
                              {product.store}
                            </p>
                            <p>
                              <strong>Virtue: </strong>
                              {product.virtue}
                            </p>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-danger"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductManage;
