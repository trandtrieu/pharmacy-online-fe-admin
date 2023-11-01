import React, { Component } from "react";
import PrescriptionServices from "../services/PrescriptionServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faReply,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
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
class PrescriptionManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prescriptions: [],
      enlargedImage: null,
      isDeleteConfirmationOpen: false,
      prescriptionItemToDelete: null,
      isModalOpen: false,
      sortByTimeOption: "0",
      sortType: "status", // Mặc định sắp xếp theo trạng thái
      // Mặc định sắp xếp từ mới đến cũ
    };
  }

  enlargeImage = (imageURL) => {
    this.setState({ enlargedImage: imageURL });
  };

  closeEnlargedImage = () => {
    this.setState({ enlargedImage: null });
  };

  componentDidMount() {
    PrescriptionServices.getListPrescription()
      .then((res) => {
        this.setState({ prescriptions: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Lỗi khi tải sản phẩm:", error);
      });
  }

  loadPrescriptionsByStatus() {
    PrescriptionServices.getListPrescriptionByFilterStatus(this.state.sortType)
      .then((res) => {
        this.setState({ prescriptions: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Lỗi khi tải sản phẩm:", error);
      });
  }

  handleSortByStatus = (event) => {
    const selectedStatus = event.target.value;
    this.setState({ sortType: "status" });

    PrescriptionServices.getListPrescriptionByFilterStatus(selectedStatus)
      .then((res) => {
        this.setState({ prescriptions: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Lỗi khi tải sản phẩm:", error);
      });
  };

  updateStatus = (status, id) => {
    PrescriptionServices.updateStatusPrescription(status, id)
      .then((response) => {
        console.log("Status updated successfully:", response.data);
        const updatedPrescriptions = this.state.prescriptions.map(
          (prescriptionItem) => {
            if (prescriptionItem.id === id) {
              prescriptionItem.status = status;
            }
            return prescriptionItem;
          }
        );
        this.setState({ prescriptions: updatedPrescriptions });
        toast.success("Update status succesfully");
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  handleDeleteConfirmed = (prescriptionItem) => {
    PrescriptionServices.removePrescription(prescriptionItem.id)
      .then(() => {
        const updatedPrescriptions = this.state.prescriptions.filter(
          (prescription) => prescription.id !== prescriptionItem.id
        );
        this.setState({
          prescriptions: updatedPrescriptions,
          isDeleteConfirmationOpen: false,
          prescriptionItemToDelete: null,
        });
        toast.success("Delete prescription successfully!");
      })
      .catch((error) => {
        console.error("Error deleting prescription:", error);
        this.closeDeleteConfirmation();
      });
  };

  handleRemoveFromCart = (prescriptionItem) => {
    this.openDeleteConfirmation(prescriptionItem);
  };

  openDeleteConfirmation = (prescriptionItem) => {
    this.setState({
      isDeleteConfirmationOpen: true,
      prescriptionItemToDelete: prescriptionItem,
    });
  };

  closeDeleteConfirmation = () => {
    this.setState({
      isDeleteConfirmationOpen: false,
      prescriptionItemToDelete: null,
    });
  };

  toProductList() {
    this.props.history.push(`/product-manage`);
  }

  toDetailandHandle(id) {
    this.props.history.push(`/prescription-detail-handle/${id}`);
  }
  render() {
    const { enlargedImage } = this.state;
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
              this.handleDeleteConfirmed(this.state.prescriptionItemToDelete)
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
              <div className="col-lg-12 d-flex align-items-stretch">
                <div className="card w-100">
                  <div className="card-body p-4">
                    <h5 className="card-title fw-semibold mb-4">
                      Prescriptions List
                    </h5>
                    <div className="col-12 pb-1">
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="ml-2">
                          <div className="btn-group ml-2">
                            <select
                              className="form-select"
                              onChange={this.handleSortByStatus}
                            >
                              <option selected value="">
                                All
                              </option>
                              <option value="0">Waiting for advice</option>
                              <option value="1">Confirmed</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table text-nowrap mb-0 align-middle">
                        <thead className="text-dark fs-4">
                          <tr>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Code</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Name</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Contact</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Note</h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">File </h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Date </h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Status </h6>
                            </th>
                            <th className="border-bottom-0">
                              <h6 className="fw-semibold mb-0">Action </h6>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.prescriptions.map((prescriptionItem) => (
                            <tr key={prescriptionItem.id}>
                              <td className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">
                                  {prescriptionItem.id}
                                </h6>
                              </td>
                              <td className="border-bottom-0">
                                <p className="mb-0 fw-normal">
                                  {" "}
                                  {prescriptionItem.name}
                                </p>
                              </td>
                              <td className="border-bottom-0">
                                <h6 className="fw-semibold mb-1">
                                  {prescriptionItem.email}
                                </h6>
                                <span className="fw-normal">
                                  {" "}
                                  {prescriptionItem.phone}
                                </span>
                              </td>

                              <td className="border-bottom-0">
                                <h6 className="fw-semibold mb-0 fs-4">
                                  {prescriptionItem.note}
                                </h6>
                              </td>
                              <td className="border-bottom-0">
                                <h6 className="fw-semibold mb-0 fs-4">
                                  <img
                                    src={`assets/images/${prescriptionItem.imageUrls}`}
                                    alt="em"
                                    width={35}
                                    height={35}
                                    onClick={() =>
                                      this.enlargeImage(
                                        `assets/images/${prescriptionItem.imageUrls}`
                                      )
                                    }
                                  />
                                </h6>
                              </td>
                              <td className="border-bottom-0">
                                <h6 className="fw-semibold mb-1">
                                  {prescriptionItem.createdDate}
                                </h6>
                                <span className="fw-normal">
                                  {prescriptionItem.createdTime}
                                </span>
                              </td>
                              <td className="border-bottom-0">
                                <select
                                  className="btn btn-primary"
                                  aria-label="Default select example"
                                  value={prescriptionItem.status}
                                  onChange={(e) => {
                                    this.updateStatus(
                                      e.target.value,
                                      prescriptionItem.id
                                    );
                                  }}
                                >
                                  <option value={0}>Waiting for advice</option>
                                  <option value={1}>Confirmed</option>
                                </select>
                              </td>
                              <td className="border-bottom-0">
                                <button
                                  className="btn btn-primary"
                                  onClick={() =>
                                    this.handleRemoveFromCart(prescriptionItem)
                                  }
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </button>
                                &nbsp;
                                <button
                                  className="btn btn-primary"
                                  onClick={() => this.toProductList()}
                                >
                                  <FontAwesomeIcon icon={faReply} />
                                </button>
                                &nbsp;
                                <button
                                  className="btn btn-primary"
                                  onClick={() =>
                                    this.toDetailandHandle(prescriptionItem.id)
                                  }
                                >
                                  <FontAwesomeIcon icon={faCircleInfo} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        {enlargedImage && (
                          <div
                            className="enlarged-image-overlay"
                            onClick={this.closeEnlargedImage}
                          >
                            <div className="enlarged-image-container">
                              <img
                                src={enlargedImage}
                                alt="Enlarged Prescription"
                                className="enlarged-image"
                              />
                            </div>
                          </div>
                        )}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 px-6 text-center">
              <p className="mb-0 fs-4">
                Design and Developed by{" "}
                <a
                  href="/"
                  target="_blank"
                  className="pe-1 text-primary text-decoration-underline"
                >
                  AdminMart.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PrescriptionManage;
