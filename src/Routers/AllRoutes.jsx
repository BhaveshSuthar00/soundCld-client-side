import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import SearchPage from "../Components/SearchPage/SearchPage";
import { Library } from "../Components/Library/Library";

const AllRoutes = ({handleStatus, status}) => {
  return (
    <Routes>
      <Route path="/" element={<Home handleStatus={handleStatus} status={status} />} />

      <Route path="/searchpage/:id" element={<SearchPage />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  );
};

export default AllRoutes;
