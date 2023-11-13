import React, { Component } from 'react'
import ProductServices from '../services/ProductServices';
import CategoryServices from '../services/CategoryServices';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from "react-toastify";
class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            brand: '',
            price: '',
            // createdDate: '',
            status: '',
            quantity: '',
            type: '',

            ingredients: '',
            dosageAndUsage: '',
            madeIn: '',
            indications: '',
            storage: '',
            packaging: '',
            sideEffects: '',
            precautions: '',
            contraindications: '',
            drugInteractions: '',
            imageUrls: [],
            categories: [],
            category_id: '',

        }
        this.changeName = this.changeName.bind(this);
        this.changeBrand = this.changeBrand.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.changeStatus = this.changeStatus.bind(this);

        this.changeMadein = this.changeMadein.bind(this);

        this.changeCategory = this.changeCategory.bind(this);
        this.changeImg = this.changeImg.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }



    // step 3
    componentDidMount() {
        CategoryServices.getCategories().then((res) => {

            this.setState({
                categories: res.data
            });
            console.log(this.state.categories)
        });
        if (this.state.id === '_add') {
            return
        } else {

            ProductServices.getProductById(this.state.id).then((res) => {
                let product = res.data;
                this.setState({
                    name: product.name,
                    brand: product.brand,
                    price: product.price,
                    // createdDate: product.createdDate,
                    status: product.status,
                    quantity: product.quantity,
                    type: product.type,
                    category_id: product.category_id,
                    ingredients: product.ingredients,
                    dosageAndUsage: product.dosageAndUsage,
                    indications: product.indications,
                    madeIn: product.madeIn,
                    storage: product.storage,
                    packaging: product.packaging,
                    sideEffects: product.sideEffects,
                    precautions: product.precautions,
                    contraindications: product.contraindications,
                    drugInteractions: product.drugInteractions,
                    imageUrls: product.imageUrls,
                });
            });
        }
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        // if (!this.state.category_id) {
        //     toast.error("Please select a category before saving.");
        //     return;
        // }
        if (!this.state.name || !this.state.brand || !this.state.price || !this.state.quantity || !this.state.madeIn || !this.state.category_id || !this.state.type || !this.state.status) {
            toast.error("Please fill in all required fields.");
            return;
        }
        let product = {
            name: this.state.name,
            brand: this.state.brand,
            price: this.state.price,
            // createdDate: this.state.createdDate,
            status: this.state.status,
            quantity: this.state.quantity,
            type: this.state.type,
            ingredients: this.state.ingredients,
            dosageAndUsage: this.state.dosageAndUsage,
            indications: this.state.indications,
            madeIn: this.state.madeIn,
            storage: this.state.storage,
            packaging: this.state.packaging,
            sideEffects: this.state.sideEffects,
            precautions: this.state.precautions,
            contraindications: this.state.contraindications,
            drugInteractions: this.state.drugInteractions,
            imageUrls: this.state.imageUrls,
            category_id: this.state.category_id
        };

        console.log('product => ' + JSON.stringify(product));

        // step 5
        if (this.state.id === '_add') {
            ProductServices.CreateProduct(product).then(res => {
                this.props.history.push('/product-manage');
                toast.success("Create Product succesfully");

            });
        } else {
            ProductServices.UpdateProduct(product, this.state.id).then(res => {
                this.props.history.push('/product-manage');
                toast.success("Update Product succesfully");

            });
        }
    }

    changeName = (event) => {
        this.setState({ name: event.target.value });
    }

    changeBrand = (event) => {
        this.setState({ brand: event.target.value });
    }

    changePrice = (event) => {
        this.setState({ price: event.target.value });
    }

    changeStatus = (event) => {
        console.log(event.target.value);
        this.setState({ status: event.target.value });
    }
    changeQuantity = (event) => {
        this.setState({ quantity: event.target.value });
    }
    changeType = (event) => {
        this.setState({ type: event.target.value });
    }
    changeIngredients = (event) => {
        this.setState({ ingredients: event.target.value });
    }
    changeDosageAndUsage = (event) => {
        this.setState({ dosageAndUsage: event.target.value });
    }
    changeIndications = (event) => {
        this.setState({ indications: event.target.value });
    }
    changeSideEffects = (event) => {
        this.setState({ sideEffects: event.target.value });
    }

    changePrecautions = (event) => {
        this.setState({ precautions: event.target.value });
    }
    changeContraindications = (event) => {
        this.setState({ contraindications: event.target.value });
    }
    changeDrugInteractions = (event) => {
        this.setState({ drugInteractions: event.target.value });
    }
    changePackaging = (event) => {
        this.setState({ packaging: event.target.value });
    }
    changeStorage = (event) => {
        this.setState({ storage: event.target.value });
    }

    changeMadein = (event) => {
        this.setState({ madeIn: event.target.value });
    }

    changeCategory = (event) => {
        this.setState({ category_id: event.target.value });
        console.log(event.target.value)
    }
    changeImg = (event) => {
        const files = event.target.files;
        const imageUrls = [];

        for (let i = 0; i < files.length; i++) {
            const fileName = files[i].name;
            imageUrls.push(fileName);
        }
        console.log(imageUrls);
        this.setState({ imageUrls: imageUrls });
    }

    cancel() {
        this.props.history.push('/product-manage');
    }

    checkName = () => {
        // var name = document.getElementById("txt_name").value;
        var check_error_name = document.getElementById("name-error");
        var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
        if (this.state.name === "" | this.state.name === null) {
            check_error_name.innerHTML = "Product Name cannot be empty!"
        } else if (!regexName.test(this.state.name)) {
            check_error_name.innerHTML = "Invalid name!"
        } else {
            check_error_name.innerHTML = ""
            return this.state.name;
        }
    }
    checkBrand = () => {
        // var name = document.getElementById("txt_name").value;
        var check_error_brand = document.getElementById("brand-error");
        var regexBrand = /^[^\d+]*[\d+]{0}[^\d+]*$/;
        if (this.state.brand === "" | this.state.brand === null) {
            check_error_brand.innerHTML = "Product Brand cannot be empty"
        } else if (!regexBrand.test(this.state.brand)) {
            check_error_brand.innerHTML = "Invalid Brand!"
        } else {
            check_error_brand.innerHTML = ""
            return this.state.brand;
        }
    }
    checkPrice = () => {
        // var name = document.getElementById("txt_name").value;
        var check_error_price = document.getElementById("price-error");
        var regexPrice = /^\d+$/;
        if (this.state.price === "" | this.state.price === null) {
            check_error_price.innerHTML = "Product Price cannot be empty!"
        } else if (!regexPrice.test(this.state.price)) {
            check_error_price.innerHTML = "Invalid Price(Must be number)!"
        } else {
            check_error_price.innerHTML = ""
            return this.state.price;
        }
    }
    checkQuantity = () => {
        // var name = document.getElementById("txt_name").value;
        var check_error_quantity = document.getElementById("quantity-error");
        var regexQuantity = /^\d+$/;
        if (this.state.quantity === "" | this.state.quantity === null) {
            check_error_quantity.innerHTML = "Product Quantity cannot be empty!"
        } else if (!regexQuantity.test(this.state.quantity)) {
            check_error_quantity.innerHTML = "Invalid Quantity(Must be number)!"
        } else {
            check_error_quantity.innerHTML = ""
            return this.state.quantity;
        }
    }
    checkMadeIn = () => {
        // var name = document.getElementById("txt_name").value;
        var check_error_madeIn = document.getElementById("madeIn-error");
        var regexMadeIn = /^[^\d+]*[\d+]{0}[^\d+]*$/;
        if (this.state.madeIn === "" | this.state.madeIn === null) {
            check_error_madeIn.innerHTML = "Product Made In cannot be empty!"
        } else if (!regexMadeIn.test(this.state.madeIn)) {
            check_error_madeIn.innerHTML = "Invalid Made In!"
        } else {
            check_error_madeIn.innerHTML = ""
            return this.state.madeIn;
        }
    }



    getTitle() {
        if (this.state.id === '_add') {
            return <h3 style={{ paddingTop: '15px' }} className="text-center">Add Product</h3>
        } else {
            return <h3 style={{ paddingTop: '15px' }} className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div style={{ fontSize: '1.1rem', marginLeft: '150px' }} className="container">
                    <div className="row">
                        <div style={{ width: '65%' }} className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <label className="form-label" for="customFile">Upload Product Image:</label>
                                    <input type="file" className="form-control" id="customFile" multiple style={{ height: '38px' }}
                                        name='imageUrls' onChange={this.changeImg} />
                                    <div className='row'>
                                        <div className="form-group col-md-6">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <label for="a"> Product Name:
                                                </label>
                                                <FontAwesomeIcon style={{ color: '#F40009' }} icon={faTriangleExclamation} />
                                            </div>
                                            <input id='txt-name' placeholder="Type Product Name" name="name" className="form-control"
                                                value={this.state.name} onChange={this.changeName} onBlur={this.checkName} />
                                            <span id='name-error'></span>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <label> Product Brand:</label>
                                                <FontAwesomeIcon style={{ color: '#F40009' }} icon={faTriangleExclamation} />
                                            </div>
                                            <input placeholder="Type Brand" name="brand" className="form-control"
                                                value={this.state.brand} onChange={this.changeBrand} onBlur={this.checkBrand} />
                                            <span id='brand-error'></span>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="form-group col-md-6">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <label> Product Price:
                                                </label>
                                                <FontAwesomeIcon style={{ color: '#F40009' }} icon={faTriangleExclamation} />
                                            </div>
                                            <input placeholder="Type Price" name="price" className="form-control"
                                                value={this.state.price} onChange={this.changePrice} onBlur={this.checkPrice} />
                                            <span id='price-error'></span>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <label> Product Quantity:
                                                </label>
                                                <FontAwesomeIcon style={{ color: '#F40009' }} icon={faTriangleExclamation} />
                                            </div>
                                            <input placeholder="Type Quantity" name="guide" className="form-control"
                                                value={this.state.quantity} onChange={this.changeQuantity} onBlur={this.checkQuantity} />
                                            <span id='quantity-error'></span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <label> Product Type:  </label>
                                                <FontAwesomeIcon style={{ color: '#F40009' }} icon={faTriangleExclamation} />
                                            </div>
                                            <select onChange={this.changeType} value={this.state.type} style={{ width: '100%', height: '56%', outline: 'none', borderRadius: '0.375rem', borderColor: '#dee2e6', color: '#212529' }} name="type" required>
                                                <option value="0">Unapproved Medication</option>
                                                <option value="1">Approved Medication</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <label> Product Status: </label>
                                                <FontAwesomeIcon style={{ color: '#F40009' }} icon={faTriangleExclamation} />
                                            </div>
                                            <select onChange={this.changeStatus} value={this.state.status} style={{ width: '100%', height: '56%', outline: 'none', borderRadius: '0.375rem', borderColor: '#dee2e6', color: '#212529' }} name="status" required>
                                                <option value="0">Out Of Stock</option>
                                                <option value="1">In Stock</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label> Product Ingredients: </label>
                                        <input placeholder="Type Ingredients" name="ingredients" className="form-control"
                                            value={this.state.ingredients} onChange={this.changeIngredients} />
                                    </div>
                                    <div className="form-group">
                                        <label> Product DosageAndUsage: </label>
                                        <input placeholder="Type DosageAndUsage" name="dosageAndUsage" className="form-control"
                                            value={this.state.dosageAndUsage} onChange={this.changeDosageAndUsage} />
                                    </div>
                                    <div className="form-group">
                                        <label> Product Indications: </label>
                                        <input placeholder="Type Indications" name="indications" className="form-control"
                                            value={this.state.indications} onChange={this.changeIndications} />
                                    </div>


                                    <div className="form-group">
                                        <label> Product SideEffects: </label>
                                        <input placeholder="Type SideEffects" name="sideEffects" className="form-control"
                                            value={this.state.sideEffects} onChange={this.changeSideEffects} />
                                    </div>
                                    <div className="form-group">
                                        <label> Product Precautions: </label>
                                        <input placeholder="Type Precautions" name="precautions" className="form-control"
                                            value={this.state.precautions} onChange={this.changePrecautions} />
                                    </div>

                                    <div className="form-group">
                                        <label> Product Contraindications: </label>
                                        <input placeholder="Type Contraindications" name="contraindications" className="form-control"
                                            value={this.state.contraindications} onChange={this.changeContraindications} />
                                    </div>
                                    <div className="form-group">
                                        <label> Product DrugInteractions: </label>
                                        <input placeholder="Type DrugInteractions" name="drugInteractions" className="form-control"
                                            value={this.state.drugInteractions} onChange={this.changeDrugInteractions} />
                                    </div>
                                    <div className='row'>
                                        <div className="form-group col-md-6">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <label for="a"> Made In:
                                                </label>
                                                <FontAwesomeIcon style={{ color: '#F40009' }} icon={faTriangleExclamation} />

                                            </div>
                                            <input id='madeIn' placeholder="Type......" name="madeIn" className="form-control"
                                                value={this.state.madeIn} onChange={this.changeMadein} onBlur={this.checkMadeIn} />
                                            <span id='madeIn-error'></span>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label> Product Packaging: </label>
                                            <input placeholder="Type Packaging" name="packaging" className="form-control"
                                                value={this.state.packaging} onChange={this.changePackaging} />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="form-group col-md-6">
                                            <label> Product Storage: </label>
                                            <input placeholder="Type Storage" name="storage" className="form-control"
                                                value={this.state.storage} onChange={this.changeStorage} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <label>Category: </label>
                                                <FontAwesomeIcon style={{ color: '#F40009' }} icon={faTriangleExclamation} />

                                            </div>
                                            <select
                                                style={{ width: '100%', height: '56%', outline: 'none', borderRadius: '0.375rem', borderColor: '#dee2e6', color: '#212529' }}
                                                name="category_id"
                                                value={this.state.category_id}
                                                onChange={this.changeCategory}
                                                required
                                            >
                                                <option value="" disabled selected>Select a category</option>
                                                {this.state.categories.map((category) => (
                                                    <option value={category.category_id} key={category.category_id}>
                                                        {category.category_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>


                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateProductComponent