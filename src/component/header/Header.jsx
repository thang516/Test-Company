import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";
import "../header/header.scss"
import {SideBar} from "./SideBar";
import {isMobile} from 'react-device-detect';
import {useWindowResize} from "../../hook/useWindowResize";
const home = [

    {

        href: 'https://themes.themegoods.com/grandtour/demo/',
        title: 'Home 1 – Background Image',
        value: 1
    },
    {
        href: '\n' +
            'https://themes.themegoods.com/grandtour/demo/home-2/',
        title: 'Home 2 – Youtube Video',
        value: 2
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/home-3-google-inspired/',
        title: 'Home 3 – Google Inspired',
        value: 3
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/home-4-travel-site/',
        title: 'Home 4 – Travel Site',
        value: 4
    }

];
const destinations = [
    {

        href: 'https://themes.themegoods.com/grandtour/demo/destination-fullwidth/',
        title: 'Destination Fullwidth',
        value: 1
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/destination-video-header/',
        title: 'Destination + Video Header',
        value: 2
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/destination-right-sidebar/',
        title: 'Destination Right Sidebar',
        value: 3
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/destination-left-sidebar/',
        title: 'Destination Left Sidebar',
        value: 4
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/destination/venice/',
        title: 'Single Destination',
        value: 5
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/destination/paris/',
        title: 'Single Destination + Video',
        value: 6
    }
];
const pages = [
    {

        href: 'https://themes.themegoods.com/grandtour/demo/about-us/',
        title: 'About Us',
        value: 1
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/contact-us/',
        title: 'Contact Us',
        value: 2
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/faqs/',
        title: 'FAQs',
        value: 3
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/galleries/gallery/',
        title: 'Gallery',
        value: 4
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/page-fullwidth/',
        title: 'Page Fullwidth',
        value: 5
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/page-video-header/',
        title: 'Page + Video Background Header',
        value: 6
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/page-right-sidebar/',
        title: 'Page Right Sidebar',
        value: 7
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/page-left-sidebar/',
        title: 'Page Left Sidebar',
        value: 8
    }
];
const blog = [
    {

        href: 'https://themes.themegoods.com/grandtour/demo/blog/blog-right-sidebar/',
        title: 'Blog Right Sidebar',
        value: 1
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/blog/blog-left-sidebar/',
        title: 'Blog Left Sidebar',
        value: 2
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/blog/blog-fullwidth/',
        title: 'Blog Fullwidth',
        value: 3
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/blog/blog-grid-right-sidebar/',
        title: 'Blog Grid Right Sidebar',
        value: 4
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/blog/blog-grid-left-sidebar/',
        title: 'Blog Grid Left Sidebar',
        value: 5
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/blog/blog-grid-fullwidth/',
        title: 'Blog Grid Fullwidth',
        value: 6
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/blog/blog-full-grid-right-sidebar/',
        title: 'Blog Full + Grid Right Sidebar',
        value: 7
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/blog/blog-full-grid-left-sidebar/',
        title: 'Blog Full + Grid Left Sidebar',
        value: 8
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/blog/blog-full-grid-fullwidth/',
        title: 'Blog Full + Grid Fullwidth',
        value: 9
    },
];
const shortCodes = [
    {

        href: 'https://themes.themegoods.com/grandtour/demo/shortcodes/accordion-toggles/',
        title: 'Accordion & Toggles',
        value: 1
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/shortcodes/alert-boxes/',
        title: 'Alert Boxes',
        value: 2
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/shortcodes/animated-content/',
        title: 'Animated Content',
        value: 3
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/shortcodes/buttons-social-icons/',
        title: 'Buttons & Social Icons',
        value: 4
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/shortcodes/columns/',
        title: 'Columns',
        value: 5
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/shortcodes/google-maps/',
        title: 'Google Maps',
        value: 6
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/shortcodes/image-frame-animation/',
        title: 'Image Frame & Animation',
        value: 7
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/shortcodes/image-teasers/',
        title: 'Image Teasers',
        value: 8
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/shortcodes/pricing-tables/',
        title: 'Pricing Tables',
        value: 9
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/shortcodes/tabs/',
        title: 'Tabs',
        value: 10
    }
];
const shop = [
    {

        href: 'https://themes.themegoods.com/grandtour/demo/shop/',
        title: 'Shop Fullwidth',
        value: 1
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/shop/?sidebar=1',
        title: 'Shop Sidebar',
        value: 2
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/shop/beach-shoe/',
        title: 'Single Product Fullwidth',
        value: 3
    },
    {
        href: 'https://themes.themegoods.com/grandtour/demo/shop/safety-set/?sidebar=1',
        title: 'Single Product With Sidebar',
        value: 4
    }
];



export function Header() {
    const navigate = useNavigate();
    const {isMobile, isTablet, isDesktop} = useWindowResize();
    console.log(`tablet: ${isTablet}, desktop: ${isDesktop}, moblie: ${isMobile}`)
    return (
        <>

                <header id="header" className="header">
                    {/*+container-xl d-flex align-items-center justify-content-between*/}
                    <div className="container-fluid">
                            <div className="pnj">
                                G<span style={{fontSize:"45px",fontWeight:"bold"}}>Tour</span>
                            </div>
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li style={{display:"flex"}} className="dropdown dropdown-container"> <span>Home</span>
                                    <ul>
                                        {/*<li><a href="#">Home</a></li>*/}
                                        {home.map(ct => {
                                            return <>
                                                <li className="dropdown">
                                                    <a  href={ct.href}>{ct.title}</a>

                                                </li>
                                            </>
                                        })}


                                    </ul>
                                    <i className="bi bi-chevron-compact-down"></i>
                                </li>

                                <li  style={{display:"flex"}}  className="dropdown dropdown-container"><a href="#"><span>Tours</span></a>
                                    <ul>
                                        <li className="dropdown" ><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-classic/">Tour Classic Fullwidth </a>
                                            {/*<i className="bi bi-chevron-compact-right"></i>*/}
                                            <ul>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-classic/">2 Columns</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-classic/">3 Columns</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-4-columns-classic/">4 Columns</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"  ><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-classic-right-sidebar/">Tour Classic Sidebar</a>
                                            <ul>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-classic-right-sidebar/">Right Sidebar</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-classic-left-sidebar/">Left Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"  ><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/">Tour Grid Fullwidth</a>
                                            <ul>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-2-columns-grid/">2 Columns</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/">3 Columns</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-4-columns-grid/">4 Columns</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"  ><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-grid-right-sidebar/">Tour Grid Sidebar</a>
                                            <ul>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-grid-right-sidebar/">Right Sidebar</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-grid-left-sidebar/">Left Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"  ><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-list-right-sidebar/">Tour List Sidebar</a>
                                            <ul>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-list-right-sidebar/">Right Sidebar</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-list-left-sidebar/">Left Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"  ><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/">Tour Header Type</a>
                                            <ul>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/">Featured Image</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-video-header/">Video</a></li>
                                            </ul>
                                        </li>

                                        <li  className="dropdown"><a href="#"><span>Tour Categories</span> <i
                                            className="bi bi-chevron-down dropdown-indicator"/></a>
                                            <ul>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tourcat/rural/">Rural</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tourcat/snow-ice/">Snow & Ice</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tourcat/wildlife/">Wildlife</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tourcat/mountain/">Mountain</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                      <i className="bi bi-chevron-compact-down"></i>
                                </li>

                                <li  style={{display:"flex"}}  className="dropdown dropdown-container"><a href="#"><span>Booking</span></a>
                                    <ul>
                                        <li className="dropdown" ><a href="#">Online Payment for Booking</a>
                                            <ul>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tour/grand-switzerland/">Variable Tour Pricing</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tour/swiss-alps-trip/">Simple Tour Pricing</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"  ><a href="#">Custom Booking Form</a>
                                            <ul>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tour/the-new-california/">Booking Form + Sub Tour Date</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tour/niko-trip/">Booking Form + Custom Date</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"  ><a href="#">Tour Durations</a>
                                            <ul>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tour/hong-kong/">Single Day Tour</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tour/grand-switzerland/">Multiple Days Tour</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="https://themes.themegoods.com/grandtour/demo/tour/5-lake-of-fuji-san/">Custom Booking URL for Affiliate Tour</a>
                                        </li>
                                        <li ><a href="https://themes.themegoods.com/grandtour/demo/tour/exclusive-prague-trip/">Custom Booking using custom HTML & Shortcode</a>
                                        </li>
                                        <li className="dropdown"  ><a href="https://themes.themegoods.com/grandtour/demo/tours/tour-3-columns-grid/">Tour Header Type</a>
                                            <ul>
                                                <li><a href="#">Header Options</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tour/french-autumn/">Standard Background Header</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tour/great-britain-travel/">Video Background Header</a></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown"><a href="#"><span>Layout Options</span> <i
                                            className="bi bi-chevron-down dropdown-indicator"/></a>
                                            <ul>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tour/colorful-singapore/">With Sidebar</a></li>
                                                <li><a href="https://themes.themegoods.com/grandtour/demo/tour/discover-japan/">Fullwidth</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                      <i className="bi bi-chevron-compact-down"></i>
                                </li>


                                <li  style={{display:"flex"}} className="dropdown dropdown-container" >Destinations
                                    <ul>
                                        {destinations.map(ct => {
                                            return <>
                                                <li>
                                                    <a  href={ct.href}>{ct.title}</a>

                                                </li>
                                            </>
                                        })}

                                    </ul>
                                      <i className="bi bi-chevron-compact-down"></i>
                                </li>


                                <li  style={{display:"flex"}}  className="dropdown dropdown-container" >Pages
                                    <ul>
                                        {pages.map(ct => {
                                            return <>
                                                <li>
                                                    <a  href={ct.href}>{ct.title}</a>

                                                </li>
                                            </>
                                        })}


                                    </ul>
                                      <i className="bi bi-chevron-compact-down"></i>

                                </li>
                                <li  style={{display:"flex"}}  className="dropdown dropdown-container" >Blog
                                    <ul>
                                        {blog.map(ct => {
                                            return <>
                                                <li>
                                                    <a  href={ct.href}>{ct.title}</a>

                                                </li>
                                            </>
                                        })}


                                    </ul>
                                      <i className="bi bi-chevron-compact-down"></i>

                                </li>
                                <li  style={{display:"flex"}}  className="dropdown dropdown-container" >Shortcodes
                                    <ul>
                                        {shortCodes.map(ct => {
                                            return <>
                                                <li>
                                                    <a  href={ct.href}>{ct.title}</a>

                                                </li>
                                            </>
                                        })}


                                    </ul>
                                      <i className="bi bi-chevron-compact-down"></i>

                                </li>
                                <li  style={{display:"flex"}}  className="dropdown dropdown-container" >Shortcodes
                                    <ul>
                                        {shop.map(ct => {
                                            return <>
                                                <li>
                                                    <a  href={ct.href}>{ct.title}</a>

                                                </li>
                                            </>
                                        })}


                                    </ul>
                                    <i className="bi bi-chevron-compact-down"></i>
                                </li>

                                <SideBar/>
                                <i className="fa-solid fa-cart-shopping" style={{color: "white",padding: "10px"}}><sup style={{backgroundColor:"red",padding:"5px",borderRadius:"50%"}}>0</sup></i>
                                {/*<SideBar/>*/}

                            </ul>
                        </nav>

                        {/*<i onClick={() => mobileNavToggle()}*/}
                        {/*   className="fa-solid fa-bars mobile-nav-toggle mobile-nav-show bi bi-list"/>*/}
                        {/*<i onClick={() => mobileNavToggle()}*/}
                        {/*   className="fa-solid fa-xmark mobile-nav-toggle mobile-nav-hide d-none bi bi-x"/>*/}


                    </div>
                </header>
        </>

    )

}


// function mobileNavToggle() {
//     const mobileNavShow = document.querySelector('.mobile-nav-show');
//     const mobileNavHide = document.querySelector('.mobile-nav-hide');
//
//     console.log(mobileNavHide);
//
//     document.querySelector('body').classList.toggle('mobile-nav-active');
//     mobileNavShow.classList.toggle('d-none');
//     mobileNavHide.classList.toggle('d-none');
//
// }
