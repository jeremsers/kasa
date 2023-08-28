import Footer from "./Footer"
import Header from "./Header"
import { Link } from "react-router-dom"
import "../styles/pages/Error.scss"


function Error() {
    return (
        <>
        <div className="page-container">

            <Header />
            <div className="error">

            <p >404</p>
            <h1>Oups! La page que vous demandez n'existe pas</h1>
					<Link to="/" className="error-link">Retourner sur la page d'accueil</Link>

            </div>
        </div>
        <Footer />
        </>
    )
}
 
export default Error