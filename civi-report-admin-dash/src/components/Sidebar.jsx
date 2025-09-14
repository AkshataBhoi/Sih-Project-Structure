import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTachometerAlt, FaFileAlt, FaUsers, FaBug } from "react-icons/fa";

const defaultMenuItems = [
  {
    label: "Overview",
    path: "/overview",
    Icon: () => <FaTachometerAlt className="w-4 h-4" />,
  },
  {
    label: "Report Management",
    path: "/reports",
    Icon: () => <FaFileAlt className="w-4 h-4" />,
  },
  {
    label: "User Management",
    path: "/users",
    Icon: () => <FaUsers className="w-4 h-4" />,
  },
  {
    label: "Report Issue",
    path: "/report-issue",
    Icon: () => <FaBug className="w-4 h-4" />,
  },
];

export default function Sidebar({ items }) {
  const menuItems = items && items.length ? items : defaultMenuItems;

  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      className="w-64 bg-white shadow-lg p-2 min-h-screen"
    >
      <ul className="space-y-2">
        {menuItems.map(({ label, Icon, path }, i) => (
          <li key={i}>
            <Link
              to={path}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:text-violet-700 hover:bg-purple-100 transition"
            >
              <span className="text-gray-500">
                <Icon />
              </span>
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
