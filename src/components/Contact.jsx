import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkedin } from "../assets";
import { instagram } from "../assets";
import { whatsapp } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [is_sent, setIssent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.email && form.message && form.name){
      setLoading(true);

    emailjs
      .send(
        "service_5g75cjb",
        "template_46f1x3o",
        {
          from_name: form.name,
          to_name: "Hudhaifa",
          from_email: form.email,
          to_email: "hudhaifa.muhammed.i@gmail.com",
          message: form.message,
        },
        "aCmnFAbwiKxoFNGmw"
      )
      .then(
        () => {
          setLoading(false);
          setIssent (true);
          setTimeout(() => {
            setIssent(false);
          }, 5000);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
        }
      );
    }
  };
  return (
    <div>
      <div className={`xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ${is_sent ? 'opacity-[.3]' : 'opacity-1'}`} >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl pb-24"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          {/* <div className="flex justify-center items-center mt-12 flex-row gap-10">
      
    
       </div> */}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            <div className="flex gap-10 justify-center">
            <div
          onClick={() => window.open("https://www.linkedin.com/in/hudhaifa-muhammad/", "_blank")}
          className="black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={linkedin}
            alt={linkedin}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <div
          onClick={() => window.open("https://www.instagram.com/bit.y.bit/", "_blank")}
          className="black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={instagram}
            alt={instagram}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <div
          onClick={() => window.open("https://wa.me/96407721983835", "_blank")}
          className="black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={whatsapp}
            alt={whatsapp}
            className="object-cover"
          />
        </div>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1  md:h-[550px] h-[350px] "
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <div className={`bg-green-400 top-[30%] left-[30%] flex-[0.75]  p-8 rounded-2xl pb-24  max-w-[650px]   fixed ${is_sent ? 'block' : 'hidden'}`}>
        <h3 className={styles.sectionHeadText}>
          Thank you. I will get back to you as soon as possible.
        </h3>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
