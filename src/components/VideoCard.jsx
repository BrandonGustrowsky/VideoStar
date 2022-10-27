import { Card, CardContent, CardActions, Button, CardMedia, Typography } from "@mui/material"
const VideoCard = (props) => {
    const { name, duration, size, price, url, isPurchased, isFree } = props
    return (
        <Card sx={{ maxWidth: "345px", background: "#F1DDBF", }}>
            <CardMedia
                component="video"
                alt="Video"
                width="100%"
                src="myMovie.mp4"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        // <div>
        //     <video width="320" height="240" controls  crossOrigin="anonymous">
        //         <source src="mymovie.mp4" type="vide/mp4" alt="The video should display here."></source>
        //     </video>
        //     <div>
        //         <h1>How to Solve a 3x3 Rubik's Cube</h1>
        //         <p>00:00:16:93</p>
        //         <p>7990219 MB</p>
        //         <p>Like</p>
        //     </div>
        // </div>
    )
}

export default VideoCard