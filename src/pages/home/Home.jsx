import React from 'react'
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