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
                  Athul C
                </h3>
                <p className="text-gray-500 text-sm">
                  athul@example.com
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
                  defaultValue="Athul C"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="athul@example.com"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

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
    </div>
  )
}

export default page