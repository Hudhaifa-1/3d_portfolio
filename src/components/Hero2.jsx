import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { hudhaifa_personal } from "../assets/index";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-row justify-center  items-center">
      <div
        className={`${styles.paddingX} absolute  top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="relative w-[350px] h-[350px]  ">
          <img
            className="absolute rounded-[20px]   object-cover"
            src={hudhaifa_personal}
            alt=""
          />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl  border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
