import Navbar from "./Navbar"
import VideoCard from "./VideoCard"
import { useState, useEffect } from "react"
import { Shuffle } from "@mui/icons-material"
import { Typography } from "@mui/material"
import Box from '@mui/material/Box'

const Theatre = (props) => {
    const { name, duration, size, price, url, isPurchased, isFree, recommendedVideos } = props

    return (
        <main style={{background: "#525E75"}}>
            <video width="100%" height="450px" crossOrigin="true" src={ url } controls>
                <source src={ url } type="video/mp4" alt="Video" />
            </video>
            <section style={{display: "flex", flexDirection: "column", justifyContent: "space-between", margin: "0 55px", flexWrap: "wrap", gap:"15px"}}>
                <div style={{display: "flex", justifyContent: "space-between", margin: "0 55px", gap: "45px", flexWrap: "nowrap"}}>
                    <Typography variant="h1" color="secondary" style={{fontWeight: 350, fontSize: "70px", fontStyle: "italic"}}> { name } </Typography>
                    <Typography variant="h2" color="secondary" style={{fontSize: "40px", lineHeight: "85px"}}> { duration } </Typography>
                </div>
                <Typography variant="h3" color="secondary" style={{fontSize: "35px", fontWeight: "300"}}> { size + " MB"} </Typography>
            </section>
            <section id="recommended">
                { recommendedVideos }
            </section>
        </main>
    )
}

export default Theatre