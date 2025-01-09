import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 pt-20 px-5 pb-[60px] w-full">
      <div className="flex flex-col items-center justify-center gap-4 max-w-[370px] tablet:max-w-[600px]">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[32px] tablet:text-[40px] text-[#101010] text-center leading-[1em] font-medium tracking-tighter">
            Boost your business with intelligent AI agents
          </h1>
          <p className="text-lg text-[#101010] text-center leading-[1.3em] font-medium tracking-tighter">
            Optimize your tasks: intelligent conversations, content creation,
            workflow automation and more. Work faster and better with AI.
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
      </div>
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <div className="flex flex-col w-full border-[6px] border-[#101010] rounded-xl overflow-hidden transform">
          <img
            src="https://framerusercontent.com/images/cWDNOYl5xpCfLnVmLfD7NOSBUM.png?scale-down-to=4096"
            alt=""
            className="size-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
