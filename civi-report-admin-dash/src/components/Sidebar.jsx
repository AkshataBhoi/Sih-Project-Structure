import { motion } from "framer-motion";

const defaultMenuItems = [
  {
    label: "Overview",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M3.75 3A.75.75 0 0 0 3 3.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 20.25 3H3.75zm3 3.75A.75.75 0 0 1 7.5 6h1.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V6.75zm4.5 3A.75.75 0 0 1 12.75 9h1.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-7.5zm4.5-3A.75.75 0 0 1 17.25 6h1.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V6.75z" />
      </svg>
    ),
  },
  {
    label: "Heatmap",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 3a6.75 6.75 0 1 1-6.75 6.75A6.75 6.75 0 0 1 12 5.25z" />
        <circle cx="12" cy="12" r="2.25" />
      </svg>
    ),
  },
  {
    label: "Reports",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M6 2.25A1.5 1.5 0 0 0 4.5 3.75v16.5A1.5 1.5 0 0 0 6 21.75h12a1.5 1.5 0 0 0 1.5-1.5V8.25L14.25 2.25H6zm8.25 1.94 3.06 3.06h-3.06V4.19zM8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8.25 12zm0 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75z" />
      </svg>
    ),
  },
  {
    label: "Departments",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M12 2.25a3 3 0 1 1-3 3 3 3 0 0 1 3-3zM6 9a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm12 0a3 3 0 1 1-3 3 3 3 0 0 1 3-3zM3.75 18.75A3.75 3.75 0 0 1 7.5 15h9a3.75 3.75 0 0 1 3.75 3.75v.75H3.75z" />
      </svg>
    ),
  },
  {
    label: "Settings",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M12 8.25A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25zM2.25 12a9.75 9.75 0 1 1 9.75 9.75A9.75 9.75 0 0 1 2.25 12zm15.16 6.22-1.23-2.13a5.227 5.227 0 0 1-1.18.69l-.32 2.45a7.977 7.977 0 0 0 2.73-1.01zm-5.14 1.28.32-2.45a5.257 5.257 0 0 1-1.64 0l.32 2.45zm-3.17-.27.32-2.45a5.227 5.227 0 0 1-1.18-.69l-1.23 2.13a7.977 7.977 0 0 0 2.09 1.01z" />
      </svg>
    ),
  },
];

export function Sidebar({ onMenuClick, items }) {
  const menuItems = items && items.length ? items : defaultMenuItems;
  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      className="w-64 bg-white shadow-lg p-6 "
    >
      {/* <div>
        <h2 className="text-2xl font-bold">Municipal Admin</h2>
        <div className="mt-3 h-px bg-gray-300" />
      </div> */}
      <ul className="space-y-2">
        {menuItems.map(({ label, Icon, iconSrc }, i) => (
          <li key={i}>
            <button
              onClick={onMenuClick}
              className="w-full h-auto flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:text-violet-700 hover:bg-purple-100 transition"
            >
              <span className="text-gray-500">
                {iconSrc ? (
                  <img
                    src={iconSrc}
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                ) : (
                  <Icon />
                )}
              </span>
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
