import React from "react";
import BannerImg from "../../assets/Fruits/banner.jpg";
import { RiShoppingBagLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const bgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function Banner3() {
  return (
    <>
      {" "}
      <section className="container mb-12">
        <div
          style={bgStyle}
          className="container rounded-xl grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 "
        >
          {/* Banner Image */}
          <div></div>
          {/* Banner info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeLeft(0.3)}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase text-black"
              >
                Brand Info
              </motion.h1>
              <motion.p
                variants={FadeLeft(0.5)}
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
                variants={FadeLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid, optio.
              </motion.p>
              <motion.div
                variants={FadeLeft(0.9)}
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

export default Banner3;
