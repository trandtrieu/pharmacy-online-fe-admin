import React, { Component } from "react";
import PrescriptionServices from "../services/PrescriptionServices";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCopy,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import CartServices from "../services/CartServices";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Modal from "react-modal";
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
class PrescriptionDetailHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      phone: "",
      email: "",
      imageFile: null,
      note: "",
      createdDate: "",
      createdTime: "",
      account_id: "",
      carts: [],
      isDeleteConfirmationOpen: false,
      cartItemToDelete: null,
    };
  }
  async componentDidMount() {
    await this.fetchPrescriptionDetails();
    await this.fetchCartData();
  }

  async fetchPrescriptionDetails() {
    try {
      const res = await PrescriptionServices.getPrescriptionDetail(
        this.state.id
      );
      const prescription = res.data;
      this.setState({
        name: prescription.name,
        phone: prescription.phone,
        email: prescription.email,
        note: prescription.note,
        createdDate: prescription.createdDate,
        createdTime: prescription.createdTime,
        account_id: prescription.account_id,
        imageFile: prescription.imageUrls || null,
      });
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching prescription details:", error);
    }
  }

  async fetchCartData() {
    try {
      const cartRes = await CartServices.getListCartByAccountId(
        this.state.account_id
      );
      this.setState({ carts: cartRes.data });
      console.log(cartRes.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  }
  calculateTotalPrice() {
    const { carts } = this.state;
    let total = 0;
    for (const cartItem of carts) {
      total += cartItem.productDetail.price * cartItem.quantity;
    }

    if (total >= 100) {
      return {
        total: total,
        isEligibleForFreeShipping: true,
      };
    } else {
      return {
        total: total,
        isEligibleForFreeShipping: false,
      };
    }
  }

  handleDeleteConfirmed = (cartItem) => {
    // Perform the deletion here
    CartServices.removeFromCart(cartItem.cartId)
      .then(() => {
        const updatedCarts = this.state.carts.filter(
          (cart) => cart.cartId !== cartItem.cartId
        );
        this.setState({
          carts: updatedCarts,
          isDeleteConfirmationOpen: false,
          cartItemToDelete: null,
        });
        toast.success("Delete product cart successfully!");
      })
      .catch((error) => {
        console.error("Lỗi xóa sản phẩm khỏi giỏ hàng:", error);
        this.closeDeleteConfirmation();
      });
  };

  handleRemoveFromCart = (cartItem) => {
    this.openDeleteConfirmation(cartItem);
  };

  openDeleteConfirmation = (cartItem) => {
    this.setState({
      isDeleteConfirmationOpen: true,
      cartItemToDelete: cartItem,
    });
  };

  closeDeleteConfirmation = () => {
    this.setState({
      isDeleteConfirmationOpen: false,
      cartItemToDelete: null,
    });
  };

  handleQuantityChange = (cartId, newQuantity) => {
    const updatedCarts = this.state.carts.map((cartItem) => {
      if (cartItem.cartId === cartId) {
        return {
          ...cartItem,
          quantity: newQuantity,
        };
      }
      return cartItem;
    });

    this.setState({ carts: updatedCarts }, () => {
      this.handleUpdateCart();
    });
  };

  handleUpdateCart = () => {
    const updatedCartData = this.state.carts.map((cartItem) => {
      return {
        cartId: cartItem.cartId,
        quantity: cartItem.quantity,
      };
    });

    CartServices.updateCart(updatedCartData)
      .then(() => {
        toast.success("Cart updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating cart:", error);
      });
  };

  copyToClipboard = () => {
    const idToCopy = this.state.id;
    const tempInput = document.createElement("input");
    tempInput.value = idToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    toast.success("Copy prescription successfully");
  };
  toBuildPrescription(account_id) {
    this.props.history.push(`/product-build/${account_id}`);
  }
  render() {
    const { total, isEligibleForFreeShipping } = this.calculateTotalPrice();

    return (
      <>
        <Modal
          isOpen={this.state.isDeleteConfirmationOpen}
          onRequestClose={this.closeDeleteConfirmation}
          contentLabel="Delete Confirmation"
          style={customStyles}
        >
          <h4>Confirm Deletion</h4>
          <p>Are you sure you want to delete this item from your cart?</p>
          <button
            onClick={() =>
              this.handleDeleteConfirmed(this.state.cartItemToDelete)
            }
            className="btn btn-danger"
          >
            Delete
          </button>
          &nbsp;
          <button
            onClick={this.closeDeleteConfirmation}
            className="btn btn-info"
          >
            Cancel
          </button>
        </Modal>
        <div className="body-wrapper">
          <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item d-block d-xl-none">
                  <a
                    className="nav-link sidebartoggler nav-icon-hover"
                    id="headerCollapse"
                    href="/"
                  >
                    <i className="ti ti-menu-2" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-icon-hover" href="/">
                    <i className="ti ti-bell-ringing" />
                    <div className="notification bg-primary rounded-circle" />
                  </a>
                </li>
              </ul>
              <div
                className="navbar-collapse justify-content-end px-0"
                id="navbarNav"
              >
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                  <a href="/" target="_blank" className="btn btn-primary">
                    Download Free
                  </a>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link nav-icon-hover"
                      href="/"
                      id="drop2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="../assets/images/profile/user-1.jpg"
                        alt=""
                        width={35}
                        height={35}
                        className="rounded-circle"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <a
                          href="/"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-user fs-6" />
                          <p className="mb-0 fs-3">My Profile</p>
                        </a>
                        <a
                          href="/"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-mail fs-6" />
                          <p className="mb-0 fs-3">My Account</p>
                        </a>
                        <a
                          href="/"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-list-check fs-6" />
                          <p className="mb-0 fs-3">My Task</p>
                        </a>
                        <a
                          href="./authentication-login.html"
                          className="btn btn-outline-primary mx-3 mt-2 d-block"
                        >
                          Logout
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <div className="container-fluid">
            <div className="row">
              <h3>
                Code: #{this.state.id} &nbsp;
                <FontAwesomeIcon
                  icon={faCopy}
                  onClick={() => this.copyToClipboard(this.state.id)}
                />
              </h3>
              <p>
                {this.state.createdDate} &nbsp; {this.state.createdTime}
              </p>
              <p>
                <strong>
                  Contact: {this.state.email} - {this.state.phone}
                </strong>
              </p>
              <p>
                <strong>Note: {this.state.note}</strong>
              </p>
            </div>
            <div className="card bg-light">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card">
                      <img
                        src={`../assets/images/${this.state.imageFile}`}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 d-flex align-items-stretch">
                    <div className="card w-100">
                      <div className="card-body p-4">
                        <div class="d-flex justify-content-between mb-4">
                          <h3 className=" fw-semibold">
                            {this.state.name}'s cart
                          </h3>
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              this.toBuildPrescription(this.state.account_id)
                            }
                          >
                            Build prescription
                          </button>
                        </div>
                        <div className="row">
                          <div className="col-md-10">
                            <div
                              className="progress mb-2"
                              role="progressbar"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: `${(total / 100) * 100}%`,
                                  backgroundColor:
                                    total >= 100 ? "#B8E8FC" : "#A2FF86",
                                }}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <h6
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="Pharmacity provides free delivery for orders with a value of 300$ or higher."
                            >
                              Policy <FontAwesomeIcon icon={faCircleQuestion} />
                            </h6>
                          </div>
                        </div>
                        <ReactTooltip
                          id="my-tooltip"
                          type="error"
                          place="top"
                        />

                        <div className="table-responsive">
                          {this.state.carts.length === 0 ? (
                            <tr>No items in the cart</tr>
                          ) : (
                            <table className="table text-nowrap mb-0 align-middle">
                              <thead className="text-dark fs-4">
                                <tr>
                                  <th className="border-bottom-0">
                                    <h6 className="fw-semibold mb-0">Id</h6>
                                  </th>
                                  <th className="border-bottom-0">
                                    <h6 className="fw-semibold mb-0">
                                      Product
                                    </h6>
                                  </th>
                                  <th className="border-bottom-0">
                                    <h6 className="fw-semibold mb-0">Price</h6>
                                  </th>
                                  <th className="border-bottom-0">
                                    <h6 className="fw-semibold mb-0">
                                      Quantity
                                    </h6>
                                  </th>
                                  <th className="border-bottom-0">
                                    <h6 className="fw-semibold mb-0">Action</h6>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.state.carts.map((cartItem) => (
                                  <tr key={cartItem.productId}>
                                    <td className="border-bottom-0">
                                      <h6 className="fw-semibold mb-0">
                                        {cartItem.cartId}
                                      </h6>
                                    </td>
                                    <td className="border-bottom-0">
                                      <h6 className="fw-semibold mb-1 product-link ">
                                        {cartItem.productDetail.name}
                                      </h6>
                                      <span className="fw-normal">
                                        {cartItem.productDetail.brand}
                                      </span>
                                    </td>
                                    <td className="border-bottom-0">
                                      <p className="mb-0 fw-normal">
                                        {cartItem.productDetail.price}
                                      </p>
                                    </td>
                                    <td className="border-bottom-0">
                                      <input
                                        min={0}
                                        type="number"
                                        value={cartItem.quantity}
                                        onChange={(e) =>
                                          this.handleQuantityChange(
                                            cartItem.cartId,
                                            e.target.value
                                          )
                                        }
                                      />
                                    </td>
                                    <td className="border-bottom-0">
                                      <h6 className="fw-semibold mb-0 fs-4">
                                        <FontAwesomeIcon
                                          icon={faTrash}
                                          onClick={() =>
                                            this.handleRemoveFromCart(cartItem)
                                          }
                                        />
                                      </h6>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          )}
                        </div>
                        <div className=" mb-5">
                          <div className="p-3">
                            <div className="d-flex justify-content-between mt-2">
                              <h5>Cart Total</h5>
                              <h5>$ {total}</h5>
                            </div>
                            <div className="d-flex justify-content-between mt-2 mb-4">
                              <h6>Shipping Cost</h6>
                              <h6>
                                {isEligibleForFreeShipping ? "Free" : "$ 30"}
                              </h6>
                            </div>

                            <button className="btn btn-block btn-primary">
                              Proceed To Checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PrescriptionDetailHandle;
