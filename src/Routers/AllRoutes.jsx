import {Routes, Route} from 'react-router-dom'
import Home from '../Components/Home/Home'
import Cart from '../Components/Cart/Cart'
import CheckoutPage from '../Components/CheckoutPage/CheckoutPage'
import Payment from '../Components/Payment/Payment'
import ProductDetailPage from '../Components/ProductDetailPage/ProductDetailPage'
import ProductPage from '../Components/ProductPage/ProductPage'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:section' element={<ProductPage />} />
            <Route path='/' element={<ProductDetailPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkoutpage' element={<CheckoutPage />} />
            <Route path='/payment' element={<Payment />} />
        </Routes>
    )
}

export default AllRoutes