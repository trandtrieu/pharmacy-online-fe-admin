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
import Accounts from "./pages/Accounts"
import AccountUpdate from "./pages/AccountUpdate";
import AccountCreate from "./pages/AccountCreate";

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

        </Switch>
      </Router>
    </div>
  );
}

export default App;
