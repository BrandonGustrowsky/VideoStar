import Navbar from './Navbar'
import Gallery from './Gallery'
import Theatre from './Theatre'
import VideoCard from './VideoCard'
import Cart from './cart'

import { useState, useEffect } from 'react'

const AppContent = () => {

    const videoStateDefaultObj = {
        id: null,
        name: "",
        duration: "0",
        size: "0",
        isPurchased: false,
        isFree: false,
        url: ""
    }

    const [showCart, setShowCart] = useState(false)
    const [showGallery, setShowGallery] = useState(true)
    const [showTheatre, setShowTheatre] = useState(videoStateDefaultObj)
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState(null)

const handleShowCart = (showingCart) => {
    setShowCart(showingCart)
    setShowGallery(false)
    setShowTheatre(videoStateDefaultObj)
    setIsLoaded(false)
}

const handleShowGallery = (showingGallery) => {
    setShowGallery(showingGallery)
    setShowCart(false)
    setShowTheatre(videoStateDefaultObj)
}

const handleShowVideo = (id, name, duration, size, isPurchased, isFree, url) => {
    // console.log("Calling the function from AppContent")
    setShowTheatre({
        id: id,
        name: name,
        duration: duration,
        size: size,
        isPurchased: isPurchased,
        isFree: isFree,
        url: url
    })
    setShowGallery(false)
    setShowCart(false)
    setIsLoaded(true)
}

// UseEffect is called when the site starts and fetches the json data.
useEffect(() => {
    setTimeout(() => {
        (async () => {
            try {
                const data = await fetch("https://videostar.dacoder.io/")
                const jsonData = await data.json()
                setData(jsonData)
                setIsLoaded(true)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, 2000)
}, [])

const videoCards = []
const paidVideoObjs = []
let paidVideos = []

if (data) {
    for (const videoObj of data) {
        videoCards.push(
            <VideoCard
                id={videoObj.id}
                name={videoObj.name}
                duration={videoObj.duration}
                size={videoObj.size}
                price={videoObj.price}
                url={videoObj.url}
                isPurchased={videoObj.isPurchased}
                isFree={videoObj.isFree}
                isLoaded={isLoaded}
                clickedVideo={() => {handleShowVideo(videoObj.id, videoObj.name, videoObj.duration, videoObj.size, videoObj.isPurchased, videoObj.isFree, videoObj.url)}}
             />
        )
    }
    
} else {
    for (let i=0; i<25; i++) {
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
if (data) {
    for (const videoObj of data) {
        if (!videoObj.isFree && !videoObj.isPurchased) {
            paidVideoObjs.push(videoObj)
        }
    }
    // Choosing three recommended videos at random
    paidVideoObjs.sort(() => Math.random() - 0.5)
    let selectedVideos = paidVideoObjs.slice(0, 3)
    console.log(selectedVideos)
    paidVideos = selectedVideos.map((video, index) => {
        return (
        <VideoCard
            key={index}
            id={video.id}
            name={video.name}
            duration={video.duration}
            size={video.size}
            price={video.price}
            url={video.url}
            isPurchased={video.isPurchased}
            isFree={video.isFree}
            isLoaded={isLoaded}
            clickedVideo={() => {handleShowVideo(video.id, video.name, video.duration, video.size, video.isPurchased, video.isFree, video.url)}}
        />
        )
    })
} else {
    for (let i=0; i<3; i++) {
        paidVideos.push(
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
            <Navbar showingCart={() => handleShowCart(true)}
                    showingGallery={() => handleShowGallery(true)}
            />
            {showCart &&
                <Cart />
            }
            {showGallery &&
                <Gallery
                    videos={videoCards}
                    />
            }
            {console.log(showTheatre.url)}
            {(showTheatre.id != null) &&
                <Theatre id={showTheatre.id}
                        name={showTheatre.name}
                        duration={showTheatre.duration}
                        size={showTheatre.size}
                        isPurchased={showTheatre.isPurchased}
                        isFree={showTheatre.isFree}
                        url={showTheatre.url}
                        recommendedVideos={paidVideos}
                />
            }
        </div>
    )
}

export default AppContent