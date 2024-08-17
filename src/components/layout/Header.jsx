import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "Assets/svg/FUTUAL_logo.svg";
import pulseIcon from "Assets/svg/pulse_icon.svg";
import pulseIconMobile from "Assets/svg/pulse_icon_mobile.svg";
import hamburgerMenu from "Assets/svg/hamburger_menu.svg";
import crossIcon from "Assets/svg/cross_icon.svg";

const HeaderContainer = styled.header`
  @media (max-width: 640px) {
    background: linear-gradient(
      180deg,
      rgba(250, 250, 250, 0.65) 0%,
      rgba(250, 250, 250, 0) 100%
    );
    backdrop-filter: blur(4px);
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FullScreenMenu = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px);
  background: rgba(250, 250, 250, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  z-index: 50;
  gap: 30px;
  padding-top: 50%;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <HeaderContainer className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-[20px] py-[20px] sm:px-[24px] lg:px-[40px]">
        <a href="/">
          <img
            className="h-[28px] w-[82px] sm:mr-[74px] sm:h-[30px] sm:w-[89px] lg:mr-[89px] lg:h-[36px] lg:w-[107px]"
            src={logo}
            alt="Futual Logo"
          />
        </a>
        <div className="hidden items-center justify-center rounded-full border-[1.2px] border-pure_white bg-gray_0/65 py-[7px] pl-[20px] pr-[14px] shadow-[0_2px_14px_0_rgba(20,20,20,0.06)] backdrop-blur-[8px] nav_md:flex lg:pb-[8px] lg:pl-[30px] lg:pr-[20px]">
          <nav className="flex items-center justify-center gap-x-[22px] lg:gap-x-[33px]">
            <Link
              to="/coming-soon"
              className="font-sarabun text-[14px] font-light leading-[180%] tracking-[0.08em] text-gray_5_black lg:text-[16px]"
            >
              About
            </Link>
            <Link
              to="/coming-soon"
              className="font-sarabun text-[14px] font-light leading-[180%] tracking-[0.08em] text-gray_5_black lg:text-[16px]"
            >
              Service
            </Link>
            <Link
              to="/coming-soon"
              className="font-sarabun text-[14px] font-light leading-[180%] tracking-[0.08em] text-gray_5_black lg:text-[16px]"
            >
              Work
            </Link>
            <Link
              to="/coming-soon"
              className="font-sarabun text-[14px] font-light leading-[180%] tracking-[0.08em] text-gray_5_black lg:text-[16px]"
            >
              Resources
            </Link>
          </nav>
          {/* <div className="display-none ml-5 flex items-center justify-center w-[38px] h-[23px] border border-gray_2 rounded-full bg-pure_white">
            <span className="text-gray_5_black font-sarabun text-sm font-light tracking-wide">CH</span>
          </div> */}
        </div>
        <div className="flex items-center">
          <img
            className="mr-[14px] block h-[28px] w-[28px] nav_md:hidden"
            src={pulseIconMobile}
            alt="Pulse Icon Mobile"
          />
          <img
            className="hidden nav_md:mr-[10px] nav_md:block nav_md:h-[28px] nav_md:w-[28px] lg:mr-[14px] lg:h-[36px] lg:w-[36px]"
            src={pulseIcon}
            alt="Pulse Icon"
          />
          <button
            onClick={toggleMenu}
            className="h-[26px] w-[26px] hover:opacity-85 nav_md:hidden"
          >
            <img
              className="h-full w-full"
              src={isMenuOpen ? crossIcon : hamburgerMenu}
              alt="Menu"
            />
          </button>
          <a
            href="https://forms.gle/Eky81hoQnJbfBX3C6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hidden rounded-[70px] bg-gradient-to-r from-green_2 to-blue_2 px-[24.5px] pb-[10.5px] pt-[7.5px] shadow-[0px_4px_9px_0px_rgba(20,20,20,0.08)] hover:opacity-85 nav_md:block lg:px-[36.5px]">
              <p className="font-jost text-[14px] font-[600] italic leading-[160%] tracking-[0.08em] text-pure_white lg:text-[16px]">
                Contact
              </p>
            </div>
          </a>
        </div>
      </HeaderContainer>
      {isMenuOpen && (
        <FullScreenMenu>
          <nav className="flex flex-col items-center gap-y-[22px]">
            <Link
              to="/coming-soon"
              className="font-sarabun text-[14px] font-light leading-[180%] tracking-[0.08em] text-gray_5_black"
            >
              About
            </Link>
            <Link
              to="/coming-soon"
              className="font-sarabun text-[14px] font-light  leading-[180%] tracking-[0.08em] text-gray_5_black"
            >
              Service
            </Link>
            <Link
              to="/coming-soon"
              className="font-sarabun text-[14px] font-light leading-[180%] tracking-[0.08em] text-gray_5_black"
            >
              Work
            </Link>
            <Link
              to="/coming-soon"
              className="font-sarabun text-[14px] font-light  leading-[180%] tracking-[0.08em] text-gray_5_black"
            >
              Resources
            </Link>
          </nav>
          {/* <div className="flex mt-6 items-center justify-center w-[44px] h-[25px] border border-gray_2 rounded-full bg-pure_white">
            <span className="text-gray_5_black font-sarabun text-sm font-light tracking-wide">CH</span>
          </div> */}
          <a
            href="https://forms.gle/Eky81hoQnJbfBX3C6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rounded-[70px] bg-gradient-to-r from-green_2 to-blue_2 px-[14px] pb-[10.5px] pt-[7.5px] shadow-[0px_4px_9px_0px_rgba(20,20,20,0.08)] hover:opacity-85">
              <span className="font-jost text-[14px] font-[600] italic leading-[160%] tracking-[0.08em] text-pure_white">
                Contact
              </span>
            </div>
          </a>
        </FullScreenMenu>
      )}
    </>
  );
};

export default Header;
