import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Socials from "../components/socials"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const mail = data.site.siteMetadata.social.mail

    return (
      <Layout location={this.props.location}>
        <SEO title="About me" />
        <section className="section">
          <h2>About</h2>
          <h3>
            <i>Who's this guy?</i> &nbsp;I hear you ask.
          </h3>
        </section>
        <section className="section">
          <p>
            I’m a digital designer based in <s>Melbourne</s> Tokyo.
          </p>
          <p>
            I enjoy building beautiful interfaces and developing clean and
            considered product outcomes. Primarily, I’m concerned with visual
            communication and ensuring users have an experience that sparks joy,
            whether that’s in the form of a website, app, interaction or brand.
          </p>
        </section>
        <section className="section">
          <Socials />
        </section>
        <StaticImage
          src="../../content/assets/tokyo.png"
          alt="Where I live"
          placeholder="blurred"
          layout="fullWidth"
          quality={90}
        />
        <figcaption className="caption">Where I live — Tokyo, Japan</figcaption>
        <section className="section">
          <p>
            <strong>Disciplines</strong>
          </p>
          <p>
            I pride myself on being a multi-disciplinary designer who ‘wears
            many hats’.
          </p>
          <p>
            Design, at its core, is about coming up with interesting and
            innovative solutions to complex problems regardless of the mode or
            medium. For me, it’s only natural that I’ve had the opportunity to
            work on a wide variety of projects as well as dabble here and there
            in other media.
          </p>
          <p>Here’s how I’d describe my skills:</p>
          <ul>
            <li>
              <strong>UI Design, Branding and Design Systems</strong>
              <br />
              <small>My bread and butter</small>
            </li>
            <li>
              <strong>Frontend Development</strong>
              <br />
              <small>HTML/CSS, Javascript/React, Git, CMS</small>
            </li>
            <li>
              <strong>Product Design</strong>
              <br />
              <small>
                Including business considerations and team collaboration
              </small>
            </li>
            <li>
              <strong>Interaction and Motion Design</strong>
            </li>
            <li>
              <strong>Graphic & Print Design</strong>
            </li>
            <li>
              <strong>UX Design & Copywriting</strong>
            </li>
          </ul>
          <p>
            If you're interested in learning more about me and my design
            process,&nbsp;
            <Link to="/journal/">head over to the Journal page :)</Link>
          </p>
        </section>
        <StaticImage
          src="../../content/assets/snowboard.png"
          alt="My hobbies"
          placeholder="blurred"
          layout="fullWidth"
          quality={90}
        />
        <figcaption className="caption">
          I love snowboarding - that’s me on the left!
        </figcaption>
        <section className="section">
          <p>
            <strong>Process</strong>
          </p>
          <p>
            My design process is ever-changing and evolving through learned
            experiences and new technologies. I’m in ‘always-learning’ mode and
            enjoy having a hand in all areas of the product stages - from
            planning and ideation, design (of course), development, and
            optimisation.
          </p>
          <p>
            I think we have a responsibility as designers to be adaptive and
            reactive to the changing landscape of our industry and our world at
            large.
          </p>
          <p>
            Satisfaction comes when we can create positive impact on the lives
            of users and influence lifestyles in a way that’s more thoughtful,
            efficient, and mindful of those in our community.
          </p>
        </section>
        <section className="section">
          <p>
            <strong>I'm open to work</strong>
          </p>
          <p>
            If you’ve got a project you want to collaborate on or you just want
            to drop a line and get to know each other better,{" "}
            <a href={`mailto:${mail}`} rel="noopener noreferrer">
              send me a message
            </a>
            &nbsp;or&nbsp;
            <a
              href="https://tinyurl.com/gwu205cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              check out my CV
            </a>
            .
          </p>
        </section>
        <Link className="h3 back" to="/">
          Back to home
        </Link>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        social {
          mail
        }
      }
    }
  }
`
