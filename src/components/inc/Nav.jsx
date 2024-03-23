import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx'

function Nav() {
    const location = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = useState(false);

    const GoBackButton = () => {
        // if (location.pathname !== '/') {
        //     return (
        //         <li>
        //             <a href="#" onClick={() => navigate(-1)}>
        //                 <BsFillArrowLeftCircleFill />
        //             </a>
        //         </li>
        //     )
        // }
    }
    const ResponsiveMenu = () => {
        setActive(!active);
    }
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <a href="#"><h1>KezHaber</h1></a>
                    </div>
                    <div className="article">
                        <div className="text">
                            <h1>"İstikbal Göklerdedir!"</h1>
                            <h2>- Gazi M. Kemal Atatürk</h2>
                        </div>
                        <div className="img">
                            <img src="../../../../assets/effect/ataturk-vektorel-26.png" />
                        </div>
                    </div>
                </div>
            </header>
            <nav className={active ? 'active' : ''}>
                <div className="container">
                    <ul className="menu">
                        {/* <GoBackButton /> */}
                        <li><a href="#" className="active">Gündem</a></li>
                        <li><a href="#">Dünya</a></li>
                        <li><a href="#">Son Dakika</a></li>
                        <li><a href="#">Ekonomi</a></li>
                        <li><a href="#">Yazarlar</a></li> 
                        <li className="responsiveLi"><a onClick={ResponsiveMenu} className="responsiveMenu">{active ? <RxCross2 /> : <HiOutlineMenu />}</a></li>
                    </ul>
                    <ul className="sm">
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                        <div className="line"></div>
                        <li><a href="#"><FiSearch /></a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav