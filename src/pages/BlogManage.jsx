  import React, { Component } from "react";
  import BlogServices from "../services/BlogServices";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faPlus,faTrash,faPenToSquare  } from "@fortawesome/free-solid-svg-icons";


  class BlogManage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        blog_id: this.props.match.params.blog_id,
        blogs: [],
        blog: {},
      };
      this.addBlog = this.addBlog.bind(this);
      this.updateBlog = this.updateBlog.bind(this);
      this.deleteBlog = this.deleteBlog.bind(this);
    }

    componentDidMount() {
      BlogServices.getBlog().then((res) => {
        this.setState({ blogs: res.data });
      });
    }

    addBlog() {
      this.props.history.push("/add_blog");
    }

    updateBlog(blog_id) {
      this.props.history.push(`/update-blog/${blog_id}`);
    }

    deleteBlog(blog_id) {
      BlogServices.deleteBlog(blog_id).then((res) => {
        this.setState({
          blogs: this.state.blogs.filter((blog) => blog.blog_id !== blog_id),
        });
      });
    }
    render() {
      const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
      }; //render text dang html trong content
      return (
        <div className="body-wrapper">
          <div class="container p-0">
            <h1 className="title" style={{textAlign:"center"}}>Blog List</h1>
            <div class="table-responsive">
              <div class="table-wrapper">
                <div className="row col-lg-12 col-12  m-3 ">
                  <div className="col-sm-6">
                    <button className="btn btn-primary" onClick={this.addBlog}>
                      <FontAwesomeIcon icon={faPlus} />
                      Add Blog
                    </button>
                  </div>
                </div>
                <table className="table table-hover ">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Date/Time</th>
                      <th>Content</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.blogs.map((blog) => (
                      <tr key={blog.blog_id}>
                        <td className="col-md-3">
                          <strong>{blog.title}</strong>
                        </td>
                        <td className="col-md-2">{blog.create_date}</td>
                        <td className="col-md-5">
                          {getText(blog.content.substring(0, 150))}...
                        </td>
                        <td className="col-md-3">
                          <button
                            className="btn btn-warning"
                            onClick={() => this.updateBlog(blog.blog_id)}
                          >
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() =>
                              this.deleteBlog(blog.blog_id)}
                              style={{marginLeft:"10px"}}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                          
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default BlogManage;
