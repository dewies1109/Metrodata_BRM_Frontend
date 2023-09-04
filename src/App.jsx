import React from 'react'
import FormLogin from './components/UI/Form_Login'

function App() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-screen object-cover' src='../src/assets/images/Login_Content.png' />
      </div>
      <div className='justify-center'>
        <FormLogin />
      </div>
    </div>
  )
}

export default App
