import React from "react";
import { Link } from "react-router-dom";
import myCollectionIcon from '../img/myCollectionIcon.png';
import webIcon from '../img/webIcon.png';

const NavBar = () => {
    return (
        <div className="bg-white">
            <nav className="flex items-center justify-between mx-7">
                <div className='flex justify-start my-1'>
                    <Link to='/'>
                        <img className="cursor-pointer w-36" src={webIcon} alt="web icon" />
                    </Link>
                </div>
                <div className='flex justify-end my-1'>
                    <Link to='/collection'>
                        <img src={myCollectionIcon} alt="collection icon" className='w-20 transition-opacity duration-500 hover:opacity-60' />
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
