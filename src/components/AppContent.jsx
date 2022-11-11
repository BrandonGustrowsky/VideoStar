import Navbar from './Navbar'
import Gallery from './Gallery'
import Theatre from './Theatre'
import VideoCard from './VideoCard'
import Cart from './cart'

import { useState, useEffect } from 'react'

const AppContent = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isShowingCart, setIsShowingCart] = useState(false)

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const rawData = await fetch("https://videostar.dacoder.io/")
            const jsonData = await rawData.json()
            setData(jsonData.map(video => {
                return {
                    ...video,
                    isFavorite: false,
                    isInCart: false,
                    isInTheatreMode: false
                }
            }))
        })()
        setIsLoading(false)
    }, [])

    //Map over all the videos
    //If any of the videos have their isInTheatreMode set to true, display theatre mode

    return (
        <>
            <Navbar 
                data={data}
                changeState={setData}
                showCart={setIsShowingCart}/>
            {isShowingCart ? 
            <Cart
                videos={data.filter((video) => {return video.isInCart}).map((video) => {return <VideoCard
                    data={data}
                    setData={setData}
                    key={video.id}
                    id={video.id}
                    name={video.name}
                    duration={video.duration}
                    size={video.size}
                    price={video.price}
                    url={video.url}
                    isInCart={video.isInCart}
                    isPurchased={video.isPurchased}
                    isFree={video.isFree}
                    isLoading={isLoading}
                    handleShowVideo={setData}
                    />})}
                setData={setData}
                data={data}
                 /> :
            data.filter((video) => {return video.isInTheatreMode}).length == 1 ? 
                <Theatre
                    video={data.filter((video) => {
                        return video.isInTheatreMode
                    })[0]}
                    recommendedVideos={data.filter((video) => {
                        return (!video.isFree || !video.isPurchased)
                    }).sort(() => Math.random() - 0.5).filter((video) => {return !video.isInCart && !video.isPurchased}).slice(-3).map((video) => {
                        return <VideoCard
                    data={data}
                    setData={setData}
                    key={video.id}
                    id={video.id}
                    name={video.name}
                    duration={video.duration}
                    size={video.size}
                    price={video.price}
                    url={video.url}
                    isPurchased={video.isPurchased}
                    isFree={video.isFree}
                    isLoading={isLoading}
                    handleShowVideo={setData}
                />
                    })}
                />
            :
                <Gallery
                    data={data}
                    isLoading={isLoading}
                    setData={setData}
                />
            }
        </>
    )
}

export default AppContent