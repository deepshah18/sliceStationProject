import React from 'react';
import "../styles/footer.css"

export default function MyComponent() {
  return (
    <div className='footer'>
        <div className="mt30">&nbsp;</div>
    <div className="mt15">&nbsp;</div>
      <div className="row mt30">
        <div className="col-md-4 col-sm-12 col-xs-12 mt30 aos-init aos-animate" data-aos="fade-up">
          <h3>About Us</h3>
          <p className="mt-15">Natural Dehydrated Vegetables Pvt. Ltd., an Agro Processing Unit, is a Part of Meghani Group of companies engaged in processing and manufacturing of Dehydrated Vegetables particularly Onions, Garlics, Indian Spices and other Vegetables Established in 2004.</p>
          <ul className="social">
            <li><a href="https://www.facebook.com/naturaldehydrated/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook wc"></i></a></li>
            <li><a href="https://www.linkedin.com/company/natural-dehydrated-vegetables?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin wc"></i></a></li>
            <li><a href="https://www.youtube.com/watch?v=jldKOuROYYc" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube wc"></i></a></li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 mt30 aos-init aos-animate" data-aos="fade-up">
          <h3>Useful Links</h3>
          <ul className="link useFulLinks">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <li><a href="index.php">Home</a></li>
              <li><a href="about-us.php">About Us</a></li>
              <li><a href="quality.php">Quality Control</a></li>
              <li><a href="enquiry.php">Enquiry Now</a></li>
              <li><a href="event.php">Events</a></li>
              <li><a href="contact-us.php">Contact Us</a></li>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12 aos-init aos-animate" data-aos="fade-up">
              {/* <li><a href="dehydrated-onion.php?link=1">Dehydrated White Onion</a></li>
              <li><a href="dehydrated-onion.php?link=6">Dehydrated Red Onion</a></li>
              <li><a href="dehydrated-onion.php?link=11">Dehydrated Pink Onion</a></li>
              <li><a href="dehydrated-onion.php?link=16">Dehydrated Garlic</a></li>
              <li><a href="dehydrated-onion.php?link=21">Dehydrated Vegetables</a></li>
              <li><a href="dehydrated-onion.php?link=27">Special Dehydrated Products</a></li>
              <li><a href="dehydrated-onion.php?link=32">Spray Dried Products</a></li>
              <li><a href="dehydrated-onion.php?link=38">Indian Spices</a></li>
              <li><a href="dehydrated-onion.php?link=44">Fresh Onion</a></li>
              <li><a href="dehydrated-onion.php?link=47">Sesame Seeds</a></li> */}
            </div>
          </ul>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 mt30 aos-init aos-animate" data-aos="fade-up">
          <h3>Contact Details</h3>
          <p>Mon - Fri</p>
          <h5>10:00 am to 06:00 pm</h5>
          <p>We are one of the largest manufacturer and exporter of onion and garlic products with a production capacity of 5500 M.T. per annum.</p>
          <div className="row brdr">
            <div className="col-md-3 col-sm-12 col-xs-12"></div>
            <div className="col-md-9 col-sm-12 col-xs-12">
              <p>Get In Touch</p>
              <h5><a href="tel:9512212100">+91 9512212100</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
