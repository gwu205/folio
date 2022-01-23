import React from "react"
import Socials from "./socials"
import { container } from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={container}>
      <span>
        <strong>Geoffrey Wu</strong>
        <em> — Copyright © {new Date().getFullYear()}</em>
      </span>
      <Socials />
    </footer>
  )
}

export default Footer
