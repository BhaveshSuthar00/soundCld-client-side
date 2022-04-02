import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import SearchPage from "../Components/SearchPage/SearchPage";
import Login from '../Components/Login&signup/Login'
import Signup from '../Components/Login&signup/Signup'
const AllRoutes = ({handleStatus, status}) => {
  return (
    <Routes>
      <Route path="/" element={<Home handleStatus={handleStatus} status={status} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/searchpage/:id" element={<SearchPage />} />
    </Routes>
  );
};

export default AllRoutes;
