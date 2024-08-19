import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  // PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import Generating from "./Generating";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollParallax } from "react-just-parallax";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    gsap.to(".des", {
      scrollTrigger: { trigger: ".des", start: "top 70%" },
      opacity: 1,
      y: 0,
      x: 0,
      stagger: 0.5,
    });
    gsap.to(".des2", {
      scrollTrigger: { trigger: ".des2", start: "top 70%" },
      opacity: 1,
      y: 0,
      x: 0,
      stagger: 0.5,
    });
    gsap.to(".des3", {
      scrollTrigger: { trigger: ".des3", start: "top 70%" },
      opacity: 1,
      y: 0,
      x: 0,
      stagger: 0.5,
    });
    gsap.to(".list", {
      scrollTrigger: { trigger: ".list", start: "top 70%" },
      opacity: 1,
      x: 0,
      stagger: 0.2,
    });
    gsap.to(".generating2", {
      scrollTrigger: { trigger: ".generating2", start: "top 80%" },
      opacity: 1,
      scale: 1,
      delay: 1,
    });
    gsap.to(".icons2", {
      scrollTrigger: { trigger: ".icons2", start: "top 80%" },
      opacity: 1,
      scale: 1,
      delay: 1,
      stagger: { from: "center", amount: 0.5 },
    });
  });
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          classNameChildren="des translate-y-10 opacity-0"
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative z-1 mb-5 flex h-[39rem] items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 lg:p-20 xl:h-[46rem]">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full md:w-3/5 xl:w-auto">
              <img
                className="h-full w-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 ml-auto max-w-[17rem]">
              <h4 className="list h4 mb-4 translate-x-10 opacity-0">
                Smartest AI
              </h4>
              <p className="list body-2 mb-[3rem] translate-x-10 translate-y-10 opacity-0">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="list flex translate-x-10 items-start border-t border-n-6 py-4 opacity-0"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="generating2 lg-right-auto absolute bottom-4 left-4 right-4 scale-0 border border-n-1/10 opacity-0 lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] overflow-hidden rounded-3xl border border-n-1/10">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15">
                <h4 className="des2 h4 mb-4 -translate-x-10 opacity-0">
                  Photo editing
                </h4>
                <p className=" des2 body-2 mb-[3rem] -translate-x-10 text-n-3 opacity-0">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              {/* <PhotoChatMessage /> */}
            </div>

            <div className="overflow-hidden rounded-3xl bg-n-7 p-4 lg:min-h-[46rem]">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="des3 h4 mb-4 translate-y-10 opacity-0">
                  Video generation
                </h4>
                <p className="des3 body-2 mb-[2rem] translate-y-10 text-n-3 opacity-0">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`icons2 flex scale-50 items-center justify-center rounded-2xl opacity-0 ${
                        index === 2
                          ? "h-[3rem] w-[3rem] bg-conic-gradient p-0.25 md:h-[4.5rem] md:w-[4.5rem]"
                          : "flex h-10 w-10 bg-n-6 md:h-15 md:w-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex h-full w-full items-center justify-center rounded-[1rem] bg-n-7"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] overflow-hidden rounded-xl bg-n-8 md:h-[25rem]">
                <img
                  src={service3}
                  className="h-full w-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <VideoChatMessage />
                </ScrollParallax>
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
