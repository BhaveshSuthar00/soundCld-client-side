import {Routes, Route} from 'react-router-dom'
import Home from '../Components/Home/Home'
import Cat from "../Components/Cat/Cat"
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cat />} />
        </Routes>
    )
}

export default AllRoutes