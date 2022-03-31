import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import SearchPage from "../Components/SearchPage/SearchPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/searchpage/:id" element={<SearchPage />} />
    </Routes>
  );
};

export default AllRoutes;
