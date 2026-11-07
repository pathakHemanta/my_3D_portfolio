import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className="w-28 h-28 flex flex-col items-center justify-center gap-2 rounded-full bg-tertiary shadow-card" key={technology.name}>
          <img src={technology.icon} alt="" width="48" height="48" loading="lazy" decoding="async" className="w-12 h-12 object-contain" />
          <span className="text-xs text-secondary">{technology.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
