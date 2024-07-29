import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-200">
            <h1 className='text-3xl font-semibold text-center text-slate-700'>Login to
            <span className='text-green-600'> WeChat</span>
            </h1>
            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Email</span>
                    </label>
                    <input type="email" placeholder='E-mail' className='w-full p-2 input-bordered h-10 rounded-lg '/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Password' className='w-full p-2 input-bordered h-10 rounded-lg '/>
                </div>
                <Link to={"/signup"}
                className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'>{"Don't"} have an account?</Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2 bg-green-600 font-bold text-white rounded-lg'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login