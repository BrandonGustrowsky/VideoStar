import { useState } from 'react'
import { Card, CardContent, Button, CardMedia, Typography } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
const VideoCard = (props) => {
    let { name, duration, size, price, url, isPurchased, isFree } = props
    const [isFavorite, setIsFavorite] = useState(false)
    const [hasPurchased, setHasPurchased] = useState(isPurchased)

    const handleFavoriteClick = () => {
        return setIsFavorite((prevIsFavorite) => { return !prevIsFavorite })
    }

    const handlePurchaseToggle = () => {
        return setHasPurchased((prevHasPurchased) => { 
            isPurchased = !prevHasPurchased
            return !prevHasPurchased})
    }

    return (
        <Card sx={{ width: "345px", height: "300px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <video width="auto" height="195px" src={ url } crossOrigin="true" >
                <source src={ url } type="video/mp4" alt="Here!" />
            </video>
            <CardContent style={{ maxHeight: "80px"}}>
                <div class="textContainer">
                <Typography gutterBottom variant="h5" component="div" style={{fontSize: "15px", textAlign: "center", fontWeight: "500", maxHeight: "100px", margin: "0px"}}>
                    { name }
                </Typography>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Typography variant="body2" color="text.secondary">
                        { duration }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{}}>
                        { size + " MB" }
                    </Typography>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", maxHeight: "100px"}}>
                    <Typography variant="body2" style={{ marginTop: "10px", fontSize: "15px", visibility: (isFree ? "hidden" : "shown")}}>
                            ${ price }
                    </Typography>
                    {/* This should toggle between the favorite button and the add to cart button
                    depending if the video is free or not. */}
                    {isFree ? 
                            <Tooltip title="Favorite" placement="top" arrow >
                                <IconButton color="purple" onClick={handleFavoriteClick}>
                                    {isFavorite ? <FavoriteIcon style={{ fontSize: "35px", textShadow: "3px 3px 2px black"}} /> : <FavoriteBorderIcon style={{ fontSize: "35px" }}/>}
                                </IconButton>
                            </Tooltip>
                            : hasPurchased ? 
                                <Button color="purple" onClick={handlePurchaseToggle} variant="outlined" style={{ marginLeft: "-20px", marginTop: "7px", width: "auto", height: "30px", fontSize: "12px", padding: "1px" }}>Remove</Button>
                                :
                                <Button color="purple" onClick={handlePurchaseToggle} variant="outlined" style={{ marginLeft: "-20px", marginTop: "7px", width: "auto", height: "30px", fontSize: "9px", padding: "1px" }}>Add to Cart</Button>
                    }
                    
                    
                    
                </div>
            </CardContent>
        </Card>
    )
}

export default VideoCard