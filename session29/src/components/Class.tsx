import React, { Component } from 'react'
interface Props{

}
interface State{
    name:string
    age :number
    address:string
}
export default class Class extends Component<{},State> {
    constructor(props:Props){
        super(props)
        this.state = {
            name:"minh thu",
            age:25,
            address:"Hà Nội"
        }
    }
    // khai báo hàm trên render
    handleClick=()=>{
        //Khi muốn cập nhật 
        this.setState({
            age:  this.state.age + 1
        })
    }
  render() {
    return (
      <div>
        Class
        {/* 
        trong class để quản ly state
        */}
        {this.state.name} năm nay {this.state.age} tuổi!
        <button onClick={this.handleClick}>Change Age</button>
        {/* */}
      </div>
    )
  }
}
