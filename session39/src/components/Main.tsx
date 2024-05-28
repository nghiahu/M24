import React, { memo } from 'react'
interface Props{
  getId:Function
}
 function Main(props:Props) {
    console.log("Gọi function ra!",props.getId);
    
  return (
    <div>Main</div>
  )
}
export default memo(Main)