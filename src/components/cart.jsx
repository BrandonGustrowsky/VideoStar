import VideoCard from './VideoCard'
import NavBar from './NavBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from "react";
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';

const Cart = (props) => {
    const { showingCart, data, videos, setData } = props

    const handleDeleteAll = () => {
        return data.map((video) => {
            if (video.isInCart) {
                video.isInCart = false
            }
            return video
        })
    }
    

    const handlePurchaseVideos = () => {
        return data.map((video) => {
            if (video.isInCart) {
                video.isPurchased = true
                video.isInCart = false
            }
            return video
        })
    }

        console.log(data.reduce((accumulator, video) => {
            if (video.isInCart){
                accumulator += video.price
            } 
            return accumulator
        }, 0).toFixed(2))

    return (
        <main id='root'  style={{background: "#525E75", height: "100%"}}>
            <div style={{background: "#525E75"}}>
                <h1 id="pageTitle" style={{color: "#F1DDBF", textAlign: "center", fontSize: "50px", paddingBottom: "30px", textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}} >Your Cart <ShoppingCartIcon style={{fontSize: "50px", textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}}></ShoppingCartIcon></h1>
            </div>
            <div className='cart'>
                <div style={{display: 'flex', gap:"75px", flexWrap: "wrap", width: "50%"}} >
                    {videos}
                </div>
                <div id='cartinfo'>
                    <button className="cartButton" style={{background: "#525E75", color: "#F1DDBF", fontSize: "15px", height: "45px", width: "100px", marginTop: "50px"}} onClick={() => {setData(handleDeleteAll)}}>Remove All</button>
                    <h2 style={{color: "#F1DDBF", marginTop: "300px", textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}}>Total: ${data.reduce((accumulator, video) => {
                                                                                                                                                    if (video.isInCart){
                                                                                                                                                        accumulator += video.price
                                                                                                                                                    }
                                                                                                                                                    return accumulator
                                                                                                                                                }, 0).toFixed(2)} </h2>
                    <button className="cartButton" style={{background: "#525E75", color: "#F1DDBF", fontSize: "15px", height: "45px", width: "100px", marginBottom: "150px"}} onClick={() => {setData(handlePurchaseVideos)}}>Purchase</button>
                </div>
            </div>
        </main>
    )
}


export default Cart