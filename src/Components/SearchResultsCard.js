import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
// components
import CustomButton from './CustomButton';

const SearchResultsCard = (props) => {

    const { id, image, offer, merchant, stars, discount, distance } = props.card;

    // button click handler
    const handleBtnClick = () => {
        console.log('You clicked Reserve button');
    }

    return <div className='search-results-card'>
        <Row noGutters >
            <Col>
                <Image className='search-results-image' src={image} fluid />
                <span className='search-results-number'>{id}</span>
            </Col>
            <Col className='card-details'>
                <p className='distance'>{distance} miles</p>
                <p className='offer'>{offer}</p>
                <p className='merchant'>{merchant}</p>
                {/* <p className='stars'>{stars}</p> */}
                <p className='stars'>&#9733; &#9733; &#9733; &#9733; &#9734;</p>
                <p className='discount'>{discount}</p>
                <CustomButton handleBtnClick={handleBtnClick}>RESERVE</CustomButton>
            </Col>
        </Row>
        <Row noGutters>
            <Col>
                <hr className='card-divider' />
            </Col>
        </Row>
    </div>
}

export default SearchResultsCard;