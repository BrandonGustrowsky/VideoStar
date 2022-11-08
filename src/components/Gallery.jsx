import { sizeWidth } from "@mui/system"
import { useState, useEffect } from "react"
import VideoCard from './VideoCard'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const Gallery = (props) => {
    const { clickedVideo } = props
    const [data, setData] = useState(null)
    const [sort, setSort] = useState('')
    const [filter, setFilter] = useState('')


    // UseEffect is called when the site starts and fetches the json data.
    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const data = await fetch("https://videostar.dacoder.io/")
                    const jsonData = await data.json()
                    setData(jsonData)
                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            })()
        }, 2000)
    }, [])

    const handleSortChange = (event) => {
        setSort(event.target.value)
    }
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (

        <div>
            <div id="gallery">
                <Box sx={{ minWidth: 120, maxWidth: 320 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filter}
                            label="filter"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value={"favoritesFilter"}>Favorites</MenuItem>
                            <MenuItem value={"paidFilter"}>Paid</MenuItem>
                            <MenuItem value={"freeFilter"}>Free</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120, maxWidth: 320 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            label="Sort"
                            onChange={handleSortChange}
                        >
                            <MenuItem value={"titleSort"}>title</MenuItem>
                            <MenuItem value={"lengthSort"}>length</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div id="gallery">
                {data ? (
                    // Array takes in data and prints an array of videocards.
                    [...new Array(data.length)].map((_, index) => {
                        return <Box key={index} sx={{ height: 350 }}>
                            <VideoCard
                                id={data[index].id}
                                name={data[index].name}
                                duration={data[index].duration}
                                size={data[index].size}
                                price={data[index].price}
                                url={data[index].url}
                                isPurchased={data[index].isPurchased}
                                isFree={data[index].isFree}
                                clickedVideo={() => {clickedVideo(data[index].id, data[index].name, data[index].duration, data[index].size, data[index].isPurchased, data[index].isFree, data[index].url)}}
                            />
                        </Box>
                    })
                ) : (
                    // If data is not defined yet it is just a loading bar.
                    [...new Array(25)].map((_, index) => {
                        return <Box key={index + 28} sx={{ height: 350 }}>
                            <VideoCard
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
            </div>
        </div>
    )

}

export default Gallery