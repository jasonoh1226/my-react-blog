import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

export default function Navigation ({user}) {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav className="site-navigation">
            <span className="menu-title">Jason Oh Blog</span>
            <div className={`menu-content-container ${menuActive && 'active'}` }>
                <ul>
                    {/* Render these li element in a link.
                        - Break into what's called JSX
                        - map function allous us to loop through each element of the array
                          and return a mutation of whatever is in that element.
                        - We're going to change it and return an entirely new array of JSX 
                          elements.
                        - And it's going to render HTML on to the screen.  
                        - link is a callback function.
                    */}
                    { navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>
                                {link.title}
                            </Link>
                        </li>
                    ))}               
                </ul>
                <span className="menu-avatar-container">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38}/>
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </span>       
            </div>
            
            <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
           
        </nav>
    )
}