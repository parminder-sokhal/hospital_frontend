import React from 'react'
// import SpecialitiesSlider from '../../components/home/SpecialitiesSlider.jsx'
import VideoPlayHeader from '../../components/home/videoplayheader.jsx'
import Treatment from '../../components/home/Treatment.jsx'
import OurApproach from '../../components/home/ourapproach.jsx'
import Doctors from '../../components/home/Doctors.jsx'
import PhotoGallery from '../../components/home/PhotoGallery.jsx'
import TrendingYoutube from '../../components/home/TrendingYoutube.jsx'
import InstagramSlider from '../../components/home/InstagramSlider.jsx'
import PatientReview from '../../components/home/PatientReview.jsx'

function Home() {
  return (
    <>
   
    <VideoPlayHeader/>
    <Treatment/>
    <OurApproach/>
    <Doctors/>
    <PatientReview/>
    {/* <SpecialitiesSlider/> */}
    <TrendingYoutube/>
    <PhotoGallery/>
    <InstagramSlider/>
    </>
  )
}

export default Home