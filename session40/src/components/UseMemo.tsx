import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count,setCount] = useState<number>(0)
    let cart = [
        {
            product:"iphone5",
            price:5000,
            quantity:1,
        },
        {
            product:"iphone6",
            price:5000,
            quantity:1,
        },
        {
            product:"iphone7",
            price:5000,
            quantity:1,
        },
        {
            product:"iphone8",
            price:5000,
            quantity:1,
        },
    ]
    let memo = useMemo(()=>{
        let payment = cart.reduce((accumulator,currentValue)=>{
            return accumulator + currentValue.price * currentValue.quantity
        },0)
        return payment
    },[])
    const addToCart = () => {
        let newPrduct = {
            product:"iphone8",
            price:5000,
            quantity:1,
        }
        cart.push
    }
  return (
    <div>UseMemo
        giá tiền: {memo}
        {/* 
        Đây là một hook giúp ghi nhớ nhưng việc tính toán
        */}
    </div>
  )
}
