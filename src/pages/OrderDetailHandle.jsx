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
              <div className="card-body">
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
              </div>
            </article>
            <div className="card bg-light">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-7 d-flex align-items-stretch">
                    <div className="card w-100">
                      <h3 className="p-3"> List product was ordered.</h3>
                      <div className="card-body p-2">
                        <div className="table-responsive">
                          <table className="table text-nowrap mb-0 align-middle">
                            <thead className="text-dark fs-4">
                              <tr>
                                <th className="border-bottom-0">
                                  <h6 className="fw-semibold mb-0">
                                    Name product
                                  </h6>
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
                                  <td className="border-bottom-0">
                                    <h6 className="fw-semibold mb-1 ">
                                      {productItem.quantity}
                                    </h6>
                                  </td>
                                  <td className="border-bottom-0">
                                    <h6 className="fw-semibold mb-0">
                                      {convertDollarToVND(productItem.price)}
                                      VND
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
                  </div>
                  <div className="col-md-5">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={this.state.selectedStatus}
                      onChange={this.handleStatusChange}
                    >
                      <option disabled value="">
                        Status Order
                      </option>
                      <option value="Wait for confirmation">
                        Wait for confirmation
                      </option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Delivering">Delivering</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                    <button
                      className="btn btn-primary mt-3"
                      onClick={this.handleUpdateStatus}
                    >
                      Update Status
                    </button>
                    <div className="card p-4">
                      <h4>Order Detail: {this.state.orderItem.id} &nbsp;</h4>
                      <p>
                        {this.state.createdDate} &nbsp; {this.state.createdTime}
                      </p>
                      <p>
                        Contact: {this.state.orderItem.name} -
                        {this.state.orderItem.phone}
                      </p>
                      <p>Note: {this.state.orderItem.note}</p>
                      <p>Status: {this.state.orderItem.status}</p>
                      <p>Address delivery: {this.state.orderItem.address}</p>
                      <p>Date: {this.state.orderItem.date}</p>
                      <p>
                        <strong>
                          Total amount: {this.state.orderItem.amount} VND
                        </strong>
                      </p>
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

export default OrderDetailHandle;
