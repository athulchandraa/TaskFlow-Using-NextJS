import React from 'react'

const page = () => {

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

          <a href="/Profile" className="bg-white px-4 py-2 rounded-lg shadow text-gray-700">
            Athul C
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
    </div>
  )
}

export default page