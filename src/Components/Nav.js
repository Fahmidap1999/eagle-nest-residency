import React, { useEffect } from "react";
import "./Nav.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { page } from "../data.js";

const Nav = () => {

    const Show = () => {
        document.getElementById('cancel').style.display = "flex";
        document.getElementById('bars').style.display = "none";
        document.getElementsByClassName('navlist')[0].style.display = "flex";
        document.getElementsByClassName('navlist')[0].style.position = "relative";
        document.getElementsByClassName('navlist')[0].style.left = 0;
        document.getElementsByClassName('navlist')[0].style.transition = "1s all";

    }

    const Hide = () => {
        document.getElementById('bars').style.display = "flex";
        document.getElementById('cancel').style.display = "none";
        document.getElementsByClassName('navlist')[0].style.display = "none";
        document.getElementsByClassName('navlist')[0].style.left = "-100%";
    }

    useEffect(() => {
        const navE1 = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 56) {
                navE1.classList.add('navbar-scrolled');
            }
            else if (window.scrollY < 56) {
                navE1.classList.remove('navbar-scrolled');
            }
        });

    });

    return (
        <>
            <div class="container">
                <nav class="navbar navbar-expand-sm .navbar-text .collapse .navbar-collapse navbar-dark fixed-top">

                    <div class="container">
                        <a class="navbar-brand" href="#">
                            {/* <img id="logo" src={logo} alt="logo" width="30" height="24" class="d-inline-block align-text-top" />  */}
                            <a className={'navname'} href="#">EAGLE NEST RESIDENCY</a>
                        </a>
                    
                    </div>
                    <svg onClick={Show} id="bars" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    <svg onClick={Hide} id="cancel" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    <div className="navlist">
                        <ul className="navitems" class="navbar-nav mr-auto">
                            {page.map((con) => {
                                return (
                                    <li className="list" key={con.id}><a className="link" href={con.link}>{con.text}</a></li>);

                            })}
                        </ul>
                    </div>
                </nav>
            </div>

        </>
    )
}
export default Nav; 