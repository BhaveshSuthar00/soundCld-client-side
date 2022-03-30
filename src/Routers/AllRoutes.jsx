import {Routes, Route} from 'react-router-dom'
import Home from '../Components/Home/Home'
import Cart from '../Components/Cart/Cart'
import SearchPage from '../Components/SearchPage/SearchPage'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/searchpage/:id' element={<SearchPage />} />
        </Routes>
    )
}

export default AllRoutes