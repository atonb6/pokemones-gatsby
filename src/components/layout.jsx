import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = (props) => (
    <>
    <Header></Header>
        {props.children}
    <Footer></Footer>
    </>
)

export default Layout