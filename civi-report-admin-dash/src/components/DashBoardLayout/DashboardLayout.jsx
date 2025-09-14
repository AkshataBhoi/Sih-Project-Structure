import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header/Header";

function DashboardLayout() {
  return (
    <>
      {/* <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm p-5 space-y-3">
        <h2 className="font-bold text-2xl flex justify-start items-center  "> Admin Dashboard</h2>
        {/* <div className="mt-3 h-px bg-gray-300" /> }
        <div className="flex justify-end items-center  border">
          <Link
            to="/profile"
            className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
          >
            {/* Circle avatar with initial }
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="text-gray-700 font-medium">Profile</span>
          </Link>
        </div>
      </div> */}
      <Header/>

      <div className="flex">
        {/* Sidebar on left */}
        <Sidebar />

        {/* Page content changes here */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
