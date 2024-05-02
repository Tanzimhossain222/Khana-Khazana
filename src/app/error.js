'use client'

import { useEffect } from 'react'
import { toast } from 'react-toastify'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    toast.error(error.message,{
        position: "top-right",
        autoClose: 2000,
    })
    console.error(error)
  }, [error])

  return (
    <div className='container flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center'>
        <h2 className='mb-4 text-2xl font-semibold'>Something went wrong!</h2>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
