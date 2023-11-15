import React, { Component } from "react";
import ProductServices from "../services/ProductServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";
import CartServices from "../services/CartServices";
import { toast } from "react-toastify";
class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.searchTimeout = null;
    this.state = {
      account_id: this.props.match.params.account_id,
      products: [],
      search: "",
    };
  }
  addProductToCart(product_id) {
    CartServices.addToCart(this.state.account_id, product_id, 1)
      .then((response) => {
        console.log("Product added to cart:", response.data);
        toast.success("Product added to cart successfully!");
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  }
  componentDidMount() {
    ProductServices.getProducts().then((res) => {
      this.setState({ products: res.data });
    });
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
        <div className="container p-0">
          <div className="table-responsive">
            <div className="table-wrapper">
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
              <table className="table table-striped table-hover">
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
                            src={`../assets/images/${product.imageUrls[0]}`}
                            alt=""
                            srcSet=""
                            width={10}
                            height={55}
                          />
                        </td>
                        <td>{product.name}</td>
                        <td> {product.brand}</td>
                        <td>{product.price}</td>
                        <td>
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
                          <button
                            className="btn"
                            onClick={() =>
                              this.addProductToCart(product.productId)
                            }
                          >
                            <span>
                              <FontAwesomeIcon icon={faCartShopping} />
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
                {this.state.products.map((product) => (
                  <div className="container">
                    <div
                      key={product.productId}
                      className="modal fade modal-lg "
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
                      <div
                        style={{ maxWidth: "700px" }}
                        className="modal-dialog"
                      >
                        {/* <!-- Modal content--> */}
                        <div className="modal-content">
                          <div
                            style={{ backgroundColor: "#FFD333" }}
                            className="modal-header"
                          >
                            <h4 className="modal-title">
                              Detail: <b>{product.name}</b>
                            </h4>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </button>
                          </div>
                          <div className="modal-body">
                            <table className="table table-striped table-bordered table-hover">
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
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
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

export default ProductItem;
