import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
//image
import logoImage from './images/full-logo.png';
//components
import SearchNavbar from './SearchNavbar';
import DiscountNavbar from './DiscountNavbar';


const LargeNavbar = () => {
    return <Container fluid className='p-0'>
        <Row noGutters>
            <Col>
                <nav className='navbar-main'>
                    <ul>
                        <li><a href="#"><img className='navbar-logo' src={logoImage} /></a></li>
                        <li><a href="#">Sign In</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Merchants</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </nav>
            </Col>
        </Row>
        <Row noGutters>
            <Col>
                <SearchNavbar />
            </Col>
        </Row>
        <Row noGutters>
            <Col>
                <DiscountNavbar />
            </Col>
        </Row>
    </Container>
}

export default LargeNavbar;