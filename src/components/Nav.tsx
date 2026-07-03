import { NavLink } from "react-router-dom"
import "./Nav.css"

function Nav() {
  const items = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
  ]

  return (
    <nav className="nav-bar">
      {items.map((item) => (
        <NavLink key={item.to} to={item.to} className="nav-item">
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav