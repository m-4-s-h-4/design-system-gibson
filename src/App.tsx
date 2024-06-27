import { Routes, Route } from "react-router-dom";
import Joblistings from "./Pages/JobListings/Joblistings";
import Login from "./Pages/Login/Login";
import LoginError from "./Pages/LoginError/LoginError";
import TwoFaForm from "./Pages/TwoFaForm/TwoFaForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Joblistings />} />
      <Route path="/loginform" element={<Login />} />
      <Route path="/loginformError" element={<LoginError />} />
      <Route path="/2faform" element={<TwoFaForm />} />
    </Routes>
  );
}

export default App;
