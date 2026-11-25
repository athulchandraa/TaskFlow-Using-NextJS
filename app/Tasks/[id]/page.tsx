import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h1 className="text-2xl font-bold text-indigo-600 mb-10">
          TaskFlow
        </h1>

        <nav className="space-y-4">
          <a href="/dashboard" className="block p-3 rounded-lg hover:bg-gray-100">
            Dashboard
          </a>
          <a href="/Tasks" className="block p-3 rounded-lg bg-indigo-100 text-indigo-600 font-semibold">
            My Tasks
          </a>
          <a href="/Tasks/create" className="block p-3 rounded-lg hover:bg-gray-100">
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
            <a href="/Tasks" className="text-indigo-600 text-sm font-medium">
              ← Back to Tasks
            </a>
            <h2 className="text-3xl font-bold text-gray-800 mt-3">
              Task Details
            </h2>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Edit Task
            </button>
            <button className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>

        {/* Task Information */}
        <div className="max-w-4xl bg-white rounded-2xl shadow-sm p-8">

          <div className="flex justify-between items-start gap-4 flex-wrap border-b pb-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">TASK #101</p>
              <h3 className="text-2xl font-bold text-gray-800">
                Complete Project UI
              </h3>
            </div>

            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              In Progress
            </span>
          </div>

          <div className="py-7 border-b">
            <h4 className="font-semibold text-gray-800 mb-3">
              Description
            </h4>
            <p className="text-gray-600 leading-7">
              Complete the TaskFlow application user interface.
              Design all pages including dashboard, task management,
              registration and login pages.
            </p>
          </div>

          {/* Task Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-7 border-b">

            <div>
              <p className="text-sm text-gray-500 mb-2">Priority</p>
              <span className="px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
                High
              </span>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Due Date</p>
              <p className="font-semibold text-gray-800">
                November 26, 2026
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Created On</p>
              <p className="font-semibold text-gray-800">
                November 20, 2026
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">Last Updated</p>
              <p className="font-semibold text-gray-800">
                November 24, 2026
              </p>
            </div>

          </div>

          <div className="pt-7">
            <h4 className="font-semibold text-gray-800 mb-3">
              Task Progress
            </h4>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-3 rounded-full w-2/3"></div>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              65% Completed
            </p>
          </div>

        </div>

      </main>
    </div>
  )
}

export default page