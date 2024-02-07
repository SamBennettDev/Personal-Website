import { WindupChildren } from "windups";

import {
  C,
  CPP,
  CSharp,
  CSS,
  Git,
  HTML,
  Java,
  JS,
  Linux,
  NodeJs,
  Python,
  ReactNative,
  Tailwind,
  TS,
} from "@/assets/icons";
import { useState } from "react";

export default function Hero() {
  const iconsArray = [
    ReactNative,
    TS,
    JS,
    HTML,
    CSS,
    Python,
    C,
    CPP,
    CSharp,
    Java,
    Git,
    Linux,
    NodeJs,
    Tailwind,
  ];
  const strings = [
    <div className="text-cyan-500 font-mono">React</div>,
    <div className="text-blue-500 font-mono">TypeScript</div>,
    <div className="text-yellow-500 font-mono">JavaScript</div>,
    <div className="text-orange-500 font-mono">HTML</div>,
    <div className="text-blue-500 font-mono">CSS</div>,
    <div className="text-green-500 font-mono">Python</div>,
    <div className="text-purple-500 font-mono">C</div>,
    <div className="text-cyan-500 font-mono">C++</div>,
    <div className="text-green-500 font-mono">C#</div>,
    <div className="text-blue-500 font-mono">Java</div>,
    <div className="text-orange-500 font-mono">Git</div>,
    <div className="text-yellow-500 font-mono">Linux</div>,
    <div className="text-green-500 font-mono">Node</div>,
    <div className="text-cyan-500 font-mono">Tailwind</div>,
  ];

  const [index, setIndex] = useState(-1);
  const [tech, setTech] = useState(<></>);
  const [prefix, setPrefix] = useState(<></>);

  // Function to update the tech state variable
  const updateTech = () => {
    setIndex((index) => {
      const updatedIndex = (index + 1) % strings.length;
      setTech(strings[updatedIndex]);
      return updatedIndex;
    });
  };

  let timeoutId: null | ReturnType<typeof setTimeout> = null;

  const startTimer = () => {
    // Start the timer only if it's not already running
    if (!timeoutId) {
      timeoutId = setInterval(updateTech, 1500);
    }
  };

  return (
    <div className="h-lvh pt-[20lvh] pb-[60px] flex flex-col  items-center">
      <div className="w-full md:w-4/5 lg:w-3/5 flex">
        <div className="flex flex-col text-xl md:text-3xl items-end py-2 text-secondary px-1 font-mono">
          {[...Array(6)].map((_, index) => (
            <div key={index}>{index + 1}</div>
          ))}
        </div>
        <div className="p-2 h-full w-full border-solid border border-0 border-l-[1px] font-mono text-l md:text-3xl whitespace-pre-line">
          <WindupChildren
            onFinished={() => {
              setPrefix(<div className="font-mono">I know&nbsp;</div>);
              setTimeout(() => {
                updateTech();
                startTimer();
              }, 200);
            }}
          >
            {
              <div className="font-mono">
                Hello, my name is{" "}
                <strong className="font-mono">Sam Bennett</strong>
                {"\n\n"}
                Bachelor's Computer Science{"\n"}University of Utah{"\n\n"}
              </div>
            }
          </WindupChildren>
          <div className="flex font-mono">
            <WindupChildren>{prefix}</WindupChildren>
            <WindupChildren>{tech}</WindupChildren>
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex w-full md:w-4/5 lg:w-3/5 flex-wrap gap-2 justify-center px-1">
        {iconsArray.map((icon, iconIndex) => {
          return (
            <img
              src={icon}
              className={`h-[40px] w-[40px] md:h-[60px] md:w-[60px] ${
                iconIndex === index ? "opacity-100" : "opacity-40"
              }`}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
