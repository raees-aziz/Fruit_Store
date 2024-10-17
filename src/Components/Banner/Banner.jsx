import React from "react";
import FruitPunch from "../../assets/Fruits/3.png";
import { RiShoppingBagLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

function Banner() {
  return (
    <>
      <section className="bg-secondary/15">
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 ">
          {/* Banner Image */}
          <div className="flex justify-center justify-items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              className="w-[300px] md:max-w-[400px] h-full object-cover "
              src={FruitPunch}
              alt="fruit punch"
            />
          </div>
          {/* Banner info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase text-black"
              >
                Brand Info
              </motion.h1>
              <motion.p
                variants={FadeUp(0.3)}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda a ea necessitatibus, sequi nisi maxime! Excepturi
                aliquam eum minima repudiandae! Commodi a tenetur eos, dolorem
                repellat delectus ad assumenda maxime!
              </motion.p>
              <motion.p
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid, optio.
              </motion.p>
              <motion.div
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                className="flex justify-center md:justify-start"
              >
                <button className="primary-btn flex items-center justify-center gap-2">
                  <RiShoppingBagLine />
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
