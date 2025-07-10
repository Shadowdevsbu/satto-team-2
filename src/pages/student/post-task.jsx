import React from 'react';

const StudentPostTask = () => {
  return (
    <div className=" p-24 rounded-lg shadow-sm w-full max-w-screen-2xl mx-auto">
      <h1 className="text-3xl font-bold text-[#404040]">Post a New Task</h1>
      <p className="text-gray-600 mt-2">
        Fill out the form to describe your assignment and match with the right
        solver.
      </p>

      <form className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="task-title"
            className="block text-sm font-medium text-gray-700"
          >
            Task Title
          </label>
          <input
            type="text"
            id="task-title"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="e.g. MAT101 - Thermodynamics Assignment"
          />
        </div>

        <div>
          <label
            htmlFor="course-code"
            className="block text-sm font-medium text-gray-700"
          >
            Course/Subject Code
          </label>
          <input
            type="text"
            id="course-code"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="e.g. CSC204"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="Provide a brief description of your assignment, key requirements, and any specific instructions..."
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-700"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-700"
            >
              Budget
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">₦</span>
              </div>
              <input
                type="number"
                id="budget"
                min="0"
                className="block w-full pl-7 pr-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="2500"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Files
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center">
                <img src="../../../public/upload-icon.svg" alt="Upload Icon" />
              </div>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-[#00894E] hover:text-green-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                >
                  <span>Drag & drop files here or click to browse</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    multiple
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#00894E] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Post Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentPostTask;