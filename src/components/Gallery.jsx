import { sizeWidth } from "@mui/system"
import { useState, useEffect } from "react"
import VideoCard from './VideoCard'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'

const Gallery = (props) => {
    const { data, isLoaded, handleShowVideo } = props
    const [sort, setSort] = useState('titleSort')
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    let dataSorted

    const handleSortChange = (event) => {
        setSort(event.target.value)
    }
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    /* useEffect(() => {
        debouncedFetch()
    }, [search]) */

    if (data) {
        if (sort == 'lengthSort') {
            dataSorted = data.sort((a, b) => {
                let splitA = a.duration.split(":")
                splitA[2] = splitA[2].split(".")
                let splitB = b.duration.split(":")
                splitB[2] = splitB[2].split(".")

                // This converts the time to milliseconds assuming the number after the dot is a perecentage of milliseconds.
                let msA = (splitA[2][1] * 10) + (splitA[2][0] * 1000) + (splitA[1] * 60000) + (splitA[0] * 3600000)
                let msB = (splitB[2][1] * 10) + (splitB[2][0] * 1000) + (splitB[1] * 60000) + (splitB[0] * 3600000)

                return (msA > msB) ? 1 : -1
            })
        } else if (sort == 'titleSort') {
            console.log(data)
            dataSorted = data.sort((a, b) => {
                return (a.name > b.name) ? 1 : -1
            })
        } else if (sort == 'titleSort') {
            dataSorted = data.sort((a, b) => {
                return (a.name > b.name) ? 1 : -1
            })
        } else if (sort == 'freeSort') {
            console.log(data)
            dataSorted = data.sort((a, b) => {
                return (a.price < b.price) ? 1 : -1
            })
        } else if (sort == 'paidSort') {
            dataSorted = data.sort((a, b) => {
                return (a.price > b.price) ? 1 : -1
            })
        }

        console.log(filter)
        if (filter == 'paidFilter') {
            dataSorted = dataSorted.filter((a) => {
                return !a.isFree
            })
        } else if (filter == 'freeFilter') {
            dataSorted = dataSorted.filter((a) => {
                return a.isFree
            })
        } else if (filter == 'favoritesFilter') {
            dataSorted = dataSorted.filter((a) => {
                return a.isFavorite
            })
        } else if (filter == 'shortFilter') {
            dataSorted = dataSorted.filter((a) => {
                let splitA = a.duration.split(":")
                splitA[2] = splitA[2].split(".")

                let msA = (splitA[2][1] * 10) + (splitA[2][0] * 1000) + (splitA[1] * 60000) + (splitA[0] * 3600000)
                return msA < 15000
            })
        } else if (filter == 'longFilter') {
            dataSorted = dataSorted.filter((a) => {
                let splitA = a.duration.split(":")
                splitA[2] = splitA[2].split(".")

                let msA = (splitA[2][1] * 10) + (splitA[2][0] * 1000) + (splitA[1] * 60000) + (splitA[0] * 3600000)
                return msA >= 15000
            })
        }

        if (search != '') {
            dataSorted = dataSorted.filter((a) => {
                return a.name.toLowerCase().includes(search)
            })
        }

        console.log(dataSorted)
    }

    const videoCards = [] //Stores all VideoCard components that are to be rendered in the Gallery (check
    // Gallery props)

    if (data) {
        for (const videoObj of dataSorted) {
            videoCards.push(
                <VideoCard
                    key={videoObj.id}
                    id={videoObj.id}
                    name={videoObj.name}
                    duration={videoObj.duration}
                    size={videoObj.size}
                    price={videoObj.price}
                    url={videoObj.url}
                    isPurchased={videoObj.isPurchased}
                    isFree={videoObj.isFree}
                    isLoaded={isLoaded}
                    clickedVideo={() => { handleShowVideo(videoObj.id, videoObj.name, videoObj.duration, videoObj.size, videoObj.isPurchased, videoObj.isFree, videoObj.url) }}
                />
            )
        }

    } else {
        //Create empty VideoCards
        for (let i = 0; i < 25; i++) {
            videoCards.push(
                <VideoCard
                    name={""}
                    duration={""}
                    size={""}
                    price={""}
                    url={""}
                    isPurchased={""}
                    isFree={""}
                    isLoaded={isLoaded}
                />
            )
        }
    }

    return (

        <div>
            <div style={{ display: "flex", gap: "15px", padding: "5px" }}>
                <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filter}
                            label="filter"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value={"paidFilter"}>Paid</MenuItem>
                            <MenuItem value={"freeFilter"}>Free</MenuItem>
                            <MenuItem value={"favoritesFilter"}>Favorites</MenuItem>
                            <MenuItem value={"shortFilter"}>Short</MenuItem>
                            <MenuItem value={"longFilter"}>Long</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <FormControl sx={{ width: '100%' }}>
                    <InputLabel htmlFor="outlined-adornment">Search: </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment"
                        value={search}
                        onChange={handleSearch}
                        label="Search"
                    />
                </FormControl>
                <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            label="Sort"
                            onChange={handleSortChange}
                        >
                            <MenuItem value={"titleSort"}>Title</MenuItem>
                            <MenuItem value={"lengthSort"}>Length</MenuItem>
                            <MenuItem value={"paidSort"}>Cheapest to Most Expensive</MenuItem>
                            <MenuItem value={"freeSort"}>Most Expensive to Cheapest</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div id="gallery">
                {videoCards}
            </div>
        </div>
    )

}

export default Gallery