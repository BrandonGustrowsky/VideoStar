import VideoCard from './VideoCard'
import NavBar from './NavBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from "react";
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';

const Cart = (props) => {
    const { showingCart } = props
    // const [showCart, setShowCart] = useState(showingCart)

    // useEffect(() => {
    //     setShowCart(showingCart)
    // }, [showCart])

    // const handleClick = () => {
    //     setShowCart(prevshowCart => {return !prevShowCart})
    // }
    const [isLiked, setisLinked] = useState(null)

    return (
        <main style={{background: "#525E75"}}>
            <div id="Cart" style={{background: "#525E75"}}>
                <h1 id="pageTitle" style={{color: "#F1DDBF"}} >Your Cart <ShoppingCartIcon></ShoppingCartIcon></h1>
            </div>
            <div id="videoss">

            </div>
            <div id='otherinfo'>

            </div>
        </main>
    )
}


export default Cart