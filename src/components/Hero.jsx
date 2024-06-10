import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { hudhaifa_personal } from "../assets/index";

const Hero = () => {
  return (
    <section className="relative w-full h-[40vh] mx-auto flex flex-row justify-center  items-center">
      <div
        className={`${styles.paddingX} absolute inset-1 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Hudhaifa</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            High level experince in web design and development knwledge,
            producing quality work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
