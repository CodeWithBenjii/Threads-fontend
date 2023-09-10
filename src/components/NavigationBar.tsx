import { useState } from 'react'
import ThreadsLogo from '../assets/logo.svg'

export default function NavigationBar() {
    const [DropdownClicked, setDropdownClicked] = useState(false)
    return (
        <>
            <header>
                <div className="logo">
                    <img src={ThreadsLogo} alt="" />
                </div>
                <div>
                    <nav>
                        <div className="nav-item">
                            <a href="#"><i className="fa-solid fa-house"></i></a>
                        </div>
                        <div className="nav-item">
                            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                        </div>
                        <div className="nav-item">
                            <a href="#"><i className="fa-solid fa-pen-to-square"></i></a>
                        </div>
                        <div className="nav-item">
                            <a href="#"><i className="fa-regular fa-heart"></i></a>
                        </div>
                        <div className="nav-item">
                            <a href="#"><i className="fa-regular fa-user"></i></a>
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
                        <a href="/home"><i className="fa-solid fa-house"></i></a>
                    </div>
                    <div className="nav-item">
                        <a href="/search"><i className="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                    <div className="nav-item">
                        <a href="#"><i className="fa-solid fa-pen-to-square"></i></a>
                    </div>
                    <div className="nav-item">
                        <a href="/activity"><i className="fa-regular fa-heart"></i></a>
                    </div>
                    <div className="nav-item">
                        <a href="/profile"><i className="fa-regular fa-user"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

