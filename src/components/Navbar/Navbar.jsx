import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar () {
    return (
        <nav className='navbar'>
            <h2>Jose Guzman's Portfolio</h2>

            <Link to ='/'>About Me</Link>
            
            <Link to ='/Portfolio'>Portfolio</Link>

            <Link to = '/Contact-me'>Contact Me</Link>

            <Link to = '/Resume'>Resume</Link>


        </nav>
    )
}