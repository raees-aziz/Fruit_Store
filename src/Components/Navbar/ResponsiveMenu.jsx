import React from "react";
import { motion, animate, AnimatePresence } from "framer-motion";
import { div, li } from "framer-motion/client";

function ResponsiveMenu({ open, NavbarMenu }) {
  console.log(NavbarMenu);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-15 left-0 w-full h-screen z-20"
          >
            <div className="text-xl font-semibold uppercase bg-primary text-white px- py-4 m-6 rounded-3xl">
              <ul className="flex flex-col items-center gap-4">
                {NavbarMenu.map((item) => (
                  <li className="hover:bg-green-500 transition-all cursor-pointer w-full text-center ">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ResponsiveMenu;
