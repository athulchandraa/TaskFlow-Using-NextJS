import React from 'react'

const page = () => {

    const tasks = [
    {
      id: 1,
      title: "Complete Project UI",
      description: "Finish the TaskFlow dashboard design",
      dueDate: "Nov 26, 2026",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Learn Next.js",
      description: "Study routing and server components",
      dueDate: "Nov 27, 2026",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 3,
      title: "Build Authentication",
      description: "Implement login and register",
      dueDate: "Nov 28, 2026",
      priority: "High",
      status: "Completed",
    },
    {
      id: 4,
      title: "Database Integration",
      description: "Connect MongoDB with Next.js",
      dueDate: "Nov 29, 2026",
      priority: "Low",
      status: "Pending",
    },
  ];

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
              {tasks.map((task) => (
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
                      <a href={`/tasks/${task.id}`}
                        className="text-indigo-600 font-medium text-sm">
                        View
                      </a>
                      <button className="text-red-500 text-sm">
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
    </div>
  )
}

export default page