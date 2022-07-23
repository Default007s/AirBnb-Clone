import '../Styles/Navbar.css'
import logo from '../Images/Logo.png'

export default function Navbar() {
    return(
        <nav>
            <img className='Logo' src={logo}></img>
            <div></div>
        </nav>
    )
}