import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <h1 className='bg-gray-900 mb-5 text-white text-2xl p-5 font-bold text-center'>User: {userid} </h1>
    </div>
  )
}

export default User
