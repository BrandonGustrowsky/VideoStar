import Navbar from './Navbar'
import Gallery from './Gallery'
import Theatre from './Theatre'
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

const handleShowCart = (showingCart) => {
    setShowCart(showingCart)
    setShowGallery(false)
    setShowTheatre(videoStateDefaultObj)
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
                <Gallery clickedVideo={handleShowVideo}/>
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
                        
                />
            }
        </div>
        
    )
}

export default AppContent