import { useState } from "react"
import VideoCard from './VideoCard'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'

const Gallery = (props) => {
    const { data, isLoading, setData } = props
    const [sort, setSort] = useState('titleSort')
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')

    // These handle functions are all onChange. So whenever the form is changed the state is updated with the form's values.
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    const handleSortChange = (event) => {
        setSort(event.target.value)
    }
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const videoCards = [] //Stores all VideoCard components that are to be rendered in the Gallery (check
    // Gallery props)

    if (data.length > 0) {
        // This for loop runs through every single video in data and sorts it according to the state. It then filters it according to the state.
        for (const videoObj of data.sort((a, b) => {
            if (sort == 'lengthSort') {
                // this splits the data into numbers instead of the format "00:00:00.00"
                let splitA = a.duration.split(":")
                splitA[2] = splitA[2].split(".")
                let splitB = b.duration.split(":")
                splitB[2] = splitB[2].split(".")

                // This converts the time to milliseconds assuming the number after the dot is a perecentage of milliseconds.
                let msA = (splitA[2][1] * 10) + (splitA[2][0] * 1000) + (splitA[1] * 60000) + (splitA[0] * 3600000)
                let msB = (splitB[2][1] * 10) + (splitB[2][0] * 1000) + (splitB[1] * 60000) + (splitB[0] * 3600000)

                return (msA > msB) ? 1 : -1
            } else if (sort == 'titleSort') {
                return (a.name > b.name) ? 1 : -1
            } else if (sort == 'titleSort') {
                return (a.name > b.name) ? 1 : -1
            } else if (sort == 'freeSort') {
                return (a.price < b.price) ? 1 : -1
            } else if (sort == 'paidSort') {
                return (a.price > b.price) ? 1 : -1
            } else {
                return (a.name > b.name) ? 1 : -1
            }
        }).filter((a) => {
            if (filter == 'paidFilter') {
                return !a.isFree
            } else if (filter == 'freeFilter') {
                return a.isFree
            } else if (filter == 'favoritesFilter') {
                return a.isFavorite
            } else if (filter == 'shortFilter') {
                // this splits the data into numbers instead of the format "00:00:00.00"
                let splitA = a.duration.split(":")
                splitA[2] = splitA[2].split(".")

                // This converts the time to milliseconds assuming the number after the dot is a perecentage of milliseconds.
                let msA = (splitA[2][1] * 10) + (splitA[2][0] * 1000) + (splitA[1] * 60000) + (splitA[0] * 3600000)
                return msA < 15000
            } else if (filter == 'longFilter') {
                // this splits the data into numbers instead of the format "00:00:00.00"
                let splitA = a.duration.split(":")
                splitA[2] = splitA[2].split(".")

                // This converts the time to milliseconds assuming the number after the dot is a perecentage of milliseconds.
                let msA = (splitA[2][1] * 10) + (splitA[2][0] * 1000) + (splitA[1] * 60000) + (splitA[0] * 3600000)
                return msA >= 15000
            } else {
                return a
            }
        }).filter((a) => {
            if (search != '') {
                return ((a.name.toLowerCase().includes(search.toLowerCase())))
            } else {
                return a
            }
        })) {
            videoCards.push(
                <VideoCard
                    data={data}
                    setData={setData}
                    key={videoObj.id}
                    id={videoObj.id}
                    name={videoObj.name}
                    duration={videoObj.duration}
                    size={videoObj.size}
                    price={videoObj.price}
                    url={videoObj.url}
                    isPurchased={videoObj.isPurchased}
                    isFree={videoObj.isFree}
                    isFavorite={videoObj.isFavorite}
                    isInCart={videoObj.isInCart}
                    isLoading={isLoading}
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
                    isLoading={isLoading}
                />
            )
        }
    }

    return (

        <div>
            <div id="filterSortForm">
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
                            <MenuItem value={""}>None</MenuItem>
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