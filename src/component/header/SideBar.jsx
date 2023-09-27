import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import {Anchor} from "@mui/icons-material";

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {deepOrange, red} from '@mui/material/colors';

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
import "../header/sideBar.scss"

export function SideBar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    // const toggleDrawer =
    //     (anchor: Anchor, open: boolean) =>
    //         (event: React.KeyboardEvent | React.MouseEvent) => {
    //             if (
    //                 event.type === 'keydown' &&
    //                 ((event as React.KeyboardEvent).key === 'Tab' ||
    //                     (event as React.KeyboardEvent).key === 'Shift')
    //             ) {
    //                 return;
    //             }
    //
    //             setState({ ...state, [anchor]: open });
    //         };

    const list = (anchor) => {
        return (
            <Box
                sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}>

                <div className="nav-mobile">
                    <div className="icon-x" >
                        <Avatar sx={{bgcolor: red[500]}}><i className="fa-solid fa-x"></i>
                        </Avatar>
                    </div>
                    <div className="select-menu">
                        <div>Home</div>
                        <div>Tours</div>
                        <div>Booking</div>
                        <div>Destinations</div>
                        <div>Pages</div>
                        <div>Blog</div>
                        <div>Shortcodes</div>
                        <div>Shop</div>
                    </div>

                </div>

                <div className="swiss-trip">
                    <div className='card-img'>
                        <a href="https://themes.themegoods.com/grandtour/demo/tour/swiss-alps-trip/">
                            <img
                                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729.jpeg"
                                alt=""/>
                            <div className="tour-price">$3,900</div>
                        </a>
                    </div>
                    <div className="swiss-body">
                        <h4 className="swiss-title">Swiss Alps Trip</h4>
                        <div className="swiss-star">
                            <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                            <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                            <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                            <i className="fa-regular fa-star" style={{color: "#969dab"}}/>
                        </div>


                    </div>
                </div>


                <div className="lake-of">
                    <div className='card-img'>
                        <a href="https://themes.themegoods.com/grandtour/demo/tour/5-lake-of-fuji-san/">
                            <img
                                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630.jpeg"
                                alt=""/>
                            <div className="tour-price">  <span style={{
                                textDecoration: "line-through",
                                fontSize: "17px",
                                fontWeight: "400"
                            }}>$4,900</span>&nbsp;
                                <span>$4,200</span></div>


                        </a>
                    </div>

                    <div className="lake-body">
                        <h4 className="lake-title">5 Lake of Fuji San</h4>
                        <div className="lake-star">
                            <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                            <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                            <i className="fa-solid fa-star" style={{color: "#3cc8bf"}}/>
                            <i className="fa-regular fa-star" style={{color: "#969dab"}}/>
                        </div>
                    </div>
                </div>

                <Divider/>
                <div className='icon-socials'>
                    <i className="fa-brands fa-facebook fa-2xl"/>
                    <i className="fa-brands fa-twitter fa-2xl"/>
                    <i className="fa-brands fa-youtube fa-2xl"/>
                    <i className="fa-brands fa-pinterest fa-2xl"/>
                    <i className="fa-brands fa-instagram fa-2xl"/>
                </div>

            </Box>
        )
    };

    return (
        <div>
            <React.Fragment key={'right'}>
                <Button onClick={toggleDrawer('right', true)}><i className="fa-solid fa-bars"
                                                                 style={{color: "white", padding: "10px"}}></i>
                </Button>
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    {list('right')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
