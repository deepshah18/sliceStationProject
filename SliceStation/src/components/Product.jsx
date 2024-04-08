import Card from 'react-bootstrap/Card';
import axios from 'axios'
import React, { useEffect, useState } from 'react';

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
    },[])
  return (
    <div className="card-container">
      {products.map((product) => (
        <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.imgUrl} />
          <Card.Body>
            <Card.Title>{product.discription}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
