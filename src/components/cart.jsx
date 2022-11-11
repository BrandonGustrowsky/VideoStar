import VideoCard from './VideoCard'
import NavBar from './NavBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from "react";
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';

const Cart = (props) => {
    const { showingCart, data, videos, setData } = props

<<<<<<< HEAD
    const [] = useState(null)
=======
    const handleDeleteAll = () => {
        return data.map((video) => {
            if (video.isInCart) {
                video.isInCart = false
            }
            return video
        })
    }
>>>>>>> c246503ad35b7c36c4d0eebf11eb3b7071f4015c

    const handlePurchaseVideos = () => {
        return data.map((video) => {
            if (video.isInCart) {
                video.isPurchased = true
                video.isInCart = false
            }
            return video
        })
    }

    return (
        <main id='root' style={{background: "#525E75", height: "100%"}}>
            <div id="Cart" style={{background: "#525E75"}}>
                <h1 id="pageTitle" style={{color: "#F1DDBF", textAlign: "center", fontSize: "50px", paddingBottom: "30px", textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}} >Your Cart <ShoppingCartIcon style={{fontSize: "50px", textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}}></ShoppingCartIcon></h1>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                <div style={{display: 'flex', gap:"150px", marginLeft: "250px", marginRight: "50px", flexWrap: "wrap", width: "50%"}} >
                    {videos}
                </div>
                <div id='cartinfo' style={{marginRight: "200px"}}>
                    <button className="cartButton" style={{background: "#525E75", color: "#F1DDBF", fontSize: "15px", height: "45px", width: "100px", marginTop: "50px"}} onClick={() => {setData(handleDeleteAll)}}>Remove All</button>
                    <h2 style={{color: "#F1DDBF", marginTop: "300px", textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}}>Total: $ </h2>
<<<<<<< HEAD
                    <button className="cartButton" style={{background: "#525E75", color: "#F1DDBF", fontSize: "15px", height: "45px", width: "100px", marginBottom: "150px"}} onClick={() => {setData(handlePurchaseVideos)}}>Purchase</button>
=======
<<<<<<< HEAD
                    <button class="cartButton"  style={{background: "#525E75", color: "#F1DDBF", fontSize: "15px", height: "45px", width: "100px", marginBottom: "150px" }}>Purchase</button>
=======
                    <button className="cartButton" style={{background: "#525E75", color: "#F1DDBF", fontSize: "15px", height: "45px", width: "100px", marginBottom: "150px" }}>Purchase</button>
>>>>>>> c246503ad35b7c36c4d0eebf11eb3b7071f4015c
>>>>>>> c16414d6a3dec1ff947c6b7e1315d4b9cebe1170
                </div>
            </div>
        </main>
    )
}


export default Cart