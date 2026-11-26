"use client"

import { useState } from "react"
import toast from "react-hot-toast";


const page = () => {

  const [task,setTask]=useState({
    title:"",description:"",priority:"Medium",dueDate:"",status:"Pending"
  })
  console.log(task);
  const[loading,setLoading]=useState(true)

  const handleAddTask=async()=>{
    try{
      const response=await fetch("/api/tasks",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        credentials:"include",body:JSON.stringify({
          title:task.title,description:task.description,priority:task.priority,dueDate:task.dueDate,status:task.status
        })
      })

      const data=await response.json()
      if(!response.ok){
        toast.error(data.message)
        return;
      }

      toast.success("Task Added Successfull")
      setLoading(false)
      setTimeout(()=>{
        window.location.href="/Tasks"
      },1500)
      

    }catch(error){
      console.error("Task Added error: ",error);
      setLoading(false)
      toast.error("Something went wrong")
      
    }
  }

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
          <a href="/Tasks/Create" className="block p-3 rounded-lg bg-indigo-100 text-indigo-600 font-semibold">
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

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Create New Task
          </h2>
          <p className="text-gray-500 mt-2">
            Add a new task to your workspace.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-sm">

          <div className="space-y-6">

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Task Title
              </label>
              <input
                type="text"
                onChange={(e)=>setTask({...task,title:e.target.value})}
                placeholder="Enter task title"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows={4}
                onChange={(e)=>setTask({...task,description:e.target.value})}
                placeholder="Describe your task..."
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Priority
                </label>
                <select value={task?.priority} onChange={(e)=>setTask({...task,priority:e.target.value})} className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">Select Priority</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Status
                </label>
                <select value={task?.status} onChange={(e)=>setTask({...task,status:e.target.value})} className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>

            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Due Date
              </label>
              <input
                type="date"
                onChange={(e)=>setTask({...task,dueDate:e.target.value})}
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <a
                href="/Tasks"
                className="px-6 py-3 border rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </a>

              <button onClick={handleAddTask} className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Create Task
              </button>
            </div>

          </div>

        </div>

      </main>
      
    </div>
  )
}

export default page