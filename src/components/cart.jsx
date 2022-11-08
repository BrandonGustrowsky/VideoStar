import VideoCard from './VideoCard'
import NavBar from './NavBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from "react";

const Cart = (props) => {
    const { showingCart } = props
    // const [showCart, setShowCart] = useState(showingCart)

    // useEffect(() => {
    //     setShowCart(showingCart)
    // }, [showCart])

    // const handleClick = () => {
    //     setShowCart(prevshowCart => {return !prevShowCart})
    // }

    return (
        <div id="Cart" style={{}}>
            <h1 id="pageTitle">Your Cart</h1>
        </div>
    )
}

// const cartM = () => {

// }

export default Cart