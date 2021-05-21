import React, { Component } from 'react';
import "./footer.scss";
  import Logo from './img/pic.jpeg';
  import smalllogo from './img/smalllogo.svg';
  import emailimg from './img/emailimg.svg';
  import phoneimg from './img/phoneimg.svg';
  import locationimg from './img/locationimg.svg';
  
  
  export default class Footer extends Component {
  
    render() {
      return (
        <footer className="site-footer">
        <hr className="footer-hr">
        </hr>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-2 firstcolumn">
                    <div className="logo">
                        <img className="picsquare" src={smalllogo} alt="Logo" title="Logo" />
                    </div>
                   
                    <p className="localcoupword">Local Coupon</p>
                    <p className="texts-justify"> Save Money on the Go. </p>
                    <div>
                        <ul className="social-icons">
                            <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a className="youtube" href="#"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
    
                <div className="col-xs-6 col-md-4 companycol">
                    <h5>Company</h5>
                    <ul className="footer-links">
                        <li className="aboutfooter"><a href="#">About LC</a></li>
                        <li className="FAQ"><a href="#">FAQ</a></li> <br />
                        <li className="investrelations"><a href="#">Investor Relations</a></li>
                        <li className="careersfooter"><a href="#">Careers <span className="werehiring"> we're hiring</span></a></li>< br/>
                        <li className="codefooter"><a href="#">Code of Conduct</a></li>
                       
                    </ul>
                </div>
    
                <div className="col-xs-6 col-md-6">
                    <h5>Reach Us</h5>
                   <div className="footer-links"> 
                        
                    <div className="aligncontactinfo ">
                    <div className="emaillogo">
                        <img className="picemail" src={emailimg} alt="emailimg" title="emailimg" />
                       <a href="#">hello@localcoupon.com</a> </div>

                     <div className="phonelogo">
                        <img className="picphone" src={phoneimg} alt="phoneimg" title="phoneimg" />
                        <a href="#">972-555-5555</a></div> 

                        <div className="locationlogo">
                        <img className="piclocation" src={locationimg} alt="locationimg" title="locationimg" />
                       <div> <a href="#">772 Lyonwood Ave <div className="cityst">Walnut, CA 91789</div></a></div></div>
                    </div>

                  </div>    
                  </div>
              
                
                </div>
           
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">&copy; 2021 LocalCoupon LLC All Rights Reserved                
                    </p>
    
                </div>
    
    
            </div>
        </div>
        <div>
            <ul className="legal">
                <li className="separator"><a href="#">Terms and Condtions</a></li>
                <li className="separator"><a href="#">Privacy Policy</a></li>
                <li className="separator"><a href="#">Sitemap</a></li>
                <li><a href="#">Disclaimer</a></li>
            </ul>
        </div>
    
    </footer>
      )
    }
  }