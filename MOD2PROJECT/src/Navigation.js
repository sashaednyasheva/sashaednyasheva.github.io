import './App.css'
import {Link} from 'react-router-dom'

function Navigation (){
    return (
        <nav>
            <h1 className="mainTitle">WORK HARD. TRAVEL HARDER.</h1>

        <ul id="buttons">
            <Link to = '/home' className="text-link" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <li>HOME</li>
            </Link>
            <Link to = '/city-selector' className="text-link" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <li>CITY DATA</li>
            </Link>
            <Link to = '/climate-checker'className="text-link" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <li>WEATHER CHECKER</li>
            </Link>
            <Link to = '/community'className="text-link" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <li>COMMUNITY</li>
            </Link>
            <Link to = '/contact' className="text-link" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <li>NEWSLETTER</li>
            </Link>
        </ul>    
        </nav>
    );
}

export default Navigation;