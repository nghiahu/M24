import React from 'react'
import { Component } from 'react'
import Bt7 from "./components/AdminIndex"
import BT2 from "./components/Calculation"
import Bt4 from "./components/ColorBox"
import Bt5 from "./components/ColorBox2"
import Bt6 from "./components/FormatName"
import Bt1 from "./components/ListCourse"
import Bt3 from "./components/UserInfo"
import Bt8 from "./components/Baitap8/Index"
import Bt9 from "./components/Baitap9"
export default class App extends Component {
  render() {
    return (
      <div>
        <Bt1></Bt1>
        <BT2></BT2>
        <Bt3></Bt3>
        <Bt4></Bt4>
        <Bt5></Bt5>
        <Bt6></Bt6>
        <Bt7></Bt7>
        <Bt8></Bt8>
        <Bt9></Bt9>
      </div>
      
    )
  }
}

