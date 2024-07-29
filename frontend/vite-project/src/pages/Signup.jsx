import React from 'react'
import GenderCheckbox from '../component/GenderCheckbox'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-200">
        <h1 className='text-3xl font-semibold text-center text-slate-700'>Signup to
            <span className='text-green-600'> WeChat</span>
        </h1>
        <form>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Username' className='w-full p-2 input-bordered h-10 rounded-lg '/>
        </div>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>E-mail</span>
            </label>
            <input type="email" placeholder='E-mail' className='w-full p-2 input-bordered h-10 rounded-lg '/>
        </div>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Password' className='w-full p-2 input-bordered h-10 rounded-lg '/>
        </div>

        <GenderCheckbox/>

        <Link to={"/login"}
                className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>Already have an account?</Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2 bg-green-600 font-bold text-white rounded-lg'>Sign Up</button>
                </div>
        </form>
        </div>
    </div>
  )
}

export default Signup