import React, { Component } from 'react';
import Footer from './footer';
import Logo from './img/pic.jpeg';
import Scss from './indcouponpage1.scss';
import Countdown from './indcoupcountdown.jsx';
import Countdwon from './countdown.scss';
import MainImage from './img/main-image.jpeg';
import RelateDeal from './relatedprod.jsx';
import './relatedprod.scss';
import './indcustreview.scss';


export default class Indcustreview extends Component {
    render(){
        return(

       
    <div className="relatedcustreview">
    <div><img className="CustReviewimg" src = {this.props.img} /></div>

    <div class="relatedstars2" data-rating="3">
            <span className="rstar">&nbsp;</span>
            <span className="rstar">&nbsp;</span>
            <span className="rstar">&nbsp;</span>
            <span className="rstar">&nbsp;</span>
            <span className="rstar">&nbsp;</span>
        </div>
            
    <div className="custreviewname">{this.props.custreviewname}</div> 

<div className="reviewstate">{this.props.reviewstate}</div>
    </div> 


        )
    }
}

  
     
         