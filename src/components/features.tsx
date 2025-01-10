"use client";
import { useAnimation, useInView, motion } from "motion/react";
import React, { useEffect, useRef } from "react";

export default function Features() {
  const ref = useRef(null);
  // Configure useInView pour observer le conteneur
  const inView = useInView(ref);

  // Contrôleur pour l'animation
  const controls = useAnimation();

  // Déclencher l'animation lorsqu'inView change
  useEffect(() => {
    console.log(inView);
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  // Variants pour l'animation
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: "100%", // Part de la gauche
      y: "100%", // Part du bas
    },
    visible: {
      opacity: 1,
      x: "0%",
      y: "0%",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center mx-auto max-w-[500px] tablet:max-w-[1064px] gap-[60px] tablet:pt-[80px] py-[60px] px-[20px] tablet:pb-[80px] w-full">
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <span className="flex flex-col items-center justify-center h-8 px-5 overflow-hidden bg-[#101010] text-white rounded-[99px]">
          Features
        </span>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[28px] tablet:text-[34px] text-[#101010] text-center leading-[1em] font-medium tracking-tighter">
            <span className="text-[#ff4f00]">Transform Your Business</span> with
            AI-Powered Tools
          </h1>
          <p className="text-lg text-[#101010] text-center leading-[1.3em] font-medium tracking-tighter tablet:max-w-[500px]">
            Boost productivity, enhance customer experiences, and streamline
            workflows using our advanced AI-driven solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-20">
        <div
          ref={ref}
          className="flex flex-col items-center justify-center w-full  gap-8 tablet:flex-row-reverse"
        >
          <div className="flex flex-row items-center flex-1 h-fit justify-center min-w-[280px] overflow-visible relative p-0 w-[1px]">
            <div className="flex flex-row items-start justify-start flex-1 h-auto overflow-hidden relative pt-6 pr-0 pb-0 pl-6 tablet:pt-10 tablet:pl-10 aspect-[1.3333333333333333/1] border-[1px] rounded-tl-xl border-[#b8b8b833] bg-[#e6e6fa] rounded-xl">
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate={controls}
                className="aspect-[1.2871046228710463/1] flex-none h-auto overflow-visible relative w-[106%] border-[2px] border-[#b8b8b833] rounded-tl-xl"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://framerusercontent.com/images/dmzB6UCcpvyJEitigtg6ige3JI.png?scale-down-to=1024"
                    alt=""
                    className="block size-full rounded-tl-xl object-left-top object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 tablet:w-[50%]">
            <div className="flex flex-col items-center justify-start gap-4">
              <h3 className="text-[22px] tablet:text-[26px] text-[#101010] text-left w-full leading-[1em] font-medium tracking-tighter">
                Voice AI: Intelligent Conversations
              </h3>
              <p className="text-base text-[#101010] text-left w-full leading-[1.3em] font-medium tracking-tighter">
                Engage your customers with natural, human-like voice
                interactions, automating customer service and increasing
                satisfaction.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-4">
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Real-time voice-to-text and AI responses.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Seamless integration with call systems.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Customizable voice experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-8 tablet:flex-row">
          <div className="flex flex-row items-center flex-1 h-fit justify-center min-w-[280px] overflow-visible relative p-0 w-[1px]">
            <div className="flex flex-row items-start justify-end flex-1 h-auto overflow-hidden relative pt-6 pr-6 tablet:pt-10 tablet:pr-10 aspect-[1.3333333333333333/1] border-[1px] border-[#b8b8b833] bg-[#e6e6fa] rounded-xl">
              <div className="aspect-[1.2871046228710463/1] flex-none h-auto overflow-visible relative w-[106%] border-[2px] border-[#b8b8b833] rounded-tr-xl rounded-br-xl">
                <div className="absolute inset-0">
                  <img
                    src="https://framerusercontent.com/images/s0zLEuh1iQ7wqUGWC0rABPWJLQ.png"
                    alt=""
                    className="block size-full border-inherit object-left-top object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 tablet:w-[50%]">
            <div className="flex flex-col items-center justify-start gap-4">
              <h3 className="text-[22px] tablet:text-[26px] text-[#101010] text-left w-full leading-[1em] font-medium tracking-tighter">
                Funnel & Website AI
              </h3>
              <p className="text-base text-[#101010] text-left w-full leading-[1.3em] font-medium tracking-tighter">
                Optimize your sales funnel and build AI-powered websites to
                maximize conversions.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-4">
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Real-time voice-to-text and AI responses.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Intelligent recommendations to increase conversions.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Real-time analytics for performance tracking.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between w-full  gap-8 tablet:flex-row-reverse">
          <div className="flex flex-row items-center flex-1 h-fit justify-center min-w-[280px] overflow-visible relative p-0 w-[1px]">
            <div className="flex flex-row items-start justify-start flex-1 h-auto overflow-hidden relative pt-6 pr-0 pb-0 pl-6 tablet:pt-10 tablet:pl-10 aspect-[1.3333333333333333/1] border-[1px] rounded-tl-xl border-[#b8b8b833] bg-[#e6e6fa] rounded-xl">
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate={controls}
                className="aspect-[1.2871046228710463/1] flex-none h-auto overflow-visible relative w-[106%] border-[2px] border-[#b8b8b833] rounded-tl-xl"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://framerusercontent.com/images/dmzB6UCcpvyJEitigtg6ige3JI.png?scale-down-to=1024"
                    alt=""
                    className="block size-full rounded-tl-xl object-left-top object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 tablet:w-[50%]">
            <div className="flex flex-col items-center justify-start w-full gap-4">
              <h3 className="text-[22px] tablet:text-[26px] text-[#101010] text-left w-full leading-[1em] font-medium tracking-tighter">
                Workflow AI
              </h3>
              <p className="text-base text-[#101010] text-left w-full leading-[1.3em] font-medium tracking-tighter">
                Automate repetitive tasks and focus on what truly matters.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-4">
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Task automation across platforms.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Workflow optimization suggestions.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Integration with CRM, emails, and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full  gap-8 tablet:flex-row">
          <div className="flex flex-row items-center flex-1 h-fit justify-center min-w-[280px] overflow-visible relative p-0 w-[1px]">
            <div className="flex flex-row items-start justify-end flex-1 h-auto overflow-hidden relative pt-6 pr-6 tablet:pt-10 tablet:pr-10 aspect-[1.3333333333333333/1] border-[1px] border-[#b8b8b833] bg-[#e6e6fa] rounded-xl">
              <div className="aspect-[1.2871046228710463/1] flex-none h-auto overflow-visible relative w-[106%] border-[2px] border-[#b8b8b833] rounded-tr-xl rounded-br-xl">
                <div className="absolute inset-0">
                  <img
                    src="https://framerusercontent.com/images/s0zLEuh1iQ7wqUGWC0rABPWJLQ.png"
                    alt=""
                    className="block size-full border-inherit object-left-top object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 tablet:w-[50%]">
            <div className="flex flex-col items-center justify-start gap-4">
              <h3 className="text-[22px] tablet:text-[26px] text-[#101010] text-left w-full leading-[1em] font-medium tracking-tighter">
                Conversation AI
              </h3>
              <p className="text-base text-[#101010] text-left w-full leading-[1.3em] font-medium tracking-tighter">
                Enhance customer interactions with intelligent, context-aware
                chat solutions.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-4">
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  24/7 chatbot support for instant responses.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Understanding customer intent with advanced NLP.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Integrates with popular messaging platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full  gap-8 tablet:flex-row-reverse">
          <div className="flex flex-row items-center flex-1 h-fit justify-center min-w-[280px] overflow-visible relative p-0 w-[1px]">
            <div className="flex flex-row items-start justify-start flex-1 h-auto overflow-hidden relative pt-6 pr-0 pb-0 pl-6 tablet:pt-10 tablet:pl-10 aspect-[1.3333333333333333/1] border-[1px] rounded-tl-xl border-[#b8b8b833] bg-[#e6e6fa] rounded-xl">
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate={controls}
                className="aspect-[1.2871046228710463/1] flex-none h-auto overflow-visible relative w-[106%] border-[2px] border-[#b8b8b833] rounded-tl-xl"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://framerusercontent.com/images/dmzB6UCcpvyJEitigtg6ige3JI.png?scale-down-to=1024"
                    alt=""
                    className="block size-full rounded-tl-xl object-left-top object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 tablet:w-[50%]">
            <div className="flex flex-col items-center justify-start gap-4">
              <h3 className="text-[22px] tablet:text-[26px] text-[#101010] text-left w-full leading-[1em] font-medium tracking-tighter">
                Content AI
              </h3>
              <p className="text-base text-[#101010] text-left w-full leading-[1.3em] font-medium tracking-tighter">
                Generate high-quality content effortlessly and speed up your
                marketing efforts.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-4">
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Personalized email campaigns with ease.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  AI-powered blog and article generation.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  SEO-friendly content recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full  gap-8 tablet:flex-row">
          <div className="flex flex-row items-center flex-1 h-fit justify-center min-w-[280px] overflow-visible relative p-0 w-[1px]">
            <div className="flex flex-row items-start justify-end flex-1 h-auto overflow-hidden relative pt-6 pr-6 tablet:pt-10 tablet:pr-10 aspect-[1.3333333333333333/1] border-[1px] border-[#b8b8b833] bg-[#e6e6fa] rounded-xl">
              <div className="aspect-[1.2871046228710463/1] flex-none h-auto overflow-visible relative w-[106%] border-[2px] border-[#b8b8b833] rounded-tr-xl rounded-br-xl">
                <div className="absolute inset-0">
                  <img
                    src="https://framerusercontent.com/images/s0zLEuh1iQ7wqUGWC0rABPWJLQ.png"
                    alt=""
                    className="block size-full border-inherit object-left-top object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 tablet:w-[50%]">
            <div className="flex flex-col items-center justify-start gap-4">
              <h3 className="text-[22px] tablet:text-[26px] text-[#101010] text-left w-full leading-[1em] font-medium tracking-tighter">
                Reviews AI
              </h3>
              <p className="text-base text-[#101010] text-left w-full leading-[1.3em] font-medium tracking-tighter">
                Analyze and respond to customer reviews intelligently to enhance
                your brand's reputation.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-4">
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Sentiment analysis for customer reviews.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Automated responses to maintain brand consistency.
                </p>
              </div>
              <div className="flex flex-row items-center justify-start w-full  gap-4">
                <div className="flex flex-row items-center justify-center rounded-[100%] bg-[#fff7ec] size-5 border border-[#ffd6a5]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    fill="currentColor"
                    className="size-3 inline-block flex-1 items-center justify-center text-[#ff4f00]"
                    color="#ff4f00"
                  >
                    <g color="#ff4f00" weight="bold">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                    </g>
                  </svg>
                </div>
                <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                  Insights for product and service improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
