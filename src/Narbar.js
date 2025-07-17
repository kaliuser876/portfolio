import "./styles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar(){

    return <nav className="nav">
        <Link to="/" className="site-title">Jon's Portfolio</Link>
        <ul>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/experience">Experience</CustomLink>
            <CustomLink to="/skills">Skills</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            
        </ul>
    </nav>
}

function CustomLink( {to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end:true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}