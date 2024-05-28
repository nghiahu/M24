import React from 'react'
import "./manager.scss"
import { HomeOutlined, ProductOutlined, SettingOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { MdAdd, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { VscExtensions } from 'react-icons/vsc'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { RiSearch2Line } from 'react-icons/ri'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsShop } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { TbListTree } from 'react-icons/tb'
import { PiWarningCircle } from 'react-icons/pi'
import { IoSaveOutline } from 'react-icons/io5'
export default function ManagerPage() {
  return (
    <div>
      {/*  Navbar start*/}
      <div className='navbar'>
      <div className='navigation'>
        <ul className='list_nav'>
          <li><HomeOutlined /> Home</li>
          <li><UnorderedListOutlined />Contents</li>
          <li><ProductOutlined />Categories</li>
          <li><SettingOutlined />Settings</li>
        </ul>
      </div>

      <div className='represent'>
        <img className='imgRep' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSK8QWnGS_KsZdfTMTHGaR-I9bI_y6F2b3HDIotgZIxA&s" alt="" />
        <div>Admin</div>
      </div>
    </div>
      {/*  Navbar end*/}

      {/* Header start*/}
      <div className='header'>
        <div className='addItem'><MdAdd/>New Item</div>

        <div className='Das'>
          <div className='titleDas'><div className='tiD'><VscExtensions />Dashboard</div><AiOutlineUp /></div>
          <ul className='listHead'>
            <li>Commarce</li>
            <li>Analytics</li>
            <li>Cyrpto</li>
            <li>Helpdesk</li>
            <li>Manitoring</li>
            <li>Fitnes</li>
          </ul>
        </div>

        <div className='Category'>
          <div className='listCategory'>
            <li><div className='liCa'><VscExtensions />Application</div><AiOutlineDown /></li>
            <li><div className='liCa'><VscExtensions />Elements</div><AiOutlineDown /></li>
            <li><div className='liCa'><VscExtensions />Forms</div><AiOutlineDown /></li>
            <li><div className='liCa'><VscExtensions />Plugins</div><AiOutlineDown /></li>
            <li><div className='liCa'><VscExtensions />Elements</div><AiOutlineDown /></li>
            <li><div className='liCa'><VscExtensions />Datagrid</div><AiOutlineDown /></li>
            <li><div className='liCa'><VscExtensions />Settings</div><AiOutlineDown /></li>
          </div>
        </div>
  </div>
      {/* Header end*/}

      {/* SearchBar start*/}
      <div className='SearchBar'>
        <div className='SearchBarLeft'>
          <div className='addPost'>Add new post</div>
          <div className='font'><MdAdd/>Add content</div>
          <div className='font'><SettingOutlined/> Settings</div>
        </div>

        <div className='InpSearchBar'>
          <input type="text" placeholder='Search content' className='InpSearch'/>
          <RiSearch2Line className='iconInp'/>
        </div>
      </div>
      {/* SearchBar end*/}

      {/* Main start */}
        <main className='main'>
          <div className='parameterTable'>
            <div className='parameter'>
              <HiOutlineShoppingBag className='iconPara iconbag'/>
              <div className='titlePara'>
                <div>Total Sales</div>
                <div>$2,456</div>
              </div>
              </div>

            <div className='parameter'>
            <BsShop className='iconPara iconshop'/>
              <div className='titlePara'>
                <div>Total Expenses</div>
                <div>$3,326</div>
              </div>
              </div>

            <div className='parameter'>
            <FiUsers className='iconPara iconuser'/>
              <div className='titlePara'>
                <div>Total Visitors</div>
                <div>$5,325</div>
              </div>
              </div>

            <div className='parameter'>
            <TbListTree className='iconPara iconlist'/>
              <div className='titlePara'>
                <div>Total Orders</div>
                <div>$1,326</div>
              </div>
              </div>
          </div>

        <div className='fromPost'>
          <div className='titleFrom'>
          <h4>Form title</h4>
          <p>Sed tortor, sed velit ridiculus ipsum pnaretra locus adio gravida augue enim</p>
          </div>
          <div className='warningTitle'>
          <PiWarningCircle className='warningIcon'/> Senectus malesuada suspendisse bibendum elit amet vitae.
          </div>

          <table className='table'>
            <thead >
              <tr className='th'>
                <th>Table Title</th>
                <th>Table Title</th>
                <th>Table Title</th>
                <th>Table Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>Etiam purus in</td>
              <td>Curabitur donec duis</td>
              <td>Mortai pharetra, accumsan</td>
              <td>
                <button className='btnEdit'><IoSaveOutline />Edit</button>
                <button className='btnDel'><IoSaveOutline />Delete</button>
              </td>
              </tr>
              <tr>
              <td>Duis eget habitant</td>
              <td>At amet odio</td>
              <td>Commodo eget scelerisque</td>
              <td>
              <button className='btnEdit'><IoSaveOutline />Edit</button>
                <button className='btnDel'><IoSaveOutline />Delete</button>
              </td>
              </tr>
              <tr>
              <td>Aliquam velit lacus</td>
              <td>Pellentesque egestas placerat</td>
              <td>Tortor habitant sit</td>
              <td>
              <button className='btnEdit'><IoSaveOutline />Edit</button>
                <button className='btnDel'><IoSaveOutline />Delete</button>
              </td>
              </tr>
              <tr>
              <td>Fermentum scelerisque ultricies</td>
              <td>Morbi sagittis nulla</td>
              <td>Quam semper quis</td>
              <td>
              <button className='btnEdit'><IoSaveOutline />Edit</button>
                <button className='btnDel'><IoSaveOutline />Delete</button>
              </td>
              </tr>
              <tr>
              <td>Integer somper pollentesquo</td>
              <td>Neque turpis enim</td>
              <td>Egestas non sociis</td>
              <td>
              <button className='btnEdit'><IoSaveOutline />Edit</button>
                <button className='btnDel'><IoSaveOutline />Delete</button>
              </td>
              </tr>
              <tr>
              <td>Parturient at id</td>
              <td>Sem neque, mattis</td>
              <td>Pellentesque facilisis massa</td>
              <td>
              <button className='btnEdit'><IoSaveOutline />Edit</button>
                <button className='btnDel'><IoSaveOutline />Delete</button>
              </td>
              </tr>
              <tr>
              <td>Amet pretium eget</td>
              <td>In ipsum volutpat</td>
              <td>Ut feugiat egestas</td>
              <td>
              <button className='btnEdit'><IoSaveOutline />Edit</button>
                <button className='btnDel'><IoSaveOutline />Delete</button>
              </td>
              </tr>
              <tr>
              <td>Risus consequat sollicitudin</td>
              <td>Adipiscing odio nulla</td>
              <td>Pharetra id sit</td>
              <td>
              <button className='btnEdit'><IoSaveOutline />Edit</button>
                <button className='btnDel'><IoSaveOutline />Delete</button>
              </td>
              </tr>
              <tr>
              <td>Risus consequat sollicitudin</td>
              <td>Adipiscing odio nulla</td>
              <td>Pharetra id sit</td>
              <td>
              <button className='btnEdit'><IoSaveOutline />Edit</button>
                <button className='btnDel'><IoSaveOutline />Delete</button>
              </td>
              </tr>
            </tbody>
          </table>
          <div className='nextPage'>
          <MdKeyboardDoubleArrowLeft />
          <div className='nextPageDiv'>1</div>
          <div className='nextPageDiv nextPageTwo'>2</div>
          <div className='nextPageDiv'>3</div>
          <div className='nextPageDiv'>4</div>
          <div className='nextPageDiv'>5</div>
          <MdKeyboardDoubleArrowRight />
          </div>
        </div>
        </main>
      {/* Main end */}
    </div>
  )
}
