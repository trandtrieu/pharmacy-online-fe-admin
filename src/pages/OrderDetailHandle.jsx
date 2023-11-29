import React, { Component } from "react";
import SubHeaderComponent from "../layouts/SubHeaderComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertDollarToVND } from "../utils/cartutils";
import {
  faCheck,
  faCopy,
  faGears,
  faHouse,
  faTrash,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import OrderService from "../services/OrderService";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { Button } from "bootstrap";
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
class OrderDetailHandle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      orderItem: {},
      orderProducts: [],
      selectedStatus: "",
    };
  }

  componentDidMount() {
    OrderService.getDetailOrderById(this.state.id).then((res) => {
      this.setState({ orderItem: res.data });
    });

    OrderService.getListProductByOrderId(this.state.id).then((res) => {
      this.setState({ orderProducts: res.data });
    });
  }
  handleStatusChange = (event) => {
    this.setState({ selectedStatus: event.target.value });
  };

  handleUpdateStatus = async () => {
    const { id, selectedStatus } = this.state;

    try {
      if (selectedStatus) {
        const response = await OrderService.updateOrderStatus(id, {
          status: selectedStatus,
        });
        this.setState({ orderItem: response.data });
        toast.success("Update order status successfully");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      toast.error("Update order status failed");
    }
  };
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleConfirm = async () => {
    this.closeModal();
    await this.handleUpdateStatus();
  };
  render() {
    const orderStatus = this.state.orderItem.status;
    const statusOptions = [
      "Wait for confirmation",
      "Confirmed",
      "Delivering",
      "Delivered",
    ];
    return (
      <>
        <div className="body-wrapper">
          <SubHeaderComponent />
          <div className="container-fluid">
            <article className="card">
              <div className="track">
                {statusOptions.map((status, index) => (
                  <div
                    key={index}
                    className={`step ${
                      statusOptions.indexOf(orderStatus) >= index
                        ? "active"
                        : ""
                    }`}
                  >
                    <span className="icon">
                      {index === 0 ? (
                        <FontAwesomeIcon icon={faGears} />
                      ) : index === 1 ? (
                        <FontAwesomeIcon icon={faCheck} />
                      ) : index === 2 ? (
                        <FontAwesomeIcon icon={faTruck} />
                      ) : (
                        <FontAwesomeIcon icon={faHouse} />
                      )}
                    </span>
                    <span className="text">{status}</span>
                  </div>
                ))}
              </div>
            </article>{" "}
            {orderStatus === "Cancel" ? (
              <h3 className="text-center text-danger mb-4">
                The order has been canceled
              </h3>
            ) : orderStatus === "Confirmed" ? (
              <h3 className="text-center text-success mb-4">
                The order is confirmed
              </h3>
            ) : orderStatus === "Wait for confirmation" ? (
              <h3 className="text-center text-warning mb-4">
                The order is waiting for confirmation
              </h3>
            ) : orderStatus === "Delivering" ? (
              <h3 className="text-center text-secondary mb-4">
                The order is delivering
              </h3>
            ) : orderStatus === "Delivered" ? (
              <h3 className="text-center text-primary mb-4">
                The order is delivered
              </h3>
            ) : null}
            <div className="card bg-light">
              <div className="row">
                <div className="col-lg-7 d-flex align-items-stretch">
                  <div className="card w-100">
                    <h4 className="p-3"> List product was ordered.</h4>
                    <div className="">
                      <table className="table text-nowrap mb-0 align-middle">
                        <thead className="text-dark fs-4">
                          <tr>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Name product</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Quantity</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Price</h6>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.orderProducts.map((productItem) => (
                            <tr key={productItem.productId}>
                              <td className="border-bottom-0">
                                <h6 className="fw-semibold mb-1 ">
                                  {productItem.nameproduct}
                                </h6>
                                <span className="fw-normal"></span>
                              </td>
                              <td className="border-bottom-0" width="20px">
                                <h6 className="fw-semibold mb-1 ">
                                  {productItem.quantity}
                                </h6>
                              </td>
                              <td className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">
                                  {convertDollarToVND(productItem.price)} VND
                                </h6>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* )} */}
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="d-flex mb-2">
                    <select
                      className="form-select me-2"
                      aria-label="Default select example"
                      value={this.state.selectedStatus}
                      onChange={this.handleStatusChange}
                    >
                      <option disabled value="">
                        {this.state.orderItem.status}
                      </option>
                      <option
                        value="Wait for confirmation"
                        className="text-warning"
                      >
                        Wait for confirmation
                      </option>
                      <option value="Confirmed" className="text-success">
                        Confirmed
                      </option>
                      <option value="Delivering" className="text-info">
                        Delivering
                      </option>
                      <option value="Delivered" className="text-primary">
                        Delivered
                      </option>
                      <option value="Cancel" className="text-danger">
                        Cancel
                      </option>
                    </select>
                    <button
                      className="btn btn-primary"
                      onClick={this.openModal}
                    >
                      Change
                    </button>
                  </div>

                  <div className="card p-4">
                    <h4>Order Detail: {this.state.orderItem.id} &nbsp;</h4>
                    <p>
                      Contact: {this.state.orderItem.name} -{" "}
                      {this.state.orderItem.phone}
                    </p>
                    {orderStatus !== "Cancel" && (
                      <p>
                        Note: {this.state.orderItem.note || "No note available"}
                      </p>
                    )}{" "}
                    {/* <p>Status: {this.state.orderItem.status}</p> */}
                    <p>Address delivery: {this.state.orderItem.address}</p>
                    <p>Date: {this.state.orderItem.date}</p>
                    <p>
                      <strong>
                        Total amount:{" "}
                        {convertDollarToVND(
                          Number.parseInt(this.state.orderItem.amount)
                        )}{" "}
                        VND
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          contentLabel="Confirm Status Change"
          style={customStyles}
        >
          <h3>Confirm Status Change</h3>
          <p>Are you sure you want to change the order status?</p>
          <button className="btn btn-danger" onClick={this.closeModal}>
            Cancel
          </button>{" "}
          <button className="btn btn-primary" onClick={this.handleConfirm}>
            Confirm
          </button>
        </Modal>
      </>
    );
  }
}

export default OrderDetailHandle;
