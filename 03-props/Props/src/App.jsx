import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Janki' age={21} img='https://images.unsplash.com/photo-1505832018823-50331d70d237?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      <Card user='Payal' age={19} img='https://images.unsplash.com/photo-1555169062-013468b47731?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      <Card user='Akshay' age={23} img='https://plus.unsplash.com/premium_photo-1719418812953-fcca92314ec0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>

      <User />
    </div>
  )
}

export default App