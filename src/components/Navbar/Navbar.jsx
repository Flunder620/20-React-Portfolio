import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar () {
    return (
        <nav className='navbar'>
            <Link to ='/'>Home</Link>

            <Link to ='/Projects'>Projects</Link>

            <Link to ='/Info'>Info</Link>
        </nav>
    )
}