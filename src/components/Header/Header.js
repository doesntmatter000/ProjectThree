import React, {useState} from 'react';
import "./Header.scss"
import {motion} from "framer-motion"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    let ClassName = toggle ? "hamburger active" : "hamburger"
    const toggleF = () => {
        setToggle(!toggle)
    }

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__logo">Logo</div>
                    <motion.ul
                        animate={!toggle ? {x: "-200%", y: "72px"} : {x: 0, y: "72px"}}
                        transition={toggle ? {type: "tween", duration: .3} : {type: "tween", duration: .3, delay: .2}}
                        className="header__list">
                        <motion.li
                            animate={!toggle ? {x: -100, opacity: 0} : {opacity: 1 , x: 0}}
                            transition={toggle ? {duration: .2} : { duration: .2}}
                            className="header__list_links">Blog</motion.li>
                        <motion.li
                            animate={!toggle ? {x: -100, opacity: 0} : {opacity: 1 , x: 0}}
                            transition={toggle ? { duration: .2} : { duration: .2}}
                            className="header__list_links">
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 1.98123C17.3229 2.27654 16.6068 2.47281 15.8737 2.56398C16.6463 2.10568 17.2238 1.37999 17.4971 0.524351C16.7738 0.953354 15.9824 1.25546 15.1571 1.4176C14.6511 0.877352 13.9944 0.501759 13.2722 0.339619C12.55 0.177479 11.7957 0.236287 11.1073 0.508403C10.419 0.780518 9.82836 1.25336 9.41223 1.8655C8.9961 2.47764 8.77368 3.20079 8.77387 3.94098C8.77387 4.23348 8.79862 4.51473 8.85938 4.78248C7.39134 4.7105 5.95503 4.32949 4.64434 3.66436C3.33365 2.99922 2.17811 2.06494 1.25325 0.922601C0.779422 1.73469 0.632935 2.69685 0.843619 3.61315C1.0543 4.52946 1.60631 5.33102 2.38725 5.8546C1.8031 5.83894 1.23128 5.68306 0.72 5.4001V5.4406C0.720979 6.29271 1.0155 7.11847 1.55398 7.77887C2.09247 8.43927 2.84203 8.89399 3.6765 9.06648C3.36081 9.14968 3.03546 9.19053 2.709 9.18798C2.47454 9.19215 2.24031 9.17102 2.01038 9.12498C2.24881 9.85738 2.70843 10.4979 3.32594 10.9582C3.94346 11.4186 4.68851 11.6762 5.4585 11.6956C4.15231 12.7171 2.54135 13.2713 0.883125 13.2695C0.5805 13.2695 0.29025 13.256 0 13.2189C1.68737 14.3062 3.65364 14.8814 5.661 14.8749C12.4515 14.8749 16.164 9.24985 16.164 4.3741C16.164 4.21098 16.1584 4.05348 16.1505 3.8971C16.8783 3.37621 17.5051 2.72697 18 1.98123Z" fill="#5E5C6C"/>
                            </svg>
                            Twitter</motion.li>
                        <motion.li
                            animate={!toggle ? {x: -100, opacity: 0} : {opacity: 1 , x: 0}}
                            transition={toggle ? {duration: .2}: { duration: .2}}
                            className="header__list_links">
                            <svg className="svg" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6706 1.46816C18.1896 0.788614 16.6014 0.287953 14.9409 0.00120288C14.9106 -0.0043313 14.8804 0.00949891 14.8649 0.03716C14.6606 0.400436 14.4344 0.87436 14.2759 1.24686C12.4899 0.97948 10.7131 0.97948 8.96374 1.24686C8.80527 0.86608 8.57082 0.400436 8.36565 0.03716C8.35007 0.0104218 8.31986 -0.00340839 8.28962 0.00120288C6.63002 0.287036 5.04187 0.787698 3.55994 1.46816C3.54711 1.47369 3.53612 1.48292 3.52882 1.4949C0.51642 5.99536 -0.308802 10.3852 0.0960244 14.7206C0.0978561 14.7418 0.109763 14.7621 0.126249 14.775C2.11374 16.2346 4.03897 17.1207 5.92845 17.708C5.95869 17.7172 5.99073 17.7062 6.00997 17.6813C6.45693 17.0709 6.85535 16.4273 7.19696 15.7505C7.21712 15.7109 7.19787 15.6638 7.15667 15.6482C6.52471 15.4084 5.92295 15.1162 5.3441 14.7842C5.29832 14.7575 5.29465 14.692 5.33677 14.6607C5.45858 14.5694 5.58043 14.4744 5.69674 14.3785C5.71778 14.361 5.74711 14.3573 5.77185 14.3684C9.57463 16.1046 13.6916 16.1046 17.4495 14.3684C17.4742 14.3564 17.5036 14.3601 17.5255 14.3776C17.6419 14.4735 17.7637 14.5694 17.8864 14.6607C17.9285 14.692 17.9258 14.7575 17.88 14.7842C17.3011 15.1226 16.6994 15.4084 16.0665 15.6473C16.0253 15.6629 16.007 15.7109 16.0271 15.7505C16.3761 16.4264 16.7745 17.0699 17.2132 17.6803C17.2315 17.7062 17.2645 17.7172 17.2947 17.708C19.1934 17.1207 21.1186 16.2346 23.1061 14.775C23.1235 14.7621 23.1345 14.7427 23.1363 14.7215C23.6208 9.70932 22.3248 5.35548 19.7008 1.49582C19.6944 1.48292 19.6834 1.47369 19.6706 1.46816ZM7.76484 12.0808C6.61994 12.0808 5.67658 11.0297 5.67658 9.73884C5.67658 8.44797 6.60165 7.39687 7.76484 7.39687C8.93716 7.39687 9.8714 8.4572 9.85307 9.73884C9.85307 11.0297 8.928 12.0808 7.76484 12.0808ZM15.4858 12.0808C14.341 12.0808 13.3976 11.0297 13.3976 9.73884C13.3976 8.44797 14.3226 7.39687 15.4858 7.39687C16.6582 7.39687 17.5924 8.4572 17.5741 9.73884C17.5741 11.0297 16.6582 12.0808 15.4858 12.0808Z" fill="#5E5C6C"/>
                            </svg>
                            Discord</motion.li>
                        <motion.li
                            animate={!toggle ? {x: -100, opacity: 0} : {opacity: 1 , x: 0}}
                            transition={toggle ? {duration: .4} : { duration: .4}}
                            className="header__list_links-open">Open App</motion.li>
                    </motion.ul>

                    <ul className="header__list">
                        <li className="header__list_links">Blog</li>
                        <li className="header__list_links">
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 1.98123C17.3229 2.27654 16.6068 2.47281 15.8737 2.56398C16.6463 2.10568 17.2238 1.37999 17.4971 0.524351C16.7738 0.953354 15.9824 1.25546 15.1571 1.4176C14.6511 0.877352 13.9944 0.501759 13.2722 0.339619C12.55 0.177479 11.7957 0.236287 11.1073 0.508403C10.419 0.780518 9.82836 1.25336 9.41223 1.8655C8.9961 2.47764 8.77368 3.20079 8.77387 3.94098C8.77387 4.23348 8.79862 4.51473 8.85938 4.78248C7.39134 4.7105 5.95503 4.32949 4.64434 3.66436C3.33365 2.99922 2.17811 2.06494 1.25325 0.922601C0.779422 1.73469 0.632935 2.69685 0.843619 3.61315C1.0543 4.52946 1.60631 5.33102 2.38725 5.8546C1.8031 5.83894 1.23128 5.68306 0.72 5.4001V5.4406C0.720979 6.29271 1.0155 7.11847 1.55398 7.77887C2.09247 8.43927 2.84203 8.89399 3.6765 9.06648C3.36081 9.14968 3.03546 9.19053 2.709 9.18798C2.47454 9.19215 2.24031 9.17102 2.01038 9.12498C2.24881 9.85738 2.70843 10.4979 3.32594 10.9582C3.94346 11.4186 4.68851 11.6762 5.4585 11.6956C4.15231 12.7171 2.54135 13.2713 0.883125 13.2695C0.5805 13.2695 0.29025 13.256 0 13.2189C1.68737 14.3062 3.65364 14.8814 5.661 14.8749C12.4515 14.8749 16.164 9.24985 16.164 4.3741C16.164 4.21098 16.1584 4.05348 16.1505 3.8971C16.8783 3.37621 17.5051 2.72697 18 1.98123Z" fill="#5E5C6C"/>
                            </svg>
                            Twitter</li>
                        <li className="header__list_links">
                            <svg className="svg" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6706 1.46816C18.1896 0.788614 16.6014 0.287953 14.9409 0.00120288C14.9106 -0.0043313 14.8804 0.00949891 14.8649 0.03716C14.6606 0.400436 14.4344 0.87436 14.2759 1.24686C12.4899 0.97948 10.7131 0.97948 8.96374 1.24686C8.80527 0.86608 8.57082 0.400436 8.36565 0.03716C8.35007 0.0104218 8.31986 -0.00340839 8.28962 0.00120288C6.63002 0.287036 5.04187 0.787698 3.55994 1.46816C3.54711 1.47369 3.53612 1.48292 3.52882 1.4949C0.51642 5.99536 -0.308802 10.3852 0.0960244 14.7206C0.0978561 14.7418 0.109763 14.7621 0.126249 14.775C2.11374 16.2346 4.03897 17.1207 5.92845 17.708C5.95869 17.7172 5.99073 17.7062 6.00997 17.6813C6.45693 17.0709 6.85535 16.4273 7.19696 15.7505C7.21712 15.7109 7.19787 15.6638 7.15667 15.6482C6.52471 15.4084 5.92295 15.1162 5.3441 14.7842C5.29832 14.7575 5.29465 14.692 5.33677 14.6607C5.45858 14.5694 5.58043 14.4744 5.69674 14.3785C5.71778 14.361 5.74711 14.3573 5.77185 14.3684C9.57463 16.1046 13.6916 16.1046 17.4495 14.3684C17.4742 14.3564 17.5036 14.3601 17.5255 14.3776C17.6419 14.4735 17.7637 14.5694 17.8864 14.6607C17.9285 14.692 17.9258 14.7575 17.88 14.7842C17.3011 15.1226 16.6994 15.4084 16.0665 15.6473C16.0253 15.6629 16.007 15.7109 16.0271 15.7505C16.3761 16.4264 16.7745 17.0699 17.2132 17.6803C17.2315 17.7062 17.2645 17.7172 17.2947 17.708C19.1934 17.1207 21.1186 16.2346 23.1061 14.775C23.1235 14.7621 23.1345 14.7427 23.1363 14.7215C23.6208 9.70932 22.3248 5.35548 19.7008 1.49582C19.6944 1.48292 19.6834 1.47369 19.6706 1.46816ZM7.76484 12.0808C6.61994 12.0808 5.67658 11.0297 5.67658 9.73884C5.67658 8.44797 6.60165 7.39687 7.76484 7.39687C8.93716 7.39687 9.8714 8.4572 9.85307 9.73884C9.85307 11.0297 8.928 12.0808 7.76484 12.0808ZM15.4858 12.0808C14.341 12.0808 13.3976 11.0297 13.3976 9.73884C13.3976 8.44797 14.3226 7.39687 15.4858 7.39687C16.6582 7.39687 17.5924 8.4572 17.5741 9.73884C17.5741 11.0297 16.6582 12.0808 15.4858 12.0808Z" fill="#5E5C6C"/>
                            </svg>
                            Discord</li>
                        <li className="header__list_links-open">Open App</li>
                    </ul>
                    <HamburgerMenu ClassName={ClassName} toggle={toggleF}/>
                </nav>
            </div>
        </header>
    );
};

export default Header;