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
    const [favorited, setFavorited] = useState(false)
    const [data, setData] = useState(null)
    // const [isFavorite, setIsFavorite] = useState(false)
    // const [isInCart, setIsInCart] = useState(false)
    // const [object, setObject] = useState({
    //     name: name,
    //     duration: duration,
    //     size: size,
    //     price: price,
    //     url: url,
    //     isFree: isFree,
    //     isPurchased: isPurchased,
    //     clickedVideo: clickedVideo,
    //     isLoaded: isLoaded
    // })
    const handleFavoriteClick = () => {
        // return setIsFavorite((prevIsFavorite) => { return !prevIsFavorite })
        return setFavorited((prevFavorited) => {
            return !prevFavorited
        })
    }

    console.log(favorited)

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
                    setData(jsonData.map(video => {
                        return {
                            ...video,
                            isFavorite: false,
                            isInCart: false,
                        }
                    }))
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
        //the randomly sorted array
        return data.filter(video => !video.isFree && !video.isPurchased).sort(() => Math.random() - 0.5).slice(-3).map((video, index) => {
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
                    isFavorite={video.isFavorite}
                    favoriteFtn={() => {
                        setData(v => {
                            return {
                                ...v,
                                isFavorite: v.id === video.id ? !v.isFavorite : v.isFavorite
                            }
                        })
                    }}
                    isInCart={video.isInCart}
                    isLoaded={isLoaded}
                    clickedVideo={() => { handleShowVideo(video.id, video.name, video.duration, video.size, video.isPurchased, video.isFree, video.url) }}
                />
            )
        })
    } else {
        //Create empty VideoCards
        for (let i = 0; i < 3; i++) {
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
                    favoriteFtn={() => {
                        setData(v => {
                            return {
                                ...v,
                                isFavorite: v.id === video.id ? !v.isFavorite : v.isFavorite
                            }
                        })
                    }}
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