import React, { Component } from "react";
import CategoryServices from "../services/CategoryServices";
import { toast } from "react-toastify";

class UpdateCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: this.props.match.params.id,
      category_name: "",
      category_image: "",
    };
  }

  componentDidMount() {
    CategoryServices.getCategoryByid(this.state.category_id).then((res) => {
      const category = res.data;
      this.setState({
        category_name: category.category_name,
        category_image: category.category_image,
      });
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const updatedCategory = {
      category_name: this.state.category_name,
      category_image: this.state.category_image,
    };

    CategoryServices.updateCategory(this.state.category_id, updatedCategory)
      .then((res) => {
        toast.success("Category updated successfully");
        this.props.history.push("/category-manage");
      })
      .catch((err) => {
        toast.error("Category updated fail", err);
      });
  };

  render() {
    return (
      <>
        <div className="body-wrapper">
          <div className="container">
            <h2>Update Category</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="category_name" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category_name"
                  name="category_name"
                  value={this.state.category_name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category_image" className="form-label">
                  Category Image URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category_image"
                  name="category_image"
                  value={this.state.category_image}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {/* Add more input fields for other category properties as needed */}
              <button type="submit" className="btn btn-primary">
                Update Category
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default UpdateCategory;
