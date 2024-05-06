import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const parallaxRef = useRef(null);
  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      delay: 1.5,
    });
    gsap.to(".title", {
      opacity: 1,
      y: 0,
      stagger: 1,
      delay: 0.5,
    });
    gsap.to(".generating", {
      scrollTrigger: {
        trigger: ".generating",
        toggleActions: "play none restart none",
        start: "top 70%",
      },
      opacity: 1,
      duration: 0.5,
      scale: 1,
    });
    gsap.to(".notification", {
      scrollTrigger: {
        trigger: ".notification",
        toggleActions: "play none restart none",
        start: "top 70%",
      },
      duration: 0.5,
      opacity: 1,
      x: 0,
    });
    gsap.to(".icons", {
      scrollTrigger: {
        trigger: ".icons",
        toggleActions: "play none restart none",
        start: "top 70%",
      },
      duration: 0.5,
      opacity: 1,
      x: 0,
    });
  });

  return (
    <Section
      className="-mt-[5.25rem] pt-[12rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="title h1  mb-6 translate-y-8 opacity-0">
            Explore the <mark className="bg-purple-500/90">Possibilities</mark>{" "}
            of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="relative inline-block">
              <div className="flex flex-row">
                {"Brainwave".split("").map((el, index) => (
                  <p
                    className={`hero-title translate-y-4 opacity-0 ${el === " " && "w-2"}`}
                    key={index}
                  >
                    {el}
                  </p>
                ))}
              </div>
              <img
                src={curve}
                className="absolute left-0 top-full w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="title body-1 mx-auto mb-6 max-w-3xl translate-y-8 text-n-2 opacity-0 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button
            className="title translate-y-7 opacity-0"
            href="/pricing"
            white
          >
            Get started
          </Button>
        </div>
        <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
          <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
            <div className="relative rounded-[1rem] bg-n-8">
              <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10" />

              <div className="aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full translate-y-[8%] scale-[1.7] md:-translate-y-[10%] md:scale-[1] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="generating absolute bottom-5 left-4 right-4 scale-0 opacity-0 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="icons absolute -left-[5.5rem] bottom-[7.5rem] hidden -translate-x-10 rounded-2xl border border-n-1/10 bg-n-9/40 px-1 py-1 opacity-0 backdrop-blur xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="notification absolute -right-[5.5rem] bottom-[11rem] hidden w-[18rem] translate-x-10 opacity-0 xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="relative z-10 mt-20 hidden lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
