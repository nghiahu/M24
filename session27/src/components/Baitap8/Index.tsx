import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Menu from './Menu'
import ListCart from './ListCart'
import Articel from './Articel'

export default function Index() {
  return (
    <div>
      Bài tập 8
    <div className='container'>
      <Header />
      <Navbar />
      <main className='main'>
        <Menu/>
        <ListCart/>
        <Articel/>
        </main>
</div>
</div>

  )
}

