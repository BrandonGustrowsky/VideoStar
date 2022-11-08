import Navbar from "./Navbar"
import VideoCard from "./VideoCard"
import { useState, useEffect } from "react"
import { Shuffle } from "@mui/icons-material"
import { Typography } from "@mui/material"
import Box from '@mui/material/Box'

const Theatre = (props) => {
    const { name, duration, size, price, url, isPurchased, isFree } = props
    const [data, setData] = useState(null)



    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const myData = await fetch("https://videostar.dacoder.io/")
                    const jsonData = await myData.json()
                    const costVideos = []
                    for (let video of jsonData) {
                        if (!video.isFree) {
                            // console.log(video)
                            costVideos.push(video)
                        }
                    }
                    costVideos.sort(() => Math.random() - 0.5)
                    let selectedVideos = costVideos.slice(0, 3)
                    setData(selectedVideos)
                } catch (error) {
                    console.log(error)
                }
            })()
        }, 2000)
    }, [])

    // console.log(data.length)

    // const costVideos = []
    // console.log(data)
    // for (let video of data) {
    //     if (!video.isFree) {
    //         console.log(video.isFree)
    //         costVideos.push(video)
    //     }
    // }
    // let selectedVideos = costVideos.slice(0, 3)

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
                {/* {console.log(data)} */}
                { data ? (
                    [...new Array(data.length)].map((_, index) => {
                        return (
                            <VideoCard 
                                key={data[index].id}
                                id={data[index].id}
                                name={data[index].name}
                                duration={data[index].duration}
                                size={data[index].size}
                                price={data[index].price}
                                url={data[index].url}
                                isPurchased={data[index].isPurchased}
                                isFree={data[index].isFree}
                            />
                        )
                    })
                ) : (
                    [...new Array(3)].map((_, index) => {
                        return <Box key={index + 28} sx={{ height: 350 }}>
                            <VideoCard
                                key={index}
                                id={null}
                                name={""}
                                duration={""}
                                size={""}
                                price={""}
                                url={""}
                                isPurchased={""}
                                isFree={""}
                            />
                        </Box>
                    })
                )}
            </section>
        </main>
    )
}

export default Theatre