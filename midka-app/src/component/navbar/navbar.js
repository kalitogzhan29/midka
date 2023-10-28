import React from 'react';
import "./navbar.css"
import {Link,useMatch,useResolvedPath} from "react-router-dom"

function navbar() {
  return (
    <nav className="nav">
    <Link to="/" className="site-title">
     Twitter
    </Link>
    <ul>
      
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/profile">Profile</CustomLink>
      <CustomLink to="/post">Post</CustomLink>
    </ul>
  </nav>
)
}

function CustomLink({ to, children, ...props }) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({ path: resolvedPath.pathname, end: true })

return (
  <li className={isActive ? "active" : ""}>
    <Link to={to} {...props}>
      {children}
    </Link>
  </li>
  );
}

export default navbar;
