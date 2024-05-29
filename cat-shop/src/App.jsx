import './App.css'
import React from 'react'
import Shop from './components/shop'

const App = () => {
  return (
    <div>
     <h1 className='text-5xl font-bold text-green-800 text-center'> 
     Your Ultimate Pet Store.
     </h1>
     <p className='text-3xl font-medium text-green-900 text-center'>
      make your pets happy, get them nice accessories from our store.
     </p>

    <div className='flex items-center justify-center min-h-fit mt-16'>
    <section className='h-2/4 w-3/4 bg-gray-700 p-10'>
       <Shop />
     </section>
    </div>

    </div>
  )
}

export default App