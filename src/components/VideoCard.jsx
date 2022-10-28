import { Card, CardContent, CardActions, Button, CardMedia, Typography } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
const VideoCard = (props) => {
    const { name, duration, size, price, url, isPurchased, isFree, btnColor } = props
    return (
        <Card sx={{ maxWidth: "345px", height: "300px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}}>
            <CardMedia
                component="video"
                alt="Video"
                width="100%"
                src="myMovie.mp4"
            />
            <CardContent>
                {/* Replace with video title */}
                <Typography gutterBottom variant="h5" component="div" style={{fontSize: "18px", textAlign: "center", fontWeight: "500"}}>
                    How to Solve a 3x3 Rubik's Cube
                </Typography>                 
                <div style={{display: "flex", gap: "155px"}}>
                    {/* Replace with video duration*/}
                    <Typography variant="body2" color="text.secondary">
                        00:00:16.93
                    </Typography>
                    {/* Replace with video size */}
                    <Typography variant="body2" color="text.secondary">
                        7990219 MB
                    </Typography>
                </div>
                <div style={{display: "flex", gap: "235px", marginTop: "8px"}}>
                    {/* Replace with video price (if applicable) */}
                    <Typography variant="body2" style={{marginTop: "10px", fontSize: "15px"}}>
                            $6.79
                    </Typography>
                    {/* This should toggle between the favorite button and the add to cart button
                    depending if the video is free or not. */}
                    <Tooltip title="Favorite" placement="top" arrow >
                        <IconButton color="purple">
                            <FavoriteBorderIcon style={{fontSize: "35px"}}/>
                        </IconButton>
                    </Tooltip>
                </div>
            </CardContent>
        </Card>
    )
}

export default VideoCard