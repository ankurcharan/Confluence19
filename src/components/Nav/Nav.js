import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

class Nav extends React.Component {

    render() {

        return (


            <nav className="teal" role="navigation">
                <div className="nav-wrapper container">
                    <Link to='/'>
                        <a id="logo-container" href="/" className="brand-logo">
                            <i id="logoIcon" className="large material-icons">
                                developer_mode
                            </i>
                            Conflu
                        </a>
                    </Link>
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <Link className='navbarLinkRoutes' to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='navbarLinkRoutes' to='/events'>
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link className='navbarLinkRoutes' to='/gallery'>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link className='navbarLinkRoutes' to='/sponsors'>
                                Sponsors
                            </Link>
                        </li>
                    </ul>
                    
                    <ul id="nav-mobile" class="sidenav">
                    <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/events'>
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link to='/gallery'>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to='/sponsors'>
                                Sponsors
                            </Link>
                        </li>
                    </ul>
                    
                    <a href='#!' data-target="nav-mobile" class="sidenav-trigger"><i id='phoneIcon' class="material-icons">menu</i></a>
                </div>
            </nav>

















            // <div>
            //     <nav>
            //         <div class="nav-wrapper">
            //             <a href="/" class="brand-logo">
            //                 Conflu
            //             </a>
            //             <a href="#!" data-target="mobile-demo" class="sidenav-trigger">
            //                 <i class="material-icons">
            //                     menu
            //                 </i>
            //             </a>
            //             <ul class="right hide-on-med-and-down">
            //                 <li>
            //                     <Link to='/'>
            //                         Home
            //                     </Link>    
            //                 </li>
            //                 <li>
            //                     <Link to='/events'>
            //                         Events
            //                     </Link>    
            //                 </li>
            //                 <li>
            //                     <Link to='/gallery'>
            //                         Gallery
            //                     </Link>    
            //                 </li>
            //                 <li>
            //                     <Link to='/sponsors'>
            //                         Sponsors
            //                     </Link>    
            //                 </li>
            //             </ul>
            //         </div>
            //     </nav>

            //     <ul class="sidenav" id="mobile-demo">
            //         <li>
            //             <Link to='/'>
            //                 Home
            //             </Link>    
            //         </li>
            //         <li>
            //             <Link to='/events'>
            //                 Events
            //             </Link>    
            //         </li>
            //         <li>
            //             <Link to='/gallery'>
            //                 Gallery
            //             </Link>    
            //         </li>
            //         <li>
            //             <Link to='/sponsors'>
            //                 Sponsors
            //             </Link>    
            //         </li>
            //     </ul>
            // </div>
                    

        );
    }
}

export default Nav;