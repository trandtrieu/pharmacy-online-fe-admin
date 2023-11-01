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

          <Route
            path="/prescription-detail-handle/:id"
            component={PrescriptionDetailHandle}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
