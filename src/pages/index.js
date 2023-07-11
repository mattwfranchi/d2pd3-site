import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Hero from "../components/hero"
import Header from "../components/header"
import FAQs from "../components/faq"

import projGIF from "../images/proj-gif.gif";

import matt from "../images/matt.jpeg";
import jd from "../images/jd.jpeg";
import wendy from "../images/wendy.jpeg";
import emma from "../images/emma.jpeg";

import { faqs_list } from "../components/faq_questions"

const teamMembers = [
  { name: 'Matt Franchi', twitter: 'mattwfranchi', image: matt, link: "https://mattwfranchi.github.io/about" },
  { name: 'J.D. Zamfirescu-Pereira', twitter: 'jdzamfi', image: jd, link: "https://zamfi.net" },
  { name: 'Wendy Ju', twitter: 'wendyju', image: wendy, link: "https://wendyju.com" },
  { name: 'Emma Pierson', twitter: '2plus2make5', image: emma, link: "https://www.cs.cornell.edu/~emmapierson/" },
  // Add more team members as needed
];




const IndexPage = () => (
  <main>
    <Header />
    <Hero />
    
    <div className={styles.projectContent}>
      <section id="project"> 
      <h2>Project Overview</h2>
      <div id={styles.projContainer}>

        <div id={styles.projGIFContainer}>

          <img src={projGIF} id={styles.projGIF} alt="Project infographic" />

        </div> 

        <div id={styles.projInfoContainer}> 


          <p>Large-scale policing data is vital for detecting inequity in police behavior and
  policing algorithms. However, one important type of policing data remains
  largely unavailable within the United States: aggregated police deployment
  data capturing which neighborhoods have the heaviest police presences.
  Here we show that disparities in police deployment levels can be quantified
  by detecting police vehicles in dashcam images of public street scenes. Using
  a dataset of 24,803,854 dashcam images from rideshare drivers in New York
  City, we find that police vehicles can be detected with high accuracy (average
  precision 0.82, AUC 0.99) and identify 233,596 images which contain police
  vehicles. There is substantial inequality across neighborhoods in police vehi-
  cle deployment levels. The neighborhood with the highest deployment levels
  has almost 20 times higher levels than the neighborhood with the lowest.
  Two strikingly different types of areas experience high police vehicle deploy-
  ments — 1) dense, higher-income, commercial areas and 2) lower-income
  neighborhoods with higher proportions of Black and Hispanic residents.
  We discuss the implications of these disparities for policing equity and for
  algorithms trained on policing data</p>

        </div>

      </div>

      </section>

      <section id="faq"> 
      <div>
        <h2>FAQs</h2>
        <FAQs faqs={faqs_list} />
      </div>
      </section>

      <section id="data">
      <div id={styles.dataContainer}>
        <h2>Data</h2>
        <p> Our image data was acquired from <a href="https://data.getnexar.com/" target="_blank">Nexar</a>. Nexar images in New York City are sourced from ridesharing drivers. All Nexar data is anonymized, with significant measures in place to uncouple riders with ride footage. We obtained an IRB exemption for the image data from Cornell University. </p>
        <p> Our code is available on <a id={styles.dataGitHubLink} href="https://github.com/mattwfranchi/police-deployment-patterns" target="_blank">GitHub.</a></p>
      </div>

      </section>

      <section id="press">
      <div id={styles.pressContainer}> 
        <h2>Selected Media Articles</h2>
        <p>Cornell Press <a href="https://news.cornell.edu/stories/2023/07/dashcam-images-reveal-where-police-are-deployed" target="_blank">article</a> </p>
      </div>
      </section>

      <section id="team"> 
      <div className={styles.teamContainer}>
        <h2>Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map(member => (
            <a href={member.link} target="_blank" onClick={() => {

              }}>
            <div className={styles.teamGridItem} key={member.name}>
              <img src={member.image} alt={member.name} className={styles.teamPortrait} />
              <h3>{member.name}</h3>
              <a href={`https://twitter.com/${member.twitter}`} target="_blank" rel="noopener noreferrer">
                @{member.twitter}
                </a>
              </div>

            </a>


            ))}
        </div>
      </div>
      </section>

      <section id="support"> 
      <div id={styles.supportStatement}>
        <p> Support for this work came from an Amazon Research Award, a Google Research Scholar Award and the National Science Foundation.</p>
        <p id={styles.siteDeveloperStatement}> Site by Matt Franchi </p>
      </div>
      </section>
      </div>
  </main>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
  