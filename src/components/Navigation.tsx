import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {

    function showNavigation() {
        const mobileNavigation = document.querySelector('.mobile-navi')
        mobileNavigation.classList.toggle('hidden')
    }

    return (
        <>
            <header id="navigation" className="fixed z-10 w-full h-auto flex flex-col bg-lightcolor p-2 shadow-sm font-bold text-basecolor md:flex-row justify-end">
                <nav className="space-x-8 hidden md:block">
                    <Link activeClass="active" to="about" className="hover:text-accentcolor" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                    <Link activeClass="active" to="projects" className="hover:text-accentcolor" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
                </nav>
                <nav className="select-none block md:hidden"><i className="fas fa-bars" onClick={showNavigation}></i>
                    <div className="mobile-navi text-center text-basecolor hidden xl:hidden md:h-0">
                        <Link activeClass="active-mobile" to="about" className="hover:text-accentcolor">About</Link><br />
                        <Link activeClass="active-mobile" to="projects" className="hover:text-accentcolor">Projects</Link>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navigation;