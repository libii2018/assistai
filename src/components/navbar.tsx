"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <motion.nav
      className="flex flex-col items-center relative z-10 bg-white justify-start border-b border-[#151515] tablet:flex-row tablet:py-5 tablet:px-[30px] w-full tablet:h-16"
      variants={{
        open: {
          height: "100vh",
          transition: { durration: 0.1 },
        },
        closed: {
          height: "64px",
          transition: { durration: 0.1, delay: 0.1 },
        },
      }}
      transition={{ ease: "easeInOut" }}
      animate={active ? "open" : "closed"}
    >
      <div className="flex flex-row items-center justify-between mx-auto w-full tablet:max-w-[1200px]">
        <div className="flex flex-row items-center justify-between pl-5 w-full tablet:pl-0 h-16">
          <a href="" className="flex flex-row gap-2 items-center">
            {/* <svg className="h-5 w-[22px] aspect-[1.1379310344827587/1]">
              <use href="#svg-213483055_362"></use>
            </svg> */}
            <p className="text-xl text-black tracking-tighter font-medium leading-[1em]">
              Convert
            </p>
          </a>
          <motion.div
            onClick={() => setActive((pv) => !pv)}
            className="size-[60px] aspect-[1/1] relative tablet:hidden"
            animate={active ? "open" : "closed"}
          >
            <motion.div
              className="h-[2px] w-5 bg-[#666] absolute top-[41.66666666666669%] left-[35%] -translate-x-1/2"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  top: ["41.66666666666669%", "50%", "50%"],
                },
                closed: {
                  rotate: ["45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "41.66666666666669%"],
                },
              }}
              transition={{
                duration: 0.1,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="h-[2px] w-5 bg-[#666] absolute top-[58.33333333333336%] left-[35%] -translate-x-1/2"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                  top: ["58.33333333333336%", "50%", "50%"],
                },
                closed: {
                  rotate: ["-45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "58.33333333333336%"],
                },
              }}
              transition={{
                duration: 0.1,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.div>
        </div>
        <div className="hidden tablet:flex flex-row items-center justify-center gap-4">
          <div className="flex flex-row items-center justify-center">
            <a
              href=""
              className=" flex flex-row items-center justify-center h-9 px-3 rounded-[99px] text-[17px] text-[#101010] font-medium leading-[1.4em] tracking-tighter hover:bg-[#fff7ec]"
            >
              Home
            </a>
            <a
              href=""
              className="whitespace-nowrap flex flex-row items-center justify-center h-9 px-3 rounded-[99px] text-[17px] text-[#101010] font-medium leading-[1.4em] tracking-tighter hover:bg-[#fff7ec]"
            >
              Content AI
            </a>
            <a
              href=""
              className="whitespace-nowrap flex flex-row items-center justify-center h-9 px-3 rounded-[99px] text-[17px] text-[#101010] font-medium leading-[1.4em] tracking-tighter hover:bg-[#fff7ec]"
            >
              Reviews AI
            </a>
            <a
              href=""
              className="whitespace-nowrap flex flex-row items-center justify-center h-9 px-3 rounded-[99px] text-[17px] text-[#101010] font-medium leading-[1.4em] tracking-tighter hover:bg-[#fff7ec]"
            >
              Voice AI
            </a>
            <a
              href=""
              className="whitespace-nowrap flex flex-row items-center justify-center h-9 px-3 rounded-[99px] text-[17px] text-[#101010] font-medium leading-[1.4em] tracking-tighter hover:bg-[#fff7ec]"
            >
              Funnel & Website AI
            </a>
            <a
              href=""
              className="whitespace-nowrap flex flex-row items-center justify-center h-9 px-3 rounded-[99px] text-[17px] text-[#101010] font-medium leading-[1.4em] tracking-tighter hover:bg-[#fff7ec]"
            >
              Workflow AI
            </a>
            {/* <a
              href=""
              className="flex flex-row items-center group relative justify-center h-9 px-3 whitespace-nowrap gap-1 rounded-[99px] text-[17px] text-[#101010] font-medium leading-[1.4em] tracking-tighter hover:bg-[#fff7ec]"
            >
              All pages
              <div className="size-5 aspect-square relative">
                <div
                  className="absolute h-[2px] w-[9px] left-[3px] overflow-hidden bg-[#111] rotate-45 group-hover:-rotate-45"
                  style={{
                    top: "calc(50.00000000000002% - 2px / 2)",
                  }}
                ></div>
                <div
                  className="absolute h-[2px] w-[9px] right-[3px] overflow-hidden bg-[#111] -rotate-45 group-hover:rotate-45"
                  style={{
                    top: "calc(50.00000000000002% - 2px / 2)",
                  }}
                ></div>
              </div>
              <div
                className="absolute hidden group-hover:flex z-20 top-9 right-7 bg-white flex-row items-center justify-between gap-1 p-5 rounded-xl border-[1px] border-[#aaa] w-[500px] overflow-hidden"
                style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px" }}
              >
                <div className="flex flex-col items-start justify-center w-1/2 gap-[2px]">
                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"></path>
                      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Homepage
                    </p>
                  </a>
                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z"></path>
                      <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z"></path>
                      <path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Features
                    </p>
                  </a>
                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                      ></path>{" "}
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Pricing
                    </p>
                  </a>

                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      ></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Contact
                    </p>
                  </a>
                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      About us
                    </p>
                  </a>
                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      ></path>
                      <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Careers
                    </p>
                  </a>
                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                      ></path>
                      <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Blogs
                    </p>
                  </a>
                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                      ></path>
                      <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Blog post
                    </p>
                  </a>

                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      ></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Docs
                    </p>
                  </a>

                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      ></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Docs articles
                    </p>
                  </a>
                </div>
                <div className="flex flex-col items-start justify-center w-1/2 gap-[2px]">
                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Changelog
                    </p>
                  </a>

                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z"></path>
                      <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z"></path>
                      <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z"></path>
                      <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Integrations
                    </p>
                  </a>

                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Testimonials
                    </p>
                  </a>

                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      ></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      FAQ
                    </p>
                  </a>

                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Sign up
                    </p>
                  </a>

                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Log in
                    </p>
                  </a>

                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z"></path>
                      <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Terms & Conditions
                    </p>
                  </a>

                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z"></path>
                      <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Privacy Policy
                    </p>
                  </a>

                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z"></path>
                      <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      Cookie Policy
                    </p>
                  </a>

                  <a
                    href=""
                    className="flex flex-row items-center justify-start gap-[11px] w-full h-[36px] hover:bg-[#fff7ec] rounded-[99px] px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[18px] text-[#ff4f00]"
                      color="#ff4f00"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      ></path>
                    </svg>
                    <p className="text-base text-[#101010] font-medium leading-[1.3em] tracking-tighter">
                      404
                    </p>
                  </a>
                </div>
              </div>
            </a> */}
          </div>
          <div className="flex flex-row items-center justify-between gap-[6px]">
            <a
              href=""
              className="flex flex-row items-center justify-center h-10 border-[1px] border-[#b8b8b833] px-5 rounded-lg whitespace-nowrap"
            >
              <p className="text-base text-[#101010] font-medium leading-[1.1em] tracking-tighter">
                Log in
              </p>
            </a>
            <a
              href=""
              className="flex flex-row items-center justify-center h-10 border-[1px] border-[#ff4f00] px-5 rounded-lg relative whitespace-nowrap"
            >
              <div className="absolute inset-[2px] bg-[#ff4f00] flex-none z-0 rounded-[6px]"></div>
              <p className="text-base text-white font-medium leading-[1.1em] tracking-tighter z-10">
                Sign up
              </p>
            </a>
          </div>
        </div>
      </div>
      <motion.div
        className={`${
          active ? "flex" : "hidden"
        } flex-col items-start justify-start w-full pt-5 px-5 pb-0 gap-8 tablet:hidden`}
        variants={{
          open: {
            opacity: 1,
            y: 0,

            transition: { delay: 0.1 },
          },
          closed: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.3 },
          },
        }}
      >
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <a
            href=""
            className="text-xl text-[#101010] font-medium tracking-tighter leading-[1.3em] h-9"
          >
            <h4>Home</h4>
          </a>
          <a
            href=""
            className="text-xl text-[#101010] font-medium tracking-tighter leading-[1.3em] h-9"
          >
            <h4> Content AI</h4>
          </a>
          <a
            href=""
            className="text-xl text-[#101010] font-medium tracking-tighter leading-[1.3em] h-9"
          >
            <h4>Reviews AI</h4>
          </a>
          <a
            href=""
            className="text-xl text-[#101010] font-medium tracking-tighter leading-[1.3em] h-9"
          >
            <h4> Voice AI</h4>
          </a>
          <a
            href=""
            className="text-xl text-[#101010] font-medium tracking-tighter leading-[1.3em] h-9"
          >
            <h4>Funnel & Website AI</h4>
          </a>
          <a
            href=""
            className="text-xl text-[#101010] font-medium tracking-tighter leading-[1.3em] h-9"
          >
            <h4>Workflow AI</h4>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-[10px]">
          <a
            href=""
            className="flex flex-row items-center justify-center h-10 border-[1px] border-[#b8b8b833] px-5 rounded-lg w-full"
          >
            <p className="text-base text-[#101010] font-medium leading-[1.1em] tracking-tighter">
              Log in
            </p>
          </a>
          <a
            href=""
            className="flex flex-row items-center justify-center h-10 border-[1px] border-[#ff4f00] px-5 rounded-lg w-full relative"
          >
            <div className="absolute inset-[2px] bg-[#ff4f00] flex-none z-0 rounded-[6px]"></div>
            <p className="text-base text-white font-medium leading-[1.1em] tracking-tighter z-10">
              Sign up
            </p>
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
