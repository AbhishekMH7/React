import React from "react";
import './Navbar.css'
import { Link} from "react-router-dom";

function Navbar(props){
    return(
    <div>
    <li className='app-link'><Link to="Sign-in">Sign In</Link></li>
    <li className='app-link'><Link to="Sign-up">Sign Up</Link></li>
    </div>
    );
}

export default Navbar;