import React from 'react';
import { RiGift2Line, RiQrCodeLine } from "react-icons/ri";
import { Container, Row, Col } from 'react-bootstrap';

const DiscountNavbar = () => {

    return <nav className='navbar-discount'>
        <ul >
            <li><a href="#"><span className='discount-icon'>0%</span>No commission added</a></li>
            <li><a href="#"><span className='discount-icon'><RiQrCodeLine /></span>Instant access to deals in your area</a></li>
            <li><a href="#"><span className='discount-icon'><RiGift2Line /></span>No more intermediates</a></li>
        </ul>
    </nav>
}

export default DiscountNavbar;