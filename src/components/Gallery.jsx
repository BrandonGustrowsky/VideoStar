import { sizeWidth } from "@mui/system"
import { useState, useEffect } from "react"
import VideoCard from './VideoCard'
import Box from '@mui/material/Box'

const Gallery = () => {
    const [data, setData] = useState(null)

    // UseEffect is called when the site starts and fetches the json data.
    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const data = await fetch("https://videostar.dacoder.io/")
                    const jsonData = await data.json()
                    setData(jsonData)
                    console.log(data)
                } catch(error) {
                    console.log(error)
                }
            })()
        }, 2000)
    }, [])

    return (
        <div id="gallery">
            { data ? (
                // Array takes in data and prints an array of videocards.
                [...new Array(data.length)].map((_,index) => {
                    return <Box key="index" sx={{ height: 350 }}>
                        <VideoCard 
                        name={ data[index].name }
                        duration={ data[index].duration }
                        size={ data[index].size }
                        price={ data[index].price }
                        url={ data[index].url }
                        isPurchased={ data[index].isPurchased }
                        isFree={ data[index].isFree }
                        />
                        </Box>
                })
            ) : (
                // If data is not defined yet it is just a loading bar.
                [...new Array(25)].map((_,index) => {
                    return <Box key={index + 25} sx={{ height: 350 }}>
                        <VideoCard 
                        name={ "" }
                        duration={ "" }
                        size={ "" }
                        price={ "" }
                        url={ "" }
                        isPurchased={ "" }
                        isFree={ "" }
                        />
                        </Box>
                })
            )}
            
        </div>
    )

}

export default Gallery