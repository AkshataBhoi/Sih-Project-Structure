import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const initialUsers = [
  {
    dept: "Water Supply",
    role: "Admin",
    name: "Mr. Sharma",
    email: "watersupply.sharma@gov.in",
  },
  {
    dept: "Water Supply",
    role: "Officer-in-Charge",
    name: "Mr. Reddy",
    email: "officer.water@gov.in",
  },
  {
    dept: "Water Supply",
    role: "Staff",
    name: "Mr. Das",
    email: "staff.das@gov.in",
  },
  {
    dept: "Electrical",
    role: "Admin",
    name: "Ms. Rao",
    email: "electrical.rao@gov.in",
  },
  {
    dept: "Electrical",
    role: "Officer-in-Charge",
    name: "Mr. Sen",
    email: "officer.electrical@gov.in",
  },
  {
    dept: "Electrical",
    role: "Staff",
    name: "Mr. Roy",
    email: "staff.roy@gov.in",
  },
  {
    dept: "Sanitation",
    role: "Admin",
    name: "Mr. Khan",
    email: "sanitation.khan@gov.in",
  },
  // {
  //   dept: "Sanitation",
  //   role: "Officer-in-Charge",
  //   name: "Ms. Gupta",
  //   email: "officer.sanitation@gov.in",
  // },
  // {
  //   dept: "Sanitation",
  //   role: "Staff",
  //   name: "Mr. Ali",
  //   email: "staff.ali@gov.in",
  // },
];

function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");

  const roleColors = {
    Admin: "bg-red-100 text-red-600",
    "Officer-in-Charge": "bg-blue-100 text-blue-600",
    Staff: "bg-green-100 text-green-600",
  };

  const handleEdit = (user) => {
    console.log("Edit user:", user);
  };

  const handleDelete = (userEmail) => {
    setUsers(users.filter((u) => u.email !== userEmail));
  };

  const filteredUsers = users.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.dept.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query)
    );
  });

  return (
    <div className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 h-screen">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-500 to-purple-700 px-6 py-4 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <img
              src="https://img.icons8.com/fluency/48/group.png"
              alt="Users Logo"
            />
            User Management
          </h2>
        </div>

        {/* Search bar */}
        <div className="flex justify-between items-center p-4 ">
          <input
            type="text"
            placeholder="🔍 Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-2/3 px-4 py-2 mb-1 mx-auto border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className=" text-gray-600 text-md">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Department</th>
                <th className="px-6 py-3 text-left">Role</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr key={index} className="hover:bg-purple-50 transition">
                    <td className="px-6 py-3 font-medium text-gray-800">
                      {user.name}
                    </td>
                    <td className="px-6 py-3 text-gray-600">{user.email}</td>
                    <td className="px-6 py-3 text-gray-600">{user.dept}</td>
                    <td className="px-6 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          roleColors[user.role]
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex gap-2">
                        {/* Admin → Only Edit */}
                        {user.role === "Admin" && (
                          <button
                            onClick={() => handleEdit(user)}
                            className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 flex items-center gap-1 text-sm"
                          >
                            <FaEdit /> Edit
                          </button>
                        )}

                        {/* Staff & Officer-in-Charge → Edit + Delete */}
                        {(user.role === "Staff" ||
                          user.role === "Officer-in-Charge") && (
                          <>
                            <button
                              onClick={() => handleEdit(user)}
                              className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 flex items-center gap-1 text-sm"
                            >
                              <FaEdit /> Edit
                            </button>
                            <button
                              onClick={() => handleDelete(user.email)}
                              className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-1 text-sm"
                            >
                              <FaTrash /> Delete
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
