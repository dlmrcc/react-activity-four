
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./dashboard";
import Home from "./home";
import Login from "./login";
import AddEmployee from "./add-employee";






const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-employee" element={<AddEmployee />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
