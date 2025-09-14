import { Link, useNavigate } from "react-router-dom";

function Header({ user }) {
  const navigate = useNavigate();
  // Example: user.email = "akshata.b@example.com"
  //   const userEmail = user?.email || "user@example.com";

  //   // Take first letter for avatar
  //   const avatarInitial = userEmail.charAt(0).toUpperCase();

  //   // Use first part of email before '@' as display name
  //   const displayName = userEmail.split("@")[0];

  const backHome = () => {
    navigate("/overview");
  };
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm px-6 py-2 flex justify-between items-center">
      {/* Left side: Title */}
      <h2 className="font-bold text-xl text-gray-800 cursor-pointer" onClick={backHome}>
        Admin Dashboard
      </h2>

      {/* Right side: Profile */}
      <div className="flex items-center">
        <Link
          to="/profile"
          className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
        >
          {/* Circle avatar with initial */}
          <div className="w-9 h-9 rounded-full bg-rose-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="text-gray-700 font-medium">Admin</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
