import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AnimatedTitle = ({ title, containerClass }) => {

    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() =>{
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse"
                },
            });

            titleAnimation.to(".animated-word", {
                opacity: 1,
                duration: 0.5,
                transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease: "power2.inOut",
                stagger: 0.02,
            });

        }, containerRef)

        return () => ctx.revert();

    }, []);

  return (
    <div ref={containerRef} className={`flex flex-col gap-1 text-7xl uppercase leading-[.8] text-white sm:px-32 md:text-[6rem] ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex items-center justify-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="special-font font-zentry font-black opacity-0 animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
