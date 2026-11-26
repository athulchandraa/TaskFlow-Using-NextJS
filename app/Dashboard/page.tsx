"use client"

import { useEffect, useState } from "react";

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

     const stats = [
    { title: "Total Tasks", count: 24, color: "bg-indigo-100 text-indigo-600" },
    { title: "Completed", count: 12, color: "bg-green-100 text-green-600" },
    { title: "Pending", count: 8, color: "bg-yellow-100 text-yellow-600" },
    { title: "Overdue", count: 4, color: "bg-red-100 text-red-600" },
  ];

  const tasks = [
    { title: "Complete Project UI", date: "Nov 26, 2026", status: "In Progress" },
    { title: "Learn Next.js", date: "Nov 27, 2026", status: "Pending" },
    { title: "Build Authentication", date: "Nov 28, 2026", status: "Completed" },
    { title: "Database Integration", date: "Nov 29, 2026", status: "Pending" },
  ];


  return (
     <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h1 className="text-2xl font-bold text-indigo-600 mb-10">
          TaskFlow
        </h1>

        <nav className="space-y-4">
          <a href="/Dashboard" className="block p-3 rounded-lg bg-indigo-100 text-indigo-600 font-semibold">
            Dashboard
          </a>
          <a href="/Tasks" className="block p-3 rounded-lg hover:bg-gray-100">
            My Tasks
          </a>
          <a href="/Tasks/Create" className="block p-3 rounded-lg hover:bg-gray-100">
            Create Task
          </a>
          <a href="/Profile" className="block p-3 rounded-lg hover:bg-gray-100">
            Profile
          </a>
          <a href="/Login" className="block p-3 rounded-lg hover:bg-red-50 text-red-500">
            Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h2>
            <p className="text-gray-500 mt-2">
              Welcome back! Here's your task overview.
            </p>
          </div>

          <a href="/Profile" className="bg-white px-4 py-2 rounded-lg shadow text-gray-700 font-medium">
            {userData?.name.toUpperCase()}
          </a>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
          {stats.map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h3 className="text-3xl font-bold mt-3 text-gray-800">
                {item.count}
              </h3>
              <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs ${item.color}`}>
                Overview
              </span>
            </div>
          ))}
        </div>

        {/* Recent Tasks */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">
              Recent Tasks
            </h3>

            <a href="/Tasks" className="text-indigo-600 text-sm font-semibold">
              View All
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-gray-500 text-sm">
                  <th className="py-4">Task Name</th>
                  <th className="py-4">Due Date</th>
                  <th className="py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {tasks.map((task) => (
                  <tr key={task.title} className="border-b last:border-0">
                    <td className="py-4 font-medium text-gray-700">
                      {task.title}
                    </td>
                    <td className="py-4 text-gray-500 text-sm">
                      {task.date}
                    </td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        task.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : task.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {task.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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