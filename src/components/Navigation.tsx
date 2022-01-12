import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {

    function showNavigation() {
        const mobileNavigation = document.querySelector('.mobile-navi')
        mobileNavigation.classList.toggle('hidden')
    }

    return (
        <>
            <header id="navigation" className="fixed z-10 w-full h-auto flex flex-col bg-dust p-2 shadow-sm font-bold text-rose md:flex-row justify-end">
                <nav className="space-x-8 hidden md:block">
                    <Link activeClass="active" to="about" className="hover:text-matcha" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                    <Link activeClass="active" to="projects" className="hover:text-matcha" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
                </nav>
                <nav className="select-none block md:hidden"><i className="fas fa-bars" onClick={showNavigation}></i>
                    <div className="mobile-navi text-center text-rose hidden xl:hidden md:h-0">
                        <Link activeClass="active-mobile" to="about" className="hover:text-matcha">About</Link><br />
                        <Link activeClass="active-mobile" to="projects" className="hover:text-matcha">Projects</Link>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navigation;