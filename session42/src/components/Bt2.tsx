import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

export default function Bt2() {
  return (
    <>
    Bài tập 2
        <Form>
        <InputGroup className="mb-3">
          <Form.Control
            id="basic-url"
            aria-describedby="basic-addon3"
            placeholder="Imput cỡ lớn"
            size="lg"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            id="basic-url"
            aria-describedby="basic-addon3"
            placeholder="Input cỡ trung"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            id="basic-url"
            aria-describedby="basic-addon3"
            placeholder="Input cỡ nhỏ"
            size="sm"
          />
        </InputGroup>
      </Form>
    </>
  )
}
