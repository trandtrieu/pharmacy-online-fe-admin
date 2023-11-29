import React, { Component } from "react";
import SubHeaderComponent from "../layouts/SubHeaderComponent";
import OrderService from "../services/OrderService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../layouts/Pagination";

class OrderManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      filteredOrders: [],
      searchInput: "",
      currentPage: 1,
      ordersPerPage: 4,
      statusFilter: "",
      paymentMethodFilter: "",
    };
  }
  componentDidMount() {
    OrderService.getListOrder()
      .then((res) => {
        this.setState({
          orders: res.data,
          filteredOrders: res.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }

  handleSearch = (event) => {
    const searchInput = event.target.value;
    this.setState(
      {
        searchInput,
        currentPage: 1,
      },
      () => {
        this.filterOrders();
      }
    );
  };

  filterOrders = () => {
    const { orders, searchInput, statusFilter, paymentMethodFilter } =
      this.state;

    // Filter based on name
    let filteredOrders = orders.filter(
      (orderItem) =>
        orderItem.name &&
        orderItem.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Filter based on status
    filteredOrders = filteredOrders.filter((orderItem) =>
      orderItem.status.toLowerCase().includes(statusFilter.toLowerCase())
    );

    // Filter based on payment method
    if (paymentMethodFilter) {
      filteredOrders = filteredOrders.filter(
        (orderItem) =>
          orderItem.paymentMethod &&
          orderItem.paymentMethod
            .toLowerCase()
            .includes(paymentMethodFilter.toLowerCase())
      );
    }

    this.setState({ filteredOrders });
  };

  handlePageChange = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  paginate = (items, currentPage, ordersPerPage) => {
    const startIndex = (currentPage - 1) * ordersPerPage;
    return items.slice(startIndex, startIndex + ordersPerPage);
  };

  viewDetailOrder(id) {
    this.props.history.push(`/order-detail-handle/${id}`);
  }

  render() {
    const { filteredOrders, currentPage, ordersPerPage } = this.state;

    // Calculate pagination values
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = this.paginate(
      filteredOrders,
      currentPage,
      ordersPerPage
    );

    return (
      <>
        <div className="body-wrapper">
          <SubHeaderComponent />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 d-flex align-items-stretch">
                <div className="card w-100">
                  <div className="card-body">
                    <h5 className="card-title fw-semibold mb-4">
                      System Order
                    </h5>
                    <div className="col-md-7 d-flex">
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search by Name"
                        value={this.state.searchInput}
                        onChange={this.handleSearch}
                      />

                      <select
                        className="form-control mb-3"
                        value={this.state.statusFilter}
                        onChange={(e) =>
                          this.setState(
                            { statusFilter: e.target.value },
                            this.filterOrders
                          )
                        }
                      >
                        <option value="">All Statuses</option>
                        <option value="Wait for confirmation">
                          Wait for confirmation
                        </option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Delivering">Delivering</option>
                        <option value="Delivered">Delivered</option>
                      </select>

                      <select
                        className="form-control mb-3"
                        value={this.state.paymentMethodFilter}
                        onChange={(e) =>
                          this.setState(
                            { paymentMethodFilter: e.target.value },
                            this.filterOrders
                          )
                        }
                      >
                        <option value="">All Payment Methods</option>
                        <option value="VNPAY">VNPAY</option>
                        <option value="Cash">Cash</option>
                      </select>
                    </div>

                    <div className="table-responsive">
                      {currentOrders.length > 0 ? (
                        <table className="table text-nowrap mb-0 align-middle">
                          <thead className="text-dark fs-4">
                            <tr>
                              <th className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">Id</h6>
                              </th>
                              <th className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">Name</h6>
                              </th>
                              <th className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">
                                  Payment method
                                </h6>
                              </th>
                              <th className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">
                                  Payment status
                                </h6>
                              </th>
                              <th className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">Date</h6>
                              </th>
                              <th className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">Status</h6>
                              </th>
                              <th className="border-bottom-0 text-center">
                                <h6 className="fw-semibold mb-0">Handle</h6>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentOrders.map((orderItem) => (
                              <tr>
                                <td className="border-bottom-0">
                                  <h6 className="fw-semibold mb-0">
                                    {orderItem.id}
                                  </h6>
                                </td>
                                <td className="border-bottom-0">
                                  <h6 className="fw-semibold mb-1">
                                    {orderItem.name}
                                  </h6>
                                  <span className="fw-normal">
                                    {orderItem.phone}
                                  </span>
                                </td>
                                <td className="border-bottom-0">
                                  <h6 className="fw-semibold mb-0 fs-4">
                                    {orderItem.paymentMethod}
                                  </h6>
                                </td>
                                <td className="border-bottom-0">
                                  <h6 className="fw-semibold mb-0 fs-4">
                                    Successfully
                                  </h6>
                                </td>
                                <td className="border-bottom-0">
                                  <h6 className="fw-semibold mb-1">
                                    {orderItem.date}
                                  </h6>
                                </td>
                                <td className="border-bottom-0">
                                  <h6
                                    className="fw-semibold mb-1 bg-secondary text-center"
                                    style={{
                                      padding: "2px 4px",
                                      borderRadius: "4px",
                                      color: "white",
                                    }}
                                  >
                                    {orderItem.status}
                                  </h6>
                                </td>
                                <td className="border-bottom-0">
                                  <h6
                                    className="fw-semibold mb-1 text-center"
                                    onClick={() => {
                                      this.viewDetailOrder(orderItem.id);
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </h6>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <h5 className="text-danger text-center">
                          No orders found.
                        </h5>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <Pagination
                currentPage={currentPage}
                ordersPerPage={ordersPerPage}
                totalOrders={filteredOrders.length}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OrderManage;
