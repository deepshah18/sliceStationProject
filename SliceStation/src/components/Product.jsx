import Card from 'react-bootstrap/Card';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import "../styles/products.css"
import AOS from 'aos';
import Button from 'react-bootstrap/Button';

export default function () {
    const [products,setproducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/products')
      .then(response => {
        setproducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      AOS.init({ duration: 1000});
    },[])
  return (
    <div className="card-container">
      {products.map((product) => (
        <Card key={product.id} style={{ width: '25%' }} data-aos="fade-down">
          <Card.Img variant="top" src={product.imgUrl} className="productImg"/>
          <Card.Body>
            <Card.Title>{product.discription}</Card.Title>
            <Card.Text>
            <Button variant="danger" className='readmoreBtn'>Read More</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
