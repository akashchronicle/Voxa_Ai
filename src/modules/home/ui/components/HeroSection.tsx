import React from "react";
import { motion } from "framer-motion";

const features = [
  "🎧 Listening",
  "🗣️ Speaking",
  "📹 Recording",
  "📝 Summarizing",
];


const HeroSection = () => (
  <section className="relative w-full pt-2 md:pt-2 pb-5 px-4 md:px-10 bg-background text-foreground overflow-hidden">
    {/* Tagline - Billboard Style */}
    

    <div className="flex flex-col md:flex-row items-center justify-between gap-12 pl-10">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center max-w-2xl text-left z-10">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-[#3B2F2F] leading-snug !text-[#3B2F2F]"
          >
          Your AI Teammate in <br />Every Meeting
          
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mt-6 mb-8 max-w-xl leading-relaxed"
        >
          Experience real-time voice intelligence that listens, speaks, and summarizes — just like a human.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          className="flex flex-wrap gap-4"
        >
          {features.map((feature) => (
            <div
              key={feature}
              className="text-sm md:text-base font-medium px-5 py-3 rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-shadow shadow-sm"
            >
              {feature}
            </div>
          ))}
        </motion.div>
      </div>


      

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="flex-1 flex justify-center items-center "
      >
        <img
          src="/herovoxaa.png"
          alt="Hero Illustration"
          className="w-[90%] md:w-[480px] lg:w-[540px] h-auto object-contain select-none md:ml-20"
          draggable={false}
        />
      </motion.div>


    </div>

    <div className="pr-220">

    

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-10"
    >
      
      <div className="flex flex-col items-center">
     
      <div className="text-xl md:text-2xl italic font-thin leading-snug font-playfair text-muted-foreground flex items-center justify-center gap-1 pt-2">
  
      {/* <motion.div
  className="mt-1 flex justify-center text-orange-300 text-xl" 
  initial={{ y: -10, opacity: 0 }}
  animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
>
  🪶
</motion.div> */}
<span>The Voice in the Call That Never Forgets </span>

  {/* Dots appear right after the text */}
  <div className="flex gap-1 pl-1 pt-4">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="h-2 w-2 rounded-full bottom-8 bg-orange-400"
        animate={{
          y: [0, -6, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
</div>


  </div>
  


      
    </motion.div>
    
    </div>
  </section>
  
);

export default HeroSection;
