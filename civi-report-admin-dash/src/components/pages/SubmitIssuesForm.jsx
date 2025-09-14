import React, { useState } from "react";
import { FaExclamationCircle, FaPaperPlane, FaTimes } from "react-icons/fa";

function SubmitIssuesForm() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    priority: "",
    description: "",
    steps: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Issue:", form);
    // Add submit logic here (API call, etc.)
  };
  const handleCancel = (e) => {
    setForm({
      title: "",
      category: "",
      priority: "",
      description: "",
      steps: "",
    });
  };

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6  flex-1 flex-col items-center">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-2xl border border-violet-700 max-w-160  mx-auto transition-transform duration-300 hover:scale-105 ">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4 rounded-t-2xl flex items-center gap-2">
          <FaExclamationCircle className="text-white text-xl" />
          <h2 className="text-lg font-bold text-white">
            Submit Issue to Development Team
          </h2>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 ">
          <p className="text-gray-600 text-sm mb-3">
            Report bugs, request features, or submit any technical issues that
            need developer attention.
          </p>

          {/* Issue Title */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Issue Title *
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Brief description of the issue"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Category + Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
                required
              >
                <option value="">Select category</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Performance Issue">Performance Issue</option>
                <option value="PerformancSecurity Concerne">
                  Security Concern
                </option>
                <option value="UI/UX improvement">UI/UX improvement</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority *
              </label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
                required
              >
                <option value="">Select priority</option>
                <option value="High">Low</option>
                <option value="Medium">Medium</option>
                <option value="Low">High</option>
                <option value="Low">Critical</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="m-0">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Issue Description *
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Provide detailed information about the issue..."
              className="w-full px-4 py-2 mb-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              rows={3}
              required
            />
          </div>

          {/* Steps to Reproduce */}
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Steps to Reproduce (Optional)
            </label>
            <textarea
              name="steps"
              value={form.steps}
              onChange={handleChange}
              placeholder="1. Go to...2. Click on...3. See error..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400"
              rows={2}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 transition flex items-center gap-2"
              onClick={handleCancel}
            >
              <FaTimes /> Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition flex items-center gap-2"
            >
              <FaPaperPlane /> Submit Issue
            </button>
          </div>
        </form>
      </div>

      {/* Notes */}
      <div className=" flex items-center">
        <div className="mt-6 bg-indigo-50 border-2 border-indigo-800 rounded-xl p-4 pl-5 text-sm text-gray-700 space-y-1 w-155 mx-auto">
          <h3 className="font-semibold text-indigo-700 flex items-center gap-2">
            <FaExclamationCircle /> Important Notes
          </h3>
          <ul className="list-disc pl-10 space-y-1 ">
            <li>Issues are reviewed within 24–48 hours</li>
            <li>Critical issues are prioritized immediately</li>
            <li>You’ll receive updates via email notifications</li>
            <li>For urgent outages, please contact support directly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SubmitIssuesForm;
