import React from 'react'

export default function AdminIndex() {
  return (
    <div>
        <h3>Bai 7</h3>
        <div style={{width:'32%',height:'30px',backgroundColor:'gray',display:"grid",placeContent:"center"}}>Header
        </div>
         <div style={{display:'flex'}}>
          <div style={{width:'10%',height:'300px',backgroundColor:'blue',display:"grid",placeContent:"center"}}>Menu</div>
          <div>
          <div style={{width:'310px',height:'270px',backgroundColor:'white',color:'black',display:"grid",placeContent:"center"}}>Main</div>
          <div style={{width:'310px',height:'10%',backgroundColor:'gray',display:"grid",placeContent:"center"}}>Footer</div> 
          </div>
        </div>
    </div>
  )
}
