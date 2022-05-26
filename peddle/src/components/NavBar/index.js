import { Link, NavLink } from 'react-router-dom';
import './index.scss';


const NavBar = ()  => {
    return(
        <div className="container-nav">
                    <div className='nav-bar'>
                <Link className='logo' to='/comingsoon'>
                    <h1>LOGO</h1>
                    
                </Link>
                <nav>
                        <NavLink exact="true"  activeclassname="active" className="about-link" to="/about">
                            <h3>ABOUT US</h3>
                        </NavLink>
                        <NavLink exact="true"  activeclassname="active" className="blog-link" to="/blog">
                            <h3>BLOG</h3>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                            <button>CONTACT US</button>
                        </NavLink>
                
                </nav>
            
            </div>
        </div>
    )
}

export default NavBar