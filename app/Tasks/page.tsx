
"use client"

import { useEffect, useState } from 'react'

const page = () => {

  const[loading,setLoading]=useState(true)
  const[allTasks,setAlltasks]=useState(null)

  console.log(allTasks);
  

  useEffect(()=>{
      const getTasks=async()=>{
        try{
  
          const response=await fetch("/api/tasks",{
            method:"GET",
            credentials:"include"
          })
          const data=await response.json()
          
          if(response.ok){
            setAlltasks(data?.allTasks);
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
  
      getTasks()
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
          <a href="/Tasks" className="block p-3 rounded-lg bg-indigo-100 text-indigo-600 font-semibold">
            My Tasks
          </a>
          <a href="/Tasks/Create" className="block p-3 rounded-lg hover:bg-gray-100">
            Create Task
          </a>
          <a href="/Profile" className="block p-3 rounded-lg hover:bg-gray-100">
            Profile
          </a>
          <a href="/Login" className="block p-3 rounded-lg text-red-500 hover:bg-red-50">
            Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">

        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">My Tasks</h2>
            <p className="text-gray-500 mt-2">
              Manage and organize all your tasks.
            </p>
          </div>

          <a href="/Tasks/Create"
            className="bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700">
            + Add New Task
          </a>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-5 rounded-xl shadow-sm mb-6 flex flex-wrap gap-4">

          <input
            type="text"
            placeholder="Search tasks..."
            className="flex-1 min-w-48 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select className="border rounded-lg px-4 py-3 text-gray-600">
            <option>All Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <select className="border rounded-lg px-4 py-3 text-gray-600">
            <option>All Priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        {/* Tasks Table */}
        <div className="bg-white rounded-xl shadow-sm p-6 overflow-x-auto">

          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="border-b text-gray-500 text-sm">
                <th className="py-4">Task</th>
                <th className="py-4">Due Date</th>
                <th className="py-4">Priority</th>
                <th className="py-4">Status</th>
                <th className="py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {allTasks?.map((task) => (
                <tr key={task.id} className="border-b last:border-0">

                  <td className="py-5">
                    <p className="font-semibold text-gray-800">
                      {task.title}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {task.description}
                    </p>
                  </td>

                  <td className="py-5 text-sm text-gray-600">
                    {task.dueDate}
                  </td>

                  <td className="py-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}>
                      {task.priority}
                    </span>
                  </td>

                  <td className="py-5">
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

                  <td className="py-5">
                    <div className="flex gap-3">
                      <a href={`/Tasks/${task.id}`}
                        className="text-indigo-600 font-medium text-sm cursor-pointer hover:transition-transform duration-300 hover:scale-110">
                        View
                      </a>
                      <button  className="text-red-500 text-sm cursor-pointer hover:transition-transform duration-300 hover:scale-110">
                        Delete
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

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