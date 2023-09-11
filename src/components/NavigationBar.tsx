import { useState } from 'react'
import ThreadsLogo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function NavigationBar({  }) {
    const [DropdownClicked, setDropdownClicked] = useState(false)
    return (
        <>
            <header >
                <div className="logo">
                    <img src={ThreadsLogo} alt="" />
                </div>
                <div>
                    <nav>
                        <div className="nav-item">
                            <Link to={"/home"}><i className="fa-solid fa-house"></i></Link>
                        </div>
                        <div className="nav-item">
                            <Link to={"/search"}><i className="fa-solid fa-magnifying-glass"></i></Link>
                        </div>
                        <div className="nav-item">
                            <Link to={"#"}><i className="fa-solid fa-pen-to-square"></i></Link>
                        </div>
                        <div className="nav-item">
                            <Link to={"/activity"}><i className="fa-regular fa-heart"></i></Link>
                        </div>
                        <div className="nav-item">
                            <Link to={"/profile"}><i className="fa-regular fa-user"></i></Link>
                        </div>
                    </nav>
                </div>
                <div className="right">
                    <div className='div-button' onClick={() => setDropdownClicked(!DropdownClicked)}><i className="fa-solid fa-bars"></i></div>
                    <div className={`dropdown-menu ${DropdownClicked ? "" : "hidden"} `}>
                        <a href="">Logout</a>
                    </div>
                </div>
            </header>

            <div className='mobile-nav'>
                <div className='mobile-nav-container'>
                    <div className="nav-item">
                        <Link to={"/home"}><i className="fa-solid fa-house"></i></Link>
                    </div>
                    <div className="nav-item">
                        <Link to={"/search"}><i className="fa-solid fa-magnifying-glass"></i></Link>
                    </div>
                    <div className="nav-item">
                        <Link to={"#"}><i className="fa-solid fa-pen-to-square"></i></Link>
                    </div>
                    <div className="nav-item">
                        <Link to={"/activity"}><i className="fa-regular fa-heart"></i></Link>
                    </div>
                    <div className="nav-item">
                        <Link to={"/profile"}><i className="fa-regular fa-user"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

