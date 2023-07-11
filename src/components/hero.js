import React from "react"
import hero_styles from "./hero.module.css" // Assuming you have a corresponding CSS module for styling

const Hero = () => (
  <div className={hero_styles.hero}>
    <h1 className={hero_styles.title}>Your Project Title</h1>
  </div>
)

export default Hero