import { sizeWidth } from "@mui/system"
import { useState, useEffect } from "react"
import VideoCard from './VideoCard'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const Gallery = (props) => {
    const { videos } = props
    const [data, setData] = useState(null)
    const [sort, setSort] = useState('')
    const [filter, setFilter] = useState('')

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
                    {videos}
            </div>
        </div>
    )

}

export default Gallery