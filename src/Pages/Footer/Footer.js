import React from 'react';
import logo from '../../image/logo/ar.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div>

            <div className="footer-bg text-white">
                <div className="d-flex">
                    <div className="col-md-3">
                        <img clssName="footer-img pt-2" src={logo} alt="" srcset="" />
                        <p className="mt-4">A Powerful & Beautiful Multi-Purpose travel with lots of advanced features.Get a relax and fantastic journey of enjoyment.</p>
                    </div>
                    <div className="col-md-3 mx-3">
                        <h3>CONTACT INFO</h3>
                        <h6> 732/21 Second Street, Manchester, King Street, Kingston United Kingdom</h6>
                        <h6>345-677-554</h6>
                        <h6> 323-678-567</h6>
                        <h6> info@altairtheme.com</h6>
                        <h6>  themegoods.com</h6>
                    </div>
                    <div className="col-md-3">
                        <h3>RECENT POSTS</h3>
                        <h6>Standard Blog Post With Image</h6>
                        <h6>Amazing Fullwidth Post</h6>
                        <h6> Link Post</h6>
                        <h6> Quote Post</h6>
                        <h6>Sidebar Post With Slideshow</h6>
                    </div>
                    <div className="col-md-3">
                        <h3 className="text-center">TAGS</h3>
                       <div clssName="d-flex m-3">
                       <button>BLOG</button><button>CITY</button><button>DESIGN</button><button>PASSION</button><button>LANDSCAPE</button><button>MODEL</button><button>POTRAIT</button><button>STREET</button><button>STREET PHOTOGRAPHY</button>
                       </div>
                    </div>
                </div>
                <p className="text-center mt-4">Copywright © all right reserved by AR Travels</p>
            </div>
        </div>
    );
};

export default Footer;