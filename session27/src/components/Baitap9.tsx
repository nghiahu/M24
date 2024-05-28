import React from 'react'

export default function Baitap9() {
  return (
    <div>
      <h1>Bai 9</h1>
        <table className='tableOut'>
            <tr className='table_th'>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Địa chỉ</th>
                <th>Hành động</th>
            </tr>
            <tr className='table'>
                    <td>1</td>
                    <td>Nam</td>
                    <td>11/02/2004</td>
                    <td>Nam</td>
                    <td>Hà Nội</td>
                    <td className='btn'>
                        <button className='edit'>Sửa</button>
                        <button className='delete'>Xóa</button>
                    </td>
                </tr>
                <tr className='table'>

                    <td>2</td>
                    <td>Hoa</td>
                    <td>22/09/2005</td>
                    <td>Nữ</td>
                    <td>Hồ Chí Minh</td>
                    <td className='btn'>
                        <button className='edit'>Sửa</button>
                        <button className='delete'>Xóa</button>
                    </td>
                </tr>
        </table>
                <div className='tfoot'>

                </div>
    </div>
  )
}