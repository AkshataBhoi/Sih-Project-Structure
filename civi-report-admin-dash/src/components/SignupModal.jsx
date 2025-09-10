import { motion, AnimatePresence } from "framer-motion";

export function SignupModal({ isOpen, onClose }) {
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(); // call back to Homepage to set login + go to overview
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white p-8 rounded-2xl shadow-xl w-96"
          >
            <h2 className="text-3xl font-bold mb-4 text-purple-600 flex justify-center">
              Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-purple-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-purple-500"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
              >
                Login
              </button>
            </form>
            <button
              onClick={onClose}
              className="mt-4 text-sm text-gray-500 hover:text-purple-600"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
