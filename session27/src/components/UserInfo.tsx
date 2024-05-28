import React, { Component } from 'react'
interface State {
    name:string;
    sex:string;
    birthday:string;
    email:string;
    address:string;
  }
export default class UserInfo extends Component <{},State>{
    constructor(props:{}) {
        super(props);
        this.state = {
            name: "Nguyễn Văn A",
            sex: "Nam",
            birthday: "06/03/2024",
            email: "nva@gamil.com",
            address: "Thanh Xuân,Hà Nội"
        };
    }
    
  render() {
    const useinf = this.state
    return (
      <div>Bài tập 3
        <h2>Thông tin cá nhân</h2>
        <ul>
            <li>Họ và tên: {useinf.name}</li>
            <li>Giới tính: {useinf.sex}</li>
            <li>Ngày sinh: {useinf.birthday}</li>
            <li>Email: {useinf.email}</li>
            <li>Địa chỉ: {useinf.address}</li>
        </ul>
      </div>
    )
  }
}
