import "./Logo.css"
import logo from "../../assets/imgs/logo.jpg"
import React from "react"

export default props => (
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>
)