import React from "react";
import Video from "./Video";

const HomeHero = () => {
  return (
    <div className="text-center pt-2 flex flex-col items-center justify-center">
      <div className="uppercase text-[15vh] leading-[11vh]">The spark for</div>

      <div className="uppercase text-[15vh] leading-[11vh] flex items-center justify-center gap-5 pt-4">
        <span>all</span>
        <div className="inline-flex items-center justify-center h-[12vw] w-[12vw] rounded-full overflow-hidden align-middle">
          <Video />
        </div>

        <span>things</span>
      </div>

      <div className="uppercase text-[15vh] leading-[11vh]">creative</div>
    </div>
  );
};

export default HomeHero;
