import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sidebar } from "./Sidebar";
import { SignupModal } from "./SignupModal";
import { useNavigate } from "react-router-dom";

export function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePage, setActivePage] = useState("Overview");
  const navigate = useNavigate();
  const handleMenuClick = (label) => {
    if (!isLoggedIn) {
      setPendingPage(label);
      setIsModalOpen(true);
      return;
    }

    // navigate based on menu
    switch (label) {
      case "Overview":
        navigate("/overview");
        break;
      case "Heatmap":
        navigate("/heatmap");
        break;
      case "Reports":
        navigate("/reports");
        break;
      default:
        navigate("/");
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);

    // redirect to pending page if any
    if (pendingPage) {
      handleMenuClick(pendingPage);
      setPendingPage(null);
    }
  };

  return (
    <div>
      {" "}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm p-5 space-y-3">
        <h2 className="font-bold text-2xl ">Municipal Admin</h2>
        {/* <div className="mt-3 h-px bg-gray-300" /> */}
      </div>
      <div className="flex min-h-screen w-full bg-gradient-to-b from-gray-50 to-white overflow-x-hidden ">
        {/* Sidebar */}
        {/* <Sidebar onMenuClick={() => setIsModalOpen(true)} /> */}
        <Sidebar onMenuClick={(e) => handleMenuClick(e.target.innerText)} />

        {/* Main Content */}
        <div className="flex-1">
          {/* {renderPage()} */}
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-170 bg-gradient-to-r from-purple-100 to-white shadow overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 -z-10 ">
              <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-purple-300/30 blur-3xl" />
              <div className="absolute bottom-10 -right-10 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl h-full w-full px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-5 ">
              <div className="p-6">
                <p className="text-5xl md:text-6xl lg:text-7xl leading-tight font-extrabold tracking-tight text-gray-900">
                  Streamline <br />
                  your
                  <br />
                  municipal <br />
                  <span className="text-violet-700">operations</span>
                </p>
                <p className="mt-5 text-gray-700 text-lg md:text-xl max-w-xl">
                  Advanced dashboard for managing water, sanitation, and road
                  infrastructure. Track issues, analyze data, and optimize city
                  services with real-time insights.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-violet-700 px-6 py-3 text-white text-lg shadow-lg shadow-violet-700/20 hover:shadow-violet-700/30 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition"
                  >
                    Get Started
                    <span>→</span>
                  </button>
                </div>
              </div>

              {/* Dashboard Preview */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="justify-self-center bg-white/90 backdrop-blur p-6 md:p-8 rounded-3xl w-full lg:w-[520px] border border-gray-200 shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-semibold text-gray-900">
                    Live Dashboard Preview
                  </h2>
                  <span className="inline-flex items-center gap-2 text-xs text-gray-500">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                    Live
                  </span>
                </div>
                <div className="mb-4 h-px bg-gray-200" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-violet-100 rounded-xl p-4 border border-violet-200">
                    <div className="flex items-center gap-2 md:gap-3">
                      <img
                        width="30"
                        height="30"
                        className="w-6 h-6 md:w-7 md:h-7"
                        src="https://img.icons8.com/material-outlined/24/place-marker--v1.png"
                        alt="place-marker--v1"
                      />
                      <span className="text-gray-700 text-sm md:text-base">
                        Active Issues
                      </span>
                    </div>
                    <p className="mt-2 md:mt-3 text-2xl md:text-4xl font-bold text-gray-900">
                      247
                    </p>
                  </div>
                  <div className="bg-green-100 rounded-xl p-4 border border-green-200">
                    <div className="flex items-center gap-2 md:gap-3">
                      <img
                        width="30"
                        height="30"
                        className="w-6 h-6 md:w-7 md:h-7"
                        src="https://img.icons8.com/external-flat-juicy-fish/60/external-resolved-customer-feedback-flat-flat-juicy-fish.png"
                        alt="external-resolved-customer-feedback-flat-flat-juicy-fish"
                      />
                      <span className="text-gray-700 text-sm md:text-base">
                        Resolved
                      </span>
                    </div>
                    <p className="mt-2 md:mt-3 text-2xl md:text-4xl font-bold text-gray-900">
                      1,834
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-24 rounded-xl bg-gradient-to-r from-violet-700 to-fuchsia-600 flex items-center justify-between text-white text-base md:text-lg font-semibold border border-violet-300/40 px-4">
                  <span>Interactive Heatmap</span>
                  <span className="text-xs md:text-sm opacity-90">
                    City-wide • Real-time
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features */}
          <div className="mt-20 px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-gray-900 mb-6"
              >
                Powerful tools for{" "}
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  modern cities
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Everything you need to manage municipal services efficiently and
                respond to citizen needs faster than ever.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Interactive Heatmaps",
                  desc: "Visualize problem areas across your city with real-time heatmaps. Identify patterns and allocate resources more effectively.",
                  icon: "🗺️",
                  gradient: "from-purple-500 to-indigo-600",
                  bgGradient: "from-purple-50 to-indigo-50",
                  borderColor: "border-purple-200",
                  hoverColor: "hover:border-purple-400",
                },
                {
                  title: "Automated Routing",
                  desc: "Smart categorization automatically routes issues to the right department, reducing response times and improving efficiency.",
                  icon: "⚡",
                  gradient: "from-blue-500 to-cyan-600",
                  bgGradient: "from-blue-50 to-cyan-50",
                  borderColor: "border-blue-200",
                  hoverColor: "hover:border-blue-400",
                },
                {
                  title: "Real-time Analytics",
                  desc: "Comprehensive dashboards with charts, graphs, and tables provide insights into performance and trends.",
                  icon: "📊",
                  gradient: "from-emerald-500 to-teal-600",
                  bgGradient: "from-emerald-50 to-teal-50",
                  borderColor: "border-emerald-200",
                  hoverColor: "hover:border-emerald-400",
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className={`bg-gradient-to-br ${f.bgGradient} ${f.borderColor} ${f.hoverColor} border-2 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group relative overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full blur-lg"></div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      {f.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-bold text-2xl text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {f.desc}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${f.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </motion.div>
              ))}
            </div>

            {/* Additional Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-violet-600 mb-2">
                    99.9%
                  </div>
                  <div className="text-gray-600 font-medium">Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600 font-medium">Monitoring</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600 font-medium">Cities Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    1M+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Issues Resolved
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Departments */}
          <div className="mt-24 px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Manage all departments{" "}
                <span className="text-violet-700">in one place</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Comprehensive oversight of municipal services with real-time
                monitoring and analytics
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                {
                  name: "Water Department",
                  issues: 23,
                  resolved: 156,
                  icon: "💧",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                  hoverColor: "hover:border-blue-400",
                },
                {
                  name: "Sanitation",
                  issues: 15,
                  resolved: 89,
                  icon: "🚮",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "bg-green-50",
                  borderColor: "border-green-200",
                  hoverColor: "hover:border-green-400",
                },
                {
                  name: "Roads & Infrastructure",
                  issues: 31,
                  resolved: 203,
                  icon: "🛣️",
                  color: "from-orange-500 to-amber-500",
                  bgColor: "bg-orange-50",
                  borderColor: "border-orange-200",
                  hoverColor: "hover:border-orange-400",
                },
                {
                  name: "Electricity",
                  issues: 18,
                  resolved: 127,
                  icon: "⚡",
                  color: "from-yellow-500 to-orange-500",
                  bgColor: "bg-yellow-50",
                  borderColor: "border-yellow-200",
                  hoverColor: "hover:border-yellow-400",
                },
                {
                  name: "Public Transport",
                  issues: 12,
                  resolved: 78,
                  icon: "🚌",
                  color: "from-purple-500 to-indigo-500",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                  hoverColor: "hover:border-purple-400",
                },
                {
                  name: "Emergency Services",
                  issues: 7,
                  resolved: 45,
                  icon: "🚨",
                  color: "from-red-500 to-pink-500",
                  bgColor: "bg-red-50",
                  borderColor: "border-red-200",
                  hoverColor: "hover:border-red-400",
                },
                {
                  name: "Parks & Recreation",
                  issues: 9,
                  resolved: 67,
                  icon: "🌳",
                  color: "from-emerald-500 to-teal-500",
                  bgColor: "bg-emerald-50",
                  borderColor: "border-emerald-200",
                  hoverColor: "hover:border-emerald-400",
                },
                {
                  name: "Waste Management",
                  issues: 14,
                  resolved: 92,
                  icon: "♻️",
                  color: "from-slate-500 to-gray-500",
                  bgColor: "bg-slate-50",
                  borderColor: "border-slate-200",
                  hoverColor: "hover:border-slate-400",
                },
              ].map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className={`${d.bgColor} ${d.borderColor} ${d.hoverColor} border-2 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                >
                  {/* Header with Icon and Gradient */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${d.color} flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      {d.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {d.issues}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        Active
                      </div>
                    </div>
                  </div>

                  {/* Department Name */}
                  <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-gray-900 transition-colors">
                    {d.name}
                  </h3>

                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Resolved Issues
                      </span>
                      <span className="font-semibold text-gray-900">
                        {d.resolved}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${d.color} transition-all duration-500`}
                        style={{
                          width: `${Math.min(
                            (d.resolved / (d.resolved + d.issues)) * 100,
                            100
                          )}%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Success Rate</span>
                      <span>
                        {Math.round(
                          (d.resolved / (d.resolved + d.issues)) * 100
                        )}
                        %
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full mt-4 py-2 px-4 rounded-lg bg-gradient-to-r ${d.color} text-white font-medium text-sm hover:shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100`}
                  >
                    View Details →
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Summary Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Municipal Performance Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold">106</div>
                  <div className="text-violet-200">Total Active Issues</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">698</div>
                  <div className="text-violet-200">Issues Resolved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">87%</div>
                  <div className="text-violet-200">Overall Success Rate</div>
                </div>
              </div>
            </motion.div> */}
          </div>

          {/* CTA Section */}
          <div className="mt-24">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-gradient-to-r from-violet-700 to-fuchsia-700 text-white shadow-[0_20px_50px_-20px_rgba(91,33,182,0.6)] px-6 py-12 md:px-12 md:py-16 mb-10">
              {/* subtle glow accents */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                  Ready to transform your city management?
                </h2>
                <p className="text-violet-100/90 text-base md:text-lg max-w-3xl mx-auto mb-8">
                  Join forward-thinking municipalities using our platform to
                  deliver better services.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 md:px-8 py-3 md:py-3.5 text-violet-700 font-semibold shadow-[0_8px_18px_rgba(255,255,255,0.15)] hover:bg-violet-50 transition"
                >
                  Start Now
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Signup Modal */}
        {/* <SignupModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        /> */}
        <SignupModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onLogin={() => {
            setIsLoggedIn(true);
            setIsModalOpen(false);
            setActivePage("Overview"); // redirect to overview after login
          }}
        />
      </div>
    </div>
  );
}

export default Homepage;
