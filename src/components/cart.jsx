import VideoCard from './VideoCard'
import NavBar from './NavBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from "react";
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';

const Cart = (props) => {
    const { showingCart, paidVideos } = props

    const [isLiked, setisLinked] = useState(null)

    return (
        <main id='root' style={{background: "#525E75", height: "100%"}}>
            <div id="Cart" style={{background: "#525E75"}}>
                <h1 id="pageTitle" style={{color: "#F1DDBF", textAlign: "center", fontSize: "50px", paddingBottom: "30px"}} >Your Cart <ShoppingCartIcon style={{fontSize: "50px"}}></ShoppingCartIcon></h1>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                <div style={{display: 'flex', gap:"100px", marginLeft: "100px", marginRight: "50px", flexWrap: "wrap"}} >
                    {paidVideos}
                </div>
                <div id='cartinfo' style={{marginRight: "100px"}}>
                    <button style={{background: "#525E75", color: "#F1DDBF", fontSize: "15px", height: "45px", width: "100px", marginTop: "50px"}}>Delete All</button>
                    <h2 style={{color: "#F1DDBF", marginTop: "300px"}}>Total: $ </h2>
                    <button style={{background: "#525E75", color: "#F1DDBF", fontSize: "15px", height: "45px", width: "100px", }}>Purchase</button>
                </div>
            </div>
        </main>
    )
}


export default Cart