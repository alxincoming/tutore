import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600">
      <div className="text-white font-bold text-xl">
        <img src="/logo.png" alt="Logo" className="h-10 inline-block mr-2" />
        MyTutoringApp
      </div>
      <div className="flex space-x-4">
        {['Features', 'About', 'Contact'].map((item, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }}>
            <Link href={`#${item.toLowerCase()}`}>
              <a className="text-white">{item}</a>
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
