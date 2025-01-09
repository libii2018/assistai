import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-[#101010]">
      <div className="flex flex-col items-center justify-center mx-auto tablet:max-w-[1064px] gap-[60px] py-[60px] px-[20px] tablet:pt-[80px] tablet:pr-[32px] tablet:pb-[80px] tablet:pl-[28px] w-full bg-[#101010]">
        <div className="flex flex-col items-center justify-start w-full gap-10 tablet:flex-row">
          <a
            href=""
            className="mr-auto text-xl text-white leading-[1em] tracking-tighter"
          >
            Convert
          </a>
          <div className="flex flex-wrap items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start gap-3">
              <h6 className="text-xl font-semibold leading-[1.3em] tracking-tighter text-white">
                Product
              </h6>
              <a
                href="#"
                className="text-lg text-white font-medium leading-[1.3em] tracking-tighter"
              >
                Features
              </a>
              <a
                href="#"
                className="text-lg text-white font-medium leading-[1.3em] tracking-tighter"
              >
                Features
              </a>
              <a
                href="#"
                className="text-lg text-white font-medium leading-[1.3em] tracking-tighter"
              >
                Features
              </a>
              <a
                href="#"
                className="text-lg text-white font-medium leading-[1.3em] tracking-tighter"
              >
                Features
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start"></div>
      </div>
    </footer>
  );
}
