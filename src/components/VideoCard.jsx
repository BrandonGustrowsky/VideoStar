import { useState } from 'react'
import { Card, CardContent, Button, CardMedia, Typography } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
const VideoCard = (props) => {

    let { name, duration, size, price, url, isPurchased, isFree, isFavorite, isInCart, favoriteFtn, clickedVideo, isLoaded } = props

    const [favorite, setFavorite] = useState(isFavorite)

    const handleFavoriteClick = () => {
        // return setIsFavorite((prevIsFavorite) => { return !prevIsFavorite })
            return setFavorite((prevFavorite) => {
                isFavorite = !prevFavorite
                return !prevFavorite })
    }

    const handlePurchaseToggle = () => {
        return setHasPurchased((prevHasPurchased) => {
            isPurchased = !prevHasPurchased
            console.log(isPurchased)
            return !prevHasPurchased
        })
    }
    // console.log(isPurchased)

    let blur, display, link
    if (!isFree && !isPurchased) {
        blur = "blur(5.5px)"
        display = "block"
    } else {
        blur = "blur(0)"
        display = "none"
    }

    return (
        <div>
            <Card className="videoCard" sx={{ width: "345px", height: "300px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
                <div style={{ display: isLoaded ? "block" : "none" }}>
                    <div style={{ position: "relative", textAlign: "center", color: "#DAA520" }}>
                        <video className="videoCardVideo" width="auto" height="195px" src={url} crossOrigin="true" onClick={(isFree || isPurchased) ? clickedVideo : () => { return }} style={{ filter: blur }} >
                            <source src={url} type="video/mp4" alt="Here!" />
                        </video>
                        <Typography variant="p" style={{ display: display, position: "absolute", top: "4%", left: "42%", fontSize: "150px", zIndex: 5, textShadow: "4px 3px 0px #000, 9px 8px 0px rgba(0,0,0,1)   " }}>$</Typography>
                    </div>
                    <CardContent style={{ maxHeight: "80px" }}>
                        <div className="textContainer">
                            <Typography gutterBottom variant="h5" component="div" style={{ fontSize: "15px", textAlign: "center", fontWeight: "500", maxHeight: "100px", margin: "0px" }}>
                                {name}
                            </Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography variant="body2" color="text.secondary">
                                {duration}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {size + " bytes"}
                            </Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", maxHeight: "100px" }}>
                            <Typography variant="body2" style={{ marginTop: "10px", fontSize: "15px", visibility: ((isFree || isPurchased) ? "hidden" : "shown") }}>
                                ${price}
                            </Typography>
                            {/* This should toggle between the favorite button and the add to cart button
                                depending if the video is free or not. */}
                            {isFree ?
                                <Tooltip title="Favorite" placement="top" arrow >
                                    <IconButton color="purple" onClick={favoriteFtn}>
                                        {isFavorite ? <FavoriteIcon style={{ fontSize: "35px", textShadow: "3px 3px 2px black" }} /> : <FavoriteBorderIcon style={{ fontSize: "35px" }} />}
                                    </IconButton>
                                </Tooltip>
                                : isPurchased ?
                                    <Button color="purple" onClick={handlePurchaseToggle} variant="outlined" style={{ marginLeft: "-20px", marginTop: "7px", width: "auto", height: "30px", fontSize: "12px", padding: "1px" }}>Remove</Button>
                                    :
                                    <Button color="purple" onClick={handlePurchaseToggle} variant="outlined" style={{ marginLeft: "-20px", marginTop: "7px", width: "auto", height: "30px", fontSize: "9px", padding: "1px" }}>Add to Cart</Button>
                            }
                        </div>
                    </CardContent>
                </div>
            </Card>

        </div>

    )
}

export default VideoCard