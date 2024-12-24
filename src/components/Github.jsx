import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <h1 className='bg-gray-900 mb-5 text-white text-2xl p-5 font-bold text-center'>User: {data.followers}</h1>
      <div className="flex flex-col justify-center items-center">
        <img src={data.avatar_url} alt="Github Picutre" className='w-48' />
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/farrukhamjad')
  return res.json()
}
