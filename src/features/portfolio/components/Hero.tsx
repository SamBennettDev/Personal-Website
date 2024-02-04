import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const intro =
    "Hello, my name is Sam Bennett\n\nBachelor's of Computer Science\nUniversity of Utah\n\nI know ";
  return (
    <div className="h-lvh py-[20lvh] flex flex-col  items-center">
      <div className="w-full md:w-4/5 lg:w-3/5 flex">
        <div className="flex flex-col text-xl md:text-3xl items-end py-2 text-secondary px-1 font-mono">
          {[...Array(6)].map((_, index) => (
            <div key={index}>{index + 1}</div>
          ))}
        </div>
        <div className="p-2 h-full w-full border-solid border border-0 border-l-[1px]">
          <TypeAnimation
            className="font-mono text-xl md:text-3xl"
            sequence={[intro + "React", 1000, intro + "Python", 1000]}
            speed={35}
            repeat={Infinity}
            style={{ whiteSpace: "pre-line" }}
          />
        </div>
      </div>
    </div>
  );
}
