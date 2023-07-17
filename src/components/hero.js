import React from "react"
import * as heroStyles from './hero.module.css';

const Hero = () => (
  <div className={heroStyles.hero}>
    <div className={heroStyles.bannerContainer}>
      <div className={heroStyles.banner}>
        <h1 className={heroStyles.title}>Detecting Disparities in Police Deployments Using Dashcam Data</h1>
        <div className={heroStyles.heroLinks}>
        <h3 className={heroStyles.paperLink}><a href="https://arxiv.org/abs/2305.15210" target="_blank">Paper</a></h3>
        <h3 className={heroStyles.paperLink}><a href="https://github.com/mattwfranchi/police-deployment-patterns" target="_blank">Dataset</a></h3>
        </div>
      </div>
    </div>
  </div>
)

export default Hero