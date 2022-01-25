import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./global.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Header location={this.props.location} />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout
