import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./components/homepage/HomePage";
import Dashboard from "./components/dashboard/Dashboard";
import CustomerDatabase from "./components/customerdatabase/CustomerDatabase";
import CustomerDatabaseDetail from "./components/customerdatabase/CustomerDatabaseDetail";
import SalesPortofolio from "./components/salesportofolio/SalesPortofolio";
import SalesPipeline from "./components/salespipeline/SalesPipeline";
import AfterSales from "./components/after-sales/AfterSales";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import OrderTracking from "./components/order-tracking/OrderTracking";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id/home" element={<Dashboard />} />
        <Route path="/:id/salesportofolio" element={<SalesPortofolio />} />
        <Route path="/:id/customerdatabase" element={<CustomerDatabase />} />
        <Route path="/:id/customerdatabase/:customer" element={<CustomerDatabaseDetail />} />
        <Route path="/:id/salespipeline-add" element={<SalesPipeline />} />
        <Route path="/:id/aftersales" element={<AfterSales />} />
        <Route path="/:id/ordertracking" element={<OrderTracking />} />
      </Routes>
    </Router>
  );
}

export default App;
