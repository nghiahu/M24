import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const uR =useRef(1)
    const [count,setCount]=useState<number>(0)
    let index = 0

    // const len =()=>{
    //     index++
    //     console.log("gia tri sau click ",index);
    //     setCount(count+1)
    //     uR.current=uR.current+1
    //     console.log(uR);   
    // }
    
    const ref=useRef<HTMLInputElement>(null) //ref = current{1}
    useEffect(() => {
        ref.current?.focus(); //toán tử optinal change 
      }, []);
    console.log("gia tri index",index);
    /* 
    useRef :
    useRef la 1 ham nhan vao tham so la gia tri khoi tao truyen vao 
    useRef tra ve doi tuong la 1 obj, ben trong obj se co 1 key(current), 
    voi gia tri la tham so truyen vao
    khi moi ran componet render thi useRef se khong tao ra tham chieu moi 
    Khi muốn focus vào ô input khi muốn nhập dữ liệu 
    */
  return (
    <div>
      <h3>Ref</h3>
      <p>gia tri count :{count}</p>
      <button >Click</button> <br /> <br />
      <input ref={ref} type="text" placeholder='nhap email ' />

    </div>
  )
}