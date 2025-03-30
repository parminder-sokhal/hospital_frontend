import React from 'react'
import Header from '../../components/home/header'
import HeaderMain from '../../components/home/headerMain.jsx'
import GallerySliding from '../../components/home/gallerySliding.jsx'
import SpecialitiesSlider from '../../components/home/SpecialitiesSlider.jsx'
import VideoPlayHeader from '../../components/home/videoplayheader.jsx'
import Treatment from '../../components/home/Treatment.jsx'
import OurApproach from '../../components/home/ourapproach.jsx'
import Doctors from '../../components/home/Doctors.jsx'

function Home() {
  return (
    <>
   
    <VideoPlayHeader/>
    <Treatment/>
    <OurApproach/>
    <SpecialitiesSlider/>
    <Doctors/>
    </>
  )
}

export default Home