import { motion } from "framer-motion";
import { FaBlog } from "react-icons/fa";

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-gray-900 text-white overflow-hidden">
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
