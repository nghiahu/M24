import React from 'react'
import { Row } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import Cart from './Cart';
export default function Bt3() {
  return (
    <>Bài tập 3
    <Container>
      <Row>
        <Cart
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRaCwlyySv4hnSTGn4ruEWYMlsdYKDIkUSQ&s"
          title="MacBook Air 2018"
          description="The reason I am selling the machine is because it is too much power for what I need."
          price="30.000.000"
        />
        <Cart
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRaCwlyySv4hnSTGn4ruEWYMlsdYKDIkUSQ&s"
          title="MacBook Pro 2019"
          description="The reason I am selling the machine is because it is too much power for what I need."
          price="30.000.000"
        />
      </Row>
    </Container>
    </>
  )
}
