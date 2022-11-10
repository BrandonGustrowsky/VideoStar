import Navbar from './Navbar'
import Gallery from './Gallery'
import Theatre from './Theatre'
import VideoCard from './VideoCard'
import Cart from './cart'

import { useState, useEffect } from 'react'

const AppContent = () => {

    //The default object for showTheatre state    
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

    //Shows the cart and hides all other main components
    const handleShowCart = (showingCart) => {
        setShowCart(showingCart)
        setShowGallery(false)
        setShowTheatre(videoStateDefaultObj)
        setIsLoaded(true)
    }
    //Shows the gallery and hides all other main components
    const handleShowGallery = (showingGallery) => {
        setShowGallery(showingGallery)
        setShowCart(false)
        setShowTheatre(videoStateDefaultObj)
    }
    //Shows the Theatre mode for a video and hides all other main components
    const handleShowVideo = (id, name, duration, size, isPurchased, isFree, url) => {
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
    const paidVideoObjs = [] //Stores the Videos that are not free and have not been purchased
    let paidVideos = [] //Stores the VideoCard components that are to be rendered in the Theatre component
                        //as recommended videos (check Theatre props)

    if (data) {
        for (const videoObj of data) {
            if (!videoObj.isFree && !videoObj.isPurchased) {
                paidVideoObjs.push(videoObj)
            }
        }
        // Choosing three recommended videos at random
        paidVideoObjs.sort(() => Math.random() - 0.5)
        let selectedVideos = paidVideoObjs.slice(0, 3) //Choose the first three paid videos in
                                                       //the randomly sorted array
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
        //Create empty VideoCards
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
                    <Cart paidVideos={paidVideos}/>
                }
                {showGallery &&
                    <Gallery
                        data={data}
                        isLoaded={isLoaded}
                        handleShowVideo={handleShowVideo}
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