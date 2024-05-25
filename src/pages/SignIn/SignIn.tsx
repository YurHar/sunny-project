import React from 'react'
import { Link } from 'react-router-dom'
import logo from "@/assets/logo.webp"

const SignIn = () => {
  return (
    <div className='flex min-h-screen justify-center bg-gray-100 text-gray-900'>
        <div className='m-0 flex max-w-[900px] flex-1 justify-center bg-white sm:m-10 sm:rounded-lg'>
            <div className='p-6 lg:w-1/2 xl:w-5/12'>
                <Link to="/" >
                    <img src={logo} alt="PlusDev.NET" className='w-14 mx-auto' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SignIn
