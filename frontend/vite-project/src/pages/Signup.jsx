import React, { useState } from 'react'
import GenderCheckbox from '../component/GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../hooks/useSignup.js'

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })

    const {loading, signup} = useSignup()

    const handleCheckboxChange = (gender) => {
        setFormData({...formData,gender})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        await signup(formData)
    }

  return (
    
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-200">
        <h1 className='text-3xl font-semibold text-center text-slate-700'>Signup to
            <span className='text-green-600'> WeChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Username' className='w-full p-2 input-bordered h-10 rounded-lg '
            value={formData.username}
            onChange={(e)=> setFormData({...formData, username: e.target.value})}
            />
        </div>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>E-mail</span>
            </label>
            <input type="email" placeholder='E-mail' className='w-full p-2 input-bordered h-10 rounded-lg '
            value={formData.email}
            onChange={(e)=> setFormData({...formData, email: e.target.value})}
            />
        </div>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Password' className='w-full p-2 input-bordered h-10 rounded-lg '
            value={formData.password}
            onChange={(e)=> setFormData({...formData, password: e.target.value})}  
            />
        </div>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='w-full p-2 input-bordered h-10 rounded-lg '
            value={formData.confirmPassword}
            onChange={(e)=> setFormData({...formData, confirmPassword: e.target.value})}  
            />
        </div>

        <GenderCheckbox onCheckboxChange={handleCheckboxChange}
        selectedGender={formData.gender}/>

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