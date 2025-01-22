/* eslint-disable react-refresh/only-export-components */
import {Link } from 'react-router-dom'
import'../../css/Navbar.css'
// eslint-disable-next-line no-unused-vars
const Navbar=()=>{
// eslint-disable-next-line no-unused-vars
const Navbar=(onLogout)=>{

    return(<header>
    <nav>
    <ol>
    
        <li><Link to='/' className="link">Home</Link></li>
        <li><Link to='/About' className="link">About</Link></li>
        <li><Link to='/Gallery' className="link" >Gallery</Link></li>
        <li><Link to='/Contact' className="link">Contact</Link></li>
        <li><Link to='/Signup' className="link">Signup</Link></li>
        
        <li><Link to='/' className="link" onClick={onLogout}>Logout</Link></li>
    </ol>
    </nav>
    </header>)
}
}