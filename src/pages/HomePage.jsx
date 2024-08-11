import React from 'react'

/*components */
import HeroComponent from '../components/HeroComponent'
import FeaturedComponent from '../components/FeaturedComponent'
import ConsultComponent from '../components/ConsultComponent'
import BuildingComponent from '../components/BuildingComponent'
import SatisfactionComponent from '../components/SatisfactionComponent'
import NewsComponent from '../components/NewsComponent'
import NewsletterComponent from '../components/NewsletterComponent'


function HomePage() {
  return (
    <div>
      <HeroComponent/>
      <FeaturedComponent/>
      <ConsultComponent/>
      <BuildingComponent/>
      <SatisfactionComponent/>
      <NewsComponent/>
      <NewsletterComponent/>
      
    </div>
  )
}

export default HomePage 