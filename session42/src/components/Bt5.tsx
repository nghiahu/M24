import React from 'react'
import Alert from 'react-bootstrap/esm/Alert'

export default function Bt5() {
  return (
    <> bài tập 5
    
        <Alert variant="success"  dismissible>
          <Alert.Heading>Thêm tài khoản thành công.</Alert.Heading>
        </Alert>
    
        <Alert variant="danger"  dismissible>
          <Alert.Heading>Thêm mới tài khoản thất bại.</Alert.Heading>
        </Alert>
     
        <Alert variant="warning"  dismissible>
          <Alert.Heading>Tên không được để trống.</Alert.Heading>
        </Alert>
    
    </>
  )
}
