import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import { useEffect, useState } from "react";
import MenuSvg from "../assets/svg/MenuSvg";
import gsap from "gsap";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { HamburgerMenu } from "./design/Header";

export default function Header() {
  const { hash } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.from(".nav", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
      });
      gsap.to(".nav", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
      });
    }
  }, [isOpen]);
  return (
    <div
      className={`fixed top-0 z-10 w-full border-b border-n-6 ${isOpen ? "bg-n-8" : "bg-n-8/90"}`}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <a className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={190}></img>
        </a>
        <nav
          className={`fixed bottom-0 left-0 right-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent ${isOpen ? "flex" : "hidden"}`}
        >
          <div className=" relative z-2 m-auto flex flex-col items-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={() =>
                  isOpen && (setIsOpen(false) || enablePageScroll())
                }
                className={`nav relative block px-6 py-6 font-code text-2xl  uppercase transition-colors hover:translate-y-1 hover:text-[23px] hover:text-color-1 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:hover:text-[11px] ${item.onlyMobile ? "lg:hidden" : ""} ${hash === item.url ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu></HamburgerMenu>
        </nav>
        <a
          href="#signup"
          className="button mr-8 hidden text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button href="#login" className="hidden lg:flex">
          Sign in
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3 md:px-4"
          onClick={() =>
            setIsOpen((val) => !val) || isOpen
              ? enablePageScroll()
              : disablePageScroll()
          }
        >
          <MenuSvg openNavigation={isOpen}></MenuSvg>
        </Button>
      </div>
    </div>
  );
}
