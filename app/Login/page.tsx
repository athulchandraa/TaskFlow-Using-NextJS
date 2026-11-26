"use client"

import { useState } from "react"
import toast from "react-hot-toast"

const page = () => {

  const [userData,setUserdata]=useState({
    email:"",password:""
  })

  //Handling Login
  const handleLogin=async(e:any)=>{
    e.preventDefault()

    try{
      const response=await fetch("/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        credentials:"include",body:JSON.stringify({
          email:userData.email,password:userData.password
        })
      })

      const data=await response.json()
      if(!response.ok){
        toast.error(data.message)
        return;
      }

      toast.success("Login Successfull")
      setTimeout(()=>{
        window.location.href="/Dashboard"
      },1500)
      

    }catch(error){
      console.error("Login error: ",error);
      toast.error("Something went wrong")
      
    }
  }

  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600">
            TaskFlow
          </h1>
          <h2 className="text-2xl font-semibold mt-6 text-gray-800">
            Welcome Back!
          </h2>
          <p className="text-gray-500 mt-2">
            Sign in to manage your tasks
          </p>
        </div>

        <div className="space-y-5">
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
              placeholder="Enter your password"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-indigo-600">
              Forgot Password?
            </a>
          </div>

          <button onClick={handleLogin} className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700">
            Sign In
          </button>
        </div>

        <p className="text-center text-sm mt-6 text-gray-600">
          Don't have an account?
          <a href="/Register" className="text-indigo-600 font-semibold ml-1">
            Sign Up
          </a>
        </p>

      </div>
    </div>
  )
}

export default page