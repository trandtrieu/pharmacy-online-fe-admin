/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ProductServices from "../services/ProductServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
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
      products_search: [],
      products: [],
      search: "",
      currentPage: 1,
      recordPerPage: 3,
      searchResult: "",
    };
    this.addProduct = this.addProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  deleteProduct(id) {
    const shouldDelete = window.confirm("Are you sure you want to delete this product?");

    if (shouldDelete) {
      ProductServices.deleteProduct(id).then((res) => {
        this.setState({
          products: this.state.products.filter(
            (product) => product.productId !== id
          ),
        });
        toast.success("Delete product successfully");
      });
    }
  }

  editProduct(id) {
    this.props.history.push(`/add-product/${id}`);
  }
  viewProductById(id) {
    this.props.history.push(`/view-product-by-id/${id}`);
  }

  componentDidMount() {
    ProductServices.getProducts_search().then((res) => {
      this.setState({ products_search: res.data });
      console.log("product search :", res.data);
    });
    this.getBooksByPagination(this.state.currentPage);
  }

  getBooksByPagination(currentPage) {
    currentPage = currentPage - 1;
    axios.get("http://localhost:8080/pharmacy-online/admin/products/list-products?page=" + currentPage + "&size=" + this.state.recordPerPage)
      .then(response => response.data).then((data) => {
        this.setState({
          products: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1
        });
      });
  }

  //Writing All the pagination functions
  //Show Next page
  showNextPage = () => {
    if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.recordPerPage)) {
      this.getBooksByPagination(this.state.currentPage + 1);
    }
  };
  //Show Last Page
  showLastPage = () => {
    if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.recordPerPage)) {
      this.getBooksByPagination(Math.ceil(this.state.totalElements / this.state.recordPerPage));
    }
  };
  //Show First page
  showFirstPage = () => {
    let firstPage = 1;
    if (this.state.currentPage > firstPage) {
      this.getBooksByPagination(firstPage);
    }
  };
  //Show previous page
  showPrevPage = () => {
    let prevPage = 1
    if (this.state.currentPage > prevPage) {
      this.getBooksByPagination(this.state.currentPage - prevPage);
    }
  };

  addProduct() {
    this.props.history.push("/add-product/_add");
  }
  setSearch = (event) => {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    const searchTerm = event.target.value;

    this.searchTimeout = setTimeout(() => {
      const searchValue = searchTerm.toLowerCase();
      this.setState({
        search: searchValue,
        searchResult: searchValue
          ? this.state.products_search.filter((product) =>
            product.name.toLowerCase().includes(searchValue)
          )
          : [],
      });
    }, 400);
  };

  render() {
    const { products, currentPage, totalPages, recordPerPage, searchResult, search } = this.state;
    const displayProducts = search ? searchResult : products;
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
              <table className="table rounded table-hover shadow">
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>Image</th>
                    <th >Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Brand</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayProducts.length === 0 ? (
                    <tr align="center">
                      <td colSpan="5">No Record Found</td>
                    </tr>
                  ) : (
                    displayProducts.map((product, index) => (
                      <tr key={product.id}>
                        {/* <td>{(recordPerPage * (currentPage - 1)) + index + 1}</td> */}
                        <td>
                          <img
                            style={{ width: "100%" }}
                            src={`../assets/images/${product.imageUrls[0]}`}
                            alt=""
                            srcSet=""
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.brand}</td>

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
                    ))
                  )}
                </tbody>
              </table>
              {search === "" ? (
                <div>
                  <div style={{ float: 'left', fontFamily: 'monospace', color: '#0275d8' }}>
                    Page {currentPage} of {totalPages}
                  </div>
                  <div style={{ float: 'right' }}>
                    <div class="clearfix"></div>
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li class="page-item"><a type="button" class="page-link" disabled={currentPage === 1 ? true : false} onClick={this.showPrevPage}>Previous</a></li>
                        <li class="page-item"><a type="button" class="page-link" disabled={currentPage === 1 ? true : false} onClick={this.showFirstPage}>First</a></li>
                        <li class="page-item"><a type="button" class="page-link" disabled={currentPage === totalPages ? true : false} onClick={this.showNextPage}>Next</a></li>
                        <li class="page-item"><a type="button" class="page-link" disabled={currentPage === totalPages ? true : false} onClick={this.showLastPage}>Last</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              ) : (
                null
              )}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductManage;
