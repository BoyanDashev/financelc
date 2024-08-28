import "./index.css";
import NavbarComponent from "./components/Navbar";
import HomeComponent from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterComponent from "./components/Register";
import LoginComponent from "./components/Login";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          {/* <Route path="users/:id" element={<Users />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
