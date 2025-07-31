import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { NavLink, useLocation } from 'react-router'
import "./Nav.css"

const Nav = () => {
    const location = useLocation();
    const hideTabsOn = ["/cart"];
    return (
        <nav style={{ justifyContent: !hideTabsOn.includes(location.pathname) ? "space-between" : "center" }}>
            <div className="nav_left">
                <img src="https://www.shutterstock.com/image-illustration/mens-fashion-shoes-black-classic-260nw-1080406805.jpg" alt="#" />
            </div>
            {!hideTabsOn.includes(location.pathname) && <div className="nav_right">
                <NavLink to="/cart"><ShoppingCart /></NavLink>
            </div>}
        </nav>
    )
}

export default Nav