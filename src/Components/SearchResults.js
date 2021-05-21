import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { RiInstagramLine, RiTwitterFill, RiFacebookFill } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';
import { BsChevronCompactDown} from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';

//images
import mapImage from './images/map.png';
import tasteImage from './images/taste.png';
import result1Image from './images/result1.png';
import result2Image from './images/result2.png';
import result3Image from './images/result3.png';
import result4Image from './images/result4.png';

// components
import GreenHeading from './GreenHeading';
import LargeHeading from './LargeHeading';
import SearchResultsCard from './SearchResultsCard';
import CustomButton from './CustomButton';

const SearchResults = () => {

    const searchData = [
        {
            id: 1,
            image: result1Image,
            offer: 'Spa Day Sale',
            merchant: 'Sunchine Spa',
            stars: '5 stars',
            discount: '10% OFF Massage',
            distance: 4.3
        },
        {
            id: 2,
            image: result2Image,
            offer: 'Delicious Deserts',
            merchant: 'Sweet Tooth',
            stars: '5 stars',
            discount: '50% OFF Cakes',
            distance: 5.7
        },
        {
            id: 3,
            image: result3Image,
            offer: 'Spa Day Sale',
            merchant: 'Sunchine Spa',
            stars: '5 stars',
            discount: '10% OFF Massage',
            distance: 11.9
        },
        {
            id: 4,
            image: result4Image,
            offer: 'Delicious Deserts',
            merchant: 'Sweet Tooth',
            stars: '5 stars',
            discount: '50% OFF Cakes',
            distance: 21
        }
    ]

    const [cards, setCards] = useState(searchData);

    // button click handler
    const handleBtnClick = () => {
        console.log('You clicked View More button');
    }

    return <Container fluid className='p-0'>
        <section className='search-results-section'>
            <Row noGutters>
                <Col xs={5}>
                    <LargeHeading>Here Are Your Results</LargeHeading>
                </Col>
                <Col xs={1}>
                    <p className='filter'>Filter <a href="#"><BsChevronCompactDown className='arrow-down' /></a></p>
                </Col>
            </Row>

            <Row noGutters className='search-results-main'>
                <Col>
                    {cards.map(card => <SearchResultsCard key={card.id} card={card} />)}
                    <div className='text-center'>
                        <CustomButton handleBtnClick={handleBtnClick}>VIEW MORE</CustomButton>
                    </div>
                </Col>
                <Col className='search-results-map'>
                    <Image src={mapImage} fluid />
                    <div className='top-merchant'>
                        <GreenHeading>TOP MERCHANT IN YOUR AREA</GreenHeading>
                        <LargeHeading>Good Taste Food &amp; Beverage</LargeHeading>
                        <Image src={tasteImage} fluid />
                        <Row noGutters>
                            <Col xs={8}>
                                <p className='top-merchant-address text-left'>
                                    <MdLocationOn className='location-icon' />772 Lyonwood Ave Walnut, CA 91789</p>
                                <p className='top-merchant-times text-left'>
                                    <BiTimeFive className='time-icon' />Monday-Sunday - 9 am-10 pm</p>
                            </Col>
                            <Col xs={4} className='text-center'>
                                <p className='follow'>Follow</p>
                                <div className='media-icons'>
                                    <a href='#'><RiInstagramLine className='instagram-icon' /></a>
                                    <a href='#'><RiTwitterFill className='twitter-icon' /></a>
                                    {/* <a href='#'><RiFacebookFill className='facebook-icon' /></a> */}
                                </div>
                            </Col>
                        </Row>
                        <Row noGutters>
                            <Col className='deals-link text-right'><a href='#'>View Their Deals</a></Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </section>
    </Container>
}

export default SearchResults;