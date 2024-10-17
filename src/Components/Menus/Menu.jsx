import React from "react";
import Apple from "../../assets/Fruits/apple.png";
import Avocado from "../../assets/Fruits/avocado.png";
import Cherry from "../../assets/Fruits/cherry.png";
import Orange from "../../assets/Fruits/orange.png";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const menuData = [
  {
    id: 1,
    title: "Fresh Apples",
    price: "$2.00",
    img: Apple,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Avocado",
    price: "$3.00",
    img: Avocado,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Cherries",
    price: "$4.00",
    img: Cherry,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Orange",
    price: "$5.00",
    img: Orange,
    delay: 1.2,
  },
];

function Menu() {
  return (
    <>
      <section>
        <div className="container pt-12 pb-20">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 20 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl font-bold text-left pb-10 uppercase font-averia"
          >
            Our Menu
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {menuData.map((menu) => (
              <motion.div
                key={menu.id}
                variants={FadeLeft(menu.delay)}
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.25)] flex flex-row justify-around items-center gap-3"
              >
                <img
                  className="w-[60px] mb-4 scale-125 transform-translate-y-6"
                  src={menu.img}
                  alt=""
                />
                <div>
                  <h1 className="text-lg font-semibold">{menu.title}</h1>
                  <p className="text-lg font-semibold text-secondary">
                    {menu.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
