import VideoCard from './VideoCard'
import NavBar from './NavBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from "react";
import { Typography } from "@mui/material"
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

    console.log(videos)



    return (
        <main  style={{background: "#525E75", minHeight: "calc(100vh - 175px)"}}>
            <div style={{position: "relative", background: "#525E75"}}>
                <Typography id="pageTitle" style={{color: "#F1DDBF", textAlign: "center", fontSize: "50px", paddingBottom: "30px", textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}} >Your Cart <ShoppingCartIcon style={{ marginLeft: "15px", position: "absolute", top: "10%", fontSize: "60px", textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}}></ShoppingCartIcon></Typography>
            </div>
            <div className='cart'>
                <div className="cartChild">
                    {(videos.length > 0) ?
                    videos :
                    <Typography variant="p" style={{fontSize: "25px", textAlign: "center"}}>There are no videos in your cart.</Typography>}
                </div>
                <div style={{height: "100%", position: "sticky", display: "flex", flexDirection: 'column', top: '0'}}>
                    <button className="cartBtns" style={{marginTop: "50px"}} onClick={() => {setData(handleDeleteAll)}}>Remove All</button>
                    <Typography variant="h2" style={{color: "#F1DDBF",
                                                     marginTop: "100px", 
                                                     textShadow: "4px 4px 2px rgba(0,0,0,0.6)", 
                                                     fontSize: "25px"}}>Total: $<Typography style={{display: "inline",
                                                                                                    fontWeight: "400",
                                                                                                    fontSize: "25px"}}>{data.reduce((accumulator, video) => {
                                                                                                                                    if (video.isInCart){
                                                                                                                                        accumulator += video.price
                                                                                                                                    }
                                                                                                                                    return accumulator
                                                                                                                                }, 0).toFixed(2)} </Typography></Typography>
                    <button className="cartBtns" style={{marginBottom: "150px"}} onClick={() => {setData(handlePurchaseVideos)}}>Purchase</button>
                </div>
            </div>
        </main>
    )
}


export default Cart