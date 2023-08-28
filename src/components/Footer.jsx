import "../styles/layout/Footer.scss"
import logo from "../assets/logo.svg"

function Footer() {
    return (
        <div className="footer-container">
            <img src={logo} alt="" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
 
export default Footer