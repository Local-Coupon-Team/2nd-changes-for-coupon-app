import React, {
    Component
} from 'react';
import ShowMoreText from 'react-show-more-text';
import Logo from './img/pic.jpeg';
import Scss from './coupondeal.scss';
import Countdown from './countdown.jsx';
import { Row, Col, Image } from 'react-bootstrap';
import time from './img/time.svg';


export default class Coupondeal extends Component {


    setRating(ev) {
        let span = ev.currentTarget;
        let stars = document.querySelectorAll('.star');
        let match = false;
        let num = 0;
        stars.forEach(function (star, index) {
            if (match) {
                star.classList.remove('rated')
            } else {
                star.classList.add('rated')
            }
            //currently looking at the span that was clicked
            if (star === span) {
                match = true;
                num = index + 1;
            }
        });
        document.querySelector('.stars').setAttribute('data-rating', num);
    }
    
    render() {
        return (
        
        // <div className="container row">
        <Row>
            <div className="checkbox col-1"><input type="checkbox" id="checkbox" name="checkbox"></input>
            <img className="dealimg" src={this.props.img} /></div>
        
            <div className="fullcouponpage col-10">      
                
                                   
                <div className="grouping">
                    <div className="Productname">{this.props.name}  </div>     <span className="businesscat">from {this.props.business}</span>       
        
                    <div class="stars" data-rating="3">
                        <span className="star">&nbsp;</span>
                        <span className="star">&nbsp;</span>
                        <span className="star">&nbsp;</span>
                        <span className="star">&nbsp;</span>
                        <span className="star">&nbsp;</span>
                    </div>
                
                    {/* <div className="businesscat">from {this.props.business}</div> */}
        
                    <ul className="categorydetails">
                        {
                        this.props.category.map((category, i) => <li className="vl">{category.toUpperCase()}</li>)
        
                        }
                    </ul>
        
                    <ShowMoreText
                    /* Default options */
                    lines={2}
                    more='more'
                    less='less' 
                    className='parag'            
                    expanded={false}
                    width={0}
                 >
                    {this.props.paragraph}
                    {/* <a href="#">more</a> */}
               </ShowMoreText>
        
        
                    <div>
                        <h5 className="discount">{this.props.discount}% off</h5>
                        <h6 className="originalprice">original ${this.props.original}</h6>
                        <button className="btn btn-default Reservebtn" onClick={this.props.button}>Reserve</button>
                    </div>
                              
                    <hr className="line">
                    </hr>
        
                </div>
        
            </div>
            <div className="col-2 joinremaining">
                <h6 className="couponremaining">COUPONS REMAINING</h6>
                <h3 className="couprem">{this.props.couponRemaining}</h3>
        
                <Countdown dealends={this.props.dealends} />            
            </div>       
        
            </Row>        
        
     )
    }        
   }