import "../styles/about.css"
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000}); // Initialize AOS with your desired options

  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-0" data-aos="fade-right">
          <img src='https://imgs.search.brave.com/yeB5gzxB8k-_lqotevBgmI8DbEiLgUa3xkj3FnK8D-w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/aXgtdmVnZXRhYmxl/XzEzMzktMzc0Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn' alt='vegetable' className="img-fluid" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between p-4">
          <div>
            <h6>About Us</h6>
            <h2>Agro Processing Unit Provides Quality Products.</h2>
            <p>Natural Dehydrated Vegetables Pvt. Ltd. is one of the most reputed dehydrated onion, garlic & vegetables processors based in INDIA.</p>
            <button className="btn btn-danger btn-lg readMore">Read More</button>
          </div>
          <img src='https://imgs.search.brave.com/yeB5gzxB8k-_lqotevBgmI8DbEiLgUa3xkj3FnK8D-w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/aXgtdmVnZXRhYmxl/XzEzMzktMzc0Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn' alt='vegetable' className="img-fluid" style={{ width: '100%', height: 'auto' }} data-aos="fade-left" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
