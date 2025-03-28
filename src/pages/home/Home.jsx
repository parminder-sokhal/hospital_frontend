import React from 'react'
import Header from '../../components/home/header'
import HeaderMain from '../../components/home/headerMain.jsx'
// import GallerySliding from '../../components/home/gallerySliding.jsx'
import SpecialitiesSlider from '../../components/home/SpecialitiesSlider.jsx'
import VideoPlayHeader from '../../components/home/videoplayheader.jsx'

function Home() {
  return (
    <>
    <Header/>
    <HeaderMain/>
    <VideoPlayHeader/>
    {/* <GallerySliding/> */}
    <SpecialitiesSlider/>
    </>
  )
}

export default Home