import "./footer.scss"
import {ImageContainer} from "./ImageContainer";

export function Footer() {


    return (
        <>
            <div className="footer-content">
                <div className="footer-content-left">
                    <h2 className="widgettitle">Our Awards</h2>
                    <p>London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the
                        United Kingdom.</p>
                    <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                         alt=""/>

                </div>
                <div className="footer-content-mid">
                    <h2 className="widgettitle">Contact Info</h2>
                    <p><i style={{    paddingRight: "10px"}} className="fa-solid fa-mobile"/>1-567-124-44227</p>
                    <p><i style={{    paddingRight: "10px"}}  className="fa-solid fa-location-dot"/>184 Main Street East Perl
                        Habour 8007</p>
                    <p><i  style={{    paddingRight: "10px"}}  className="fa-regular fa-clock"/>Mon - Sat 8.00 - 18.00 Sunday
                        CLOSED</p>
                    <div className="social" style={{marginTop: "20px"}}>
                        <div className="social_wrapper">
                            <div className="facebook">
                                <a target="_blank" title="Facebook" href="#" rel="noopener"><i
                                    className="fa-brands fa-facebook fa-2xl" style={{color: "#005eff"}}/></a>
                            </div>
                            <div className="twitter">
                                <a target="_blank" title="Twitter" href="https://twitter.com/#"
                                   rel="noopener"><i
                                    className="fa-brands fa-twitter fa-2xl"/></a>
                            </div>
                            <div className="youtube">
                                <a target="_blank" title="Youtube" href="#" rel="noopener"><i
                                    className="fa-brands fa-youtube fa-2xl" style={{color: "#f00a0a"}}/></a>
                            </div>
                            <div className="pinterest">
                                <a target="_blank" title="Pinterest"
                                   href="https://pinterest.com/#" rel="noopener"><i
                                    className="fa-brands fa-pinterest fa-2xl" style={{color: "#eb0a0a"}}/></a>
                            </div>
                            <div className="instagram">
                                <a target="_blank" title="Instagram"
                                   href="https://instagram.com/theplanetd" rel="noopener"><i
                                    className="fa-brands fa-instagram fa-2xl" style={{color: "#005eff"}}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <ImageContainer/>
            </div>


            <div className="footer-bar">
                <div className="footer-bar-wrapper">

                    <div className="copyright">© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</div>
                    {/*<br className="clear"/>*/}
                    {/*    <a href="javascript:;" style={{opacity: "1", visibility: "visible"}}><i*/}
                    {/*        className="fa fa-angle-up"/></a>*/}

                    <div className="menu-footer">
                        <div className="footer-nav">
                            <div
                                className="menu-item ">
                                <a href="https://themes.themegoods.com/grandtour/demo/">Home</a></div>
                            <div
                                className="menu-item "><a
                                href="https://themes.themegoods.com/grandtour/demo/tours/">Tours</a></div>
                            <div
                                className="menu-item "><a
                                href="https://themes.themegoods.com/grandtour/demo/blog/">Blog</a></div>
                            <div
                                className="menu-item "><a
                                href="#">Purchase Theme</a></div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}