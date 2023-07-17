import React from "react"
import * as heroStyles from './hero.module.css';

const Hero = () => (
  <div className={heroStyles.hero}>
    <div className={heroStyles.bannerContainer}>
      <div className={heroStyles.banner}>
        <h1 className={heroStyles.title}>Detecting Disparities in Police Deployments Using Dashcam Data</h1>
        <h3 className={heroStyles.paperLink}><a href="https://dl.acm.org/doi/10.1145/3593013.3594020" target="_blank">Paper</a></h3>
      </div>
    </div>
  </div>
)

export default Hero