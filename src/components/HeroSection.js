import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <motion.h1
        className="text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Find the Best Tutors for Your Success
      </motion.h1>
      <motion.p
        className="mt-4 text-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Connecting you with experienced tutors to help you achieve your goals.
      </motion.p>
      <motion.button
        className="mt-8 px-6 py-3 bg-white text-blue-500 rounded-lg font-semibold hover:bg-blue-100"
        whileHover={{ scale: 1.1 }}
      >
        Get Started
      </motion.button>
    </section>
  );
}
