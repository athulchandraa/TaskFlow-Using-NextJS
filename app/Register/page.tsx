"use client"

import React, { useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {

    const [userData,setUserdata]=useState({
      name:"",email:"",password:"",confirmPass:""
    })

    const RegisterBtn=(e:any)=>{
      e.preventDefault()
      if(userData.password==userData.confirmPass){
        handleRegister()
      }else{
        toast.error("Password do not match")
      }
    }

    const handleRegister=async()=>{

      try{
      const response=await fetch("/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        credentials:"include",body:JSON.stringify({
          name:userData.name,email:userData.email,password:userData.password
        })
      })

      const data=await response.json()
      if(!response.ok){
        toast.error(data.message)
        return;
      }

      toast.success("Register Successfull")
      setTimeout(()=>{
        window.location.href="/Login"
      },1500)
      

    }catch(error){
      console.error("Login error: ",error);
      toast.error("Something went wrong")
      
    }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600">
            TaskFlow
          </h1>

          <h2 className="text-2xl font-semibold mt-6 text-gray-800">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2">
            Start organizing your work today
          </p>
        </div>

        <div className="space-y-5">

          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              onChange={(e)=>setUserdata({...userData,name:e.target.value})}
              placeholder="Enter your name"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              onChange={(e)=>setUserdata({...userData,email:e.target.value})}
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              onChange={(e)=>setUserdata({...userData,password:e.target.value})}
              placeholder="Create a password"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              onChange={(e)=>setUserdata({...userData,confirmPass:e.target.value})}
              placeholder="Confirm your password"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button onClick={RegisterBtn} className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition">
            Create Account
          </button>

        </div>

        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?
          <a href="/Login" className="text-indigo-600 font-semibold ml-1">
            Sign In
          </a>
        </p>

      </div>
    </div>
  )
}

export default page