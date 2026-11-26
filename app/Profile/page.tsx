"use client"

import { useEffect, useState } from 'react'

interface User{
  id:string;
  name:string;
  email:string;
}

const page = () => {

  const [userData,setUserdata]=useState<User |null>(null);
    const[loading,setLoading]=useState(true)
  
    console.log(userData);
    
  
    useEffect(()=>{
      const getUser=async()=>{
        try{
  
          const response=await fetch("/api/auth/me",{
            method:"GET",
            credentials:"include"
          })
          const data=await response.json()
          if(response.ok){
            setUserdata(data.user);
          }else{
            console.log(data.message);
            
          }
          
  
        }catch(error){
          console.error("User fetching error: ",error);
        }
        finally{
          setLoading(false)
        }
      }
  
      getUser()
    },[])

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h1 className="text-2xl font-bold text-indigo-600 mb-10">
          TaskFlow
        </h1>

        <nav className="space-y-4">
          <a href="/Dashboard" className="block p-3 rounded-lg hover:bg-gray-100">
            Dashboard
          </a>
          <a href="/Tasks" className="block p-3 rounded-lg hover:bg-gray-100">
            My Tasks
          </a>
          <a href="/Tasks/Create" className="block p-3 rounded-lg hover:bg-gray-100">
            Create Task
          </a>
          <a href="/Profile" className="block p-3 rounded-lg bg-indigo-100 text-indigo-600 font-semibold">
            Profile
          </a>
          <a href="/Login" className="block p-3 rounded-lg hover:bg-red-50 text-red-500">
            Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            My Profile
          </h2>
          <p className="text-gray-500 mt-2">
            Manage your personal information and account settings.
          </p>
        </div>

        <div className="max-w-4xl space-y-6">

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm p-8">

            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-3xl font-bold text-indigo-600">
                A
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {userData?.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {userData?.email}
                </p>
                <span className="text-xs text-indigo-600 font-medium">
                  TaskFlow Member
                </span>
              </div>
            </div>

            <div className="space-y-5">

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={userData?.name || ""}
                  onChange={(e)=>setUserdata({...userData,name:e.target.value})}
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={userData?.email || ""}
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div> */}

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  About Me
                </label>
                <textarea
                  rows={3}
                  placeholder="Write something about yourself..."
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex justify-end">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                  Save Changes
                </button>
              </div>

            </div>
          </div>

          {/* Change Password */}
          <div className="bg-white rounded-2xl shadow-sm p-8">

            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Change Password
            </h3>

            <div className="space-y-5">

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex justify-end">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                  Update Password
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>
      {
        loading &&
        <div>
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-200/95 backdrop-blur-sm">

      <div className="relative flex flex-col items-center">

        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-2xl bg-indigo-400 blur-xl opacity-40 animate-pulse" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-3xl font-bold text-white shadow-xl animate-bounce">
            T
          </div>
        </div>

        {/* Brand */}
        <h1 className="text-3xl font-extrabold text-gray-800">
          Task<span className="text-indigo-600">Flow</span>
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Making productivity flow...
        </p>

        {/* Animated Task Cards */}
        <div className="mt-8 w-72 space-y-3">

          {[
            "Organizing your tasks",
            "Syncing workspace",
            "Preparing dashboard",
          ].map((task, index) => (
            <div
              key={task}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-md animate-fade"
              style={{
                animationDelay: `${index * 300}ms`,
              }}
            >
              <div
                className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 animate-pulse"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12l4 4L19 6"
                  />
                </svg>
              </div>

              <span className="text-sm font-medium text-gray-700">
                {task}
              </span>

              <div className="ml-auto h-2 w-2 rounded-full bg-indigo-500 animate-ping" />
            </div>
          ))}
        </div>

        {/* Animated Progress */}
        <div className="mt-8 h-2 w-72 overflow-hidden rounded-full bg-gray-300">
          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-progress" />
        </div>

        <p className="mt-4 text-xs font-semibold tracking-[3px] text-gray-500 animate-pulse">
          PLEASE WAIT...
        </p>

      </div>

      <style jsx>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }

        .animate-progress {
          animation: progress 1.5s ease-in-out infinite;
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade {
          animation: fade 0.7s ease-out both;
        }
      `}</style>
    </div>
      </div>}
    </div>
  )
}

export default page