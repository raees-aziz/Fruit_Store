import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLeaf,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <footer className="bg-primary/10 mt-10 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container flex items-center flex-col "
        >
          {/* Logo Section */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            className="flex gap-4 font-bold  text-2xl items-center uppercase "
          >
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-600" />
          </motion.div>
          {/* Social Section */}
          <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
            {/* Facebook */}
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.5 }}>
              <FaFacebookF className="hover:text-blue-500 " />
            </motion.div>
            {/* Twitter */}
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.5 }}>
              <FaTwitter className="hover:text-blue-700 " />
            </motion.div>
            {/* YouTube */}
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.5 }}>
              <FaYoutube className="hover:text-red-500 " />
            </motion.div>
            {/* Instagram */}
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.5 }}>
              <FaInstagram className="hover:text-pink-500 " />
            </motion.div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

export default Footer;
