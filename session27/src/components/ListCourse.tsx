import React from 'react'

export default function ListCourse() {
  let courseList:string[] = ["HTML","CSS","JavaScript","ReactJs"]
  return (
    <div>
      Bài tập 1
      <div>
        <h2>Danh sách khóa học</h2>
        {courseList.map((item,index)=>{
          return <p>{index + 1}. {item}</p>
        })}
      </div>
    </div>
  )
}
