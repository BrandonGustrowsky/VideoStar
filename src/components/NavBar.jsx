import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useState, useEffect } from 'react'

const Navbar = (props) => {
    const { data, changeState, showCart } = props

    const handleShowGallery = () => {
        showCart(false)
        return data.map((video) => {
            if (video.isInTheatreMode) {
                video.isInTheatreMode = false
            }
            return video
        })
    }


    return (
        <header style={{"background": "#525E75", width: "100%", flexGrow: 1, marginBottom: "10px"}}> 
            <Box style={{boxShadow: "0px 5px 20px 3px rgba(20,20,20,0.6)",}}>
                <Toolbar id="toolbar">
                    <Button variant="text" id="navbarTitle" onClick={ () => {changeState(handleShowGallery)}} > 
                        VideoStar
                    </Button>
                    <Button variant="text" 
                            style={{fontSize: "20px", color: "#92BA92", background: "none", boxShadow: "none", textShadow: "0px 0px 15px #000000"}}
                            onClick={ () => {showCart(true)} }>Cart (<Typography>{data.reduce((accumulator, video) => {
                                if (video.isInCart) {
                                    accumulator += 1
                                }
                                return accumulator
                            }, 0)}</Typography>)</Button>
                </Toolbar>
            </Box>
        </header>
    )
}

export default Navbar