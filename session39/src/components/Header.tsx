import React, { memo } from 'react'
interface Props{
    count:number
}
function Header(props:Props) {
    console.log("Giá trị biến cao ở bên component app ")
  return (
    <div>
        <p>giá trị count: {props.count}</p>
    </div>
  )
}
export default memo(Header)
