import { Typography } from "@mui/material"
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const Theatre = (props) => {
    const { video, recommendedVideos } = props

    return (
        <main style={{background: "#525E75"}}>
            <video width="100%" height="450px" crossOrigin="true" src={ video.url }controls>
                <source type="video/mp4" alt="Video" />
            </video>
            <section style={{display: "flex", flexDirection: "column", justifyContent: "space-between",
                margin: "0 55px", flexWrap: "wrap", gap:"15px"}}>
                <div style={{display: "flex", justifyContent: "space-between", margin: "0 55px", gap: "45px", flexWrap: "nowrap"}}>
                    <Typography variant="h1" color="secondary" id="videoName" className="theatreModeFont"> { video.name } </Typography>
                    <Typography variant="h2" color="secondary" id="durationFont" style={{ lineHeight: "85px"}}> { video.duration } </Typography>
                </div>
                <Typography variant="h3" color="secondary" id="sizeFont" style={{ fontWeight: "300"}}> { video.size + " MB"} </Typography>
            </section>
            <section id="recommended">
                { (recommendedVideos.length > 0) ? recommendedVideos : <Typography variant="p" color="green" 
                    style={{fontSize: "35px", fontWeight:"bold"}}>There are no more videos to recommend. 
                    <SentimentDissatisfiedIcon /></Typography>}
            </section>
        </main>
    )
}

export default Theatre