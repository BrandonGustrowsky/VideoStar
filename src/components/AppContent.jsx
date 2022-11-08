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
    const [showVideo, setShowVideo] = useState(videoStateDefaultObj)

const handleShowCart = (showingCart) => {
    setShowCart(showingCart)
    setShowGallery(false)
    setShowVideo({})
}

const handleShowGallery = (showingGallery) => {
    setShowGallery(showingGallery)
    setShowCart(false)
}

const handleShowVideo = ({id, name, duration, size, isPurchased, isFree, url}) => {
    setShowVideo({
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
                <Gallery clickedVideo={() => handleShowVideo()}/>
            }
        </div>
        
    )
}

export default AppContent