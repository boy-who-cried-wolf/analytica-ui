import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <img src={logo} className="h-24 w-24 mx-auto mb-6 animate-spin" alt="logo" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Analytica UI
          </h1>
          <p className="text-gray-600 mb-6">
            Your React TypeScript app with Tailwind CSS is ready!
          </p>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105">
              Get Started
            </button>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-200 text-center"
            >
              Learn React
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
