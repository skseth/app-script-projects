import { Link } from "react-router-dom"

export function Nav() {
    return <nav className="nav">
        <a href="/" className="site-title">Inner Wheel District 319</a>
        <ul>
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/">Pricing</a></li>
        </ul>
    </nav>
}



