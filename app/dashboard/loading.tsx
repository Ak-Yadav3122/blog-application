// import React from 'react';

// const DashboardLoadingScreen = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
//       <div className="text-center flex flex-col items-center">
//         {/* Spinner */}
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 dark:border-purple-400 mb-4"></div>

//         {/* Loading Text */}
//         <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Loading Dashboard...</h1>
//         <p className="text-gray-600 dark:text-gray-400 mt-2">Please wait while we prepare your dashboard.</p>
//       </div>
//     </div>
//   );
// };

// export default DashboardLoadingScreen;



"use client"
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const blogNames = [
//   "The Future of Web Development",
//   "Mastering JavaScript in 2025",
//   "AI and the Next Generation",
//   "Scaling Your Startup",
//   "Design Trends You Must Follow"
// ];

// export default function LoadingPage() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % blogNames.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-gray-900 text-white">
//       {/* Blogify Title Animation */}
//       <motion.h1
//         initial={{ scale: 0.5, opacity: 0 }}
//         animate={{ scale: 1.5, opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="text-6xl font-extrabold tracking-wide text-purple-300"
//       >
//         Blogify
//       </motion.h1>
      
//       <motion.h2
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 1 }}
//         className="text-3xl font-bold text-purple-400 mt-4"
//       >
//         Upcoming Blog Topics
//       </motion.h2>
      
//       <div className="mt-6 h-16 flex items-center justify-center overflow-hidden relative w-80 border-2 border-purple-500 rounded-lg p-4 shadow-lg bg-gray-800">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={blogNames[index]}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="text-lg font-medium text-gray-300"
//           >
//             {blogNames[index]}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }


// 


import { motion } from "framer-motion";
import { FaBlog } from "react-icons/fa";

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-gray-900 text-white overflow-hidden">
      {/* Blog Logo and Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex items-center gap-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <FaBlog className="text-6xl md:text-8xl text-purple-300" />
        </motion.div>
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-wide text-purple-300"
        >
          Blogify
        </motion.h1>
      </motion.div>
      
      {/* Subtle Background Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent)]"
      />
    </div>
  );
}
