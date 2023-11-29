import React, { Component } from "react";
import CategoryServices from "../services/CategoryServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import SubHeaderComponent from "../layouts/SubHeaderComponent";

class CategoryManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      searchTerm: "",
      currentPage: 0,
      categoriesPerPage: 3,
    };
  }
  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    CategoryServices.getCategories()
      .then((res) => {
        this.setState({ categories: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleDelete = (category_id) => () => {
    CategoryServices.deleteCategory(category_id)
      .then((res) => {
        toast.success("Category deleted successfully:", res.data);
        this.loadCategories();
      })
      .catch((error) => {
        toast.error("Error deleting category");
      });
  };
  handlePageChange = ({ selected }) => {
    this.setState({ currentPage: selected });
  };
  createCategory() {
    this.props.history.push("/create-category");
  }
  toUpdate(category_id) {
    this.props.history.push(`/update-category/${category_id}`);
  }
  render() {
    const { searchTerm, currentPage, categoriesPerPage } = this.state;
    const filteredCategories = this.state.categories.filter(
      (categoriesItem) =>
        categoriesItem.category_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        categoriesItem.category_id.toString().includes(searchTerm)
    );
    const indexOfLastCategory = (currentPage + 1) * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = filteredCategories.slice(
      indexOfFirstCategory,
      indexOfLastCategory
    );
    return (
      <>
        <div className="body-wrapper">
          {" "}
          <SubHeaderComponent />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9 d-flex align-items-stretch">
                <div className="card w-100">
                  <div className="card-body p-4">
                    <h5 className="card-title fw-semibold mb-4">
                      Categories List
                    </h5>
                    <div className="col-12 pb-1">
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="ml-2">
                          <input
                            type="text"
                            placeholder="Search by name or code..."
                            value={this.state.searchTerm}
                            onChange={(e) =>
                              this.setState({ searchTerm: e.target.value })
                            }
                            className="form-control"
                          />
                        </div>
                        <div className="ml-2">
                          <button
                            className="btn btn-primary"
                            onClick={() => this.createCategory()}
                          >
                            Create Category
                          </button>
                        </div>
                      </div>
                    </div>

                    {currentCategories.length === 0 ? (
                      <div className="container">
                        <h5 className="text-center text-warning">
                          No categories match the search criteria
                        </h5>
                      </div>
                    ) : (
                      <div className="table-responsive">
                        <table className="table text-nowrap mb-0 align-middle">
                          <thead className="text-dark fs-4">
                            <tr>
                              <th className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">Code</h6>
                              </th>
                              <th className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">Image</h6>
                              </th>
                              <th className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">Name</h6>
                              </th>

                              <th className="border-bottom-0">
                                <h6 className="fw-semibold mb-0">Action </h6>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentCategories.map((categoriesItem) => (
                              <tr key={categoriesItem.id}>
                                <td className="border-bottom-0">
                                  <h6 className="fw-semibold mb-0">
                                    {categoriesItem.category_id}
                                  </h6>
                                </td>
                                <td className="border-bottom-0">
                                  <h6 className="fw-semibold mb-0 fs-4">
                                    <img
                                      src={
                                        categoriesItem.category_image?.startsWith(
                                          "https"
                                        )
                                          ? categoriesItem.category_image
                                          : `assets/images/${categoriesItem.category_image}`
                                      }
                                      alt="em"
                                      width={35}
                                      height={35}
                                    />
                                  </h6>
                                </td>
                                <td className="border-bottom-0">
                                  <p className="mb-0 fw-normal">
                                    {" "}
                                    {categoriesItem.category_name}
                                  </p>
                                </td>

                                <td className="border-bottom-0">
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={this.handleDelete(
                                      categoriesItem.category_id
                                    )}
                                  >
                                    <FontAwesomeIcon icon={faTrash} />
                                  </button>
                                  &nbsp;
                                  <button
                                    className="btn btn-primary"
                                    onClick={() =>
                                      this.toUpdate(categoriesItem.category_id)
                                    }
                                  >
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(
                filteredCategories.length / categoriesPerPage
              )}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </>
    );
  }
}

export default CategoryManage;
