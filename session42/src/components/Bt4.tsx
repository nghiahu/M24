import React from 'react'
import Dropdown from 'react-bootstrap/esm/Dropdown'

export default function Bt4() {
  return (
    <>Bài tập 4
     <Dropdown>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        Nguyễn Văn Nam
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/settings">Cài đặt</Dropdown.Item>
        <Dropdown.Item href="#/change-password">Đổi mật khẩu</Dropdown.Item>
        <Dropdown.Item href="#/logout">Đăng xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  )
}
