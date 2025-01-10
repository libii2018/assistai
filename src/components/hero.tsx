"use client";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  // const ref = useRef<HTMLDivElement>(null);
  // Utiliser useScroll pour détecter le défilement
  const { scrollYProgress } = useScroll();

  // Transformer le défilement en une échelle pour le scale
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 5]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [-120, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [30, 0]);

  const opacityHeader = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const translateYHeader = useTransform(scrollYProgress, [0, 0.2], [0, 1000]);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Effet pour gérer la taille d'écran
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 900); // Met à jour si écran > 900px
    };

    // Détecte la taille initiale
    handleResize();

    // Ajoute un listener de redimensionnement
    window.addEventListener("resize", handleResize);

    return () => {
      // Nettoyage du listener
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex flex-col relative items-center overflow-hidden justify-center gap-8 pt-20 px-5 pb-[60px] mx-auto w-full">
      <div className="tablet:flex flex-col absolute h-auto w-auto z-0 left-1/2 -top-4 transform -translate-x-1/2 hidden">
        <motion.div
          className="size-[800px] overflow-hidden rounded-[100%] bg-[#fff7ec]"
          style={{
            mask: "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 20.6011%, rgba(0, 0, 0, 0.6) 100%)",
            scale: scale,
          }}
        ></motion.div>
      </div>
      <div className="flex flex-col  items-center overflow-hidden justify-center gap-8 pt-20 px-5 pb-[60px] mx-auto  w-full">
        {isLargeScreen ? (
          <motion.div
            className="flex flex-col items-center justify-center gap-4 max-w-[370px] tablet:max-w-[500px] transform-none tablet:transform z-10"
            style={{
              translateY: translateYHeader,
              opacity: opacityHeader,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-[32px] tablet:text-[40px] text-[#101010] text-center leading-[1em] font-medium tracking-tighter">
                Boost your business with intelligent AI agents
              </h1>
              <p className="text-lg text-[#101010] text-center leading-[1.3em] font-medium tracking-tighter">
                Optimize your tasks: intelligent conversations, content
                creation, workflow automation and more. Work faster and better
                with AI.
              </p>
            </div>
            <a
              href=""
              className="flex flex-row items-center justify-center h-11 border-[1px] border-[#ff4f00] px-10 rounded-lg relative"
            >
              <div className="absolute inset-[2px] bg-[#ff4f00] flex-none z-0 rounded-[6px]"></div>
              <p className="text-base text-white font-medium leading-[1.1em] tracking-tighter z-10">
                Discover our solutions
              </p>
            </a>
          </motion.div>
        ) : (
          <motion.div className="flex flex-col items-center justify-center gap-4 max-w-[370px] tablet:max-w-[500px] transform-none tablet:transform z-10">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-[32px] tablet:text-[40px] text-[#101010] text-center leading-[1em] font-medium tracking-tighter">
                Boost your business with intelligent AI agents
              </h1>
              <p className="text-lg text-[#101010] text-center leading-[1.3em] font-medium tracking-tighter">
                Optimize your tasks: intelligent conversations, content
                creation, workflow automation and more. Work faster and better
                with AI.
              </p>
            </div>
            <a
              href=""
              className="flex flex-row items-center justify-center h-11 border-[1px] border-[#ff4f00] px-10 rounded-lg relative"
            >
              <div className="absolute inset-[2px] bg-[#ff4f00] flex-none z-0 rounded-[6px]"></div>
              <p className="text-base text-white font-medium leading-[1.1em] tracking-tighter z-10">
                Discover our solutions
              </p>
            </a>
          </motion.div>
        )}

        <div
          className="flex flex-col items-center justify-center gap-10 w-full z-20 desktop:max-w-[1000px]"
          style={{
            perspective: "1000px", // Perspective appliquée au parent
          }}
        >
          {isLargeScreen ? (
            <motion.div
              className="flex flex-col w-full border-[6px] border-[#101010] rounded-xl overflow-hidden transform-none tablet:transform"
              style={{
                scale: scaleImage,
                rotateX,
                translateY, // Dynamique
              }}
            >
              <img
                src="https://framerusercontent.com/images/cWDNOYl5xpCfLnVmLfD7NOSBUM.png?scale-down-to=4096"
                alt=""
                className="size-full object-cover object-center"
              />
            </motion.div>
          ) : (
            <motion.div className="flex flex-col w-full border-[6px] border-[#101010] rounded-xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/cWDNOYl5xpCfLnVmLfD7NOSBUM.png?scale-down-to=4096"
                alt=""
                className="size-full object-cover object-center"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
