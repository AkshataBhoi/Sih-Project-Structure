import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

function Profile({ user, onLogout }) {
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const handleSave = () => {
    alert("Profile saved!");
    setIsEditingEmail(false);
    setIsEditingPassword(false);
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Profile Settings</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block font-medium">Admin Email</label>
          <div className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditingEmail}
              className={`w-full border rounded-lg px-4 py-2 mt-1 ${
                !isEditingEmail ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
            <button
              onClick={() => setIsEditingEmail(!isEditingEmail)}
              className="px-3 py-2 border rounded-lg hover:bg-gray-100"
            >
              <FaEdit />
            </button>
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block font-medium">Password</label>
          <div className="flex items-center gap-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!isEditingPassword}
              className={`w-full border rounded-lg px-4 py-2 mt-1 ${
                !isEditingPassword ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
            <button
              onClick={() => setIsEditingPassword(!isEditingPassword)}
              className="px-3 py-2 border rounded-lg hover:bg-gray-100"
            >
              <FaEdit />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            Save Profile
          </button>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
