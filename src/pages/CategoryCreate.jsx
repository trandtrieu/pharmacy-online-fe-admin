import React, { useState } from "react";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [categoryImageText, setCategoryImageText] = useState("");
  const [selectedOption, setSelectedOption] = useState("file");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setCategoryImageText(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construct FormData object
    const formData = new FormData();
    formData.append(
      "categoryDTO",
      new Blob([JSON.stringify({ category_name: categoryName })], {
        type: "application/json",
      })
    );

    if (selectedOption === "file") {
      formData.append("file", imageFile);
    } else {
      formData.append("category_image_text", categoryImageText);
    }

    try {
      // Send POST request to the backend
      const response = await fetch(
        "http://localhost:8080/pharmacy-online/admin/category/create",
        {
          method: "POST",
          body: formData,
          // Do NOT manually set the Content-Type header for FormData
          // It will be automatically set to multipart/form-data with the boundary
        }
      );

      // Check the response status
      if (response.ok) {
        console.log("Category created successfully");
        // Handle success, e.g., redirect to a success page
      } else {
        // Handle the error response
        const data = await response.json();
        setErrorMessage(data.message || "Failed to create category");
      }
    } catch (error) {
      console.error("Error creating category:", error);
      setErrorMessage("Failed to create category");
    }
  };

  return (
    <div className="body-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-stretch">
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <div className="">
              <form onSubmit={handleSubmit} className="">
                <label className="form-label">
                  Category Name:
                  <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="form-control"
                  />
                </label>
                <br />
                <label className="form-label">
                  Choose Option:
                  <select
                    value={selectedOption}
                    onChange={handleOptionChange}
                    className="form-control"
                  >
                    <option value="file">Upload Image File</option>
                    <option value="text">Category Image Text</option>
                  </select>
                </label>
                <br />
                {selectedOption === "file" && (
                  <label className="form-label">
                    Upload Image File:
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="form-control"
                    />
                  </label>
                )}
                {selectedOption === "text" && (
                  <label className="form-label">
                    Category Image Text:
                    <input
                      type="text"
                      value={categoryImageText}
                      onChange={handleTextChange}
                      className="form-control"
                    />
                  </label>
                )}
                <br />
                <button type="submit" className="btn btn-primary">
                  Create Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
