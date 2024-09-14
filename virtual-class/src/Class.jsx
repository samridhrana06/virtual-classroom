import React, { useState } from 'react';
import { Book, Users, MessageSquare, Video, ChevronRight, Menu, X } from 'lucide-react';

const mockClasses = [
  { id: 1, name: "Introduction to Computer Science", progress: 60 },
  { id: 2, name: "Web Development Fundamentals", progress: 30 },
  { id: 3, name: "Data Structures and Algorithms", progress: 80 },
];

const mockUnits = [
  { id: 1, name: "Variables and Data Types", progress: 100 },
  { id: 2, name: "Control Structures", progress: 75 },
  { id: 3, name: "Functions and Modules", progress: 50 },
];

const mockSessions = [
  { id: 1, name: "Introduction to Variables", duration: "15 min" },
  { id: 2, name: "Working with Strings", duration: "20 min" },
  { id: 3, name: "Numeric Data Types", duration: "18 min" },
];

const EnhancedVirtualClassroom = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-indigo-700 text-white transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="p-4 flex items-center justify-between">
          {isSidebarOpen && <h1 className="text-xl font-bold">VirtualClass</h1>}
          <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-indigo-600">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className="mt-8 flex-grow">
          <a href="#" className="flex items-center px-4 py-3 text-indigo-100 hover:bg-indigo-600">
            <Book className="mr-4" size={24} />
            {isSidebarOpen && "Classes"}
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-indigo-100 hover:bg-indigo-600">
            <Users className="mr-4" size={24} />
            {isSidebarOpen && "Students"}
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-indigo-100 hover:bg-indigo-600">
            <MessageSquare className="mr-4" size={24} />
            {isSidebarOpen && "Discussions"}
          </a>
        </nav>
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <img src="/api/placeholder/40/40" className="rounded-full" alt="User avatar" />
            {isSidebarOpen && (
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-indigo-200">Student</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <h2 className="text-2xl font-bold text-gray-800">My Classes</h2>
              </div>
              <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  New Class
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Class cards */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockClasses.map((cls) => (
              <div key={cls.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <Book className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{cls.name}</dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">{cls.progress}% Complete</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-700 hover:text-indigo-900">
                      View class
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Session content (if a session is selected) */}
          {selectedSession && (
            <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {selectedSession.name}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Session duration: {selectedSession.duration}
                </p>
              </div>
              <div className="border-t border-gray-200">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="flex items-center justify-center bg-gray-100">
                    <Video size={48} className="text-gray-400" />
                  </div>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <h4 className="text-lg font-medium text-gray-900">Discussion</h4>
                  <div className="mt-4 space-y-4">
                    {/* Sample comments */}
                    <div className="flex space-x-3">
                      <img src="/api/placeholder/40/40" alt="" className="h-10 w-10 rounded-full" />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h5 className="text-sm font-medium text-gray-900">Alice Johnson</h5>
                          <p className="text-sm text-gray-500">5 minutes ago</p>
                        </div>
                        <p className="text-sm text-gray-500">Great explanation of variables!</p>
                      </div>
                    </div>
                    {/* Add more comments here */}
                  </div>
                  <div className="mt-6">
                    <textarea
                      rows="3"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Add your comment..."
                    ></textarea>
                    <div className="mt-3 flex items-center justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Class;