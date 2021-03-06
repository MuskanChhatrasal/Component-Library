import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { SIdebarData } from './SidebarData'
import { IconContext } from 'react-icons/lib'
import "./Navbar.css"
import Sidebar from '../Sidebar/Sidebar'
const Navbar = () => {

    // const [sidebar, setSidebar] = useState(false)

    // const showSidebar = () => {
    //     setSidebar(!sidebar)
    return (
        <>
            {/* <IconContext.Provider value={{ color: "#fff" }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaBars onClick={showSidebar} />
                    </Link>
                </div>

                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul onClick={showSidebar} className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiOutlineClose />
                            </Link>
                        </li> */}
                        <div className='header'>
                            <h1>mussu UI</h1>
                        </div>
                        <Sidebar />
                        {/* <div className='sidebar'>
                        {
                            SIdebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path} >
                                            {item.icon}
                                            <span>
                                                {item.title}
                                            </span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        </div> */}
                    {/* </ul>
                </nav>
            </IconContext.Provider> */}
        </>
    )
}

export default Navbar
