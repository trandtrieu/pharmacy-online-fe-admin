import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import HeaderComponent from "./layouts/HeaderComponent";
import DashBoard from "./pages/DashBoard";
import PrescriptionManage from "./pages/PrescriptionManage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductManage from "./pages/ProductManage";
import PrescriptionDetailHandle from "./pages/PrescriptionDetailHandle";
import ProductItem from "./pages/ProductItem";
import CreateProductComponent from "./pages/CreateProductComponent";
import ViewProductDetailComponent from "./pages/ViewProductDetailComponent";
import AccountCreate from "./pages/AccountCreate";
import AccountUpdate from "./pages/AccountUpdate";
import Accounts from "./pages/Accounts";
import CategoryManage from "./pages/CategoryManage";
import CreateCategory from "./pages/CategoryCreate";
import UpdateCategory from "./pages/CategoryUpdate";
import DiscountUpdate from "./pages/DiscountUpdate";
import DiscountCodeCreate from "./pages/DiscountCodeCreate";
import DiscountCodeList from "./pages/DiscountCodeList";
import OrderManage from "./pages/OrderManage";
import OrderDetailHandle from "./pages/OrderDetailHandle";
import BlogManage from "./pages/BlogManage";
import AddBlogComponent from "./pages/AddBlogComponent";
import UpdateBlogComponent from "./pages/UpdateBlogComponent";

function App() {
  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <Router>
        <HeaderComponent />
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={PrescriptionManage} />
          <Route path="/prescription-manage" component={PrescriptionManage} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/product-manage" component={ProductManage} />
          <Route path="/product-build/:account_id" component={ProductItem} />
          <Route path="/add-product/:id" component={CreateProductComponent} />
          <Route
            path="/view-product-by-id/:id"
            component={ViewProductDetailComponent}
          />
          <Route
            path="/prescription-detail-handle/:id"
            component={PrescriptionDetailHandle}
          />
          <Route path="/accounts" component={Accounts} />
          <Route path="/update-account/:id" component={AccountUpdate} />
          <Route path="/create-account" component={AccountCreate} />

          <Route path="/category-manage" component={CategoryManage} />
          <Route path="/create-category" component={CreateCategory} />
          <Route path="/update-category/:id" component={UpdateCategory} />
          <Route path="/discountcodes" component={DiscountCodeList} />
          <Route path="/add-discount" component={DiscountCodeCreate} />
          <Route path="/update-discount/:id" component={DiscountUpdate} />

          <Route path="/order-manage" component={OrderManage} />
          <Route
            path="/order-detail-handle/:id"
            component={OrderDetailHandle}
          />

          <Route path="/blog" component={BlogManage} />
          <Route path="/add-blog" component={AddBlogComponent} />
          <Route path="/update-blog/:blog_id" component={UpdateBlogComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
