import { sizeWidth } from "@mui/system"
import { useState, useEffect } from "react"
import VideoCard from './VideoCard'

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
        <div>
            { data ? (
                // Array takes in data and prints an array of videocards.
                [...new Array(data.length)].map((_,index) => {
                    return <VideoCard 
                        name={ data[index].name }
                        duration={ data[index].duration }
                        size={ data[index].size }
                        price={ data[index].price }
                        url={ data[index].url }
                        isPurchased={ data[index].isPurchased }
                        isFree={ data[index].isFree }
                        btnColor={ "yellow" } // IDK what this is yet.
                        />
                })
            ) : (
                // If data is not defined yet it is just a loading bar.
                <p>Loading...</p>
            )}
            
        </div>
    )

}

export default Gallery