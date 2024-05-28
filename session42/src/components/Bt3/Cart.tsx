import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

interface CartProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const Cart: React.FC<CartProps> = ({ image, title, description, price }) => {
  return (
    <Col md={4}>
      <Card className="mb-4">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Button variant="primary">Xem chi tiết</Button>
            <div>{price} đ</div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cart;