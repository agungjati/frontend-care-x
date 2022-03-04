import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./components/homepage/HomePage";
import Dashboard from "./components/dashboard/Dashboard";
import CustomerDatabase from "./components/customerdatabase/CustomerDatabase";
import CustomerDatabaseDetail from "./components/customerdatabase/CustomerDatabaseDetail";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/:id/home" element={<Dashboard />} />
        <Route path="/:id/customerdatabase" element={<CustomerDatabase />} />
        <Route path="/:id/customerdatabase/:customer" element={<CustomerDatabaseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
