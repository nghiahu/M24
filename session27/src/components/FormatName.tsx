import React from 'react'
interface Fullname{
    firstName:string;
    lastName:string;
}
export default function FormatName() {
    const user = {
        firstName: 'Nguyễn Văn',
        lastName: 'Nam'
    };
    const formatName = (user:Fullname) => {
          return `${user.firstName} ${user.lastName}`;
        }

  return (
    <div>
        Bài tập 6
        <div>Họ và tên: {formatName(user)}</div>
    </div>
  )
}

